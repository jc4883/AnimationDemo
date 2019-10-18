/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/effect_1.js":
/*!************************************!*\
  !*** ./src/javascript/effect_1.js ***!
  \************************************/
/*! exports provided: effect1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect1", function() { return effect1; });
var effect1 = function effect1() {
  //document.getElementById('effect-1').appendChild = "Effect 1!";    
  var menu1 = document.querySelector(" #dropdown-tab-one, .menu-one li");
  var menu4 = document.querySelector("#dropdown-tab-four, .menu-four li");
  var scrollEffect = document.getElementById("scroll-effect");
  var effect1 = document.getElementById("effect-1");
  scrollEffect.addEventListener("scroll", function (e) {
    if (e.target.scrollTop > 470) {
      effect1.classList.add("fixed");
    } else {
      effect1.classList.remove("fixed");
    }
  });
  menu1.addEventListener("mouseover", function () {
    document.getElementById("effect-1").classList.add("remove-left-border-radius");
  });
  menu1.addEventListener("mouseout", function () {
    document.getElementById("effect-1").classList.remove("remove-left-border-radius");
  });
  menu4.addEventListener("mouseover", function () {
    document.getElementById("effect-1").classList.add("remove-right-border-radius");
  });
  menu4.addEventListener("mouseout", function () {
    document.getElementById("effect-1").classList.remove("remove-right-border-radius");
  });
};

/***/ }),

/***/ "./src/javascript/effect_2.js":
/*!************************************!*\
  !*** ./src/javascript/effect_2.js ***!
  \************************************/
/*! exports provided: effect2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect2", function() { return effect2; });
var effect2 = function effect2() {
  // document.getElementById('effect-2').innerText = "Effect 2!";  
  var elements = document.querySelectorAll(".grid-wrapper > section");
  var presentationBox = document.querySelector(".image-div");

  var _loop = function _loop(i) {
    debugger;
    elements[i].addEventListener("mouseover", function (event) {
      var url;

      switch (i) {
        case 0:
          url = "/src/assets/astro_salute.jpg";
          break;

        case 1:
          url = "/src/assets/california.jpg";
          break;

        case 2:
          url = "/src/assets/cat.jpg";
          break;

        case 3:
          url = "/src/assets/cool_shirt.jpg";
          break;

        case 4:
          url = "/src/assets/pray.jpg";
          break;

        case 5:
          url = "/src/assets/ernst_and_young.jpg";
          break;

        case 6:
          url = "/src/assets/korean_jigu.jpg";
          break;

        case 7:
          url = "/src/assets/lonely_boi.jpg";
          break;

        case 8:
          url = "/src/assets/mom_plant_baby.jpg";
          break;

        case 9:
          url = "/src/assets/wind_turbine.jpg";
          break;

        case 10:
          url = "/src/assets/nyc_night.jpg";
          break;

        case 11:
          url = "/src/assets/owl.jpg";
          break;

        default:
          url = "none";
      } // let url = urlFunc();
      // if (url !== "none") {
      //     presentationBox.style.backgroundImage = `url('${url}')`
      // }


      presentationBox.classList.add("present-image");

      if (url !== "none") {
        presentationBox.style.backgroundImage = "url('".concat(url, "')");
      }
    });
    elements[i].addEventListener("mouseleave", function (event) {
      presentationBox.classList.remove("present-image");
    });
  };

  for (var i = 0; i < elements.length - 2; i++) {
    _loop(i);
  }
};

/***/ }),

/***/ "./src/javascript/effect_3.js":
/*!************************************!*\
  !*** ./src/javascript/effect_3.js ***!
  \************************************/
/*! exports provided: effect3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect3", function() { return effect3; });
var effect3 = function effect3() {
  var nav = document.querySelector(".nav-bar");
  var hamburger = document.querySelector(".nav-bar div");
  var main = document.getElementById("main");
  var open = false;
  var hover = false;
  hamburger.addEventListener("click", function () {
    open = !open;
    nav.classList.toggle("menu-active");
    main.classList.toggle("menu-active");
    nav.classList.remove("menu-hover");
    main.classList.remove("menu-hover");
    console.log("here");
  });
  hamburger.addEventListener("mouseover", function () {
    if (!open) {
      nav.classList.add("menu-hover");
      main.classList.add("menu-hover");
    }
  });
  hamburger.addEventListener("mouseout", function () {
    nav.classList.remove("menu-hover");
    main.classList.remove("menu-hover");
    debugger;
  });
}; // const hamburger = document.querySelector(".main-nav > img");
// const section = document.getElementById("effect-3");
// debugger
// hamburger.addEventListener("click", () => {
//     hamburger.classList.add("move-hamburger");
//     section.classList.add("light-up-section");
//     debugger
// });

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _effect_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effect_1 */ "./src/javascript/effect_1.js");
/* harmony import */ var _effect_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effect_2 */ "./src/javascript/effect_2.js");
/* harmony import */ var _effect_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effect_3 */ "./src/javascript/effect_3.js");




window.addEventListener('DOMContentLoaded', function () {
  Object(_effect_1__WEBPACK_IMPORTED_MODULE_1__["effect1"])();
  Object(_effect_2__WEBPACK_IMPORTED_MODULE_2__["effect2"])();
  Object(_effect_3__WEBPACK_IMPORTED_MODULE_3__["effect3"])();
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZWZmZWN0XzEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZWZmZWN0XzIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZWZmZWN0XzMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiZWZmZWN0MSIsIm1lbnUxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudTQiLCJzY3JvbGxFZmZlY3QiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZWZmZWN0MiIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInByZXNlbnRhdGlvbkJveCIsImkiLCJldmVudCIsInVybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwibGVuZ3RoIiwiZWZmZWN0MyIsIm5hdiIsImhhbWJ1cmdlciIsIm1haW4iLCJvcGVuIiwiaG92ZXIiLCJ0b2dnbGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTyxJQUFNQSxPQUFPLEdBQUcsbUJBQU07QUFDekI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQ0FBdkIsQ0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1DQUF2QixDQUFkO0FBQ0EsTUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBckI7QUFDQSxNQUFNTixPQUFPLEdBQUdFLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixDQUFoQjtBQUdBRCxjQUFZLENBQUNFLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDLFVBQUNDLENBQUQsRUFBTztBQUMzQyxRQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxHQUFxQixHQUF6QixFQUE4QjtBQUMxQlYsYUFBTyxDQUFDVyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixPQUF0QjtBQUNILEtBRkQsTUFFTztBQUNIWixhQUFPLENBQUNXLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLE9BQXpCO0FBQ0g7QUFDSixHQU5EO0FBU0FaLE9BQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0MsWUFBTTtBQUN0Q0wsWUFBUSxDQUFDSSxjQUFULENBQXdCLFVBQXhCLEVBQW9DSyxTQUFwQyxDQUE4Q0MsR0FBOUMsQ0FBa0QsMkJBQWxEO0FBQ0gsR0FGRDtBQUdBWCxPQUFLLENBQUNNLGdCQUFOLENBQXVCLFVBQXZCLEVBQW1DLFlBQU07QUFDckNMLFlBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixFQUFvQ0ssU0FBcEMsQ0FBOENFLE1BQTlDLENBQXFELDJCQUFyRDtBQUNILEdBRkQ7QUFJQVQsT0FBSyxDQUFDRyxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxZQUFNO0FBQ3RDTCxZQUFRLENBQUNJLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NLLFNBQXBDLENBQThDQyxHQUE5QyxDQUFrRCw0QkFBbEQ7QUFDSCxHQUZEO0FBR0FSLE9BQUssQ0FBQ0csZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUMsWUFBTTtBQUNyQ0wsWUFBUSxDQUFDSSxjQUFULENBQXdCLFVBQXhCLEVBQW9DSyxTQUFwQyxDQUE4Q0UsTUFBOUMsQ0FBcUQsNEJBQXJEO0FBQ0gsR0FGRDtBQUlILENBL0JNLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3pCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHYixRQUFRLENBQUNjLGdCQUFULENBQTBCLHlCQUExQixDQUFqQjtBQUNBLE1BQU1DLGVBQWUsR0FBR2YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXhCOztBQUh5Qiw2QkFLaEJlLENBTGdCO0FBTXJCO0FBQ0FILFlBQVEsQ0FBQ0csQ0FBRCxDQUFSLENBQVlYLGdCQUFaLENBQTZCLFdBQTdCLEVBQTBDLFVBQUNZLEtBQUQsRUFBVztBQUNqRCxVQUFJQyxHQUFKOztBQUNBLGNBQVFGLENBQVI7QUFDSSxhQUFLLENBQUw7QUFDSUUsYUFBRyxHQUFHLDhCQUFOO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0lBLGFBQUcsR0FBRyw0QkFBTjtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJQSxhQUFHLEdBQUcscUJBQU47QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSUEsYUFBRyxHQUFHLDRCQUFOO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0lBLGFBQUcsR0FBRyxzQkFBTjtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJQSxhQUFHLEdBQUcsaUNBQU47QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSUEsYUFBRyxHQUFHLDZCQUFOO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0lBLGFBQUcsR0FBRyw0QkFBTjtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJQSxhQUFHLEdBQUcsZ0NBQU47QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSUEsYUFBRyxHQUFHLDhCQUFOO0FBQ0E7O0FBQ0osYUFBSyxFQUFMO0FBQ0lBLGFBQUcsR0FBRywyQkFBTjtBQUNBOztBQUNKLGFBQUssRUFBTDtBQUNJQSxhQUFHLEdBQUcscUJBQU47QUFDQTs7QUFDSjtBQUNJQSxhQUFHLEdBQUcsTUFBTjtBQXRDUixPQUZpRCxDQTBDakQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBSCxxQkFBZSxDQUFDTixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsZUFBOUI7O0FBQ0EsVUFBSVEsR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDaEJILHVCQUFlLENBQUNJLEtBQWhCLENBQXNCQyxlQUF0QixrQkFBZ0RGLEdBQWhEO0FBQ0g7QUFDSixLQWxERDtBQW1EQUwsWUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWVgsZ0JBQVosQ0FBNkIsWUFBN0IsRUFBMkMsVUFBQ1ksS0FBRCxFQUFXO0FBQ2xERixxQkFBZSxDQUFDTixTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsZUFBakM7QUFDSCxLQUZEO0FBMURxQjs7QUFLekIsT0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNRLE1BQVQsR0FBa0IsQ0FBdEMsRUFBeUNMLENBQUMsRUFBMUMsRUFBOEM7QUFBQSxVQUFyQ0EsQ0FBcUM7QUF3RDdDO0FBT0osQ0FwRU0sQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFPLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFFekIsTUFBTUMsR0FBRyxHQUFHdkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVo7QUFDQSxNQUFNdUIsU0FBUyxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsTUFBTXdCLElBQUksR0FBR3pCLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsTUFBSXNCLElBQUksR0FBRyxLQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEtBQVo7QUFFQUgsV0FBUyxDQUFDbkIsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBVztBQUMzQ3FCLFFBQUksR0FBRyxDQUFDQSxJQUFSO0FBQ0FILE9BQUcsQ0FBQ2QsU0FBSixDQUFjbUIsTUFBZCxDQUFxQixhQUFyQjtBQUNBSCxRQUFJLENBQUNoQixTQUFMLENBQWVtQixNQUFmLENBQXNCLGFBQXRCO0FBQ0FMLE9BQUcsQ0FBQ2QsU0FBSixDQUFjRSxNQUFkLENBQXFCLFlBQXJCO0FBQ0FjLFFBQUksQ0FBQ2hCLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixZQUF0QjtBQUNBa0IsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNILEdBUEQ7QUFTQU4sV0FBUyxDQUFDbkIsZ0JBQVYsQ0FBMkIsV0FBM0IsRUFBd0MsWUFBTTtBQUMxQyxRQUFJLENBQUNxQixJQUFMLEVBQVc7QUFDUEgsU0FBRyxDQUFDZCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsWUFBbEI7QUFDQWUsVUFBSSxDQUFDaEIsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0FBQ0g7QUFDSixHQUxEO0FBT0FjLFdBQVMsQ0FBQ25CLGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFlBQU07QUFDekNrQixPQUFHLENBQUNkLFNBQUosQ0FBY0UsTUFBZCxDQUFxQixZQUFyQjtBQUNBYyxRQUFJLENBQUNoQixTQUFMLENBQWVFLE1BQWYsQ0FBc0IsWUFBdEI7QUFDQTtBQUNILEdBSkQ7QUFLSCxDQTdCTSxDLENBK0JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7Ozs7Ozs7O0FDdENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFvQixNQUFNLENBQUMxQixnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUM5Q1AsMkRBQU87QUFDUGMsMkRBQU87QUFDUFUsMkRBQU87QUFDVixDQUpELEU7Ozs7Ozs7Ozs7O0FDTEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2phdmFzY3JpcHQvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgZWZmZWN0MSA9ICgpID0+IHtcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZmZlY3QtMScpLmFwcGVuZENoaWxkID0gXCJFZmZlY3QgMSFcIjsgICAgXG4gICAgY29uc3QgbWVudTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiICNkcm9wZG93bi10YWItb25lLCAubWVudS1vbmUgbGlcIik7XG4gICAgY29uc3QgbWVudTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duLXRhYi1mb3VyLCAubWVudS1mb3VyIGxpXCIpO1xuICAgIGNvbnN0IHNjcm9sbEVmZmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Nyb2xsLWVmZmVjdFwiKTtcbiAgICBjb25zdCBlZmZlY3QxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3QtMVwiKTtcblxuXG4gICAgc2Nyb2xsRWZmZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnNjcm9sbFRvcCA+IDQ3MCkge1xuICAgICAgICAgICAgZWZmZWN0MS5jbGFzc0xpc3QuYWRkKFwiZml4ZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlZmZlY3QxLmNsYXNzTGlzdC5yZW1vdmUoXCJmaXhlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIG1lbnUxLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVmZmVjdC0xXCIpLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtbGVmdC1ib3JkZXItcmFkaXVzXCIpO1xuICAgIH0pXG4gICAgbWVudTEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3QtMVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlLWxlZnQtYm9yZGVyLXJhZGl1c1wiKTtcbiAgICB9KVxuXG4gICAgbWVudTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmZWN0LTFcIikuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1yaWdodC1ib3JkZXItcmFkaXVzXCIpO1xuICAgIH0pXG4gICAgbWVudTQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3QtMVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlLXJpZ2h0LWJvcmRlci1yYWRpdXNcIik7XG4gICAgfSlcblxufSIsImV4cG9ydCBjb25zdCBlZmZlY3QyID0gKCkgPT4ge1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZmZlY3QtMicpLmlubmVyVGV4dCA9IFwiRWZmZWN0IDIhXCI7ICBcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC13cmFwcGVyID4gc2VjdGlvblwiKTtcbiAgICBjb25zdCBwcmVzZW50YXRpb25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlLWRpdlwiKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHVybDtcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvc3JjL2Fzc2V0cy9hc3Ryb19zYWx1dGUuanBnXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvc3JjL2Fzc2V0cy9jYWxpZm9ybmlhLmpwZ1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL3NyYy9hc3NldHMvY2F0LmpwZ1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL3NyYy9hc3NldHMvY29vbF9zaGlydC5qcGdcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9zcmMvYXNzZXRzL3ByYXkuanBnXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvc3JjL2Fzc2V0cy9lcm5zdF9hbmRfeW91bmcuanBnXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvc3JjL2Fzc2V0cy9rb3JlYW5famlndS5qcGdcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9zcmMvYXNzZXRzL2xvbmVseV9ib2kuanBnXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvc3JjL2Fzc2V0cy9tb21fcGxhbnRfYmFieS5qcGdcIjsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCIvc3JjL2Fzc2V0cy93aW5kX3R1cmJpbmUuanBnXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL3NyYy9hc3NldHMvbnljX25pZ2h0LmpwZ1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9zcmMvYXNzZXRzL293bC5qcGdcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsZXQgdXJsID0gdXJsRnVuYygpO1xuICAgICAgICAgICAgLy8gaWYgKHVybCAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIC8vICAgICBwcmVzZW50YXRpb25Cb3guc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt1cmx9JylgXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Cb3guY2xhc3NMaXN0LmFkZChcInByZXNlbnQtaW1hZ2VcIik7XG4gICAgICAgICAgICBpZiAodXJsICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIHByZXNlbnRhdGlvbkJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3VybH0nKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJwcmVzZW50LWltYWdlXCIpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICAgICAgXG5cbiAgICBcbn0iLCJleHBvcnQgY29uc3QgZWZmZWN0MyA9ICgpID0+IHtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhclwiKTtcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXIgZGl2XCIpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBsZXQgb3BlbiA9IGZhbHNlO1xuICAgIGxldCBob3ZlciA9IGZhbHNlO1xuXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgb3BlbiA9ICFvcGVuO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWhvdmVyXCIpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LWhvdmVyXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgfSk7XG5cbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGlmICghb3Blbikge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWhvdmVyXCIpO1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWVudS1ob3ZlclwiKTtcbiAgICAgICAgfSBcbiAgICB9KTtcblxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtaG92ZXJcIik7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtaG92ZXJcIik7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfSlcbn1cblxuICAgIC8vIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXYgPiBpbWdcIik7XG4gICAgLy8gY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmZWN0LTNcIik7XG4gICAgLy8gZGVidWdnZXJcbiAgICAvLyBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJtb3ZlLWhhbWJ1cmdlclwiKTtcbiAgICAvLyAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlnaHQtdXAtc2VjdGlvblwiKTtcbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyB9KTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgZWZmZWN0MSB9IGZyb20gJy4vZWZmZWN0XzEnO1xuaW1wb3J0IHsgZWZmZWN0MiB9IGZyb20gJy4vZWZmZWN0XzInOyBcbmltcG9ydCB7IGVmZmVjdDMgfSBmcm9tICcuL2VmZmVjdF8zJzsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGVmZmVjdDEoKTtcbiAgICBlZmZlY3QyKCk7XG4gICAgZWZmZWN0MygpO1xufSk7XG5cblxuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9