// Read in the data with d3.csv
d3.csv("../../Resources/combined_strategies.csv").then(function(betData) {

console.log(betData);

// Cast the hours value to a number for each piece of tvData
betData.forEach(function(d) {
    d.ProfitB = +d.ProfitB;
    d.ProfitP = +d.ProfitP;
    d.ProfitF = +d.ProfitF;
    d.ProfitM = +d.ProfitM;
});

// Initializes the page with a default plot
function init() {
    data = [{
        x: d.IDB,
        y: d.ProfitB }];

    Plotly.newPlot("plot", data);
    }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");
  
        // Initialize x and y arrays
        var x = [];
        var y = [];
    
        if (dataset === 'dataset1') {
        x = [d.IDB];
        y = [d.ProfitB];
        }
    
        if (dataset === 'dataset2') {
        x = [d.IDM];
        y = [d.ProfitM];
        }

        if (dataset === 'dataset3') {
            x = [d.IDF];
            y = [d.ProfitF];
        }

        if (dataset === 'dataset4') {
            x = [d.IDF];
            y = [d.ProfitF];
        }
    
        // Note the extra brackets around 'x' and 'y'
        Plotly.restyle("plot", "x", [x]);
        Plotly.restyle("plot", "y", [y]);
    
    }
    
    init();
})

