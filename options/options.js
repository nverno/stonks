// save options to chrome storage
const options = [
  'avKey',
  'twitterConsumerKey',
  'twitterConsumerSecretKey',
  'twitterAccessToken',
  'twitterAccessTokenSecret',
];

function save_options() {
  let keys = {};
  options.forEach((key) => {
    keys[key] = document.getElementById(key).value;
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
    for (const [key, val] of Object.entries(items)) {
      document.getElementById(key).value = val;
    }
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
