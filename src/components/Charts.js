import React, { Component } from 'react';

import Chart from 'chart.js';

export default class Charts extends Component {
  componentDidMount() {
    const canvases = document.querySelectorAll('canvas');
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];
    const data1 = {
      labels: ['Defect 1', 'Defect 2', 'Defect 3', 'Defect 4'],
      datasets: [
        {
          label: '# of Defects',
          data: [897, 247, 5150, 801],
          backgroundColor: colors2,
          borderWidth: 3,
        },
      ],
    };

    const data2 = {
      labels: ['No defect', 'One label', 'Multi label'],
      datasets: [
        {
          label: '# of Labels for each image',
          data: [4200, 4500, 250],
          backgroundColor: colors2,
          borderWidth: 3,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
    };

    const bar1 = document.getElementById('bar1').getContext('2d');
    const bar2 = document.getElementById('bar2').getContext('2d');

    const doughnutChart = new Chart(bar1, {
      type: 'bar',
      data: data1,
      options,
    });

    const barChart = new Chart(bar2, {
      type: 'bar',
      data: data2,
      options,
    });

    canvases.forEach((canvas) => {
      canvas.setAttribute('eslam', 'khalad');
    });
  }
  render() {
    return (
      <div id="statistics" className="charts mt-5 text-center">
        <h2 className="display">Charts</h2>
        <p className="lead">
          Here is some statisitcs about the deteced images and the most common
          defect classes
        </p>
        <div className="chartsContainer m-auto col-md-6 row">
          <canvas
            className="col-12"
            width="200"
            height="100"
            id="bar1"
          ></canvas>
        </div>
        <div className="chartsContainer m-auto col-md-6 row">
          <canvas
            className="col-12"
            width="200"
            height="100"
            id="bar2"
          ></canvas>
        </div>
      </div>
    );
  }
}
