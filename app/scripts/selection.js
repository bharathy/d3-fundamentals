$(document).ready(function () {
    //(function(){
  
    var el = d3.select(".output").selectAll("div.bar");   

    var dataSet = [3,4,5,6];      

    var dataBind = el.data(dataSet);

    dataBind.style("height", function(d) { return (d*10) + "px"; });

    dataBind.enter().append("div") 
    .attr("class","bar")
    .style("height", function(d) { return (d*10) + "px"; });  

    console.log(dataBind); //selection of updating node 
    console.log(dataBind.enter()); //selection of entering node 
    console.log(dataBind.exit()); //selection of exiting node  

//})();
}); 