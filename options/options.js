// save options to chrome storage
function save_options() {
  const avKey = document.getElementById('avKey').value;
  const twitterKey = document.getElementById('twitterKey').value;
  const twitterSecretKey = document.getElementById('twitterSecretKey').value;

  chrome.storage.sync.set(
    {
      avKey,
      twitterKey,
      twitterSecretKey,
    },
    function () {
      // let user know options were saved
      let status = document.getElementById('status');
      status.textContent = 'Options saved';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
}

function restore_options() {
  chrome.storage.sync.get(
    {
      avKey: '',
      twitterKey: '',
      twitterSecretKey: '',
    },
    function (items) {
      document.getElementById('avKey').value = items.avKey;
      document.getElementById('twitterKey').value = items.twitterKey;
      document.getElementById('twitterSecretKey').value =
        items.twitterSecretKey;
    }
  );
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
