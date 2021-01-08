import $ from 'jquery';
const { test } = require('./test');

import Icon from '../../icons/stonks.png';
import '../css/main.scss';

$(document).ready(function () {
  $('#search-form').on('submit', function () {
    const search = $('.search').val();
    console.log('searching for: ', search);
  });
});

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = ['Hello', 'stonks'].join(' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me';
  btn.onclick = test;

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}

test();

document.body.className = 'theme-open-up';
document.body.appendChild(component());
