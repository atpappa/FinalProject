function init() {

// Read in the data with d3.csv
d3.csv("static/resources/combined_strategies.csv").then(function (betData) {
     // console.log(betData);
    csvData = betData
    // // denote betData as d in a function
    // betData.forEach(function (d) {

    //     // Initializes the page with a default plot
    //     function init() {
    //         var trace1 = {
    //             x: [d.IDB],
    //             y: [d.ProfitB],
    //             mode: 'lines+markers',
    //             marker: {
    //                 color: 'rgb(128, 0, 128)',
    //                 size: 8
    //               },
    //               line: {
    //                 color: 'rgb(128, 0, 128)',
    //                 width: 1
    //               }
    //             };
          
    //         var data1 = [trace1];

    //         var layout1 = {
    //             title: "Betting It All Strategy",
    //             xaxis: { title: "Bet" },
    //             yaxis: { title: "Profit ($USD)" }
    //         };

    //         Plotly.newPlot("plot", data1, layout1);

    //     }

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
                var trace1 = {
                    x: [betData.IDB],
                    y: [betData.ProfitB],
                    mode: 'lines+markers',
                    marker: {
                        color: 'rgb(128, 0, 128)',
                        size: 8
                      },
                      line: {
                        color: 'rgb(128, 0, 128)',
                        width: 1
                      }
                    };
        
                var data1 = [trace1];

                var layout1 = {
                    title: "Betting It All Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
    
                Plotly.newPlot("plot", data1, layout1)
            }

            if (dataset === 'dataset2') {
                var trace2 = {
                    x: [betData.IDM],
                    y: [betData.ProfitM],
                    mode: 'lines+markers',
                    marker: {
                        color: 'rgb(128, 0, 128)',
                        size: 8
                      },
                      line: {
                        color: 'rgb(128, 0, 128)',
                        width: 1
                      }
                    };
        
                var data2 = [trace2];

                var layout2 = {
                    title: "Martingale System Betting Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
    
                Plotly.newPlot("plot", data2, layout2);
            }

            if (dataset === 'dataset3') {
                var trace3 = {
                    x: [betData.IDF],
                    y: [betData.ProfitF],
                    mode: 'lines+markers',
                    marker: {
                        color: 'rgb(128, 0, 128)',
                        size: 8
                      },
                      line: {
                        color: 'rgb(128, 0, 128)',
                        width: 1
                      }
                    };
               
                var data3 = [trace3];
                
                var layout3 = {
                    title: "Fixed Amount Betting Strategy",
                    xaxis: { title: "Bet" },
                    yaxis: { title: "Profit ($USD)" }
                };
    
                Plotly.newPlot("plot", data3, layout3);

            }

            if (dataset === 'dataset4') {
                var trace4 = {
                    x: [betData.OddsP],
                    y: [betData.BankrollP],
                    mode: 'lines+markers',
                    marker: {
                        color: 'rgb(128, 0, 128)',
                        size: 8
                      },
                      line: {
                        color: 'rgb(128, 0, 128)',
                        width: 1
                      }
                    };
                
                var data4 = [trace4];

                var layout4 = {
                    title: "Proportional Betting Strategy",
                    xaxis: { title: "Odds" },
                    yaxis: { title: "Bankroll ($USD)" }
                };
    
                Plotly.newPlot("plot", data4, layout4);
            }

        }
        init();
    });
});