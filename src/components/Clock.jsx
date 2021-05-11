import React, { Component } from "react";
const clockTile = {
  color: "white",
  display: "inline-block",
  fontSize: "1.3rem",
  paddingLeft: "10px",
  position: "absolute",
  right: "2rem",
  textAlign: "center",
};
const clockSpan = {
  padding: "4px",
};
let runner;
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }
  getCurrentTime = () => {
    const locale = this.props.locale ? this.props.locale : [];
    const hour24 = this.props.hour24 === false ? false : true;
    let hour, minute, second;
    if (this.props.format) {
      switch (this.props.format.toLowerCase()) {
        case "hh":
          hour = "2-digit";
          break;
        case "hh-mm":
          hour = "2-digit";
          minute = "2-digit";
          break;
        case "hh-mm-ss":
          hour = "2-digit";
          minute = "2-digit";
          second = "2-digit";
          break;
        default:
          hour = "2-digit";
          minute = "2-digit";
          second = "2-digit";
      }
    }
    let time = new Date().toLocaleTimeString(locale, {
      hour24: hour24,
      hour: hour,
      minute: minute,
      second: second,
    });
    return time;
  };

  componentDidMount() {
    runner = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }
  componentWillUnmount() {
    if (runner) {
      clearInterval(runner);
    }
  }
  render() {
    return (
      <div style={clockTile}>
        <span style={clockSpan}>{this.state.time}</span>
      </div>
    );
  }
}
export default Clock;
