import React from "react";

const PriceDisplay = ({ data, time }) => {
  return (
    <>
      {data && (
        <div style={{ margin: 0 }}>
          <p>{time}</p>
          <div style={{ border: "1px solid #AAA", margin: "1rem" }}>
            <p> 1BTC: {data["USD"].rate} USD</p>
            <p> 1BTC: {data["EUR"].rate} EUR</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceDisplay;
