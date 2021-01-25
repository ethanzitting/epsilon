/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("function $(element) {\n  return document.querySelector(element);\n}\n\nconst main = $('main');\n\nconst home = $('#home');\nconst services = $('#services');\nconst about = $('#about');\nconst contact = $('#contact');\nconst testimonials = $('#testimonials');\n\nhome.addEventListener('click', () => {\n  main.innerHTML = \"Home Page Content\";\n})\n\nservices.addEventListener('click', () => {\n  main.innerHTML = \"Services Content\";\n})\n\nabout.addEventListener('click', () => {\n  main.innerHTML = \"About Us Content\";\n})\n\ncontact.addEventListener('click', () => {\n  main.innerHTML = \"Contact Us Content\";\n})\n\ntestimonials.addEventListener('click', () => {\n  main.innerHTML = \"Testimonials Content\";\n})\n\n//# sourceURL=webpack://env-template/./src/index.js?");
/******/ })()
;