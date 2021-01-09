import $ from 'jquery';

import AvAPI from '../stocks/av_api';

// import Icon from '../../icons/stonks.png';
import './css/main.scss';

$(document).ready(function () {
  window.AvAPI = AvAPI;

  $('#search-form').on('submit', function () {
    const search = $('.search').val();
    console.log('searching for: ', search);
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
