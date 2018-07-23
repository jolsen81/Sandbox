// function generateDataset ( ){
//   const sets = 1000;
//   const dataset = [];
//   for (let i = 0; i < sets; i++){
//       dataset.push({x: i * 5, y: Math.floor(Math.random() * sets)});
//   }

let counter = 1;

  TESTER = document.getElementById('chart-wrapper');

    data = [{
    x: [0],
    y: [Math.random()*10],

  }];

  	Plotly.plot( TESTER,  data, {
    xaxis: {
      title: 'Time (minutes)',
      showgrid: false
    },
    yaxis: {
      title: 'Records / Minute'
    },
  	margin: { t: 20 } ,

      scrollZoom: true,
      displaylogo: false,
      modeBarButtonsToRemove: ['toImage', 'sendDataToCloud'],
  legend: {
    "orientation": "v"
  }
  } );


window.setInterval(function () {
  if (counter < 100) {
  data[0].x.push(counter *10);
  data[0].y.unshift(Math.random()*100);
  counter++;
}
else{
  data[0].y[0]++
}

  var update = {x: data.x, y: [data.y]}
  Plotly.update(TESTER, {x: [data[0].x], y: [data[0].y]})
}, 500)
