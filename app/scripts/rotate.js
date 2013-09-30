$(document).ready(function () {
	var w = 300, h = 300;
	var svg = d3.select('#chart-rotate').append('svg:svg')
		.attr('width',  w)
		.attr('height',  h);
  	var dataSet = [1, 2, 4, 8]; 

	var rectGroup = svg.append("g").attr("transform", "rotate(35)");
	var rectEl = rectGroup.selectAll('rect').data(dataSet);

	rectEl.enter().append("svg:rect")
		.attr('x',  function (d) {return d * 20; })
		.attr('y',  function (d) {return d * 10; })
		.attr('height',  function (d) {return d * 10; })
		.attr('width',  function (d) {return d * 10; })
		.style({fill : '#EC3D34',  opacity: 0.6});
});