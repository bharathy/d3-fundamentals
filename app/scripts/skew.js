$(document).ready(function () {
	var w = 450, h = 250;
	var svg = d3.select('#chart-skew').append('svg:svg')
		.attr('width',  w)
		.attr('height',  h);
  	var dataSet = [1, 2, 4, 8]; 

	var rectGroup = svg.append("g").attr("transform", "skewX(30) skewY(20)");
        
	var rectEl = rectGroup.selectAll('rect').data(dataSet);

	rectEl.enter().append("svg:rect")
		.attr('x',  function (d) {return d * 20; })
		.attr('y',  function (d) {return d * 10; })
		.attr('height',  function (d) {return d * 10; })
		.attr('width',  function (d) {return d * 10; })
		.style({fill : '#86B404',  opacity: 0.6});
});