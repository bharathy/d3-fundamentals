$(document).ready(function () {
	var w = 800, h = 200;
	var svg = d3.select('#chart-shapes').append('svg:svg')
		.attr('width',  w)
		.attr('height',  h);

	var dataSet = [3, 5, 7, 9]; 

	var circle = svg.selectAll('circle').data(dataSet);

	//draw circle with data bind
	circle.enter().append('circle')
		.attr('cx',  function (d) {return d * 10; })
		.attr('cy',  function (d) {return d * 10; })
		.attr('r',  function (d) {return d; })
		.style({fill : '#E05639',  stroke: '#D0D8DB'});

	//circle transition by radius, cx, cy
	circle.transition().duration(2000)
		.attr('cx',  function (d) {return d * 10; })
		.attr('cy',  function (d) {return d * 10; })
		.attr('r',  function (d) {return d + 5; });

	//draw rectangle
	svg.append('svg:rect')
		.attr('x', 130)
		.attr('y', 30)
		.attr('height', 50)
		.attr('width', 100)
		.transition().duration(2000).delay(2000)
		.style({fill : '#86B404',  opacity: 0.6});

	//Draw the Ellipse
	svg.append('ellipse')
		.attr('cx',  300)
		.attr('cy',  50)
		.attr('rx',  50)
		.attr('ry',  20)
		.style({fill : 'orange',  opacity: 0.8});

	//draw line 
	svg.append('svg:line')
		.transition().duration(1200)
		.attr('x2', 450)
		.attr('y2', 140)
		.attr('x1', 350)
		.attr('y1', 70)
		.attr('stroke',  '#08088A');

	//draw text
	svg.append('svg:text')
		.attr('x', 350)
		.attr('y', '30')
		.text('hey1 Im d3,  can produce cool visualization!')
		.attr('fill', 'green');

	//The data for our line
	var lineData = [ { 'x': 1, 'y': 150}, { 'x': 20, 'y': 170}, 
		{ 'x': 40, 'y': 130},  { 'x': 60, 'y': 160}, 
		{ 'x': 80, 'y': 120},  { 'x': 100, 'y': 167}];

	var lineFunction = d3.svg.line()
		.x(function (d) { return d.x; })
		.y(function (d) { return d.y; })
        .interpolate('cardinal');
		//.interpolate('basis');
		//.interpolate('linear');
		//.interpolate('step-before');
		//.interpolate('step-after');
		//.interpolate('basis-open');
		//.interpolate('basis-closed');
		//.interpolate('bundle ');
		//.interpolate('cardinal-open');
		//.interpolate('cardinal-closed');
		//.interpolate('monotone');


	//The line SVG Path we draw
	var lineGraph = svg.append('path')
		.attr('d', lineFunction(lineData))
		.attr('stroke', 'green')
		.attr('stroke-width', 3)
		.attr('fill', 'none');


});