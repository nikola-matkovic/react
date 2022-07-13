import React from "react";
class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: Math.ceil(Math.random() * 10) };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.counter !== 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <p>{this.state.counter}</p>;
  }
}
export default Countdown;
