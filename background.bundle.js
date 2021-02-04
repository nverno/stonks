/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'stonksContextMenu',
    title: 'Stonks',
    contexts: ['selection']
  }); // chrome.storage.sync.set({ color: '#3aa757'}, function() {
  //   console.log('The color is green');
  // });
});
chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.update({}, function (tab) {
    if (command === 'search-dwim') console.log('Searching in ', tab.url);
  });
});
chrome.browserAction.onClicked.addListener(function (tab) {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_0__.isIframe)()) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: 'popup'
      }, function (response) {
        console.log(response);
      });
    });
  }
}); // chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
//   console.log('External: ', request);
// }
// );

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIframe": () => /* binding */ isIframe,
/* harmony export */   "mapKeys": () => /* binding */ mapKeys,
/* harmony export */   "fmt": () => /* binding */ fmt,
/* harmony export */   "fmtPrice": () => /* binding */ fmtPrice,
/* harmony export */   "fmtPercent": () => /* binding */ fmtPercent,
/* harmony export */   "fmtClass": () => /* binding */ fmtClass
/* harmony export */ });
var isIframe = function isIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
var mapKeys = function mapKeys(obj, fn) {
  return Object.keys(obj).reduce(function (acc, k) {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
};
var fmt = function fmt(n) {
  return n.toLocaleString('en', {
    maximumFractionDigits: 2
  });
};
var fmtPrice = function fmtPrice(price) {
  return !price && '—' || price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price);
};
var fmtPercent = function fmtPercent(price) {
  return price ? fmt(price) + '%' : '—';
};
var fmtClass = function fmtClass(price) {
  return price && price > 0 ? 'positive' : 'negative';
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/background.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9ua3MvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9zdG9ua3MvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9zdG9ua3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdG9ua3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdG9ua3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdG9ua3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNocm9tZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiY29udGV4dE1lbnVzIiwiY3JlYXRlIiwiaWQiLCJ0aXRsZSIsImNvbnRleHRzIiwiY29tbWFuZHMiLCJvbkNvbW1hbmQiLCJjb21tYW5kIiwidGFicyIsInVwZGF0ZSIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJicm93c2VyQWN0aW9uIiwib25DbGlja2VkIiwiaXNJZnJhbWUiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJyZXNwb25zZSIsIndpbmRvdyIsInNlbGYiLCJ0b3AiLCJlIiwibWFwS2V5cyIsIm9iaiIsImZuIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjYyIsImsiLCJmbXQiLCJuIiwidG9Mb2NhbGVTdHJpbmciLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmbXRQcmljZSIsInByaWNlIiwiTWF0aCIsImFicyIsImZtdFBlcmNlbnQiLCJmbXRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFdBQWYsQ0FBMkJDLFdBQTNCLENBQXVD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UUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0osS0FBRDtBQUFBLFNBQ3RCQSxLQUFLLElBQUlBLEtBQUssR0FBRyxDQUFqQixHQUFxQixVQUFyQixHQUFrQyxVQURaO0FBQUEsQ0FBakIsQzs7Ozs7O1VDeEJQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzSWZyYW1lIH0gZnJvbSAnLi91dGlsJztcblxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgaWQ6ICdzdG9ua3NDb250ZXh0TWVudScsXG4gICAgdGl0bGU6ICdTdG9ua3MnLFxuICAgIGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddLFxuICB9KTtcblxuICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGNvbG9yOiAnIzNhYTc1Nyd9LCBmdW5jdGlvbigpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnVGhlIGNvbG9yIGlzIGdyZWVuJyk7XG4gIC8vIH0pO1xufSk7XG5cbmNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgY2hyb21lLnRhYnMudXBkYXRlKHt9LCBmdW5jdGlvbiAodGFiKSB7XG4gICAgaWYgKGNvbW1hbmQgPT09ICdzZWFyY2gtZHdpbScpIGNvbnNvbGUubG9nKCdTZWFyY2hpbmcgaW4gJywgdGFiLnVybCk7XG4gIH0pO1xufSk7XG5cbmNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAodGFiKSB7XG4gIGlmICghaXNJZnJhbWUoKSkge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShcbiAgICAgICAgdGFic1swXS5pZCxcbiAgICAgICAgeyB0eXBlOiAncG9wdXAnIH0sXG4gICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnRXh0ZXJuYWw6ICcsIHJlcXVlc3QpO1xuLy8gfVxuLy8gKTtcbiIsImV4cG9ydCBjb25zdCBpc0lmcmFtZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1hcEtleXMgPSAob2JqLCBmbikgPT5cbiAgT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywgaykgPT4ge1xuICAgIGFjY1tmbihvYmpba10sIGssIG9iaildID0gb2JqW2tdO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuZXhwb3J0IGNvbnN0IGZtdCA9IChuKSA9PlxuICBuLnRvTG9jYWxlU3RyaW5nKCdlbicsIHtcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZm10UHJpY2UgPSAocHJpY2UpID0+XG4gICghcHJpY2UgJiYgJ+KAlCcpIHx8IHByaWNlIDwgMCA/ICctJCcgKyBmbXQoTWF0aC5hYnMocHJpY2UpKSA6ICckJyArIGZtdChwcmljZSk7XG5cbmV4cG9ydCBjb25zdCBmbXRQZXJjZW50ID0gKHByaWNlKSA9PiAocHJpY2UgPyBmbXQocHJpY2UpICsgJyUnIDogJ+KAlCcpO1xuXG5leHBvcnQgY29uc3QgZm10Q2xhc3MgPSAocHJpY2UpID0+XG4gIHByaWNlICYmIHByaWNlID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYmFja2dyb3VuZC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=