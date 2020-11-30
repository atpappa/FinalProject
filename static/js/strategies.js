// Read in the data with d3.csv
d3.csv("static/resources/combined_strategies.csv").then(function (betData) {
    console.log(betData);
    csvData = betData
    // Cast the hours value to a number for each piece of betData
    betData.forEach(function (d) {
        d.ProfitB = +d.ProfitB;
        d.ProfitP = +d.ProfitP;
        d.ProfitF = +d.ProfitF;
        d.ProfitM = +d.ProfitM;

        // Initializes the page with a default plot
        function init() {
            data = [{
                x: d.IDB,
                y: d.ProfitB
            }];

            var layout1 = {
                title: "Betting It All Strategy",
                xaxis: { title: "Bet" },
                yaxis: { title: "Profit ($USD)" }
            };

            Plotly.newPlot("plot", data, layout1);

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

                var layout1 = {
                    title: "Betting It All Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
            }

            if (dataset === 'dataset2') {
                x = [d.IDM];
                y = [d.ProfitM];

                var layout2 = {
                    title: "Martingale System Betting Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
            }

            if (dataset === 'dataset3') {
                x = [d.IDF];
                y = [d.ProfitF];

                var layout3 = {
                    title: "Fixed Amount Betting Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
            }

            if (dataset === 'dataset4') {
                x = [d.IDP];
                y = [d.ProfitP];

                var layout4 = {
                    title: "Proportional Betting Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
            }

            // Note the extra brackets around 'x' and 'y'
            Plotly.restyle("plot", "x", [x], layout1);
            Plotly.restyle("plot", "y", [y], layout1);
            Plotly.restyle("plot", "x", [x], layout2);
            Plotly.restyle("plot", "y", [y], layout2);
            Plotly.restyle("plot", "x", [x], layout3);
            Plotly.restyle("plot", "y", [y], layout3);
            Plotly.restyle("plot", "x", [x], layout4);
            Plotly.restyle("plot", "y", [y], layout4);


        }
        init();
    });
});
