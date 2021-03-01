import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

import GraphButtons from "./GraphButtons";

const chartOptions = {
  layout: {
    padding: {
      left: 5,
      right: 15,
      top: 10,
      bottom: 40
    }
  },
  maintainAspectRatio: false,
  responsive: true
};

const graphButtons = [
  { label: "1W", duration: 7 },
  { label: "1M", duration: 30 },
  { label: "3M", duration: 90 },
  { label: "6M", duration: 180 },
  { label: "1Y", duration: 365 }
];

class Chart extends React.Component {
  state = {
    data: null,
    days: 30
  };

  setChartDuration = (days) => {
    this.setState({ days });
  };

  formatGraphData = (json) => {
    return {
      labels: Object.keys(json.bpi),
      datasets: [
        {
          label: "BTC PRICE",
          fontColor: "black",
          backgroundColor: "#2DCE89",
          data: Object.values(json.bpi)
        }
      ]
    };
  };

  fetchChartData = () => {
    const endDay = moment.utc().format("yyyy-MM-DD");
    const startDay = moment
      .utc()
      .subtract(this.state.days, "days")
      .format("yyyy-MM-DD");

    const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDay}&end=${endDay}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const data = this.formatGraphData(json);
        this.setState({ data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    this.fetchChartData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.days !== this.state.days) {
      this.fetchChartData();
    }
  };

  render() {
    return (
      <>
        {this.state.data && (
          <div style={{ width: "100%", height: "70vh" }}>
            <div className="btn-container">
              <GraphButtons
                graphButtons={graphButtons}
                selected={this.state.days}
                setChartDuration={this.setChartDuration}
              />
              <h5>{this.state.days} Days Chart</h5>
            </div>
            <Bar data={this.state.data} options={chartOptions} />
          </div>
        )}
      </>
    );
  }
}

export default Chart;

