"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Root Variables for Styling */\\r\\n:root {\\r\\n    --background-color: #121212; /* Dark background */\\r\\n    --accent-color: #FF4400; /* Accent color */\\r\\n    --primary-color: #FFFFFF; /* Highlighted or title color */\\r\\n    --secondary-color: #888888; /* Secondary text color */\\r\\n    --spacing-unit: 4px; /* Base unit for spacing */\\r\\n    --border-radius: 8px; /* Rounded corners for modern look */\\r\\n    --font-family: 'Arial', sans-serif;\\r\\n    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* Subtle shadow */\\r\\n  }\\r\\n  \\r\\n  /* Reset & General Styling */\\r\\n  * {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n  \\r\\n  body {\\r\\n    font-family: var(--font-family);\\r\\n    background-color: var(--background-color);\\r\\n    color: var(--primary-color);\\r\\n    line-height: 1.6;\\r\\n  }\\r\\n  \\r\\n  .container {\\r\\n    width: 90%;\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n    padding: calc(var(--spacing-unit) * 4);\\r\\n  }\\r\\n  \\r\\n  /* Utility Classes */\\r\\n  .flex {\\r\\n    display: flex;\\r\\n    gap: calc(var(--spacing-unit) * 4);\\r\\n  }\\r\\n  \\r\\n  .flex-center {\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  \\r\\n  .left-align {\\r\\n    text-align: left;\\r\\n  }\\r\\n  \\r\\n  .center-align {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  /* Header */\\r\\n  header {\\r\\n    background-color: var(--background-color);\\r\\n    padding: calc(var(--spacing-unit) * 4);\\r\\n    position: -webkit-sticky;\\r\\n    position: sticky;\\r\\n    top: 0;\\r\\n    z-index: 1000;\\r\\n    box-shadow: var(--box-shadow);\\r\\n  }\\r\\n  \\r\\n  header .navbar {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n  }\\r\\n  \\r\\n  .navbar .logo img {\\r\\n    height: calc(var(--spacing-unit) * 10);\\r\\n  }\\r\\n  \\r\\n  .navbar .nav-links {\\r\\n    display: flex;\\r\\n    gap: calc(var(--spacing-unit) * 6);\\r\\n    list-style: none;\\r\\n  }\\r\\n  \\r\\n  .navbar .nav-links a {\\r\\n    text-decoration: none;\\r\\n    color: var(--accent-color);\\r\\n    font-weight: bold;\\r\\n    transition: color 0.2s ease;\\r\\n  }\\r\\n  \\r\\n  .navbar .nav-links a:hover {\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  /* Features Section */\\r\\n  .features {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\r\\n    grid-gap: calc(var(--spacing-unit) * 4);\\r\\n    gap: calc(var(--spacing-unit) * 4);\\r\\n    margin-bottom: calc(var(--spacing-unit) * 8);\\r\\n  }\\r\\n  \\r\\n  .feature-card {\\r\\n    background: #1c1c1c; /* Slightly lighter than background */\\r\\n    padding: calc(var(--spacing-unit) * 6);\\r\\n    border-radius: var(--border-radius);\\r\\n    box-shadow: var(--box-shadow);\\r\\n  }\\r\\n  \\r\\n  .feature-card h3 {\\r\\n    margin-bottom: calc(var(--spacing-unit) * 4);\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n  \\r\\n  .feature-card p {\\r\\n    color: var(--secondary-color);\\r\\n    font-size: 0.9rem;\\r\\n    line-height: 1.4;\\r\\n  }\\r\\n  \\r\\n  /* Screenshot Section */\\r\\n  .screenshot-demo {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: calc(var(--spacing-unit) * 4);\\r\\n    justify-content: center;\\r\\n    margin-bottom: calc(var(--spacing-unit) * 8);\\r\\n  }\\r\\n  \\r\\n  .screenshot-demo img {\\r\\n    width: 100%;\\r\\n    max-width: 400px;\\r\\n    border-radius: var(--border-radius);\\r\\n    box-shadow: var(--box-shadow);\\r\\n  }\\r\\n  \\r\\n  /* Contact Section */\\r\\n  .contact-container {\\r\\n    max-width: 800px;\\r\\n    margin: 0 auto;\\r\\n    padding: calc(var(--spacing-unit) * 4);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .contact-container h1 {\\r\\n    text-align: center;\\r\\n    margin-bottom: calc(var(--spacing-unit) * 8);\\r\\n  }\\r\\n  \\r\\n  .contact-info p {\\r\\n    margin: calc(var(--spacing-unit) * 4) 0;\\r\\n    font-size: 1rem;\\r\\n    color: var(--secondary-color);\\r\\n  }\\r\\n  \\r\\n  .contact-info a {\\r\\n    color: var(--accent-color);\\r\\n    text-decoration: none;\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  \\r\\n  .contact-info a:hover {\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .portfolio-button {\\r\\n    text-align: center;\\r\\n    margin: calc(var(--spacing-unit) * 8) 0;\\r\\n  }\\r\\n  \\r\\n  .portfolio-button button {\\r\\n    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 6);\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n    border: none;\\r\\n    border-radius: var(--border-radius);\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .portfolio-button button:hover {\\r\\n    background-color: #dd3c00; /* Slightly darker accent color */\\r\\n  }\\r\\n  \\r\\n  /* Footer */\\r\\n  footer {\\r\\n    background-color: var(--background-color);\\r\\n    color: var(--secondary-color);\\r\\n    text-align: center;\\r\\n    padding: calc(var(--spacing-unit) * 6);\\r\\n    margin-top: auto;\\r\\n    position: -webkit-sticky;\\r\\n    position: sticky;\\r\\n    bottom: 0;\\r\\n    z-index: ;\\r\\n  }\\r\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,+BAA+B;AAC/B;IACI,2BAA2B,EAAE,oBAAoB;IACjD,uBAAuB,EAAE,iBAAiB;IAC1C,wBAAwB,EAAE,+BAA+B;IACzD,0BAA0B,EAAE,yBAAyB;IACrD,mBAAmB,EAAE,0BAA0B;IAC/C,oBAAoB,EAAE,oCAAoC;IAC1D,kCAAkC;IAClC,0CAA0C,EAAE,kBAAkB;EAChE;;EAEA,4BAA4B;EAC5B;IACE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,+BAA+B;IAC/B,yCAAyC;IACzC,2BAA2B;IAC3B,gBAAgB;EAClB;;EAEA;IACE,UAAU;IACV,iBAAiB;IACjB,cAAc;IACd,sCAAsC;EACxC;;EAEA,oBAAoB;EACpB;IACE,aAAa;IACb,kCAAkC;EACpC;;EAEA;IACE,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA,WAAW;EACX;IACE,yCAAyC;IACzC,sCAAsC;IACtC,wBAAgB;IAAhB,gBAAgB;IAChB,MAAM;IACN,aAAa;IACb,6BAA6B;EAC/B;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,sCAAsC;EACxC;;EAEA;IACE,aAAa;IACb,kCAAkC;IAClC,gBAAgB;EAClB;;EAEA;IACE,qBAAqB;IACrB,0BAA0B;IAC1B,iBAAiB;IACjB,2BAA2B;EAC7B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA,qBAAqB;EACrB;IACE,aAAa;IACb,2DAA2D;IAC3D,uCAAkC;IAAlC,kCAAkC;IAClC,4CAA4C;EAC9C;;EAEA;IACE,mBAAmB,EAAE,qCAAqC;IAC1D,sCAAsC;IACtC,mCAAmC;IACnC,6BAA6B;EAC/B;;EAEA;IACE,4CAA4C;IAC5C,iBAAiB;EACnB;;EAEA;IACE,6BAA6B;IAC7B,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA,uBAAuB;EACvB;IACE,aAAa;IACb,eAAe;IACf,kCAAkC;IAClC,uBAAuB;IACvB,4CAA4C;EAC9C;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,mCAAmC;IACnC,6BAA6B;EAC/B;;EAEA,oBAAoB;EACpB;IACE,gBAAgB;IAChB,cAAc;IACd,sCAAsC;IACtC,2BAA2B;EAC7B;;EAEA;IACE,kBAAkB;IAClB,4CAA4C;EAC9C;;EAEA;IACE,uCAAuC;IACvC,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,0BAA0B;IAC1B,qBAAqB;IACrB,iBAAiB;EACnB;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,kBAAkB;IAClB,uCAAuC;EACzC;;EAEA;IACE,oEAAoE;IACpE,qCAAqC;IACrC,2BAA2B;IAC3B,YAAY;IACZ,mCAAmC;IACnC,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sCAAsC;EACxC;;EAEA;IACE,yBAAyB,EAAE,iCAAiC;EAC9D;;EAEA,WAAW;EACX;IACE,yCAAyC;IACzC,6BAA6B;IAC7B,kBAAkB;IAClB,sCAAsC;IACtC,gBAAgB;IAChB,wBAAgB;IAAhB,gBAAgB;IAChB,SAAS;IACT,SAAS;EACX\",\"sourcesContent\":[\"/* Root Variables for Styling */\\r\\n:root {\\r\\n    --background-color: #121212; /* Dark background */\\r\\n    --accent-color: #FF4400; /* Accent color */\\r\\n    --primary-color: #FFFFFF; /* Highlighted or title color */\\r\\n    --secondary-color: #888888; /* Secondary text color */\\r\\n    --spacing-unit: 4px; /* Base unit for spacing */\\r\\n    --border-radius: 8px; /* Rounded corners for modern look */\\r\\n    --font-family: 'Arial', sans-serif;\\r\\n    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* Subtle shadow */\\r\\n  }\\r\\n  \\r\\n  /* Reset & General Styling */\\r\\n  * {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n  \\r\\n  body {\\r\\n    font-family: var(--font-family);\\r\\n    background-color: var(--background-color);\\r\\n    color: var(--primary-color);\\r\\n    line-height: 1.6;\\r\\n  }\\r\\n  \\r\\n  .container {\\r\\n    width: 90%;\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n    padding: calc(var(--spacing-unit) * 4);\\r\\n  }\\r\\n  \\r\\n  /* Utility Classes */\\r\\n  .flex {\\r\\n    display: flex;\\r\\n    gap: calc(var(--spacing-unit) * 4);\\r\\n  }\\r\\n  \\r\\n  .flex-center {\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  \\r\\n  .left-align {\\r\\n    text-align: left;\\r\\n  }\\r\\n  \\r\\n  .center-align {\\r\\n    text-align: center;\\r\\n  }\\r\\n  \\r\\n  /* Header */\\r\\n  header {\\r\\n    background-color: var(--background-color);\\r\\n    padding: calc(var(--spacing-unit) * 4);\\r\\n    position: sticky;\\r\\n    top: 0;\\r\\n    z-index: 1000;\\r\\n    box-shadow: var(--box-shadow);\\r\\n  }\\r\\n  \\r\\n  header .navbar {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n  }\\r\\n  \\r\\n  .navbar .logo img {\\r\\n    height: calc(var(--spacing-unit) * 10);\\r\\n  }\\r\\n  \\r\\n  .navbar .nav-links {\\r\\n    display: flex;\\r\\n    gap: calc(var(--spacing-unit) * 6);\\r\\n    list-style: none;\\r\\n  }\\r\\n  \\r\\n  .navbar .nav-links a {\\r\\n    text-decoration: none;\\r\\n    color: var(--accent-color);\\r\\n    font-weight: bold;\\r\\n    transition: color 0.2s ease;\\r\\n  }\\r\\n  \\r\\n  .navbar .nav-links a:hover {\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  /* Features Section */\\r\\n  .features {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\r\\n    gap: calc(var(--spacing-unit) * 4);\\r\\n    margin-bottom: calc(var(--spacing-unit) * 8);\\r\\n  }\\r\\n  \\r\\n  .feature-card {\\r\\n    background: #1c1c1c; /* Slightly lighter than background */\\r\\n    padding: calc(var(--spacing-unit) * 6);\\r\\n    border-radius: var(--border-radius);\\r\\n    box-shadow: var(--box-shadow);\\r\\n  }\\r\\n  \\r\\n  .feature-card h3 {\\r\\n    margin-bottom: calc(var(--spacing-unit) * 4);\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n  \\r\\n  .feature-card p {\\r\\n    color: var(--secondary-color);\\r\\n    font-size: 0.9rem;\\r\\n    line-height: 1.4;\\r\\n  }\\r\\n  \\r\\n  /* Screenshot Section */\\r\\n  .screenshot-demo {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: calc(var(--spacing-unit) * 4);\\r\\n    justify-content: center;\\r\\n    margin-bottom: calc(var(--spacing-unit) * 8);\\r\\n  }\\r\\n  \\r\\n  .screenshot-demo img {\\r\\n    width: 100%;\\r\\n    max-width: 400px;\\r\\n    border-radius: var(--border-radius);\\r\\n    box-shadow: var(--box-shadow);\\r\\n  }\\r\\n  \\r\\n  /* Contact Section */\\r\\n  .contact-container {\\r\\n    max-width: 800px;\\r\\n    margin: 0 auto;\\r\\n    padding: calc(var(--spacing-unit) * 4);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .contact-container h1 {\\r\\n    text-align: center;\\r\\n    margin-bottom: calc(var(--spacing-unit) * 8);\\r\\n  }\\r\\n  \\r\\n  .contact-info p {\\r\\n    margin: calc(var(--spacing-unit) * 4) 0;\\r\\n    font-size: 1rem;\\r\\n    color: var(--secondary-color);\\r\\n  }\\r\\n  \\r\\n  .contact-info a {\\r\\n    color: var(--accent-color);\\r\\n    text-decoration: none;\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  \\r\\n  .contact-info a:hover {\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .portfolio-button {\\r\\n    text-align: center;\\r\\n    margin: calc(var(--spacing-unit) * 8) 0;\\r\\n  }\\r\\n  \\r\\n  .portfolio-button button {\\r\\n    padding: calc(var(--spacing-unit) * 3) calc(var(--spacing-unit) * 6);\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n    border: none;\\r\\n    border-radius: var(--border-radius);\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .portfolio-button button:hover {\\r\\n    background-color: #dd3c00; /* Slightly darker accent color */\\r\\n  }\\r\\n  \\r\\n  /* Footer */\\r\\n  footer {\\r\\n    background-color: var(--background-color);\\r\\n    color: var(--secondary-color);\\r\\n    text-align: center;\\r\\n    padding: calc(var(--spacing-unit) * 6);\\r\\n    margin-top: auto;\\r\\n    position: sticky;\\r\\n    bottom: 0;\\r\\n    z-index: ;\\r\\n  }\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxMl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEyXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxxRkFBcUYscUNBQXFDLHNEQUFzRCxvREFBb0Qsb0VBQW9FLHVEQUF1RCx5REFBeUQsZ0ZBQWdGLG9EQUFvRCwwQkFBMEIsa0RBQWtELGtCQUFrQixtQkFBbUIsK0JBQStCLE9BQU8sa0JBQWtCLHdDQUF3QyxrREFBa0Qsb0NBQW9DLHlCQUF5QixPQUFPLHdCQUF3QixtQkFBbUIsMEJBQTBCLHVCQUF1QiwrQ0FBK0MsT0FBTyw4Q0FBOEMsc0JBQXNCLDJDQUEyQyxPQUFPLDBCQUEwQixnQ0FBZ0MsNEJBQTRCLE9BQU8seUJBQXlCLHlCQUF5QixPQUFPLDJCQUEyQiwyQkFBMkIsT0FBTyxzQ0FBc0Msa0RBQWtELCtDQUErQyxpQ0FBaUMseUJBQXlCLGVBQWUsc0JBQXNCLHNDQUFzQyxPQUFPLDRCQUE0QixzQkFBc0IsdUNBQXVDLDRCQUE0QixPQUFPLCtCQUErQiwrQ0FBK0MsT0FBTyxnQ0FBZ0Msc0JBQXNCLDJDQUEyQyx5QkFBeUIsT0FBTyxrQ0FBa0MsOEJBQThCLG1DQUFtQywwQkFBMEIsb0NBQW9DLE9BQU8sd0NBQXdDLG9DQUFvQyxPQUFPLG1EQUFtRCxzQkFBc0Isb0VBQW9FLGdEQUFnRCwyQ0FBMkMscURBQXFELE9BQU8sMkJBQTJCLDZCQUE2QixxRkFBcUYsNENBQTRDLHNDQUFzQyxPQUFPLDhCQUE4Qixx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QUFvQyxPQUFPLG1EQUFtRCxzQkFBc0Isb0VBQW9FLDJDQUEyQyxxREFBcUQsT0FBTywyQkFBMkIsNkJBQTZCLHFGQUFxRiw0Q0FBNEMsc0NBQXNDLE9BQU8sOEJBQThCLHFEQUFxRCwwQkFBMEIsT0FBTyw2QkFBNkIsc0NBQXNDLDBCQUEwQix5QkFBeUIsT0FBTyw0REFBNEQsc0JBQXNCLHdCQUF3QiwyQ0FBMkMsZ0NBQWdDLHFEQUFxRCxPQUFPLGtDQUFrQyxvQkFBb0IseUJBQXlCLDRDQUE0QyxzQ0FBc0MsT0FBTywyREFBMkQseUJBQXlCLHVCQUF1QiwrQ0FBK0Msb0NBQW9DLE9BQU8sbUNBQW1DLDJCQUEyQixxREFBcUQsT0FBTyw2QkFBNkIsZ0RBQWdELHdCQUF3QixzQ0FBc0MsT0FBTyw2QkFBNkIsbUNBQW1DLDhCQUE4QiwwQkFBMEIsT0FBTyxtQ0FBbUMsb0NBQW9DLE9BQU8sK0JBQStCLDJCQUEyQixnREFBZ0QsT0FBTyxzQ0FBc0MsNkVBQTZFLDhDQUE4QyxvQ0FBb0MscUJBQXFCLDRDQUE0Qyx3QkFBd0IsMEJBQTBCLHdCQUF3QiwrQ0FBK0MsT0FBTyw0Q0FBNEMsbUNBQW1DLHlDQUF5QyxzQ0FBc0Msa0RBQWtELHNDQUFzQywyQkFBMkIsK0NBQStDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLGtCQUFrQixPQUFPLHlCQUF5QjtBQUMzK1c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxCb29nYVxcT25lRHJpdmVcXERlc2t0b3BcXEFQLTI0MjVcXENFXFxMQUJWXFxsYWJWXFxzcmNcXHN0eWxlc1xcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJvb3QgVmFyaWFibGVzIGZvciBTdHlsaW5nICovXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7IC8qIERhcmsgYmFja2dyb3VuZCAqL1xcclxcbiAgICAtLWFjY2VudC1jb2xvcjogI0ZGNDQwMDsgLyogQWNjZW50IGNvbG9yICovXFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogI0ZGRkZGRjsgLyogSGlnaGxpZ2h0ZWQgb3IgdGl0bGUgY29sb3IgKi9cXHJcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICM4ODg4ODg7IC8qIFNlY29uZGFyeSB0ZXh0IGNvbG9yICovXFxyXFxuICAgIC0tc3BhY2luZy11bml0OiA0cHg7IC8qIEJhc2UgdW5pdCBmb3Igc3BhY2luZyAqL1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciBtb2Rlcm4gbG9vayAqL1xcclxcbiAgICAtLWZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIFN1YnRsZSBzaGFkb3cgKi9cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogUmVzZXQgJiBHZW5lcmFsIFN0eWxpbmcgKi9cXHJcXG4gICoge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA0KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVXRpbGl0eSBDbGFzc2VzICovXFxyXFxuICAuZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogNCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mbGV4LWNlbnRlciB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubGVmdC1hbGlnbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jZW50ZXItYWxpZ24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEhlYWRlciAqL1xcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGhlYWRlciAubmF2YmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2YmFyIC5sb2dvIGltZyB7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogMTApO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2YmFyIC5uYXYtbGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDYpO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubmF2YmFyIC5uYXYtbGlua3MgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZiYXIgLm5hdi1saW5rcyBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGZWF0dXJlcyBTZWN0aW9uICovXFxyXFxuICAuZmVhdHVyZXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ3JpZC1nYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZlYXR1cmUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxYzFjMWM7IC8qIFNsaWdodGx5IGxpZ2h0ZXIgdGhhbiBiYWNrZ3JvdW5kICovXFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDYpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mZWF0dXJlLWNhcmQgaDMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mZWF0dXJlLWNhcmQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU2NyZWVuc2hvdCBTZWN0aW9uICovXFxyXFxuICAuc2NyZWVuc2hvdC1kZW1vIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogOCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zY3JlZW5zaG90LWRlbW8gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ29udGFjdCBTZWN0aW9uICovXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogNCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaW5mbyBwIHtcXHJcXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA0KSAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1pbmZvIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaW5mbyBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9ydGZvbGlvLWJ1dHRvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA4KSAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9ydGZvbGlvLWJ1dHRvbiBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiAzKSBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9ydGZvbGlvLWJ1dHRvbiBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQzYzAwOyAvKiBTbGlnaHRseSBkYXJrZXIgYWNjZW50IGNvbG9yICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZvb3RlciAqL1xcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDYpO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogO1xcclxcbiAgfVxcclxcbiAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK0JBQStCO0FBQy9CO0lBQ0ksMkJBQTJCLEVBQUUsb0JBQW9CO0lBQ2pELHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQyx3QkFBd0IsRUFBRSwrQkFBK0I7SUFDekQsMEJBQTBCLEVBQUUseUJBQXlCO0lBQ3JELG1CQUFtQixFQUFFLDBCQUEwQjtJQUMvQyxvQkFBb0IsRUFBRSxvQ0FBb0M7SUFDMUQsa0NBQWtDO0lBQ2xDLDBDQUEwQyxFQUFFLGtCQUFrQjtFQUNoRTs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNDQUFzQztFQUN4Qzs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxhQUFhO0lBQ2Isa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQSxXQUFXO0VBQ1g7SUFDRSx5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsdUNBQWtDO0lBQWxDLGtDQUFrQztJQUNsQyw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxtQkFBbUIsRUFBRSxxQ0FBcUM7SUFDMUQsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSw0Q0FBNEM7SUFDNUMsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUEsdUJBQXVCO0VBQ3ZCO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDZCQUE2QjtFQUMvQjs7RUFFQSxvQkFBb0I7RUFDcEI7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNDQUFzQztJQUN0QywyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxvRUFBb0U7SUFDcEUscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLGlDQUFpQztFQUM5RDs7RUFFQSxXQUFXO0VBQ1g7SUFDRSx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFNBQVM7RUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSb290IFZhcmlhYmxlcyBmb3IgU3R5bGluZyAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyOyAvKiBEYXJrIGJhY2tncm91bmQgKi9cXHJcXG4gICAgLS1hY2NlbnQtY29sb3I6ICNGRjQ0MDA7IC8qIEFjY2VudCBjb2xvciAqL1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICNGRkZGRkY7IC8qIEhpZ2hsaWdodGVkIG9yIHRpdGxlIGNvbG9yICovXFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjODg4ODg4OyAvKiBTZWNvbmRhcnkgdGV4dCBjb2xvciAqL1xcclxcbiAgICAtLXNwYWNpbmctdW5pdDogNHB4OyAvKiBCYXNlIHVuaXQgZm9yIHNwYWNpbmcgKi9cXHJcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgbW9kZXJuIGxvb2sgKi9cXHJcXG4gICAgLS1mb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBTdWJ0bGUgc2hhZG93ICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJlc2V0ICYgR2VuZXJhbCBTdHlsaW5nICovXFxyXFxuICAqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogNCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xcclxcbiAgLmZsZXgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZmxleC1jZW50ZXIge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxlZnQtYWxpZ24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2VudGVyLWFsaWduIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBIZWFkZXIgKi9cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA0KTtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgaGVhZGVyIC5uYXZiYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZiYXIgLmxvZ28gaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiAxMCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZiYXIgLm5hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogNik7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5uYXZiYXIgLm5hdi1saW5rcyBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm5hdmJhciAubmF2LWxpbmtzIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZlYXR1cmVzIFNlY3Rpb24gKi9cXHJcXG4gIC5mZWF0dXJlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZlYXR1cmUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxYzFjMWM7IC8qIFNsaWdodGx5IGxpZ2h0ZXIgdGhhbiBiYWNrZ3JvdW5kICovXFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDYpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mZWF0dXJlLWNhcmQgaDMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mZWF0dXJlLWNhcmQgcCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogU2NyZWVuc2hvdCBTZWN0aW9uICovXFxyXFxuICAuc2NyZWVuc2hvdC1kZW1vIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDQpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogOCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zY3JlZW5zaG90LWRlbW8gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ29udGFjdCBTZWN0aW9uICovXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1zcGFjaW5nLXVuaXQpICogNCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtY29udGFpbmVyIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaW5mbyBwIHtcXHJcXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA0KSAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1pbmZvIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaW5mbyBhOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9ydGZvbGlvLWJ1dHRvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA4KSAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9ydGZvbGlvLWJ1dHRvbiBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiAzKSBjYWxjKHZhcigtLXNwYWNpbmctdW5pdCkgKiA2KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucG9ydGZvbGlvLWJ1dHRvbiBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQzYzAwOyAvKiBTbGlnaHRseSBkYXJrZXIgYWNjZW50IGNvbG9yICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZvb3RlciAqL1xcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tc3BhY2luZy11bml0KSAqIDYpO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHotaW5kZXg6IDtcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[12].use[2]!./src/styles/globals.css\n"));

/***/ })

});