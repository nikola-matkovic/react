import React from "react";
class Ping extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        ...this.state,
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toTimeString()}</p>
      </div>
    );
  }
}
export default Ping;
