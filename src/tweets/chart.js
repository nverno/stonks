import * as d3 from 'd3';
import { cleanTweets, groupByHour } from './util';
import API from './api';

const margin = {
  top: 30,
  right: 0,
  bottom: 30,
  left: 40,
};
const width = 400;
const height = 400;
const defaults = { height, width, margin };

export const getData = async (symbol) => {
  const api = new API({});
  let resp = await api.recentCashtag(symbol);
  let json = await resp.json();
  console.log('json: ', json);
  let data = cleanTweets(symbol, json);
  let { groups, grouped } = groupByHour(data);

  return {
    data,
    groups,
    grouped,
  };
};

// Data should be { name: <group>, value: <barheight> }
export const barChart = ({ data }, options = defaults) => {
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
        .tickFormat((i) => data[i].name)
        .tickSizeOuter(0)
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
  document.getElementById('cashtags').append(node);

  return node;
};
