import React from "react";

const GraphButtons = ({ graphButtons, setChartDuration, selected }) => {
  const buttons = graphButtons.map(({ label, duration }) => {
    return (
      <button
        key={duration}
        className={duration === selected ? "btn-bold" : null}
        onClick={() => setChartDuration(duration)}
      >
        {label}
      </button>
    );
  });
  return <div>{buttons}</div>
};

export default GraphButtons;
