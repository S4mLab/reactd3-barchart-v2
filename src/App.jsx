import React from "react";
import "./styles/App.css";
import { scaleLinear, scaleBand, extent, format } from "d3";

import LoadData from "./LoadData";
import DataPoints from "./components/Datapoints";
import BottomAxis from "./components/BottomAxis";
import LeftAxis from "./components/LeftAxis";

const App = () => {
  const dataArrayObjs = LoadData();

  const margin = { top: 20, right: 30, bottom: 70, left: 220 };
  const widthSVG = 960;
  const heightSVG = 500;
  const innerWidth = widthSVG - margin.right - margin.left;
  const innerHeight = heightSVG - margin.top - margin.bottom;

  const xValue = (aDataObj) => aDataObj["2020NumType"];
  const minNmax2020PopArray = extent(dataArrayObjs.map(xValue));

  // xScale to adjust the values in the x axis
  // in the case of horizontal bar chart, x axis is the actual value of each categories

  const xScale = scaleLinear()
    .domain(minNmax2020PopArray)
    .range([0, innerWidth]);

  const yValue = (aDataObj) => aDataObj["Country"];
  // collect the country names into an array
  const countryNamesArray = dataArrayObjs.map(yValue);

  // yScale to adjust the values in the y axis, in this case, Countries
  let yScale = scaleBand()
    .domain(countryNamesArray)
    .range([0, innerHeight])
    .paddingInner(0.15);

  console.log(yScale.domain());

  return (
    <>
      <svg width={widthSVG} height={heightSVG}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <BottomAxis
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={format(".2s")}
          />
          <LeftAxis yScale={yScale} />
          <DataPoints
            dataArrayObjs={dataArrayObjs}
            xScale={xScale}
            xValue={xValue}
            yScale={yScale}
            yValue={yValue}
          />
        </g>
      </svg>
    </>
  );
};

export default App;
