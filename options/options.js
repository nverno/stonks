// save options to chrome storage
const defaultSettings = {
  tickers: ['TSLA', 'FTOC', 'AMC', 'GME'],
  updateInterval: 10,
};

const options = [
  'avKey',
  'twitterConsumerKey',
  'twitterConsumerSecretKey',
  'twitterBearerToken',
  'twitterAccessToken',
  'twitterAccessTokenSecret',
  'chartType',
  'tickers',
  'updateInterval',
];

function save_options() {
  let keys = {};
  options.forEach((key) => {
    const ele = document.getElementById(key);
    keys[key] = ele.value || ele.checked;
  });

  chrome.storage.sync.set(keys, function () {
    // let user know options were saved
    let status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get(options, function (items) {
    for (const [key, val] of Object.entries({ ...defaultSettings, ...items })) {
      const ele = document.getElementById(key);
      // FIXME: clean this up
      if (key === 'tickers' && !val) ele.value = defaultSettings.tickers;
      if (key === 'updateInterval' && (!val || val < 5))
        ele.value = defaultSettings.updateInterval;
      else if (typeof ele['value'] !== 'undefined') ele.value = val;
      else ele.checked = val;
    }
    console.log('items: ', items);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
