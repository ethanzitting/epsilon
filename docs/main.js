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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loaders/load-home.js */ \"./src/page-loaders/load-home.js\");\n/* harmony import */ var _page_loaders_load_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-loaders/load-contact.js */ \"./src/page-loaders/load-contact.js\");\n/* harmony import */ var _page_loaders_load_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-loaders/load-services.js */ \"./src/page-loaders/load-services.js\");\n// Imports, most of my DOM manipulation has been moved to other files.\n\n\n\n\n// Simple Tool to make my code shorter.\nfunction $(element) {\n  return document.querySelector(element);\n}\n\n// Default Page to Load is the Home Page\n(0,_page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n// Select Hamburger Menu Icon and Navbar Button Container Element\nconst menuBtn = $('.menu-btn');\nconst navBtns = $('.navBtns');\n\n// Select main page content container element.\nconst main = $('main');\n\n// Select each idividual navbar button\nconst home = $('#home');\nconst services = $('#services');\nconst about = $('#about');\nconst contact = $('#contact');\nconst testimonials = $('#testimonials');\n\n// The navbar menu will be closed on page load\nlet menuOpen = false;\n\n// When the hamburger icon is clicked...\nmenuBtn.addEventListener('click', () => {\n  // If the navbar is currently closed...\n  if (!menuOpen) {\n    // Add the class 'shown' to the navBar element, scrolling it right into view.\n    // Also add 'open' to the menuBtn turning it into an 'X'.\n    menuBtn.classList.add('open');\n    navBtns.classList.add('shown');\n    menuOpen = true;\n  } else {\n    // Scroll the navbar left out of view.\n    // Turn the menuBtn back into a hamburger.\n    menuBtn.classList.remove('open');\n    navBtns.classList.remove('shown');\n    menuOpen =  false;\n  }\n});\n\nhome.addEventListener('click', () => {\n  // Load the Home page content.\n  (0,_page_loaders_load_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n  // Also close the navbar menu.\n  menuBtn.classList.remove('open');\n  navBtns.classList.remove('shown');\n  menuOpen =  false;\n})\n\nservices.addEventListener('click', () => {\n  // Load the Services content\n  ;(0,_page_loaders_load_services_js__WEBPACK_IMPORTED_MODULE_2__.loadServices)();\n\n  // Also close the navbar menu.\n  menuBtn.classList.remove('open');\n  navBtns.classList.remove('shown');\n  menuOpen =  false;\n})\n\nabout.addEventListener('click', () => {\n  // Load the About Us content\n  main.innerHTML = \"About Us Content\";\n\n  // Also close the navbar menu.\n  menuBtn.classList.remove('open');\n  navBtns.classList.remove('shown');\n  menuOpen =  false;\n})\n\ncontact.addEventListener('click', () => {\n  // Load Contact Content\n  ;(0,_page_loaders_load_contact_js__WEBPACK_IMPORTED_MODULE_1__.loadContact)();\n\n  // Also close the navbar menu.\n  menuBtn.classList.remove('open');\n  navBtns.classList.remove('shown');\n  menuOpen =  false;\n})\n\ntestimonials.addEventListener('click', () => {\n  // load the testimonials content\n  main.innerHTML = \"Testimonials Content\";\n\n  // Also close the navbar menu.\n  menuBtn.classList.remove('open');\n  navBtns.classList.remove('shown');\n  menuOpen =  false;\n})\n\n\n\n//# sourceURL=webpack://env-template/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHome\": () => /* binding */ loadHome\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nlet loadHome = () => {\n  const main = document.querySelector('main');\n  \n  // Clear existing page html\n  main.innerHTML = '';\n\n  /* Load Parallaxing background image\n  makeDiv({\n    parentId: 'main',\n    childId: 'backgroundImg',\n    html: '<img src=\"./images/desk-background.jpg\"/>',\n    classList: [\n      'background-img'\n    ]\n  })*/\n\n  // Load Intro Title\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'title',\n    html: '<h1>Epsilon Integrated Solutions</h1>',\n  })\n\n  // Load Intro Container\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'intro-cont',\n    classList: [\n      'flex'\n    ]\n  })\n\n  // Load intro paragraph\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#intro-cont',\n    html: `<h3>What We Do</h3>\n          <p>This paragraph briefly lays out our services. Are you daunted by the processes involved\n          with starting your first company? We can solve all the little headaches in the beginning\n          so that you can get right to making money. We can get you an LLC, a domain, a website, \n          and good starting business practices, all for a shiny dollar coin.`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load intro image\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#intro-cont',\n    html: `<img class=\"tile-img\" src=\"./images/dog-1.jpg\"/>`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load Brief Pitch Container\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'pitch-cont',\n    classList: [\n      'flex'\n    ]\n  })\n  \n  // Load Pitch Image\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#pitch-cont',\n    html: `<img class=\"tile-img\" src=\"./images/dog-2.jpg\"/>`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load Pitch Image\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#pitch-cont',\n    html: `<h3>Why Us?</h3>\n          <p>Simply put, we offer a complete solution for a flat rate\n           lower than any you will find elsewhere. A small check and a phone call\n           will result in you being the owner of your own small business. We can even\n           walk you through what we are doing so that you can begin to familiarize\n           yourself with the inner workings of modern businesses.</p>`,\n    classList: [\n      'tile'\n    ]\n  })\n\n  // Load Service Links Title\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    html: `<h1>Our Packages</h1>`,\n  })\n\n  // Load Services Container\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'services-cont'\n  })\n\n  // Load Service Packages\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#services-cont',\n    childId: 'deluxe',\n    html: `<h3>Deluxe With Cheese</h3>\n          <p>The full shebang. We start you an LLC, lock down your domain, \n          build you a simple website and start you off with modern accounting processes.</p>`,\n    classList: [\n      'package'\n    ]\n  })\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#services-cont',\n    childId: 'intermediate',\n    html: `<h3>Intermediate</h3>\n          <p>Our in-between package. We start you an LLC, lock down your domain, \n          and build you a simple website</p>`,\n    classList: [\n      'package'\n    ]\n  })\n  ;(0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: '#services-cont',\n    chjldId: 'basic',\n    html: `<h3>Basic</h3>\n          <p>Our simplest service package. We lock down a domain and build you a simple website.`,\n    classList: [\n      'package'\n    ]\n  })\n  // Load Testimonial Preview\n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-home.js?");

/***/ }),

/***/ "./src/page-loaders/load-services.js":
/*!*******************************************!*\
  !*** ./src/page-loaders/load-services.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadServices\": () => /* binding */ loadServices\n/* harmony export */ });\n/* harmony import */ var _make_div_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../make-div.js */ \"./src/make-div.js\");\n\n\nconst loadServices = () => {\n  const main = document.querySelector('main');\n\n  main.innerHTML = '';\n\n  (0,_make_div_js__WEBPACK_IMPORTED_MODULE_0__.makeDiv)({\n    parentId: 'main',\n    childId: 'services',\n    html: `<h1>Services</h1>\n      <h3>Advising</h3>\n        establishing llc<br>\n        email integration<br>\n        domain acquisition<br>\n      <h3>Web Presence</h3>\n        social media<br>\n        site modernization<br>\n        mobile site<br>\n        accessibility<br>\n      <h3>Graphic Design</h3>\n        business cards<br>\n        posters<br>\n        logos<br>\n        billboards<br>\n        asset vectorization<br>\n        flyers<br>\n        commercials<br>\n        digital advertising<br>\n      <h3>Culture Consulting</h3>\n        synergy<br>\n        moderniation of communication channels<br>\n      <h3>Optimization</h3>\n        data visualization<br>\n        inventory tracking<br>\n        payroll auditing<br>\n        accounts payable auditing<br>\n        workflow review<br>\n        email integration<br>\n        IT<br>\n        Integrate<br>\n      `\n  });\n\n\n  \n}\n\n\n\n//# sourceURL=webpack://env-template/./src/page-loaders/load-services.js?");

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