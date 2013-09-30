$(document).ready(function () {
  var h=300,w=400;
  //Create the SVG Viewport
  var svg = d3.select("#chart-axis").append("svg")
  .attr("width",w)                                    
  .attr("height", h);
  
  //Create the xaxis scale
  var xaxisScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, w]);
  
  //Create the yaxis scale
  var yaxisScale = d3.scale.linear()
  .domain([0, 100])
  .range([h-20, 0]);
  
  
  //Create the y Axis
  var yAxis = d3.svg.axis()
  .scale(yaxisScale).orient("left").ticks(5);
  
   //Create the x Axis
  var xAxis = d3.svg.axis()
  .scale(xaxisScale).orient('bottom').ticks(10);
  
  //Create an SVG group Element for the Axis elements and call the xAxis & yaxis function
  var xAxisGroup = svg.append("g")
  .attr("transform", "translate(30," + (278) + ")")
  .call(xAxis);
  
  var yAxisGroup = svg.append("g")
  .attr("transform", "translate(30,5)")
  .call(yAxis);
});
