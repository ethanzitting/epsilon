/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loaders/load-home.js */ \"./src/page-loaders/load-home.js\");\n\n\nfunction $(element) {\n  return document.querySelector(element);\n}\n\n(0,_page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nconst main = $('main');\n\nconst home = $('#home');\nconst services = $('#services');\nconst about = $('#about');\nconst contact = $('#contact');\nconst testimonials = $('#testimonials');\n\nhome.addEventListener('click', () => {\n  (0,_page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n})\n\nservices.addEventListener('click', () => {\n  main.innerHTML = \"Services Content\";\n})\n\nabout.addEventListener('click', () => {\n  main.innerHTML = \"About Us Content\";\n})\n\ncontact.addEventListener('click', () => {\n  main.innerHTML = \"Contact Us Content\";\n})\n\ntestimonials.addEventListener('click', () => {\n  main.innerHTML = \"Testimonials Content\";\n})\n\n//# sourceURL=webpack://env-template/./src/index.js?");

/***/ }),

/***/ "./src/make-div.js":
/*!*************************!*\
  !*** ./src/make-div.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDiv\": () => /* binding */ makeDiv\n/* harmony export */ });\nconst makeDiv = (divObject) => {\n  const parent = document.querySelector(`${divObject.parentId}`);\n  const child = document.createElement(\"div\");\n  \n  if (divObject.childId) {\n    child.setAttribute(\"id\", `${divObject.childId}`);\n  }\n\n  const html = divObject.html || \"\";\n  child.innerHTML = html;\n\n  if (divObject.classList) {\n    for (let i = 0; i < divObject.classList.length; i++) {\n    child.classList.add(`${divObject.classList[i]}`)\n    }\n  }\n  \n  const placement = divObject.placement || \"after\";\n  if (placement == \"before\") {\n    parent.prepend(child);\n  } else if (placement == \"after\") {\n    parent.appendChild(child);\n  }\n\n  return child;\n};\n\n\n\n\n//# sourceURL=webpack://env-template/./src/make-div.js?");

/***/ }),

/***/ "./src/page-loaders/load-home.js":
/*!***************************************!*\
  !*** ./src/page-loaders/load-home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => /* binding */ loadHome\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nlet loadHome = () => {\n  const main = document.querySelector('main');\n  \n  // Clear existing page html\n  main.innerHTML = '';\n\n  // Load Intro Title\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'title',\n    html: '<h1>Epsilon Integrated Solutions</h1>',\n  })\n\n  // Load Intro Container\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'intro-cont',\n    classList: [\n      'flex'\n    ]\n  })\n\n  // Load intro paragraph\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#intro-cont',\n    html: `<h3>What We Do</h3>\n          <p>This paragraph briefly lays out our services. Are you daunted by the processes involved\n          with starting your first company? We can solve all the little headaches in the beginning\n          so that you can get right to making money. We can get you an LLC, a domain, a website, \n          and good starting business practices, all for a shiny dollar coin.`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load intro image\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#intro-cont',\n    html: `<img class=\"tile-img\" src=\"./images/school-smile.jpg\"/>`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load Brief Pitch Container\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'pitch-cont',\n    classList: [\n      'flex'\n    ]\n  })\n  \n  // Load Pitch Image\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#pitch-cont',\n    html: `<img class=\"tile-img\" src=\"./images/smile.jpg\"/>`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load Pitch Image\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#pitch-cont',\n    html: `<h3>Why Us?</h3>\n          <p>Simply put, we offer a complete solution for a flat rate\n           lower than any you will fiind elsewhere. A small check and a phone call\n           will result in you being the owner of your own small business. We can even\n           walk you through what we are doing so that you can begin to familiarize\n           yourself with the inner workings of modern businesses.</p>`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load Service Links Title\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    html: `<h1>Our Packages</h1>`,\n  })\n\n  // Load Services Container\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'services-cont'\n  })\n\n  // Load Service Packages\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#services-cont',\n    childId: 'deluxe',\n    html: `<h3>Deluxe With Cheese</h3>\n          <p>The full shebang. We start you an LLC, lock down your domain, \n          build you a simple website and start you off with modern accounting processes.</p>`,\n    classList: [\n      'package'\n    ]\n  })\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#services-cont',\n    childId: 'intermediate',\n    html: `<h3>Intermediate</h3>\n          <p>Our in-between package. We start you an LLC, lock down your domain, \n          and build you a simple website</p>`,\n    classList: [\n      'package'\n    ]\n  })\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#services-cont',\n    chjldId: 'basic',\n    html: `<h3>Basic</h3>\n          <p>Our simplest service package. We lock down a domain and build you a simple website.`,\n    classList: [\n      'package'\n    ]\n  })\n  // Load Testimonial Preview\n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-home.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;