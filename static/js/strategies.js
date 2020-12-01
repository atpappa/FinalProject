var betItAllBar = '../static/images/betitall.png'
var FixedBar = '../static/images/fixedamount.png'
var ProptionalLBar= '../static/images/proportionallose.png'
var ProptionalWBar= '../static/images/proportionalwin.png'
var MartingaleBar= '../static/images/martingale.png'

var betItAllButton = d3.select("#betItAll");
var FixedButton = d3.select("#fixed");
var ProptionalLButton = d3.select("#propL");
var ProptionalWButton = d3.select("#propW");
var MartingaleButton = d3.select("#martingale");

betItAllButton.on("click", function() {
  d3.select(".bar").html(`<img src=${betItAllBar} alt='...'>`);
});

FixedButton.on("click", function() {
  d3.select(".bar").html(`<img src=${FixedBar} alt='...'>`);
});

ProptionalLButton.on("click", function() {
  d3.select(".bar").html(`<img src=${ProptionalLBar} alt='...'>`);
});

ProptionalWButton.on("click", function() {
  d3.select(".bar").html(`<img src=${ProptionalWBar} alt='...'>`);
});

MartingaleButton.on("click", function() {
  d3.select(".bar").html(`<img src=${MartingaleBar} alt='...'>`);
});