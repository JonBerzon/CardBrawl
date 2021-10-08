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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = 1237; //1237 - 1650 - 1080 vs 1440 respectively\n\n  canvas.height = 750; // 750 - 1000 - 1080 vs 1440 respectively\n\n  var cardSlots = [];\n  canvas.addEventListener('click', function (event) {\n    var x = event.pageX - 660; // off by 660 pixels\n\n    var y = event.pageY - 173; // off by 173 pixels\n\n    console.log(x, y);\n  });\n\n  function placeImages(img, x, y, num, dist, times, src) {\n    for (var _i = 0; _i < times; _i++) {\n      img.addEventListener('load', function () {\n        ctx.drawImage(img, x, y, img.width / num, img.height / num);\n        x += dist;\n      });\n      img.src = src;\n    }\n  }\n\n  var placeHolder = new Image();\n  placeImages(placeHolder, 290, 350, 4.5, 170, 5, './src/img/alien.png');\n  var cardBack = new Image();\n  placeImages(cardBack, 45, 350, 4.5, 20, 3, './src/img/back.png');\n  var button = new Image();\n  placeImages(button, 300, 595, 2, 515, 2, './src/img/button.png');\n  var i = 1;\n\n  function attackAnimation() {\n    var intervalId = setInterval(function () {\n      if (i === 9) {\n        i = 1;\n        clearInterval(intervalId);\n      }\n\n      ctx.clearRect(327, 114, 400, 200);\n      var test = new Image();\n      placeImages(test, 400, 60, .4, 0, 1, \"./src/img/skel_attack/Sattack\".concat(i, \".png\"));\n      i += 1;\n    }, 50);\n  }\n\n  attackAnimation();\n  $.ajax(method = \"post\", url = \"kill myself\", data_type = \"boobs\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkLWJyYXdsLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkU2xvdHMiLCJldmVudCIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZUltYWdlcyIsImltZyIsIm51bSIsImRpc3QiLCJ0aW1lcyIsInNyYyIsImkiLCJkcmF3SW1hZ2UiLCJwbGFjZUhvbGRlciIsIkltYWdlIiwiY2FyZEJhY2siLCJidXR0b24iLCJhdHRhY2tBbmltYXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xlYXJSZWN0IiwidGVzdCIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YV90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBSCxFQUFBQSxNQUFNLENBQUNJLEtBQVAsR0FBZSxJQUFmLENBSnNELENBSWpDOztBQUNyQkosRUFBQUEsTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCLENBTHNELENBS2pDOztBQUVyQixNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFFQU4sRUFBQUEsTUFBTSxDQUFDRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTUSxLQUFULEVBQWU7QUFDNUMsUUFBSUMsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLEtBQU4sR0FBYyxHQUF0QixDQUQ0QyxDQUNsQjs7QUFDMUIsUUFBSUMsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLEtBQU4sR0FBYyxHQUF0QixDQUY0QyxDQUVsQjs7QUFDMUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFaLEVBQWNFLENBQWQ7QUFFSCxHQUxEOztBQU9BLFdBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCUCxDQUExQixFQUE2QkUsQ0FBN0IsRUFBZ0NNLEdBQWhDLEVBQXFDQyxJQUFyQyxFQUEyQ0MsS0FBM0MsRUFBa0RDLEdBQWxELEVBQXNEO0FBQ2xELFNBQUssSUFBSUMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0YsS0FBcEIsRUFBMkJFLEVBQUMsRUFBNUIsRUFBZ0M7QUFDNUJMLE1BQUFBLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQVk7QUFDckNHLFFBQUFBLEdBQUcsQ0FBQ21CLFNBQUosQ0FBY04sR0FBZCxFQUFtQlAsQ0FBbkIsRUFBc0JFLENBQXRCLEVBQXlCSyxHQUFHLENBQUNYLEtBQUosR0FBWVksR0FBckMsRUFBMENELEdBQUcsQ0FBQ1YsTUFBSixHQUFhVyxHQUF2RDtBQUNBUixRQUFBQSxDQUFDLElBQUlTLElBQUw7QUFDSCxPQUhEO0FBSUFGLE1BQUFBLEdBQUcsQ0FBQ0ksR0FBSixHQUFVQSxHQUFWO0FBQ0g7QUFDSjs7QUFDRCxNQUFNRyxXQUFXLEdBQUcsSUFBSUMsS0FBSixFQUFwQjtBQUNBVCxFQUFBQSxXQUFXLENBQUNRLFdBQUQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCLEVBQWtDLENBQWxDLEVBQXFDLHFCQUFyQyxDQUFYO0FBRUEsTUFBTUUsUUFBUSxHQUFHLElBQUlELEtBQUosRUFBakI7QUFDQVQsRUFBQUEsV0FBVyxDQUFDVSxRQUFELEVBQVcsRUFBWCxFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsRUFBekIsRUFBNkIsQ0FBN0IsRUFBZ0Msb0JBQWhDLENBQVg7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUYsS0FBSixFQUFmO0FBQ0FULEVBQUFBLFdBQVcsQ0FBQ1csTUFBRCxFQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCLENBQTNCLEVBQThCLHNCQUE5QixDQUFYO0FBQ0EsTUFBSUwsQ0FBQyxHQUFHLENBQVI7O0FBRUEsV0FBU00sZUFBVCxHQUEyQjtBQUN2QixRQUFJQyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFJO0FBQzdCLFVBQUlSLENBQUMsS0FBSyxDQUFWLEVBQVk7QUFDUkEsUUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDQVMsUUFBQUEsYUFBYSxDQUFDRixVQUFELENBQWI7QUFFSDs7QUFDRHpCLE1BQUFBLEdBQUcsQ0FBQzRCLFNBQUosQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLEdBQTdCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLElBQUlSLEtBQUosRUFBWDtBQUNKVCxNQUFBQSxXQUFXLENBQUNpQixJQUFELEVBQU8sR0FBUCxFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIseUNBQTBEWCxDQUExRCxVQUFYO0FBQ0lBLE1BQUFBLENBQUMsSUFBSSxDQUFMO0FBRUgsS0FYMkIsRUFXekIsRUFYeUIsQ0FBNUI7QUFZSDs7QUFFRE0sRUFBQUEsZUFBZTtBQUVmTSxFQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FDSUMsTUFBTSxHQUFHLE1BRGIsRUFFSUMsR0FBRyxHQUFHLGFBRlYsRUFHSUMsU0FBUyxHQUFHLE9BSGhCO0FBV0gsQ0EvREQiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY2FudmFzLndpZHRoID0gMTIzNzsgLy8xMjM3IC0gMTY1MCAtIDEwODAgdnMgMTQ0MCByZXNwZWN0aXZlbHlcbiAgICBjYW52YXMuaGVpZ2h0ID0gNzUwOyAvLyA3NTAgLSAxMDAwIC0gMTA4MCB2cyAxNDQwIHJlc3BlY3RpdmVseVxuXG4gICAgbGV0IGNhcmRTbG90cyA9IFtdO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgeCA9IGV2ZW50LnBhZ2VYIC0gNjYwIC8vIG9mZiBieSA2NjAgcGl4ZWxzXG4gICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSAxNzMgLy8gb2ZmIGJ5IDE3MyBwaXhlbHNcbiAgICAgICAgY29uc29sZS5sb2coeCx5KVxuXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHBsYWNlSW1hZ2VzKGltZywgeCwgeSwgbnVtLCBkaXN0LCB0aW1lcywgc3JjKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgaW1nLndpZHRoIC8gbnVtLCBpbWcuaGVpZ2h0IC8gbnVtKTtcbiAgICAgICAgICAgICAgICB4ICs9IGRpc3RcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlSG9sZGVyID0gbmV3IEltYWdlKCk7XG4gICAgcGxhY2VJbWFnZXMocGxhY2VIb2xkZXIsIDI5MCwgMzUwLCA0LjUsIDE3MCwgNSwgJy4vc3JjL2ltZy9hbGllbi5wbmcnKTtcblxuICAgIGNvbnN0IGNhcmRCYWNrID0gbmV3IEltYWdlKCk7XG4gICAgcGxhY2VJbWFnZXMoY2FyZEJhY2ssIDQ1LCAzNTAsIDQuNSwgMjAsIDMsICcuL3NyYy9pbWcvYmFjay5wbmcnKTtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwbGFjZUltYWdlcyhidXR0b24sIDMwMCwgNTk1LCAyLCA1MTUsIDIsICcuL3NyYy9pbWcvYnV0dG9uLnBuZycpO1xuICAgIGxldCBpID0gMVxuXG4gICAgZnVuY3Rpb24gYXR0YWNrQW5pbWF0aW9uKCkge1xuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICBpZiAoaSA9PT0gOSl7XG4gICAgICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgzMjcsIDExNCwgNDAwLCAyMDApO1xuICAgICAgICAgICAgbGV0IHRlc3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxhY2VJbWFnZXModGVzdCwgNDAwLCA2MCwgLjQsIDAsIDEsIGAuL3NyYy9pbWcvc2tlbF9hdHRhY2svU2F0dGFjayR7aX0ucG5nYCApXG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgfSwgNTApO1xuICAgIH1cblxuICAgIGF0dGFja0FuaW1hdGlvbigpXG5cbiAgICAkLmFqYXgoXG4gICAgICAgIG1ldGhvZCA9IFwicG9zdFwiLFxuICAgICAgICB1cmwgPSBcImtpbGwgbXlzZWxmXCIsXG4gICAgICAgIGRhdGFfdHlwZSA9IFwiYm9vYnNcIlxuICAgIClcblxuICAgIFxuXG4gICAgXG5cbiAgICBcbn0pOyJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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