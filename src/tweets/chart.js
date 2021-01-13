import { cleanTweets, groupByHour, groupByMinutes } from './util';
import API from './api';
// const d3 = require('d3');
import * as d3 from 'd3';
import './chart.scss';

// BEGIN testing
import grouped from './__test__/grouped';
document.addEventListener('DOMContentLoaded', () => {
  window.grouped = grouped;
});
// END testing

const defaults = {
  height: 200,
  width: 600,
  margin: {
    top: 30,
    right: 0,
    bottom: 30,
    left: 40,
  },
};

// create frequency chart for tweets over the last hour
export const createTweetChart = async (symbol) => {
  let { data, groups, grouped } = await getTweetData(symbol);
  const node = barChart({ data: grouped });
  document.getElementById('cashtags').appendChild(node);
  return node;
};

// Get tweets from last hour, capped at 100
export const getTweetData = async (symbol) => {
  const api = new API({});
  let json = await api.lastHour(symbol);

  // console.log('json: ', json);
  let data = cleanTweets(symbol, json);
  let { groups, grouped } = groupByMinutes(data, 30);

  return {
    data,
    groups,
    grouped,
  };
};

// Data should be { name: <group>, value: <barheight> }
const barChart = ({ data }, options = defaults) => {
  const { width, height, margin } = options;
  // FIXME: how to use CSS variables in svg?
  const svg = d3
    .create('svg')
    .attr('viewBox', [0, 0, width, height])
    .attr('background-color', 'rgb(0,0,0)');

  const x = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const xAxis = (g) =>
    g.attr('transform', `translate(0, ${height - margin.bottom})`).call(
      d3
        .axisBottom(x)
        .tickFormat((i) => d3.timeFormat('%H:%M')(new Date(data[i].name)))
        .tickSizeOuter(1)
    );

  const yAxis = (g) =>
    g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .append('text')
          .attr('x', -margin.left)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text(data.y)
      );

  svg
    .append('g')
    .attr('fill', 'rgb(0,200,5)')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.value))
    .attr('height', (d) => y(0) - y(d.value))
    .attr('width', x.bandwidth());

  svg.append('g').call(xAxis);

  svg.append('g').call(yAxis);

  const node = svg.node();
  return node;
};
