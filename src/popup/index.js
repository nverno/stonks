import $ from 'jquery';

import AvAPI from '../stocks/av_api';

// import Icon from '../../icons/stonks.png';
import './css/main.scss';

$(document).ready(function () {
  window.AvAPI = AvAPI;
  window.avAPIkey = null;
  // FIXME: prompt for API key if doesn't exist
  // chrome.storage.sync.set({ avAPIkey: 'QW2CN9WOPTMGPWFI'});
  chrome.storage.sync.get('avAPIkey', function (result) {
    console.log('fetched av API key: ', result);
    window.avAPIkey = result['avAPIkey'];
    window.av = new AvAPI(window.avAPIkey);
  });

  $('#search-form').on('submit', async function (e) {
    e.preventDefault();
    const search = $('.search-input').val();
    $('.search-input').val('');
    console.log('searching for: ', search);
    let results = await av.search(search);
    console.log('Results: ', results);
  });

  $('.cancel-button').on('click', cancelFrame);
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
