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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loaders/load-home.js */ \"./src/page-loaders/load-home.js\");\n/* harmony import */ var _page_loaders_load_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-loaders/load-contact.js */ \"./src/page-loaders/load-contact.js\");\n/* harmony import */ var _page_loaders_load_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-loaders/load-services.js */ \"./src/page-loaders/load-services.js\");\n/* harmony import */ var _page_loaders_load_past_work_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-loaders/load-past-work.js */ \"./src/page-loaders/load-past-work.js\");\n/* harmony import */ var _page_loaders_meet_the_team_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-loaders/meet-the-team.js */ \"./src/page-loaders/meet-the-team.js\");\n// Imports, most of my DOM manipulation has been moved to other files.\n\n\n\n\n\n\n// Simple Tool to make my code shorter.\nfunction $(element) {\n  return document.querySelector(element);\n}\n\n// Default Page to Load is the Home Page\n(0,_page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n// Select main page content container element.\nconst main = $('main');\n\n// Select each idividual navbar button\nconst home = $('#home');\nconst services = $('#services');\nconst contact = $('#contact');\nconst pastWork = $('#past-work');\nconst meetTheTeam = $('#meet-the-team');\n\n// Clear \"active\" class from nav-links\nconst clearActive = () => {\n  home.classList.remove(\"active\");\n  services.classList.remove(\"active\");\n  contact.classList.remove(\"active\");\n  pastWork.classList.remove(\"active\");\n  meetTheTeam.classList.remove(\"active\");\n}\n\nhome.addEventListener('click', () => {\n  // Load the Home page content.\n  ;(0,_page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n  // Clear active class from other nav-links and apply here\n  clearActive();\n  home.classList.add(\"active\");\n})\n\nservices.addEventListener('click', () => {\n  // Load the Services content\n  ;(0,_page_loaders_load_services_js__WEBPACK_IMPORTED_MODULE_2__.loadServices)();\n\n  // Clear active class from other nav-links and apply here\n  clearActive();\n  services.classList.add(\"active\");\n})\n\npastWork.addEventListener('click', () => {\n  // load the testimonials content\n  ;(0,_page_loaders_load_past_work_js__WEBPACK_IMPORTED_MODULE_3__.loadPastWork)();\n\n  // Clear active class from other nav-links and apply here\n  clearActive();\n  pastWork.classList.add(\"active\");\n})\n\nmeetTheTeam.addEventListener('click', () => {\n  // Load the About Us content\n  ;(0,_page_loaders_meet_the_team_js__WEBPACK_IMPORTED_MODULE_4__.loadMeet)();\n\n  // Clear active class from other nav-links and apply here\n  clearActive();\n  meetTheTeam.classList.add(\"active\");\n})\n\ncontact.addEventListener('click', () => {\n  // Load Contact Content\n  ;(0,_page_loaders_load_contact_js__WEBPACK_IMPORTED_MODULE_1__.loadContact)();\n\n  // Clear active class from other nav-links and apply here\n  clearActive();\n  contact.classList.add(\"active\");\n})\n\n//# sourceURL=webpack://env-template/./src/index.js?");

/***/ }),

/***/ "./src/make-div.js":
/*!*************************!*\
  !*** ./src/make-div.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDiv\": () => /* binding */ makeDiv\n/* harmony export */ });\nconst makeDiv = (divObject) => {\n  const parent = document.querySelector(`${divObject.parentId}`);\n  const child = document.createElement(\"div\");\n  \n  if (divObject.childId) {\n    child.setAttribute(\"id\", `${divObject.childId}`);\n  }\n\n  const html = divObject.html || \"\";\n  child.innerHTML = html;\n\n  if (divObject.classList) {\n    for (let i = 0; i < divObject.classList.length; i++) {\n    child.classList.add(`${divObject.classList[i]}`)\n    }\n  }\n  \n  const placement = divObject.placement || \"after\";\n  if (placement == \"before\") {\n    parent.prepend(child);\n  } else if (placement == \"after\") {\n    parent.appendChild(child);\n  }\n\n  return child;\n};\n\n\n\n\n//# sourceURL=webpack://env-template/./src/make-div.js?");

/***/ }),

/***/ "./src/page-loaders/load-contact.js":
/*!******************************************!*\
  !*** ./src/page-loaders/load-contact.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContact\": () => /* binding */ loadContact\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nlet loadContact = () => {\n  const main = document.querySelector('main');\n\n  main.innerHTML = \"\";\n\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'formDiv',\n    html: `<!-- modify this form HTML and place wherever you want your form -->\n\n      <form\n        action=\"https://formspree.io/f/xyybvdnn\"\n        method=\"POST\"\n      >\n        <label>\n          Your email:\n          <input type=\"text\" name=\"_replyto\">\n        </label>\n        <label>\n          Your message:\n          <textarea name=\"message\"></textarea>\n        </label>\n      \n        <!-- your other form fields go here -->\n      \n        <button type=\"submit\">Send</button>\n      </form>`,\n  })\n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-contact.js?");

/***/ }),

/***/ "./src/page-loaders/load-home.js":
/*!***************************************!*\
  !*** ./src/page-loaders/load-home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => /* binding */ loadHome\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nlet loadHome = () => {\n  const main = document.querySelector('main');\n  \n  // Clear existing page html\n  main.innerHTML = '';\n\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    html: `<img class=\"cone\" src=\"./images/cone.png\"/>\n          <p>Meet the Team Page Under Construction</p>`,\n    classList: [\n      'coneDiv'\n    ]\n  })\n\n  \n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-home.js?");

/***/ }),

/***/ "./src/page-loaders/load-past-work.js":
/*!********************************************!*\
  !*** ./src/page-loaders/load-past-work.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPastWork\": () => /* binding */ loadPastWork\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\n// Simple Tool to make my code shorter.\nfunction $(element) {\n  return document.querySelector(element);\n}\n\nlet loadPastWork = () => {\n  const main = $('main');\n\n  const designsSrc = \"./images/designs/\";\n  const designs = [\n    \"alive.jpg\",\n    \"bcs2.jpg\",\n    \"bitr.jpg\",\n    \"cheer.jpg\",\n    \"dtp-us.jpg\",\n    \"feedback.jpg\",\n    \"food.jpg\",\n    \"gt4home.jpg\",\n    \"lawnranger.jpg\",\n    \"man.jpg\",\n    \"mca2.jpg\",\n    \"mcasmall3front-back-dragged.jpg\",\n    \"mcasmall3front-back.jpg\",\n    \"north-k-01.jpg\",\n    \"pfslong.jpg\",\n    \"po3new.jpg\",\n    \"po3statement.jpg\",\n    \"screen-shot-2019-09-06-at-3-24-25-pm.png\",\n    \"srjc.jpg\",\n    \"stg.jpg\",\n    \"thanksforgiving.jpg\",\n    \"uk-01.jpg\",\n    \"wsuplogog-1.jpg\",\n    \"xerox-logo.jpg\",\n    \"xeroxheadcount.jpg\",\n    \"xeroxovertime.jpg\"\n  ]\n  \n  // Clear existing page html\n  main.innerHTML = '';\n\n  // Build Bare Page HTML\n\n  main.innerHTML = `\n    <!-- Title -->\n    <div class=\"container-fluid\">\n      <div class=\"row text-center\">\n        <div class=\"col-12\">\n          <h1>Design Work</h1>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n\n    <!-- Container for Professional Work -->\n    <div class=\"d-flex flex-wrap justify-content-center\" id=\"port-cont\">\n    </div>\n\n    <!-- Container for Image Preview -->\n    <div class=\"prev-cont\">\n    </div>\n  `\n\n  const portCont = $(\"#port-cont\");\n\n  // Generate Dynamic HTML for Images\n  let portHTML = ``;\n  const prevCont = $(\".prev-cont\");\n\n\n  for (let i = 0; i < designs.length; i++) {\n    const portElem = (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n      parentId: '#port-cont',\n      childId: `img-${i}-div`,\n      classList: [\n        'img-div'\n      ]\n    });\n\n    portElem.innerHTML = `<img id=\"img-${i}\" class=\"img-thumbnail\" src=\"${designsSrc}${designs[i]}\">`;\n    \n    const img = $(`#img-${i}`);\n\n    /*\n    portElem.innerHTML += `\n        <div class=\"modal fade\" id=\"img-${i}-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                ...\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      `;\n\n    img.addEventListener('click', () => {\n      $(`#img-${i}-modal`).modal('show');\n    });\n    */\n    \n  }\n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-past-work.js?");

/***/ }),

/***/ "./src/page-loaders/load-services.js":
/*!*******************************************!*\
  !*** ./src/page-loaders/load-services.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadServices\": () => /* binding */ loadServices\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nconst loadServices = () => {\n  const main = document.querySelector('main');\n\n  main.innerHTML = '';\n\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'services',\n    html: `<h1>Services</h1>\n      <h3>Advising</h3>\n        establishing llc<br>\n        email integration<br>\n        domain acquisition<br>\n      <h3>Web Presence</h3>\n        social media<br>\n        site modernization<br>\n        mobile site<br>\n        accessibility<br>\n      <h3>Graphic Design</h3>\n        business cards<br>\n        posters<br>\n        logos<br>\n        billboards<br>\n        asset vectorization<br>\n        flyers<br>\n        commercials<br>\n        digital advertising<br>\n      <h3>Culture Consulting</h3>\n        synergy<br>\n        moderniation of communication channels<br>\n      <h3>Optimization</h3>\n        data visualization<br>\n        inventory tracking<br>\n        payroll auditing<br>\n        accounts payable auditing<br>\n        workflow review<br>\n        email integration<br>\n        IT<br>\n        Integrate<br>\n      `\n  });\n\n\n  \n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-services.js?");

/***/ }),

/***/ "./src/page-loaders/meet-the-team.js":
/*!*******************************************!*\
  !*** ./src/page-loaders/meet-the-team.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMeet\": () => /* binding */ loadMeet\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nlet loadMeet = () => {\n  const main = document.querySelector('main');\n  \n  // Clear existing page html\n  main.innerHTML = '';\n\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    html: `<img class=\"cone\" src=\"./images/cone.png\"/>\n          <p>Meet the Team Page Under Construction</p>`,\n    classList: [\n      'coneDiv'\n    ]\n  })\n\n  \n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/meet-the-team.js?");

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