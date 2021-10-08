/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = 1237; //1237 - 1650\n\n  canvas.height = 750; // 750 - 1000\n\n  var cardSlots = [];\n  canvas.addEventListener('click', function (event) {\n    var x = event.pageX - 660; // off by 660 pixels\n\n    var y = event.pageY - 173; // off by 173 pixels\n\n    console.log(x, y);\n  });\n\n  function placeImages(img, x, y, num, dist, times, src) {\n    for (var i = 0; i < times; i++) {\n      img.addEventListener('load', function () {\n        ctx.drawImage(img, x, y, img.width / num, img.height / num);\n        x += dist;\n      });\n      img.src = src;\n    }\n  }\n\n  var placeHolder = new Image();\n  placeImages(placeHolder, 290, 350, 4.5, 170, 5, './src/img/alien.png');\n  var cardBack = new Image();\n  placeImages(cardBack, 45, 350, 4.5, 20, 3, './src/img/back.png');\n  var button = new Image();\n  placeImages(button, 300, 595, 2, 515, 2, './src/img/button.png');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkLWJyYXdsLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkU2xvdHMiLCJldmVudCIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUltYWdlcyIsImltZyIsIm51bSIsImRpc3QiLCJ0aW1lcyIsInNyYyIsImkiLCJkcmF3SW1hZ2UiLCJwbGFjZUhvbGRlciIsIkltYWdlIiwiY2FyZEJhY2siLCJidXR0b24iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFILEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWYsQ0FKc0QsQ0FJakM7O0FBQ3JCSixFQUFBQSxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsR0FBaEIsQ0FMc0QsQ0FLakM7O0FBRXJCLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUVBTixFQUFBQSxNQUFNLENBQUNELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNRLEtBQVQsRUFBZTtBQUM1QyxRQUFJQyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixHQUFjLEdBQXRCLENBRDRDLENBQ2xCOztBQUMxQixRQUFJQyxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksS0FBTixHQUFjLEdBQXRCLENBRjRDLENBRWxCOztBQUMxQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVosRUFBY0UsQ0FBZDtBQUNILEdBSkQ7O0FBTUEsV0FBU0ksV0FBVCxDQUFxQkMsR0FBckIsRUFBMEJQLENBQTFCLEVBQTZCRSxDQUE3QixFQUFnQ00sR0FBaEMsRUFBcUNDLElBQXJDLEVBQTJDQyxLQUEzQyxFQUFrREMsR0FBbEQsRUFBc0Q7QUFDbEQsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixLQUFwQixFQUEyQkUsQ0FBQyxFQUE1QixFQUFnQztBQUM1QkwsTUFBQUEsR0FBRyxDQUFDaEIsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsWUFBWTtBQUNyQ0csUUFBQUEsR0FBRyxDQUFDbUIsU0FBSixDQUFjTixHQUFkLEVBQW1CUCxDQUFuQixFQUFzQkUsQ0FBdEIsRUFBeUJLLEdBQUcsQ0FBQ1gsS0FBSixHQUFZWSxHQUFyQyxFQUEwQ0QsR0FBRyxDQUFDVixNQUFKLEdBQWFXLEdBQXZEO0FBQ0FSLFFBQUFBLENBQUMsSUFBSVMsSUFBTDtBQUNILE9BSEQ7QUFJQUYsTUFBQUEsR0FBRyxDQUFDSSxHQUFKLEdBQVVBLEdBQVY7QUFFSDtBQUNKOztBQUNELE1BQU1HLFdBQVcsR0FBRyxJQUFJQyxLQUFKLEVBQXBCO0FBQ0FULEVBQUFBLFdBQVcsQ0FBQ1EsV0FBRCxFQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUMscUJBQXJDLENBQVg7QUFFQSxNQUFNRSxRQUFRLEdBQUcsSUFBSUQsS0FBSixFQUFqQjtBQUNBVCxFQUFBQSxXQUFXLENBQUNVLFFBQUQsRUFBVyxFQUFYLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixFQUF6QixFQUE2QixDQUE3QixFQUFnQyxvQkFBaEMsQ0FBWDtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRixLQUFKLEVBQWY7QUFDQVQsRUFBQUEsV0FBVyxDQUFDVyxNQUFELEVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsRUFBOEIsc0JBQTlCLENBQVg7QUFDSCxDQWpDRCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjYW52YXMud2lkdGggPSAxMjM3OyAvLzEyMzcgLSAxNjUwXG4gICAgY2FudmFzLmhlaWdodCA9IDc1MDsgLy8gNzUwIC0gMTAwMFxuXG4gICAgbGV0IGNhcmRTbG90cyA9IFtdO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgeCA9IGV2ZW50LnBhZ2VYIC0gNjYwIC8vIG9mZiBieSA2NjAgcGl4ZWxzXG4gICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSAxNzMgLy8gb2ZmIGJ5IDE3MyBwaXhlbHNcbiAgICAgICAgY29uc29sZS5sb2coeCx5KVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBwbGFjZUltYWdlcyhpbWcsIHgsIHksIG51bSwgZGlzdCwgdGltZXMsIHNyYyl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkrKykge1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIGltZy53aWR0aCAvIG51bSwgaW1nLmhlaWdodCAvIG51bSk7XG4gICAgICAgICAgICAgICAgeCArPSBkaXN0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyY1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IG5ldyBJbWFnZSgpO1xuICAgIHBsYWNlSW1hZ2VzKHBsYWNlSG9sZGVyLCAyOTAsIDM1MCwgNC41LCAxNzAsIDUsICcuL3NyYy9pbWcvYWxpZW4ucG5nJyk7XG5cbiAgICBjb25zdCBjYXJkQmFjayA9IG5ldyBJbWFnZSgpO1xuICAgIHBsYWNlSW1hZ2VzKGNhcmRCYWNrLCA0NSwgMzUwLCA0LjUsIDIwLCAzLCAnLi9zcmMvaW1nL2JhY2sucG5nJylcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwbGFjZUltYWdlcyhidXR0b24sIDMwMCwgNTk1LCAyLCA1MTUsIDIsICcuL3NyYy9pbWcvYnV0dG9uLnBuZycpXG59KTsiXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkLWJyYXdsLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;