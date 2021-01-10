import $ from 'jquery';
import CanvasJS from '../../lib/canvasjs.stock.min.js';

import AvAPI from '../stocks/av_api';
import { handleSearch } from '../search/search';
import { createChart } from '../stocks/stock_chart';

// import Icon from '../../icons/stonks.png';
import './css/main.scss';

$(document).ready(function () {
  // BEGIN testing
  window.$ = $;
  // END testing
  window.AvAPI = AvAPI;
  window.avAPIkey = null;
  // FIXME: prompt for API key if doesn't exist
  // chrome.storage.sync.set({ avAPIkey: 'QW2CN9WOPTMGPWFI'});
  if (!chrome.storage) {
    window.avAPIkey = 'QW2CN9WOPTMGPWFI';
  } else {
    chrome.storage.sync.get('avAPIkey', function (result) {
      console.log('fetched av API key: ', result);
      window.avAPIkey = result['avAPIkey'];
    });
  }
  window.av = new AvAPI(window.avAPIkey);

  // header section
  $('.cancel-button').on('click', cancelFrame);
  $('#search-form').on('submit', handleSearch);

  // stock chart
  $('.current-symbol').change(function () {
    const symbol = $('.current-symbol').attr('value');
    if (symbol.length) {
      createChart(symbol);
    } else {
      console.log('current-symbol reset');
    }
  });

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

document.body.className = 'theme-open-up';
