$(document).ready(function () {
  var w = 360,h = 180;
  var svg = d3.select("#chart-circle").append("svg")
    .attr("width", w)
    .attr("height", h);

  var dataSet = [5,7,9,11]; 

  var circle = svg.selectAll('circle').data(dataSet);

  circle.enter().append("circle")
    .transition().duration(2000)
    .attr("cx", function(d){return d*10;})
    .attr("cy", function(d){return d*10;})
    .attr("r", function(d){return d;})
    .style({fill : '#E05639', stroke: '#D0D8DB'});
  
    //.transition().duration(2000) //interpolate styles/attributes over time
});