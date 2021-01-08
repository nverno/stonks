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
});

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

module.exports = {
  isIframe: isIframe
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9ua3MvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9zdG9ua3MvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9zdG9ua3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N0b25rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RvbmtzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjaHJvbWUiLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJhZGRMaXN0ZW5lciIsImNvbnRleHRNZW51cyIsImNyZWF0ZSIsImlkIiwidGl0bGUiLCJjb250ZXh0cyIsImNvbW1hbmRzIiwib25Db21tYW5kIiwiY29tbWFuZCIsInRhYnMiLCJ1cGRhdGUiLCJ0YWIiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiYnJvd3NlckFjdGlvbiIsIm9uQ2xpY2tlZCIsImlzSWZyYW1lIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93Iiwic2VuZE1lc3NhZ2UiLCJ0eXBlIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJzZWxmIiwidG9wIiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsV0FBZixDQUEyQkMsV0FBM0IsQ0FBdUMsWUFBWTtBQUNqREgsUUFBTSxDQUFDSSxZQUFQLENBQW9CQyxNQUFwQixDQUEyQjtBQUN6QkMsTUFBRSxFQUFFLG1CQURxQjtBQUV6QkMsU0FBSyxFQUFFLFFBRmtCO0FBR3pCQyxZQUFRLEVBQUUsQ0FBQyxXQUFEO0FBSGUsR0FBM0IsRUFEaUQsQ0FPakQ7QUFDQTtBQUNBO0FBQ0QsQ0FWRDtBQVlBUixNQUFNLENBQUNTLFFBQVAsQ0FBZ0JDLFNBQWhCLENBQTBCUCxXQUExQixDQUFzQyxVQUFVUSxPQUFWLEVBQW1CO0FBQ3ZEWCxRQUFNLENBQUNZLElBQVAsQ0FBWUMsTUFBWixDQUFtQixFQUFuQixFQUF1QixVQUFVQyxHQUFWLEVBQWU7QUFDcEMsUUFBSUgsT0FBTyxLQUFLLGFBQWhCLEVBQStCSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixHQUFHLENBQUNHLEdBQWpDO0FBQ2hDLEdBRkQ7QUFHRCxDQUpEO0FBTUFqQixNQUFNLENBQUNrQixhQUFQLENBQXFCQyxTQUFyQixDQUErQmhCLFdBQS9CLENBQTJDLFVBQVVXLEdBQVYsRUFBZTtBQUN4RCxNQUFJLENBQUNNLCtDQUFRLEVBQWIsRUFBaUI7QUFDZnBCLFVBQU0sQ0FBQ1ksSUFBUCxDQUFZUyxLQUFaLENBQWtCO0FBQUVDLFlBQU0sRUFBRSxJQUFWO0FBQWdCQyxtQkFBYSxFQUFFO0FBQS9CLEtBQWxCLEVBQXlELFVBQUNYLElBQUQsRUFBVTtBQUNqRVosWUFBTSxDQUFDWSxJQUFQLENBQVlZLFdBQVosQ0FDRVosSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTixFQURWLEVBRUU7QUFBRW1CLFlBQUksRUFBRTtBQUFSLE9BRkYsRUFHRSxVQUFVQyxRQUFWLEVBQW9CO0FBQ2xCWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsUUFBWjtBQUNELE9BTEg7QUFPRCxLQVJEO0FBU0Q7QUFDRixDQVpELEU7Ozs7Ozs7Ozs7QUNwQkEsSUFBTU4sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFJO0FBQ0YsV0FBT08sTUFBTSxDQUFDQyxJQUFQLEtBQWdCRCxNQUFNLENBQUNFLEdBQTlCO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FORDs7QUFRQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZaLFVBQVEsRUFBUkE7QUFEZSxDQUFqQixDOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzSWZyYW1lIH0gZnJvbSAnLi91dGlsJztcblxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgaWQ6ICdzdG9ua3NDb250ZXh0TWVudScsXG4gICAgdGl0bGU6ICdTdG9ua3MnLFxuICAgIGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddLFxuICB9KTtcblxuICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGNvbG9yOiAnIzNhYTc1Nyd9LCBmdW5jdGlvbigpIHtcbiAgLy8gICBjb25zb2xlLmxvZygnVGhlIGNvbG9yIGlzIGdyZWVuJyk7XG4gIC8vIH0pO1xufSk7XG5cbmNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgY2hyb21lLnRhYnMudXBkYXRlKHt9LCBmdW5jdGlvbiAodGFiKSB7XG4gICAgaWYgKGNvbW1hbmQgPT09ICdzZWFyY2gtZHdpbScpIGNvbnNvbGUubG9nKCdTZWFyY2hpbmcgaW4gJywgdGFiLnVybCk7XG4gIH0pO1xufSk7XG5cbmNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAodGFiKSB7XG4gIGlmICghaXNJZnJhbWUoKSkge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShcbiAgICAgICAgdGFic1swXS5pZCxcbiAgICAgICAgeyB0eXBlOiAncG9wdXAnIH0sXG4gICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCJjb25zdCBpc0lmcmFtZSA9ICgpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzSWZyYW1lLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9iYWNrZ3JvdW5kLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==