export const defaultSettings = {
  tickers: ['TSLA', 'FTOC', 'AMC', 'GME'],
  updateInterval: 5,
  avKey: null,
  chartType: 'd3',
};

export const stonkOptions = [
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
export const saveSettings = (settings) => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.set(settings, function () {});
  } else {
    localStorage.setItem('stonks', JSON.stringify(settings));
  }
};

export const loadSettings = (callback) => {
  if (chrome && chrome.storage) {
    chrome.storage.sync.get(stonkOptions, function (items) {
      callback(items);
    });
  } else {
    const opts = localStorage.getItem('stonks');
    callback(opts);
  }
};

const uniqueElements = (arr) => [...new Set(arr)];
export const setOption = (key, val) => {
  // Don't add duplicate tickers
  if (key === 'tickers') {
    let tickers = window.stonks[key].concat(val.split(','));
    val = uniqueElements(tickers);
  }

  if (chrome && chrome.storage) {
    chrome.storage.sync.set({ key: val }, function () {
      console.log(`Set ${key} = ${val}`);
    });
  } else {
    window.stonks[key] = val;
    localStorage.setItem('stonks', JSON.stringify(window.stonks));
  }
};

export const getOption = (key) => {
  return typeof window.stonks === 'undefined'
    ? defaultSettings[key]
    : window.stonks[key];
};
