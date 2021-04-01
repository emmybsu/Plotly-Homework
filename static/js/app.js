//identify tag in index.html to add name of ID
var htmlTag = d3.select('#selDataset');

// //build data to create plotly charts

d3.json("data/samples.json").then((sampleData) => {
  var subIDs = sampleData.names;
  //display all subject IDs

  //display individual ids
  subIDs.forEach((id) => {
    htmlTag.append('option')
    .property('value', id)
    .text(id);
  });

  // web page displays first ID in Test Subject Drop down 
  optionChanged(subIDs[0]);
});

//allows user to select IDs and dashboard changes based on ID change from menu
// <select id="selDataset" onchange="optionChanged(this.value)"></select>
function optionChanged (selIDs){
   d3.json('data/samples.json').then((sampleData) => {
    // create samples associated to ID 

    var samples = sampleData.samples;
    var results = samples.filter(individual => individual.id == selIDs);
   
    //first individual result
    var result = results[0];
     
    //create bar chart
    // identify 'sample_values' as values for the chart
    // identify 'otu_ids' as labels for the chart
    // identify 'otu_labels' as hovertext for the chart
 
    var values = results[0].sample_values
    var labels = results[0].otu_ids
    var hover = results[0].otu_labels

    var y_axis = labels.slice(0,10).map(labels => `OTU ${labels}`).reverse();

  //create trace variable for the bar chart

  var bar_trace = {
    y: y_axis,
    x: values.slice(0,10).reverse(),
    text: hover.slice(0,10).reverse(),
    type: "bar",
    orientation: "h"
  };
  // create the data variable
  var data = [bar_trace];
  // create the layout variable
  var bar_layout = {
    title: "Top 10 OTUs",
    yaxis: {
      tickmode: "linear"
    },
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 30
    }
  };
  Plotly.newPlot('bar', data, bar_layout);

  // create bubble chart
  //* Use `otu_ids` for the x values. = labels
//  * Use `sample_values` for the y values. = values
  //* Use `sample_values` for the marker size. = values
  //* Use `otu_ids` for the marker colors. = labels
  //* Use `otu_labels` for the text values. = hover
  //results = dict of ID
  //result = list of one key value with  ID array
  


// create individual's demographic information per ID

var demographics = sampleData.metadata;

var demoHTML = d3.select('#sample-metadata');

var detailsID = demographics.filter(person => person.id == selIDs);

// individual's demographics
var result = detailsID[0];
demoHTML.html('');
Object.entries(result).forEach(([key,value]) => {
  demoHTML.append('h5').text(`${key}: ${value}`);

})

var bubble_trace = {
  x: labels,
  y: values,
  text: hover,
  mode: "markers",
  marker: {
    size: values,
    color: labels,
    colorscale: "Earth"
  }
};

var data = [bubble_trace];

var bubble_layout = {
  hovermode:  "closest", 
  xaxis: {title: "Display of Each Microbe in the Navel (Operational Taxonomic Unit (OTU))"},
  margin: {t:30}
};
Plotly.newPlot("bubble", data, bubble_layout);
});
};
