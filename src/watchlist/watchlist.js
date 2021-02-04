/**
 * Watchlist containing quotes
 */

import $ from 'jquery';
import watchlist from './watchlist.ejs';
import quoteCell from './quote_cell.ejs';
import { fetchQuotes } from '../stocks/quote';
import { getOption } from '../settings';
import './watchlist.scss';

// mark
const needsUpdate = (current, next) => {
  if (!Object.keys(current).length) return true;

  let update = false;
  for (let [sym, quote] of Object.entries(next)) {
    if (!current[sym] || quote.price !== current[sym].price) {
      update = true;
      next[sym].updated = true;
    }
  }

  return update;
};

const removeUpdates = () => {
  $('.price').removeClass('positive negative');
};

const updateQuotes = async (currentQuotes) => {
  const interval = getOption('updateInterval') * 1000;
  const tickers = getOption('tickers');
  const quotes = await fetchQuotes(tickers.join(','));

  if (needsUpdate(currentQuotes, quotes)) {
    console.log('Updating quotes: ', quotes);
    buildWatchlist(quotes);
    setTimeout(removeUpdates, 1000);
  }

  setTimeout(() => {
    updateQuotes(quotes);
  }, interval);
};

const buildWatchlist = (quotes) => {
  let list = $('#watchlist');
  list.empty();

  list.append(
    watchlist({
      quoteCell,
      quotes: Object.values(quotes),
    })
  );

  // list.on('click', function(e) {
  //   e.preventDefault();
  //   alert('TODO! ', assets);
  // });
};

export const createWatchlist = () => {
  updateQuotes({});
};
