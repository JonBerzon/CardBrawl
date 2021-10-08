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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = 1237; //1237 - 1650 - 1080 vs 1440 respectively\n\n  canvas.height = 750; // 750 - 1000 - 1080 vs 1440 respectively\n\n  var cardSlots = [];\n  canvas.addEventListener('click', function (event) {\n    var x = event.pageX - canvas.offsetLeft; // off by 660 pixels\n\n    var y = event.pageY - canvas.offsetTop; // off by 173 pixels\n\n    console.log(x, y);\n  });\n\n  function placeImages(img, x, y, num, dist, times, src) {\n    for (var _i = 0; _i < times; _i++) {\n      img.addEventListener('load', function () {\n        ctx.drawImage(img, x, y, img.width / num, img.height / num);\n        x += dist;\n      });\n      img.src = src;\n    }\n  }\n\n  var placeHolder = new Image();\n  placeImages(placeHolder, 290, 440, .6, 180, 5, './src/img/testCard.png');\n  var cardBack = new Image();\n  placeImages(cardBack, 45, 440, .6, 20, 3, './src/img/testCardBack.png'); // const button = new Image();\n  // placeImages(button, 300, 595, 2, 515, 2, './src/img/button.png');\n\n  var i = 1; // function attackAnimation() {\n  //     let intervalId = setInterval(()=>{\n  //         if (i === 9){\n  //             i = 1;\n  //             clearInterval(intervalId)\n  //         } \n  //         ctx.clearRect(327, 114, 400, 200);\n  //         let skeleton = new Image();\n  //         placeImages(skeleton, 400, 60, .4, 0, 1, `./src/img/skel_attack/Sattack${i}.png` )\n  //         i += 1;\n  //     }, 50);\n  // }\n  // attackAnimation()\n\n  var j = 1;\n  setInterval(function () {\n    if (j === 7) {\n      j = 1;\n    }\n\n    ctx.clearRect(427, 14, 600, 400);\n    var demon = new Image();\n    placeImages(demon, 600, 60, .4, 0, 1, \"./src/img/demon_idle/\".concat(j, \".png\"));\n    j += 1;\n  }, 70);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkLWJyYXdsLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkU2xvdHMiLCJldmVudCIsIngiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJ5IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwicGxhY2VJbWFnZXMiLCJpbWciLCJudW0iLCJkaXN0IiwidGltZXMiLCJzcmMiLCJpIiwiZHJhd0ltYWdlIiwicGxhY2VIb2xkZXIiLCJJbWFnZSIsImNhcmRCYWNrIiwiaiIsInNldEludGVydmFsIiwiY2xlYXJSZWN0IiwiZGVtb24iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUFILEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWYsQ0FKc0QsQ0FJakM7O0FBQ3JCSixFQUFBQSxNQUFNLENBQUNLLE1BQVAsR0FBZ0IsR0FBaEIsQ0FMc0QsQ0FLakM7O0FBRXJCLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUVBTixFQUFBQSxNQUFNLENBQUNELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNRLEtBQVQsRUFBZTtBQUM1QyxRQUFJQyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixHQUFjVCxNQUFNLENBQUNVLFVBQTdCLENBRDRDLENBQ0o7O0FBQ3hDLFFBQUlDLENBQUMsR0FBR0osS0FBSyxDQUFDSyxLQUFOLEdBQWNaLE1BQU0sQ0FBQ2EsU0FBN0IsQ0FGNEMsQ0FFSjs7QUFDeENDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxDQUFaLEVBQWNHLENBQWQ7QUFFSCxHQUxEOztBQU9BLFdBQVNLLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCVCxDQUExQixFQUE2QkcsQ0FBN0IsRUFBZ0NPLEdBQWhDLEVBQXFDQyxJQUFyQyxFQUEyQ0MsS0FBM0MsRUFBa0RDLEdBQWxELEVBQXNEO0FBQ2xELFNBQUssSUFBSUMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0YsS0FBcEIsRUFBMkJFLEVBQUMsRUFBNUIsRUFBZ0M7QUFDNUJMLE1BQUFBLEdBQUcsQ0FBQ2xCLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQVk7QUFDckNHLFFBQUFBLEdBQUcsQ0FBQ3FCLFNBQUosQ0FBY04sR0FBZCxFQUFtQlQsQ0FBbkIsRUFBc0JHLENBQXRCLEVBQXlCTSxHQUFHLENBQUNiLEtBQUosR0FBWWMsR0FBckMsRUFBMENELEdBQUcsQ0FBQ1osTUFBSixHQUFhYSxHQUF2RDtBQUNBVixRQUFBQSxDQUFDLElBQUlXLElBQUw7QUFDSCxPQUhEO0FBSUFGLE1BQUFBLEdBQUcsQ0FBQ0ksR0FBSixHQUFVQSxHQUFWO0FBQ0g7QUFDSjs7QUFDRCxNQUFNRyxXQUFXLEdBQUcsSUFBSUMsS0FBSixFQUFwQjtBQUNBVCxFQUFBQSxXQUFXLENBQUNRLFdBQUQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLEVBQTRCLEdBQTVCLEVBQWlDLENBQWpDLEVBQW9DLHdCQUFwQyxDQUFYO0FBRUEsTUFBTUUsUUFBUSxHQUFHLElBQUlELEtBQUosRUFBakI7QUFDQVQsRUFBQUEsV0FBVyxDQUFDVSxRQUFELEVBQVcsRUFBWCxFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsRUFBK0IsNEJBQS9CLENBQVgsQ0E3QnNELENBK0J0RDtBQUNBOztBQUNBLE1BQUlKLENBQUMsR0FBRyxDQUFSLENBakNzRCxDQW1DdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQ0EsTUFBSUssQ0FBQyxHQUFHLENBQVI7QUFDQUMsRUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDZCxRQUFJRCxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1RBLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0g7O0FBQ0R6QixJQUFBQSxHQUFHLENBQUMyQixTQUFKLENBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QixHQUF2QixFQUE0QixHQUE1QjtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJTCxLQUFKLEVBQVo7QUFDQVQsSUFBQUEsV0FBVyxDQUFDYyxLQUFELEVBQVEsR0FBUixFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsaUNBQW1ESCxDQUFuRCxVQUFYO0FBQ0FBLElBQUFBLENBQUMsSUFBSSxDQUFMO0FBRUgsR0FUVSxFQVNSLEVBVFEsQ0FBWDtBQWtCSCxDQXRFRCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjYW52YXMud2lkdGggPSAxMjM3OyAvLzEyMzcgLSAxNjUwIC0gMTA4MCB2cyAxNDQwIHJlc3BlY3RpdmVseVxuICAgIGNhbnZhcy5oZWlnaHQgPSA3NTA7IC8vIDc1MCAtIDEwMDAgLSAxMDgwIHZzIDE0NDAgcmVzcGVjdGl2ZWx5XG5cbiAgICBsZXQgY2FyZFNsb3RzID0gW107XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCB4ID0gZXZlbnQucGFnZVggLSBjYW52YXMub2Zmc2V0TGVmdCAvLyBvZmYgYnkgNjYwIHBpeGVsc1xuICAgICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZIC0gY2FudmFzLm9mZnNldFRvcCAgLy8gb2ZmIGJ5IDE3MyBwaXhlbHNcbiAgICAgICAgY29uc29sZS5sb2coeCx5KVxuXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHBsYWNlSW1hZ2VzKGltZywgeCwgeSwgbnVtLCBkaXN0LCB0aW1lcywgc3JjKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgaW1nLndpZHRoIC8gbnVtLCBpbWcuaGVpZ2h0IC8gbnVtKTtcbiAgICAgICAgICAgICAgICB4ICs9IGRpc3RcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlSG9sZGVyID0gbmV3IEltYWdlKCk7XG4gICAgcGxhY2VJbWFnZXMocGxhY2VIb2xkZXIsIDI5MCwgNDQwLCAuNiwgMTgwLCA1LCAnLi9zcmMvaW1nL3Rlc3RDYXJkLnBuZycpO1xuXG4gICAgY29uc3QgY2FyZEJhY2sgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbGFjZUltYWdlcyhjYXJkQmFjaywgNDUsIDQ0MCwgLjYsIDIwLCAzLCAnLi9zcmMvaW1nL3Rlc3RDYXJkQmFjay5wbmcnKTtcbiAgICBcbiAgICAvLyBjb25zdCBidXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBwbGFjZUltYWdlcyhidXR0b24sIDMwMCwgNTk1LCAyLCA1MTUsIDIsICcuL3NyYy9pbWcvYnV0dG9uLnBuZycpO1xuICAgIGxldCBpID0gMVxuXG4gICAgLy8gZnVuY3Rpb24gYXR0YWNrQW5pbWF0aW9uKCkge1xuICAgIC8vICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpPT57XG4gICAgLy8gICAgICAgICBpZiAoaSA9PT0gOSl7XG4gICAgLy8gICAgICAgICAgICAgaSA9IDE7XG4gICAgLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuXG4gICAgLy8gICAgICAgICB9IFxuICAgIC8vICAgICAgICAgY3R4LmNsZWFyUmVjdCgzMjcsIDExNCwgNDAwLCAyMDApO1xuICAgIC8vICAgICAgICAgbGV0IHNrZWxldG9uID0gbmV3IEltYWdlKCk7XG4gICAgLy8gICAgICAgICBwbGFjZUltYWdlcyhza2VsZXRvbiwgNDAwLCA2MCwgLjQsIDAsIDEsIGAuL3NyYy9pbWcvc2tlbF9hdHRhY2svU2F0dGFjayR7aX0ucG5nYCApXG4gICAgLy8gICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgfSwgNTApO1xuICAgIC8vIH1cblxuICAgIC8vIGF0dGFja0FuaW1hdGlvbigpXG4gICAgbGV0IGogPSAxO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGogPT09IDcpIHtcbiAgICAgICAgICAgIGogPSAxO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5jbGVhclJlY3QoNDI3LCAxNCwgNjAwLCA0MDApO1xuICAgICAgICBsZXQgZGVtb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxhY2VJbWFnZXMoZGVtb24sIDYwMCwgNjAsIC40LCAwLCAxLCBgLi9zcmMvaW1nL2RlbW9uX2lkbGUvJHtqfS5wbmdgKVxuICAgICAgICBqICs9IDE7XG5cbiAgICB9LCA3MCk7XG5cbiAgIFxuXG4gICAgXG5cbiAgICBcblxuICAgIFxufSk7Il0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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