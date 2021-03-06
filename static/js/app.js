var btnj = document.getElementById("Jockey")
btnj.addEventListener('click', function(){
    d3.select("svg").remove();
    // Define SVG area dimensions
    var svgWidth = 1500;
    var svgHeight = 1000;

    // Define the chart's margins as an object
    var chartMargin = {
    top: 30,
    right: 30,
    bottom: 130,
    left: 30
    };

    // Define dimensions of the chart area
    var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
    var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

    // Select body, append SVG area to it, and set the dimensions
    var svg = d3.select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

    // Append a group to the SVG area and shift ('translate') it to the right and to the bottom
    var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


    // Load data from hours-of-tv-watched.csv
    d3.csv("static/resources/top5jockey.csv").then(function(topData) {


    console.log(topData);

    // Cast the hours value to a number for each piece of tvData
    topData.forEach(function(d) {
        d.Count = +d.Count;
    });

    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleBand()
        .domain(topData.map(d => d.Name))
        .range([0, chartWidth])
        .padding(0.1);

    // Create a linear scale for the vertical axis.
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(topData, d => d.Count)])
        .range([chartHeight, 0]);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    chartGroup.append("g")
        .call(leftAxis);

    chartGroup.append("g")
        .attr("class", "x_axis")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis)
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    // Step 1: Initialize Tooltip
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, 60])
    .html(function(d) {
    return (`<strong>${d.Name}<strong><hr>${d.Count}
    times placed`);
    });

    // Step 2: Create the tooltip in chartGroup.
    chartGroup.call(toolTip);

    // Create one SVG rectangle per piece of tvData
    // Use the linear and band scales to position each rectangle within the chart
    chartGroup.selectAll("#bar")
        .data(topData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xBandScale(d.Name))
        .attr("y", d => yLinearScale(d.Count))
        .attr("width", xBandScale.bandwidth())
        .attr("height", d => chartHeight - yLinearScale(d.Count))
        .attr("fill", "purple")
        // event listener for onclick event
        .on("click", function(d, i) {
        alert(` ${d.Name}`);
        })
        // event listener for mouseover
        .on("mouseover", function(d) {
            d3.select(this)
                .attr("fill", "teal");
            toolTip.show(d);
        })
        // event listener for mouseout
        .on("mouseout", function(d) {
            d3.select(this)
                .attr("fill", "purple");
            toolTip.hide(d);
        })

        }).catch(function(error) {
        console.log(error);
        });
    });
var btnt = document.getElementById("Trainer")
btnt.addEventListener('click', function(){
    d3.select("svg").remove();
    // Define SVG area dimensions
    var svgWidth = 1500;
    var svgHeight = 1000;

    // Define the chart's margins as an object
    var chartMargin = {
    top: 30,
    right: 30,
    bottom: 130,
    left: 30
    };

    // Define dimensions of the chart area
    var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
    var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

    // Select body, append SVG area to it, and set the dimensions
    var svg = d3.select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

    // Append a group to the SVG area and shift ('translate') it to the right and to the bottom
    var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


    // Load data from hours-of-tv-watched.csv
    d3.csv("static/resources/top5trainer.csv").then(function(topData) {


    console.log(topData);

    // Cast the hours value to a number for each piece of tvData
    topData.forEach(function(d) {
        d.Count = +d.Count;
    });

    // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
    var xBandScale = d3.scaleBand()
        .domain(topData.map(d => d.Name))
        .range([0, chartWidth])
        .padding(0.1);

    // Create a linear scale for the vertical axis.
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(topData, d => d.Count)])
        .range([chartHeight, 0]);

    // Create two new functions passing our scales in as arguments
    // These will be used to create the chart's axes
    var bottomAxis = d3.axisBottom(xBandScale);
    var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    // Append two SVG group elements to the chartGroup area,
    // and create the bottom and left axes inside of them
    chartGroup.append("g")
        .call(leftAxis);

    chartGroup.append("g")
        .attr("class", "x_axis")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis)
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    // Step 1: Initialize Tooltip
    var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, 60])
    .html(function(d) {
      return (`<strong>${d.Name}<strong><hr>${d.Count}
      times placed`);
    });

    // Step 2: Create the tooltip in chartGroup
    chartGroup.call(toolTip);

    // Create one SVG rectangle per piece of tvData
    // Use the linear and band scales to position each rectangle within the chart
    chartGroup.selectAll("#bar")
        .data(topData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xBandScale(d.Name))
        .attr("y", d => yLinearScale(d.Count))
        .attr("width", xBandScale.bandwidth())
        .attr("height", d => chartHeight - yLinearScale(d.Count))
        .attr("fill", "teal")
        // event listener for onclick event
        .on("click", function(d, i) {
        alert(` ${d.Name}`);
        })
        // event listener for mouseover
        .on("mouseover", function(d) {
            d3.select(this)
                .attr("fill", "purple");
            toolTip.show(d);
        })
        // event listener for mouseout
        .on("mouseout", function(d) {
            d3.select(this)
                .attr("fill", "teal");
            toolTip.hide(d);
        })

        }).catch(function(error) {
        console.log(error);
        });
    });

var btnc = document.getElementById("Clear")
    btnc.addEventListener('click', function(){
        d3.select('svg').remove();
    })