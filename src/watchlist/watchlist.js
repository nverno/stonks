/**
 * Watchlist containing quotes
 */

import $ from 'jquery';
import watchlist from './watchlist.ejs';
import quoteCell from './quote_cell.ejs';
import { fetchQuotes } from '../stocks/quote';
import { getOption } from '../settings';
import * as quoteAPI from '../stocks/quote';
import './watchlist.scss';

var timeout = typeof window === 'undefined' ? null : window.timeout;

// TODO:
const needsUpdate = (current, next) => {
  return true;
};

const startTimer = (currentQuotes) => {
  const interval = getOption('updateInterval') * 1000;
  const tickers = getOption('tickers');

  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    const quotes = await fetchQuotes(tickers.join(','));
    if (needsUpdate(currentQuotes, quotes)) {
      console.log('Updating quotes');
      buildWatchlist(quotes);
    }
  }, interval);
};

export const buildWatchlist = (assets) => {
  let list = $('#watchlist');
  list.empty();

  list.append(
    watchlist({
      quoteCell,
      assets,
    })
  );

  // list.on('click', function(e) {
  //   e.preventDefault();
  //   alert('TODO! ', assets);
  // });
};

export const createWatchlist = async () => {
  const tickers = getOption('tickers');
  const assets = await fetchQuotes(tickers.join(','));
  buildWatchlist(assets);
  startTimer(assets);
};
