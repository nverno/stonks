/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);

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
/***/ ((module) => {

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

module.exports = {
  isIframe: isIframe,
  mapKeys: mapKeys
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9ua3MvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9zdG9ua3MvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9zdG9ua3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N0b25rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImNvbnRleHRNZW51cyIsImNyZWF0ZSIsImlkIiwidGl0bGUiLCJjb250ZXh0cyIsImNvbW1hbmRzIiwib25Db21tYW5kIiwiY29tbWFuZCIsInRhYnMiLCJ1cGRhdGUiLCJ0YWIiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiYnJvd3NlckFjdGlvbiIsIm9uQ2xpY2tlZCIsImlzSWZyYW1lIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJzZWxmIiwidG9wIiwiZSIsIm1hcEtleXMiLCJvYmoiLCJmbiIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2MiLCJrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCQyxXQUEzQixDQUF1QyxZQUFZO0FBQ2pESCxRQUFNLENBQUNJLFlBQVAsQ0FBb0JDLE1BQXBCLENBQTJCO0FBQ3pCQyxNQUFFLEVBQUUsbUJBRHFCO0FBRXpCQyxTQUFLLEVBQUUsUUFGa0I7QUFHekJDLFlBQVEsRUFBRSxDQUFDLFdBQUQ7QUFIZSxHQUEzQixFQURpRCxDQU9qRDtBQUNBO0FBQ0E7QUFDRCxDQVZEO0FBWUFSLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsU0FBaEIsQ0FBMEJQLFdBQTFCLENBQXNDLFVBQVVRLE9BQVYsRUFBbUI7QUFDdkRYLFFBQU0sQ0FBQ1ksSUFBUCxDQUFZQyxNQUFaLENBQW1CLEVBQW5CLEVBQXVCLFVBQVVDLEdBQVYsRUFBZTtBQUNwQyxRQUFJSCxPQUFPLEtBQUssYUFBaEIsRUFBK0JJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLEdBQUcsQ0FBQ0csR0FBakM7QUFDaEMsR0FGRDtBQUdELENBSkQ7QUFNQWpCLE1BQU0sQ0FBQ2tCLGFBQVAsQ0FBcUJDLFNBQXJCLENBQStCaEIsV0FBL0IsQ0FBMkMsVUFBVVcsR0FBVixFQUFlO0FBQ3hELE1BQUksQ0FBQ00sK0NBQVEsRUFBYixFQUFpQjtBQUNmcEIsVUFBTSxDQUFDWSxJQUFQLENBQVlTLEtBQVosQ0FBa0I7QUFBRUMsWUFBTSxFQUFFLElBQVY7QUFBZ0JDLG1CQUFhLEVBQUU7QUFBL0IsS0FBbEIsRUFBeUQsVUFBQ1gsSUFBRCxFQUFVO0FBQ2pFWixZQUFNLENBQUNZLElBQVAsQ0FBWVksV0FBWixDQUNFWixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFOLEVBRFYsRUFFRTtBQUFFbUIsWUFBSSxFQUFFO0FBQVIsT0FGRixFQUdFLFVBQVVDLFFBQVYsRUFBb0I7QUFDbEJYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxRQUFaO0FBQ0QsT0FMSDtBQU9ELEtBUkQ7QUFTRDtBQUNGLENBWkQsRSxDQWNBO0FBQ0E7QUFDQTtBQUNBLEs7Ozs7Ozs7Ozs7QUNyQ0EsSUFBTU4sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFJO0FBQ0YsV0FBT08sTUFBTSxDQUFDQyxJQUFQLEtBQWdCRCxNQUFNLENBQUNFLEdBQTlCO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FORDs7QUFRQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1DLEVBQU47QUFBQSxTQUNkQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksTUFBakIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDbENELE9BQUcsQ0FBQ0osRUFBRSxDQUFDRCxHQUFHLENBQUNNLENBQUQsQ0FBSixFQUFTQSxDQUFULEVBQVlOLEdBQVosQ0FBSCxDQUFILEdBQTBCQSxHQUFHLENBQUNNLENBQUQsQ0FBN0I7QUFDQSxXQUFPRCxHQUFQO0FBQ0QsR0FIRCxFQUdHLEVBSEgsQ0FEYztBQUFBLENBQWhCOztBQU1BRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnBCLFVBQVEsRUFBUkEsUUFEZTtBQUVmVyxTQUFPLEVBQVBBO0FBRmUsQ0FBakIsQzs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYmFja2dyb3VuZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0lmcmFtZSB9IGZyb20gJy4vdXRpbCc7XG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgIGlkOiAnc3RvbmtzQ29udGV4dE1lbnUnLFxuICAgIHRpdGxlOiAnU3RvbmtzJyxcbiAgICBjb250ZXh0czogWydzZWxlY3Rpb24nXSxcbiAgfSk7XG5cbiAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBjb2xvcjogJyMzYWE3NTcnfSwgZnVuY3Rpb24oKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ1RoZSBjb2xvciBpcyBncmVlbicpO1xuICAvLyB9KTtcbn0pO1xuXG5jaHJvbWUuY29tbWFuZHMub25Db21tYW5kLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gIGNocm9tZS50YWJzLnVwZGF0ZSh7fSwgZnVuY3Rpb24gKHRhYikge1xuICAgIGlmIChjb21tYW5kID09PSAnc2VhcmNoLWR3aW0nKSBjb25zb2xlLmxvZygnU2VhcmNoaW5nIGluICcsIHRhYi51cmwpO1xuICB9KTtcbn0pO1xuXG5jaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHRhYikge1xuICBpZiAoIWlzSWZyYW1lKCkpIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoXG4gICAgICAgIHRhYnNbMF0uaWQsXG4gICAgICAgIHsgdHlwZTogJ3BvcHVwJyB9LFxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbi8vICAgY29uc29sZS5sb2coJ0V4dGVybmFsOiAnLCByZXF1ZXN0KTtcbi8vIH1cbi8vICk7XG4iLCJjb25zdCBpc0lmcmFtZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgbWFwS2V5cyA9IChvYmosIGZuKSA9PlxuICBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgYWNjW2ZuKG9ialtrXSwgaywgb2JqKV0gPSBvYmpba107XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNJZnJhbWUsXG4gIG1hcEtleXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2JhY2tncm91bmQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9