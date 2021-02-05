/**
 * API for alphavantage
 *
 * Alphavantage financial API
 * https:*www.alphavantage.co/documentation/
 * eg.
 *
 * const BASE_URL = 'https://www.alphavantage.co/query?';
 * const API_KEY = window.avAPIKey;
 *
 * let params = {
 *   function: 'TIME_SERIES_INTRADAY',
 *   symbol: 'AMZN',
 *   interval: '1min',
 * };
 *
 * const makeQuery = params => (
 *   BASE_URL +
 *     Object.keys(params)
 *     .map(k => `${k}=${params[k]}`)
 *     .join('&') + `&apikey=${API_KEY}`
 *  );
 */
import { mapKeys } from '../util';

var fetch;
if (typeof window === 'undefined') fetch = require('node-fetch');
else fetch = window.fetch;

// remove preceding list index and replace spaces with '_'
const cleanQuote = (quote) =>
  mapKeys(quote, (_, k) => k.slice(4).replace(/ /g, '_'));

const BASE_URL = 'https://www.alphavantage.co/query?';

class AvAPI {
  constructor({ avKey }) {
    this.apiKey = avKey || null;
  }

  createUrl(params) {
    params.apikey = this.apiKey;
    const encoded = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');
    return BASE_URL + encoded;
  }

  async sendRequest(params) {
    if (typeof this.apiKey === 'undefined') {
      throw new Error('Must add an API key for AlphaVantage.');
    }

    const url = this.createUrl(params);
    console.log('AV API: ', url);

    const res = await fetch(url);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    const data = await res.json();

    if (typeof data['Error Message'] !== 'undefined') {
      throw new Error(data['Error Message']);
    } else if (typeof data['Note'] !== 'undefined') {
      throw new Error(`API limit exceeded: ${data['Note']}`);
    }

    return data;
  }

  // Cleanup search/quote results
  _cleanSearch(results) {
    return results.map((res) =>
      mapKeys(res, (_, k) => k.slice(3).replace(/ /g, '_'))
    );
  }

  async search(query) {
    const params = {
      function: 'SYMBOL_SEARCH',
      keywords: query,
    };

    let res = await this.sendRequest(params);
    console.log('Res: ', res);

    return res['bestMatches'] ? this._cleanSearch(res['bestMatches']) : [];
  }

  // remove metadata and format for canvasJS chart
  _cleanTimeSeries(results) {
    let key = Object.keys(results).find(
      (key) => key.indexOf('Time Series') !== -1
    );
    let data = results[key];

    let price = [],
      volume = [];
    for (const [key, val] of Object.entries(data)) {
      const date = new Date(key);
      // x: date, y: open, high, low, close
      price.push({
        x: date,
        y: [
          Number(val['1. open']),
          Number(val['2. high']),
          Number(val['3. low']),
          Number(val['4. close']),
        ],
      });
      // x: date, y: volume
      volume.push({
        x: date,
        y: Number(val['5. volume']),
      });
    }

    return { price, volume };
  }

  async timeSeries(options) {
    const series = {
      intraday: 'TIME_SERIES_INTRADAY',
      weekly: 'TIME_SERIES_WEEKLY',
      monthly: 'TIME_SERIES_MONTHLY',
    };

    const params = {
      function: series[options['series']] || series['intraday'],
      interval: options['interval'] || '5min',
      symbol: options['symbol'],
      outputsize: options['outputsize'] || 'compact', // 'full'
    };

    let res = await this.sendRequest(params);
    // console.log("res: ", res);

    return this._cleanTimeSeries(res);
  }
}

export default AvAPI;
