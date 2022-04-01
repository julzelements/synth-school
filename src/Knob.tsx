import React from "react";

interface KnobProps {
  size: number;
  min: number;
  max: number;
  numTicks: number;
  degrees: number;
  value: number;
  color: boolean;
}

interface KnobState {
  deg: number;
}

export class Knob extends React.Component<KnobProps, KnobState> {
  static fullAngle = 0;
  static startAngle = 0;
  static endAngle = 0;
  static margin = 0;
  static currentDeg = 0;

  constructor(props: KnobProps) {
    super(props);
    Knob.fullAngle = props.degrees;
    Knob.startAngle = (360 - props.degrees) / 2;
    Knob.endAngle = Knob.startAngle + props.degrees;
    Knob.margin = props.size * 0.15;
    Knob.currentDeg = Math.floor(
      this.convertRange(
        props.min,
        props.max,
        Knob.startAngle,
        Knob.endAngle,
        props.value
      )
    );
    this.state = { deg: Knob.currentDeg };
  }

  startDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const knob = e.currentTarget.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e: { clientX: number; clientY: number }) => {
      Knob.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
      if (Knob.currentDeg === Knob.startAngle) Knob.currentDeg--;
      let newValue = Math.floor(
        this.convertRange(
          Knob.startAngle,
          Knob.endAngle,
          this.props.min,
          this.props.max,
          Knob.currentDeg
        )
      );
      this.setState({ deg: Knob.currentDeg });
      console.log(newValue);
      //   this.props.onChange(newValue);
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", (e) => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  getDeg = (cX: number, cY: number, pts: { x: any; y: any }) => {
    const x = cX - pts.x;
    const y = cY - pts.y;
    let deg = (Math.atan(y / x) * 180) / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }
    let finalDeg = Math.min(Math.max(Knob.startAngle, deg), Knob.endAngle);
    return finalDeg;
  };

  convertRange = (
    oldMin: number,
    oldMax: number,
    newMin: number,
    newMax: number,
    oldValue: number
  ) => {
    return (
      ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin
    );
  };

  renderTicks = () => {
    let ticks = [];
    const incr = Knob.fullAngle / this.props.numTicks;
    const size = Knob.margin + this.props.size / 2;
    for (let deg = Knob.startAngle; deg <= Knob.endAngle; deg += incr) {
      const tick = {
        deg: deg,
        tickStyle: {
          height: size + 10,
          left: size - 1,
          top: size + 2,
          transform: "rotate(" + deg + "deg)",
          transformOrigin: "top",
        },
      };
      ticks.push(tick);
    }
    return ticks;
  };

  dcpy = (o: { width: number; height: number }) => {
    return JSON.parse(JSON.stringify(o));
  };

  render() {
    let kStyle = {
      width: this.props.size,
      height: this.props.size,
    };
    let iStyle = this.dcpy(kStyle);
    let oStyle = this.dcpy(kStyle);
    oStyle.margin = Knob.margin;
    if (this.props.color) {
      oStyle.backgroundImage =
        "radial-gradient(100% 70%,hsl(210, " +
        Knob.currentDeg +
        "%, " +
        Knob.currentDeg / 5 +
        "%),hsl(" +
        Math.random() * 100 +
        ",20%," +
        Knob.currentDeg / 36 +
        "%))";
    }
    iStyle.transform = "rotate(" + this.state.deg + "deg)";

    return (
      <div className="knob" style={kStyle}>
        {/* <div className="ticks">
          {this.props.numTicks
            ? this.renderTicks().map((tick, i) => (
                <div
                  key={i}
                  className={
                    "tick" + (tick.deg <= Knob.currentDeg ? " active" : "")
                  }
                  style={tick.tickStyle}
                />
              ))
            : null}
        </div> */}
        <div className="knob outer" style={oStyle} onMouseDown={this.startDrag}>
          <div className="knob inner" style={iStyle}>
            <div className="grip" />
          </div>
        </div>
      </div>
    );
  }
}

export {};
