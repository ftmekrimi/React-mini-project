import React from "react";
import PriceDisplay from "./PriceDisplay";
import Chart from "./Chart";
import "./styles.css";

export default class App extends React.Component {
  state = {
    time: "",
    data: ""
  };

  fetchBTC = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ time: data.time.updateduk, data: data.bpi });
      });
  };

  componentDidMount = () => {
    this.intervalID = setInterval(() => {
      this.fetchBTC();
    }, 60000);
    this.fetchBTC();
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  render() {
    return (
      <div className="App">
        <h3> Bitcoin Price</h3>
        <PriceDisplay data={this.state.data} time={this.state.time} />
        <Chart />
      </div>
    );
  }
}
