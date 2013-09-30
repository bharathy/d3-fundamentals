# D3 Basics with code

# Content : 
* What is D3?
* Selection
* Binding Data
* Enter & Exit
* Transition
* SVG paths
* SVG Elements & Shapes
* D3 Transform
* D3 Scales
* D3 Axis
* Force layout
* Browser Compatibility

### D3 Intro

JavaScript library for manipulating documents based on data

Binds data into DOM and then apply data-driven transformation to DOM. D3 doesn’t provide pre-generated graph or visualization, But it solves the crux problem in data visualization and gives the freedom of creative features.

Know about SVG, HTML5, CSS3 - D3 is playground to play with it.

D3’s functional style allows code reuse.

Definitely not for common graphs, just out of the box visualization.

### D3 Selection

Like CSS selector and JavaScript querySelector/querySelectorAll, D3 provides selector for DOM nodes.

```
d3.selectAll("p").style("color", "red");

d3.select("div").style("background-color", "black");

d3.select("#chart").style("background-color", "black");

d3.selectAll("li").style("background-color", function(d, i) {
          return i % 2 ? "#fff" : "#ccc";
});
```

###Append SVG to DOM

D3 Code to append SVG to DOM:
```
var w = 800,h = 600;
var svg = d3.select("#chart").append("svg")
.attr("width", w)
.attr("height",h); 
```

Created DOM:
```
<svg width="800" height="600"/>
```

###Data Binding
Data - Array of values. Each value will be bound to selected DOM elements.
DOM selection -> Data -> Data Binding -> DOM attribute change based on data value.
```
var el = d3.selectAll(".bar")    

  var dataSet = [3,6,4];   

  var dataBind = el.data(dataSet);  

dataBind.style("height", function(d) { return (d*10) + "px"; });  

//single line
d3.selectAll(".bar").data(dataSet).style("height", function(d) { return (d*10) + "px"; });
```

###Enter & Exit:
enter – Create new node for incoming data
exit – Remove nodes for outgoing data
- If data is more than selection node, using enter we can add new node to DOM and viseversa.
- Return a reference to the placeholder elements (nodes) for each data element that did not have a corresponding existing DOM Element.
- allows chaining of append, insert and select operators to be used on it.

```
d3.selectAll(".bar").data(dataSet).enter();
d3.selectAll(".bar").exit().remove();
```

###Transition
Transitions gradually interpolate styles and attributes over time.
.transition()
.duration()
.delay()

```
d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * 8); });
```

###SVG Elements & Shapes using D3
####SVG Group Element :
```
<g>
<circle cx="20" cy="20" r="20" fill="green" />
 <circle cx="70" cy="70" r="20" fill="purple" />
</g>
```
####SVG Circle Element :
```
<circle cx="30" cy="30" r="8" fill="blue"/>
```
####SVG Rectangle Element :
```
<rect x="130" y="30" height="50" width="100" fill="green"/>
```
####SVG Ellipse Element :
```
<ellipse cx="300" cy="50" rx="25" ry="10" fill="orange"/>
```
####SVG Line Element :
```
<line stroke="#08088a" y1="30" x1="250" y2="80" x2="280"/>
```
####SVG Text Element :
```
<text x="350" y="30" fill="green">hey! Im d3!</text>
```
####SVG Path Element :
```
<path d="M1,150L20,170L40,130L60,160L80,120L100,167" stroke="green" stroke-width="3" fill="none"/>
```

###SVG Transform

Transforms the SVG element from one state to other state.

- translate([])
- skewX()
- skewY()
- scale( [])
- matrix(a,b)

###SVG Scales
- Convert set of domains to certain range.
- When we map data to SVG path, the path might go beyond the svg container space.To avoid this, we can scale the graphs to make sure it fits within the available space.
– Identity
– Linear
– Power and Logarithmic scales
– Quantize and Quantile scales
– Ordinal

Domain
{0 ..... 1000}
Range
{0 .... 100}

```
var data = [200, 300, 10, 34, 5, 600, 100, 356, 890, 465, 267, 999, 1000];
var linearScale = d3.scale.linear().domain( [0,1000] ).range( [0,100] );
var linearScale = d3.scale.linear().domain( [d3.min(data), d3.max(data)] ).range( [0,100] );
console.log(linearScale(890));
```

###SVG Axes & D3
- Draw the horizontal/vertical axis line, the horizontal/vertical axis ticks, spacing between axis mark and many more

```
var xaxisScale = d3.scale.linear()
  .domain([0, 100])
  .range([0, w]);

  var xAxis = d3.svg.axis()
  .scale(xaxisScale).orient('bottom').ticks(10);

var xAxisGroup = svg.append("g")
  .attr("transform", "translate(30," + (278) + ")")
  .call(xAxis);
```

###Force Layout
-It’s a way of representing data so that it individual data points share relationships to other data points via forces.
- the force layout keeps a reference to the associated nodes and links internally.
- Nodes are mapped to SVG circle elements, and links are mapped to SVG line elements.

```
var force = d3.layout.force()
                .nodes(d3.values(nodes))
                .links(links)
                .size([w, h])
                .linkStrength(0.3)
                .linkDistance(160)
                .gravity(0.1)
                .friction(0.9)
                .charge(-470)
                .on('tick', tick)
                .start();
```

###Force Layout - Details
* Size() -  sets width and height of force layout.
* linkDistance() - sets the target distance between linked nodes to the specified value.
* linkStrength() - sets the strength (rigidity) of links to the specified value in the range [0,1]
* charge() - A negative value results in node repulsion, while a positive value results in node attraction.
* nodes() - sets the layout's associated nodes to the specified array. 
* node attributes:   [index, x, y, px, py, fixed, weight]
* links - sets the layout's associated links to the specified array. 
* link attributes : [source,target]
start() - Starts the simulation.
* gravity() - sets the gravitational strength to the specified value.
* friction() - sets the friction(velocity decay) to specified value in range [0-1]
* tick() - Runs the force layout simulation one step.
* on() - event Listener
* .drag() - Bind a behavior to nodes to allow interactive dragging. (node.call(force.drag())

###SVG Compatibility

Desktop Browser : FF, Chrome, opera, IE9, safari.
Mobile Browser: Mobile safari, IE Mobile 9,Firefox Mobile, Opera Mini, Opera Mobile, Android3.x,4.x
Missing Browsers : <IE8, Android 2.x, webos, screen reader

Alternative to SVG :

Chrome Frame to IE6 -8
– Google Chrome Frame is an open source plug-in that seamlessly brings Google Chromes open web technologies and speedy JavaScript engine to Internet Explorer.

Flash for IE – Involves building the feature twice and maintenance hassle.

VML – Its old stuff used in IE6-8 before SVG and its incredibly broken.

Static Image.
– Fallback with static image which can be generated from SVG. We can convert SVG into PNG using phantomjs (headless webkit) for non-supportive browser. Only thing is the graph might not be interactive

###References:

http://d3js.org

http://www.jeromecukier.net/wp-content/uploads/2012/10/d3-cheat-sheet.pdf

http://phrogz.net/js/d3-playground/

http://www.d3noob.org/

http://www.dashingd3js.com

http://techslides.com/over-1000-d3-js-examples-and-demos/

http://vimeo.com/29458354


![Alt text](/app/images/screenshot.png?raw=true)

![Alt text](/app/images/jasmine-screenshot.png?raw=true)
