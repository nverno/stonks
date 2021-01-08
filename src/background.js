import { isIframe } from './util';

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'stonksContextMenu',
    title: 'Stonks',
    contexts: ['selection'],
  });

  // chrome.storage.sync.set({ color: '#3aa757'}, function() {
  //   console.log('The color is green');
  // });
});

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.update({}, function (tab) {
    if (command === 'search-dwim') console.log('Searching in ', tab.url);
  });
});

chrome.browserAction.onClicked.addListener(function (tab) {
  if (!isIframe()) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { type: 'popup' },
        function (response) {
          console.log(response);
        }
      );
    });
  }
});
