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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const map = document.createElement('img');\n    map.src = './img/map.png';\n\n    const address = document.createElement('p');\n    address.textContent = `Visit us at: 321 Food Rd, Istanbul`;\n\n\n    const telephone = document.createElement('p');\n    telephone.textContent = `Call us: 00-321-371110`;\n\n    contact.appendChild(address);\n    contact.appendChild(telephone); \n    contact.appendChild(map);\n\n    return contact;\n}\n\nfunction loadContact() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createContact());\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const img = document.createElement('img');\n    img.src = './img/food.jpg';\n    \n    home.appendChild(createParagraph(`\"Experience the taste of traditional Kebabs\"`));\n    home.appendChild(createParagraph(`Looking for a delicious and authentic Kebab experience? Look no further than our Kebab place! Our menu offers a wide variety of mouth-watering Kebabs made with only the freshest and finest ingredients. From our classic gyro to our juicy shish kebab, there's something for everyone to enjoy.`));\n    home.appendChild(img);\n    home.appendChild(createParagraph(`Come and visit us today and taste the difference that authentic Kebab can make!`));\n    \n\n    return home;\n}\n\nfunction createParagraph(text) {\n    const para = document.createElement('p');\n    para.textContent = text;\n    \n    return para;\n}\n\n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome());\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.appendChild(createItem('Doner', 'Delicious traditional doner kebab'));\n    menu.appendChild(createItem('Souvlaki', 'Traditional Greek fast food'));\n    menu.appendChild(createItem('Lyulya', 'Armenian minced meat skewer'));\n    menu.appendChild(createItem('Plate', 'Delicious stuff in a plate'));\n\n    return menu;\n}\n\nfunction createItem(name, description) {\n    const item = document.createElement('div');\n    item.classList.add('menu-item');\n\n    const title = document.createElement('h2');\n    title.textContent = name;\n\n    const subtitle = document.createElement('p');\n    subtitle.textContent = description;\n\n    const image = document.createElement('img');\n    image.src = `./img/${name.toLowerCase()}.jpg`;\n    image.alt = name;\n\n    item.appendChild(image);\n    item.appendChild(title);\n    item.appendChild(subtitle);\n    \n    return item;\n}\n\nfunction loadMenu() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const restaurantName = document.createElement('h1');\n    restaurantName.classList.add('restaurant-name');\n    restaurantName.textContent = 'KebabKebab';\n    \n\n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n\n    return header;\n}\n\nfunction createNav() {\n    const nav = document.createElement('nav');\n\n    const homeBtn = document.createElement('button');\n    homeBtn.classList.add('nav-button');\n    homeBtn.textContent = 'Home';\n    homeBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveBtn(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menuBtn = document.createElement('button');\n    menuBtn.classList.add('nav-button');\n    menuBtn.textContent = 'Menu';\n    menuBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveBtn(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    \n\n    const contactBtn = document.createElement('button');\n    contactBtn.textContent = 'Contact';\n    contactBtn.classList.add('nav-button');\n    contactBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveBtn(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    return nav;\n\n}\n\nfunction setActiveBtn(button) {\n    const buttons = document.querySelectorAll('.nav-button');\n\n\n    buttons.forEach(button => {\n        if (button != this) {\n            button.classList.remove('active');\n        }\n    });\n    button.classList.add('active');\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n\n    return main;\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    const copyright = document.createElement('p');\n    copyright.textContent = `Copyright Ⓒ ${new Date().getFullYear()}`;\n\n    footer.appendChild(copyright);\n\n    return footer;\n\n}\n\nfunction initializeWebsite() {\n    const content = document.getElementById('content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite());\n\n//# sourceURL=webpack://odin-restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;