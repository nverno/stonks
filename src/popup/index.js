import $ from 'jquery';
import _ from 'lodash';
import * as d3 from 'd3';
import CanvasJS from '../../lib/canvasjs.stock.min.js';

import AvAPI from '../stocks/av_api';
import TwitterAPI from '../tweets/api';
import { createWatchlist } from '../watchlist/watchlist';
import { createTweetChart } from '../tweets/chart';
import { handleSearch } from '../search/search';
import { createStockChart } from '../chart/stock_chart';
import { defaultSettings, loadSettings } from '../settings';
import * as quote from '../stocks/quote';
import * as util from '../tweets/util';
import * as chart from '../tweets/chart';

// import Icon from '../../icons/stonks.png';
import './css/main.scss';

$(document).ready(function () {
  // BEGIN testing
  window.$ = $;
  window.AvAPI = AvAPI;
  window.TwitterAPI = TwitterAPI;
  window.util = util;
  window.chart = chart;
  window._ = _;
  window.d3 = d3;
  window.quote = quote;
  // END testing

  window.tweets = new TwitterAPI(); // twitter API instance
  window.av = null; // alphavantage API instance
  loadSettings(loadingCallback);

  // header section
  $('.cancel-button').on('click', cancelFrame);
  $('#search-form').on('submit', handleSearch);

  // stock chart
  $('.current-symbol').change(function () {
    const symbol = $('.current-symbol').attr('value');
    if (symbol.length) {
      createStockChart(symbol);
      createTweetChart(symbol);
    } else {
      // XXX: clear page?
      console.log('current-symbol reset');
    }
  });

  createWatchlist(window.stonks.tickers);

  // socials
});

function cancelFrame(e) {
  e.preventDefault();

  // Send message to content script to close the popup
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'close' }, function (response) {
      console.log(response);
    });
  });
}

const loadingCallback = (settings) => {
  // XXX: currently none are required!
  // for (const [key, val] of Object.entries(items)) {
  //   if (!val.length) {
  //     console.warn(`Failed to load API stonks: ${key}`);
  //     createSetupButton();
  //   }
  // }
  window.stonks = settings || {};

  // initialize APIs
  if (!chrome.storage) {
    // Testing: alphavantage API thinks a key with string 'null' is valid, lol
    window.av = new AvAPI({ avKey: null });
    if (window.stonks.tickers)
      window.stonks.tickers = window.stonks.tickers.split(',');
  } else {
    window.av = new AvAPI(window.stonks);
  }

  // defaults
  if (!window.stonks['tickers'])
    window.stonks['tickers'] = defaultSettings.tickers;
};

const openOptionsPage = () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options/options.html'));
  }
};

const createSetupButton = () => {
  $('#root').empty();
  const optionsButton = $('<button/>', {
    text: 'Click to setup API keys/options',
    click: openOptionsPage,
  })
    .wrap('<div id="options"></div>')
    .closest('div');
  $('#root').append(optionsButton);
};

document.body.className = 'theme-open-up';
