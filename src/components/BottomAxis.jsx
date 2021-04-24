import React from "react";

// an axis made of lines, ticks, and labels
// an axis use scale, so each axis need to be given a scale to work with

// ticks() is used to control which sticks are displayed by the axis.
// this func returns the axis generator

// scale ticks return an array of values sampled from the scale domain

// the position of x1, x2 can be transformed for the group element so no need to specify x1, x2 anymore

const BottomAxis = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((aTickVal) => {
    return (
      <g
        className="tick"
        transform={`translate(${xScale(aTickVal)},0)`}
        key={aTickVal}
      >
        <line y2={innerHeight} stroke="#C0C0BB" />
        <text style={{ textAnchor: "middle" }} dy=".71em" y={innerHeight + 3}>
          {tickFormat(aTickVal)}
        </text>
      </g>
    );
  });

export default BottomAxis;
