import modalContainer from './modal/modal.html';
import './modal/modal.scss';

chrome.runtime.onMessage.addListener((request) => {
  console.log('Request: ', request);
  if (request.type === 'popup-modal') {
    toggleModal();
  }
});

const toggleModal = () => {
  let modal = document.querySelector('.content-modal');

  if (modal) {
    modal.hasAttribute('open') ? modal.close() : modal.show();
  } else {
    modal = document.createElement('dialog');
    modal.className = 'content-modal';
    modal.innerHTML = modalContainer;
    document.body.appendChild(modal);
    modal.showModal();

    const iframe = document.getElementById('popup-content');
    iframe.src = chrome.extension.getURL('../build/index.html');
    iframe.frameBorder = 0;

    modal.querySelector('button').addEventListener('click', () => {
      modal.close();
    });
  }
};
