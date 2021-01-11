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
  window.apiKeys = {};

  if (!chrome.storage) {
    // Testing
    window.avKey = 'QW2CN9WOPTMGPWFI';
  } else {
    loadOptions();
    console.log('window.apiKeys: ', window.apiKeys);
  }
  window.av = new AvAPI(window.apiKeys['avKey']);

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

const any = (arr, fn = Boolean) => arr.some(fn);
const loadOptions = async () => {
  chrome.storage.sync.get(
    ['avKey', 'twitterKey', 'twitterSecretKey'],
    (res) => {
      for (const [key, val] of Object.entries(res)) {
        if (!val.length) {
          console.log(`Failed to load API apiKeys: ${key}`);
          createSetupButton();
        }
      }
      window.apiKeys = res;
      console.log('Loaded API apiKeys: ', res);
      // initialize APIs
      window.av = new AvAPI(window.apiKeys['avKey']);
    }
  );
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
    text: 'Click to setup API apiKeys',
    click: openOptionsPage,
  })
    .wrap('<div id="options"></div>')
    .closest('div');
  $('#root').append(optionsButton);
};

document.body.className = 'theme-open-up';
