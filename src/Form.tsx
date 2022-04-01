import React from "react";

export declare interface FormProps {
  name: string;
}

interface FormState {
  name: string;
}

export class NameForm extends React.Component<FormProps, FormState> {
  state = {
    name: "",
  };

  handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    alert("A name was submitted: " + this.state.name);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
