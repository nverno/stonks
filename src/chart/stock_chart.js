/**
 * Stock chart using CanvasJS
 */
import $ from 'jquery';
import './stock-chart.scss';

// Note: window.av currently has AvAPI instance!

export const createStockChart = async (symbol) => {
  let { price, volume } = await window.av.timeSeries({
    symbol,
    series: 'intraday',
    outputsize: 'full',
  });
  // console.log('price: ', price);
  // console.log('volume: ', volume);

  const latest = price[0]['y'][3];
  const isPositive = latest > price[price.length - 1]['y'][3];
  const beg = price[price.length - 1]['x'];
  const end = price[0]['x'];
  $('#chart-container').css('min-height', '400px');

  const stockChart = new CanvasJS.StockChart('chart-container', {
    theme: 'dark1',
    title: {
      text: `${symbol} - $${latest}`,
    },
    rangeSelector: {
      buttonStyle: {
        backgroundColor: isPositive ? 'rgb(0,200,5)' : 'rgb(255, 80, 0)',
      },
    },
    charts: [
      {
        title: {
          text: `${symbol} price in USD`,
        },
        axisY: {
          prefix: '$',
        },
        data: [
          {
            type: 'candlestick',
            yValueFormatString: '$#.###.##',
            dataPoints: price,
          },
        ],
      },
      {
        title: {
          text: `${symbol} volume`,
        },
        data: [
          {
            dataPoints: volume,
          },
        ],
      },
    ],
    navigator: {
      data: [
        {
          dataPoints: price,
        },
      ],
      slider: {
        minimum: beg,
        maximum: end,
      },
    },
  });

  stockChart.render();
};

// window.onload = function () {
//   var dataPoints1 = [], dataPoints2 = [];
//   var stockChart = new CanvasJS.StockChart("chartContainer",{
//     theme: "light2",
//     charts: [{
//       title: {
//         text: "Bitcoin Price in USD"
//       },
//       axisY: {
//         prefix: "$"
//       },
//       data: [{
//         type: "candlestick",
//         yValueFormatString: "$#,###.##",
//         dataPoints : dataPoints1
//       }]
//     },{
//       title: {
//         text: "Bitcoin Volume"
//       },
//       data: [{
//         dataPoints : dataPoints2
//       }]
//     }],
//     navigator: {
//       data: [{
//         dataPoints: dataPoints2
//       }],
//       slider: {
//         minimum: new Date(2018, 05, 01),
//         maximum: new Date(2018, 09, 01)
//       }
//     }
//   });
// }
