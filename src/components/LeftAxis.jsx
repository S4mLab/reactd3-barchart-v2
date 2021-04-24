import React from "react";

const LeftAxis = ({ yScale }) =>
  yScale.domain().map((tickValue) => {
    return (
      <g className="tick" key={tickValue}>
        <text
          style={{ textAnchor: "end" }}
          key={tickValue}
          x={-3}
          y={yScale(tickValue) + yScale.bandwidth() / 2}
          dy=".3em"
        >
          {tickValue}
        </text>
      </g>
    );
  });

export default LeftAxis;
