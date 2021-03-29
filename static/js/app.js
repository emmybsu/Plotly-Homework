// //added code from W15,D3,A05,Solved-plots.js
// //build data to create plotly charts

// function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
//     var table = d3.select("#summary-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < 12; i++) {
//       trow = tbody.append("tr");
//       trow.append("td").text(dates[i]);
//       trow.append("td").text(openPrices[i]);
//       trow.append("td").text(highPrices[i]);
//       trow.append("td").text(lowPrices[i]);
//       trow.append("td").text(closingPrices[i]);
//       trow.append("td").text(volume[i]);
//     }
//   }
  






// http://learnjsdata.com/read_data.html
d3.json("/data/samples.json").then((sampleData) => {
  return sampleData
});




























//   function buildPlot() {
//     var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2017-01-01&end_date=2018-11-22&api_key=${apiKey}`;

//     d3.json(url).then(function(data) {

//       // Grab values from the response json object to build the plots
//       var name = data.dataset.name;
//       var stock = data.dataset.dataset_code;
//       var startDate = data.dataset.start_date;
//       var endDate = data.dataset.end_date;
//       var dates = unpack(data.dataset.data, 0);
//       var openingPrices = unpack(data.dataset.data, 1);
//       var highPrices = unpack(data.dataset.data, 2);
//       var lowPrices = unpack(data.dataset.data, 3);
//       var closingPrices = unpack(data.dataset.data, 4);

//       getMonthlyData();

//       var trace1 = {
//         type: "scatter",
//         mode: "lines",
//         name: name,
//         x: dates,
//         y: closingPrices,
//         line: {
//           color: "#17BECF"
//         }
//       };

//       // Candlestick Trace
//       var trace2 = {
//         type: "candlestick",
//         x: dates,
//         high: highPrices,
//         low: lowPrices,
//         open: openingPrices,
//         close: closingPrices
//       };

//       var data = [trace1, trace2];

//       var layout = {
//         title: `${stock} closing prices`,
//         xaxis: {
//           range: [startDate, endDate],
//           type: "date"
//         },
//         yaxis: {
//           autorange: true,
//           type: "linear"
//         },
//         showlegend: false
//       };

//       Plotly.newPlot("plot", data, layout);

//     });
//   }

//   buildPlot();