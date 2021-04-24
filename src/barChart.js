// set the dimensions and margins of the graph
const margin = { top: 20, right: 30, bottom: 40, left: 90 };
const widthSVG = 460;
const heightSVG = 400;
const innerWidth = widthSVG - margin.left - margin.right;
const innerHeight = heightSVG - margin.top - margin.bottom;

// append the svg object to the body of the page
// convert them into element of the svg canvas
// these are just normal elements, let React render them
const svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", widthSVG)
  .attr("height", heightSVG)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// parse the data
// this will go into loadData()
d3.csv("dataUrl");

// add x axis
// convert scaleLiner into xScale function
const x = d3.scaleLinear().domain([0, 13000]).range([0, width]);

// this is an BottomAxis element
svg
  .append("g")
  .attr("transform", "translate(0," + innerHeight + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)");

// add y axis
// convert into yScale function
const y = d3
  .scaleBand()
  .domain(data.map(fuction(d)(d.Country)))
  .range([0, innerHeight]);

// this is LeftAxis element
svg.append("g").call(d3.axisLeft(y));

// bars
svg
  .selectAll("myRect")
  .data(data)
  .enter("rect")
  .attr("x", x(0))
  .attr("y", function (d) {
    y(d.Country);
  })
  .attr("width", function (d) {
    return x(d.Value);
  })
  .attr("height", y.bandwidth())
  .attr("fill");
