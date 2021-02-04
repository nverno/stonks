/**
 * Return real-time quotes for symbols from yahoo finance
 */

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

export const fetchQuotes = async (symbols) => {
  const url = createUrl({ symbols });
  // console.log('QUOTE API: ', url);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);

  const data = await res.json();
  const response = data['quoteResponse'];
  if (response['error']) throw new Error(`API Error: ${response['error']}`);

  return response.result;
};
