/**
 * Return real-time quotes for symbols from yahoo finance
 */
import { fmtPercent, fmtPrice, fmtClass } from '../util';

var fetch;
if (typeof window === 'undefined') fetch = require('node-fetch');
else fetch = window.fetch;

// const BASE_URL = 'https://query1.finance.yahoo.com/v7/finance/quote?lang=en-US&region=US&corsDomain=finance.yahoo.com';
const BASE_URL = 'https://stonks-proxy.herokuapp.com/api/quotes';
// const BASE_URL = 'http://localhost:5000/api/quotes';

const createUrl = (params) => {
  return (
    BASE_URL +
    '?' +
    Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')
  );
};

// Quote formatting and normalization
const transformQuotes = (quotes) => {
  let res = {};

  quotes.forEach((quote) => {
    switch (quote.marketState) {
      case 'PRE':
        quote.price = quote.preMarketPrice;
        quote.change = quote.preMarketChange;
        quote.changePercent = quote.preMarketChangePercent;
        break;

      case 'REGULAR':
        quote.price = quote.regularMarketPrice;
        quote.change = quote.regularMarketChange;
        quote.changePercent = quote.regularMarketChangePercent;
        break;

      // POST,PREPRE
      default:
        quote.price = quote.postMarketPrice;
        quote.change = quote.postMarketChange + quote.regularMarketChange;
        quote.changePercent =
          quote.postMarketChangePercent + quote.regularMarketChangePercent;
        quote.afterHoursClassName =
          fmtClass(quote.postMarketChangePercent) + '-light';
        break;
    }

    quote.className = fmtClass(quote.change);
    quote.marketActive = ['PRE', 'POST', 'REGULAR'].includes(quote.marketState);

    for (let key of [
      'price',
      'preMarketPrice',
      'postMarketPrice',
      'regularMarketPrice',
      'change',
      'preMarketChange',
      'postMarketChange',
      'regularMarketChange',
    ]) {
      quote[key + 'Fmt'] = fmtPrice(quote[key]);
    }

    for (let key of [
      'changePercent',
      'preMarketChangePercent',
      'regularMarketChangePercent',
      'postMarketChangePercent',
    ]) {
      quote[key + 'Fmt'] = fmtPercent(quote[key]);
    }

    res[quote.symbol] = quote;
  });

  return res;
};

export const fetchQuotes = async (symbols) => {
  const url = createUrl({ symbols });
  // console.log('QUOTE API: ', url);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);

  const data = await res.json();
  const response = data['quoteResponse'];
  if (response['error']) throw new Error(`API Error: ${response['error']}`);

  return transformQuotes(response.result);
};
