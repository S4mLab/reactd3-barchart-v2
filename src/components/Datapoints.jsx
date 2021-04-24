import React from "react";

const DataPoints = ({ dataArrayObjs, xScale, xValue, yScale, yValue }) => {
  return dataArrayObjs.map((aDataObj, index) => (
    <rect
      key={index}
      x={0}
      y={yScale(yValue(aDataObj))}
      width={xScale(xValue(aDataObj))}
      height={yScale.bandwidth()}
    />
  ));
};

export default DataPoints;
