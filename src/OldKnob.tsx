import React from "react";

interface OldKnobProps {
  size: number;
  min: number;
  max: number;
  numTicks: number;
  degrees: number;
  value: number;
  color: boolean;
}

interface OldKnobState {
  deg: number;
}

export class OldKnob extends React.Component<OldKnobProps, OldKnobState> {
  static fullAngle = 0;
  static startAngle = 0;
  static endAngle = 0;
  static margin = 0;
  static currentDeg = 0;

  constructor(props: OldKnobProps) {
    super(props);
    OldKnob.fullAngle = props.degrees;
    OldKnob.startAngle = (360 - props.degrees) / 2;
    OldKnob.endAngle = OldKnob.startAngle + props.degrees;
    OldKnob.margin = props.size * 0.15;
    OldKnob.currentDeg = Math.floor(
      this.convertRange(
        props.min,
        props.max,
        OldKnob.startAngle,
        OldKnob.endAngle,
        props.value
      )
    );
    this.state = { deg: OldKnob.currentDeg };
  }

  startDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const knob = e.currentTarget.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e: { clientX: number; clientY: number }) => {
      OldKnob.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
      if (OldKnob.currentDeg === OldKnob.startAngle) OldKnob.currentDeg--;
      let newValue = Math.floor(
        this.convertRange(
          OldKnob.startAngle,
          OldKnob.endAngle,
          this.props.min,
          this.props.max,
          OldKnob.currentDeg
        )
      );
      this.setState({ deg: OldKnob.currentDeg });
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
    let finalDeg = Math.min(
      Math.max(OldKnob.startAngle, deg),
      OldKnob.endAngle
    );
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
    const incr = OldKnob.fullAngle / this.props.numTicks;
    const size = OldKnob.margin + this.props.size / 2;
    for (let deg = OldKnob.startAngle; deg <= OldKnob.endAngle; deg += incr) {
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
    oStyle.margin = OldKnob.margin;
    if (this.props.color) {
      oStyle.backgroundImage =
        "radial-gradient(100% 70%,hsl(210, " +
        OldKnob.currentDeg +
        "%, " +
        OldKnob.currentDeg / 5 +
        "%),hsl(" +
        Math.random() * 100 +
        ",20%," +
        OldKnob.currentDeg / 36 +
        "%))";
    }
    iStyle.transform = "rotate(" + this.state.deg + "deg)";

    return (
      <div className="knob" style={kStyle}>
        <div className="ticks">
          {this.props.numTicks
            ? this.renderTicks().map((tick, i) => (
                <div
                  key={i}
                  className={
                    "tick" + (tick.deg <= OldKnob.currentDeg ? " active" : "")
                  }
                  style={tick.tickStyle}
                />
              ))
            : null}
        </div>
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
