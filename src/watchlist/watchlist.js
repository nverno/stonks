/**
 * Watchlist containing quotes
 */

import $ from 'jquery';
import watchlist from './watchlist.ejs';
import quoteCell from './quote_cell.ejs';
import quoteForm from './quote_form.ejs';
import { fetchQuotes } from '../stocks/quote';
import { getOption, setOption } from '../settings';
import './watchlist.scss';
var timeout;

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
    // console.log('Updating quotes: ', quotes);
    buildWatchlist(quotes);
    setTimeout(removeUpdates, 1000);
  }

  timeout = setTimeout(() => {
    updateQuotes(quotes);
  }, interval);
};

const buildWatchlist = (quotes) => {
  const sortBy = getOption('sortBy');
  let sorted = Object.values(quotes);
  sorted.sort((a, b) => b[sortBy] - a[sortBy]); // descending

  let list = $('#watchlist');
  list.empty();

  list.append(
    watchlist({
      quoteCell,
      quotes: sorted,
    })
  );
};

// Handle adding quotes to list
const uniqueElements = (arr) => [...new Set(arr)];

const submitQuote = (e, kind) => {
  e.preventDefault();

  const currentTickers = getOption('tickers');
  let res = $('#symbols').val().toUpperCase().replace(/ /g, '').split(',');

  // Don't add duplicate tickers
  if (kind === 'add') {
    res = uniqueElements(currentTickers.concat(res));
  } else {
    res = currentTickers.filter((ele) => !res.includes(ele));
  }

  setOption('tickers', res);
  $('#quote-form').remove();
  clearTimeout(timeout);
  updateQuotes({});
};

const toggleQuoteForm = (e, kind) => {
  e.preventDefault();
  let form = $('#quote-form');

  if (form.length) {
    form.remove();
  } else {
    const placeholder =
      'Enter comma-separated symbols to ' + kind + ', eg. TSLA,APPL,...';
    let div = $('#new-quote');
    form = $(quoteForm({ kind, placeholder }));
    form.submit((e) => submitQuote(e, kind));
    div.append(form);
  }
};

export const createWatchlist = () => {
  updateQuotes({});

  $('#new-quote-button').on('click', (e) => toggleQuoteForm(e, 'add'));
  $('#remove-quote-button').on('click', (e) => toggleQuoteForm(e, 'remove'));
};
