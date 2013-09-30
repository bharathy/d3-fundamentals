$(document).ready(function () {
	var w = 300, h = 200;
	var svg = d3.select('#chart-trans').append('svg:svg')
		.attr('width',  w)
		.attr('height',  h);
  	var dataSet = [1, 2, 4, 8]; 

	var rectGroup = 
        svg.append("g"); 
        //svg.append("g").attr("transform", "rotate(35)");
        //svg.append("g").attr("transform", "translate(90)");
       // svg.append("g").attr("transform", "skewX(30) skewY(20)");
       // svg.append("g").attr("transform", "matrix(1, 0, 0, 1, 150, 150)");
        

	var rectEl = rectGroup.selectAll('rect').data(dataSet);

	rectEl.enter().append("svg:rect")
		.attr('x',  function (d) {return d * 20; })
		.attr('y',  function (d) {return d * 10; })
		.attr('height',  function (d) {return d * 10; })
		.attr('width',  function (d) {return d * 10; })
		.style({fill : '#564991',  opacity: 0.6});
});