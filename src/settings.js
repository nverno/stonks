const defaultSettings = {
  tickers: ['TSLA', 'FTOC', 'AMC', 'GME'],
  updateInterval: 5,
};

var chrome;
const stonkOptions = [
  'tickers',
  'avKey',
  'twitterConsumerKey',
  'twitterConsumerSecretKey',
  'twitterBearerToken',
  'twitterAccessToken',
  'twitterAccessTokenSecret',
  'chartType',
];

// If in chrome extension, sync, otherwise save to localStorage
const saveSettings = (settings) => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.set(settings, function () {});
  } else {
    localStorage.setItem('stonks', JSON.stringify(settings));
  }
};

const loadSettings = (callback) => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.get(stonkOptions, callback);
  } else {
    const opts = localStorage.getItem('stonks');
    callback(opts);
  }
};

const getOption = (key) => {
  return window.stonks[key];
};

module.exports = {
  getOption,
  saveSettings,
  loadSettings,
  stonkOptions,
  defaultSettings,
};
