$(document).ready(function () {
	var w = 300, h = 200;
	var svg = d3.select('#chart-translate').append('svg:svg')
		.attr('width',  w)
		.attr('height',  h);
  	var dataSet = [1, 2, 4, 8]; 

	var rectGroup = svg.append("g").attr("transform", "translate(30)");    

	var rectEl = rectGroup.selectAll('rect').data(dataSet);

	rectEl.enter().append("svg:rect")
		.attr('x',  function (d) {return d * 20; })
		.attr('y',  function (d) {return d * 10; })
		.attr('height',  function (d) {return d * 10; })
		.attr('width',  function (d) {return d * 10; })
		.style({fill : '#ED1459',  opacity: 0.6});
});