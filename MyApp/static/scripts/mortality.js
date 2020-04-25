
async function showMortalityData() {


var data = await fetchData();
var layout = {
  //title: 'Line Dash',
  xaxis: {
    range: [0.75, 5.25],
    autorange: false
  },
  yaxis: {
    range: [0, 18.5],
    autorange: false
  },
  legend: {
    y: 0.5,
    traceorder: 'reversed',
    font: {
      size: 16
    }
  }
};
Plotly.newPlot('mortality_div', data, layout);

async function fetchData() {
  return parseData();
}

function parseData() {
  var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: [1, 3, 2, 3, 1],
  mode: 'lines',
  name: 'Solid',
  line: {
    dash: 'solid',
    width: 4
  }
};

var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: [6, 8, 7, 8, 6],
  mode: 'lines',
  name: 'dashdot',
  line: {
    dash: 'dashdot',
    width: 4
  }
};

var trace3 = {
  x: [1, 2, 3, 4, 5],
  y: [11, 13, 12, 13, 11],
  mode: 'lines',
  name: 'Solid',
  line: {
    dash: 'solid',
    width: 4
  }
};

var trace4 = {
  x: [1, 2, 3, 4, 5],
  y: [16, 18, 17, 18, 16],
  mode: 'lines',
  name: 'dot',
  line: {
    dash: 'dot',
    width: 4
  }
};
  var data = [trace1, trace2, trace3, trace4];

  return data;
}

  /*d3.csv("age_specific_fertility_rates.csv").then(function(data) {
    console.log(data[0]);

    data comes as array of arrays from csv (convert data to array of jsons)
    create traces (check table and each age group will be a bar group)
    for (datarow : data) {
      if cloumnId known; var trace[i] = dataRow[columnId];
    }

  });*/
}