import popupContainer from './popup_container.html';
import CloseIcon from '../icons/close.svg';
import '../css/popup.scss';

// Listen for messages from the background page
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(
    sender.tab
      ? 'from content script: ' + sender.tab.url
      : 'from extension: ' + sender
  );
  console.log('Request: ', request);

  if (request.type === 'popup') {
    togglePopup();
    sendResponse({ popup: true });
  }
});

const togglePopup = () => {
  let popup = document.querySelector('.popup-container');
  if (popup) {
    document.body.removeChild(popup);
  } else {
    popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = `
<iframe id="popup-content"></iframe>
<div class="cancel-container">
  <img src=${CloseIcon} class="cancel-button-icon">
</div>
`;
    console.log('html:', popup.innerHTML);
    document.body.appendChild(popup);

    const iframe = document.getElementById('popup-content');
    iframe.src = chrome.extension.getURL('../build/index.html');
    iframe.frameBorder = 0;

    popup.querySelector('.cancel-container').addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  }
};
