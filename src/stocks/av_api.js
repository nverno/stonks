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

// Cleanup search/quote results
const cleanSearch = (results) =>
  results.map((res) => mapKeys(res, (_, k) => k.slice(3).replace(/ /g, '_')));

// remove preceding list index and replace spaces with '_'
const cleanQuote = (quote) =>
  mapKeys(quote, (_, k) => k.slice(4).replace(/ /g, '_'));

const BASE_URL = 'https://www.alphavantage.co/query?';

class AvAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
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
    const res = await fetch(url);
    const data = await res.json();

    if (typeof data['Error Message'] !== 'undefined') {
      throw new Error(data['Error Message']);
    } else if (typeof data['Note'] !== 'undefined') {
      throw new Error(`API limit exceeded: ${data['Note']}`);
    }

    return data;
  }

  async search(query) {
    const params = {
      function: 'SYMBOL_SEARCH',
      keywords: query,
    };

    let res = await this.sendRequest(params);
    console.log('Res: ', res);

    return res['bestMatches'] ? cleanSearch(res['bestMatches']) : [];
  }
}

export default AvAPI;
