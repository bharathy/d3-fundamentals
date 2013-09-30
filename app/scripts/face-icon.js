$(document).ready(function () {
	var w = 800, h = 600;
	var svg = d3.select('#face-icon').append('svg:svg')
		.attr('width',  w)
		.attr('height',  h);
  
  var g = svg.append('g')
  .attr("cy",100);
  
  var dataSet = [40]; 

	var circle = g.selectAll('circle').data(dataSet);

	//draw circle with data bind
	circle.enter().append('circle')
		.attr('cx',  50)
		.attr('cy',  60)
		.attr('r',  function (d) {return d; })
        .attr("stroke-width", 2)
    .style({fill : '#39C3E0',  stroke: '#000', opacity: 0.9});
  
  g.append('svg:line')
		.attr('x2', 35)
		.attr('y2', 120)
		.attr('x1', 35)
		.attr('y1', 98)
        .attr("stroke-width", 2)
		.attr('stroke',  '#000');
  
  g.append('svg:line')
		.attr('x2', 65)
		.attr('y2', 120)
		.attr('x1', 65)
		.attr('y1', 98)
        .attr("stroke-width", 2)
		.attr('stroke',  '#000');
  
  g.append('svg:line')
		.attr('x2', 48)
		.attr('y2', 115)
		.attr('x1', 35)
		.attr('y1', 120)
        .attr("stroke-width", 2)
		.attr('stroke',  '#000');
  
  g.append('svg:line')
		.attr('x2', 78)
		.attr('y2', 115)
		.attr('x1', 65)
		.attr('y1', 120)
        .attr("stroke-width", 2)
		.attr('stroke',  '#000');

		//Draw the Ellipse
	g.append('ellipse')
		.attr('cx',  30)
		.attr('cy',  50)
		.attr('rx',  5)
		.attr('ry',  10)
		.style({fill : '#000',  opacity: 0.9});
  
  //Draw the Ellipse
	g.append('ellipse')
		.attr('cx',  65)
		.attr('cy',  50)
		.attr('rx',  5)
		.attr('ry',  10)
		.style({fill : '#000',  opacity: 0.9});
  
  
  	//Draw the Ellipse
  g.append('svg:circle')
		.attr('cx',  30)
		.attr('cy',  54)
		.attr('r',  4)
		.style({fill : '#F2ECEC',  opacity: 1});
  
  //Draw the Ellipse
	g.append('circle')
		.attr('cx',  65)
		.attr('cy',  54)
		.attr('r',  4)
		.style({fill : '#F2ECEC',  opacity: 1});
  
  //Draw the Ellipse
  g.append('svg:circle')
		.attr('cx',  30)
		.attr('cy',  56)
		.attr('r',  2)
		.style({fill : '#000',  opacity: 1});
  
  //Draw the Ellipse
	g.append('circle')
		.attr('cx',  65)
		.attr('cy',  56)
		.attr('r',  2)
		.style({fill : '#000',  opacity: 1});
  
  //The data for our line
  
  //The data for our line
	var lineData = [ { 'x': 30, 'y': 80}, { 'x': 50, 'y': 90}, 
		{ 'x': 70, 'y': 80}];

	var lineFunction = d3.svg.line() 
		.x(function (d) { return d.x; })
		.y(function (d) { return d.y; })
		//.interpolate('cardinal');
		.interpolate('basis');
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
	var lineGraph = g.append('path')
		.attr('d', lineFunction(lineData))
		.attr('stroke', '#000')
		.attr('stroke-width', 2)
		.attr('fill', 'none')
        .style({fill : '#000',  opacity: 1});
  
    //The data for our line
	var lineData4 = [ { 'x': 35, 'y': 82}, { 'x': 49, 'y': 86}, 
		{ 'x': 65, 'y': 82}];

	var lineFunction = d3.svg.line() 
		.x(function (d) { return d.x; })
		.y(function (d) { return d.y; })
		//.interpolate('cardinal');
		.interpolate('basis');
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
	var lineGraph = g.append('path')
		.attr('d', lineFunction(lineData4))
		.attr('fill', 'none')
        .style({fill : '#F2ECEC',  opacity: 1});
  
  //The data for our line
	var lineData1 = [ { 'x': 43, 'y': 21}, { 'x': 55, 'y': -4}, 
		{ 'x': 63, 'y': 7}];

	var lineFunction = d3.svg.line() 
		.x(function (d) { return d.x; })
		.y(function (d) { return d.y; })
		//.interpolate('cardinal');
		.interpolate('basis');
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
	var lineGraph = g.append('path')
		.attr('d', lineFunction(lineData1))
		.attr('stroke', '#000')
		.attr('stroke-width', 2)
		.attr('fill', 'none')
        //.style({fill : '#000',  opacity: 0.6});
    
    //The data for our line
	var lineData2 = [ { 'x': 49, 'y': 21}, { 'x': 57, 'y': 4}, 
		{ 'x': 63, 'y': 16}];

	var lineFunction = d3.svg.line() 
		.x(function (d) { return d.x; })
		.y(function (d) { return d.y; })
		//.interpolate('cardinal');
		.interpolate('basis');
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
	var lineGraph = g.append('path')
		.attr('d', lineFunction(lineData2))
		.attr('stroke', '#000')
		.attr('stroke-width', 2)
		.attr('fill', 'none')
        //.style({fill : '#000',  opacity: 0.6});
    
     //The data for our line
	var lineData3 = [ { 'x': 55, 'y': 21}, { 'x': 58, 'y': 9}, 
		{ 'x': 59, 'y': 17}];

	var lineFunction = d3.svg.line() 
		.x(function (d) { return d.x; })
		.y(function (d) { return d.y; })
		//.interpolate('cardinal');
		.interpolate('basis');
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
	var lineGraph = g.append('path')
		.attr('d', lineFunction(lineData3))
		.attr('stroke', '#000')
		.attr('stroke-width', 2)
		.attr('fill', 'none')
        //.style({fill : '#000',  opacity: 0.6});
  
  
  
});