/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[2]!./src/styles/AutoCarousel.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[2]!./src/styles/AutoCarousel.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Main Container */\\r\\n.AutoCarousel_container__mGb58 {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding: 16px;\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n  \\r\\n  /* Mode Switch Container */\\r\\n  .AutoCarousel_mode-switch-container___kOAf {\\r\\n    width: 100%;\\r\\n    margin-bottom: 32px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ {\\r\\n    display: flex;\\r\\n    gap: 32px;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ button {\\r\\n    padding: 16px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ button:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ button.AutoCarousel_active__zuf6E {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  /* Carousel Wrapper */\\r\\n  .AutoCarousel_auto-carousel__bb9xC {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    background-color: #121212;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n    padding: 32px;\\r\\n    border-radius: 8px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\\r\\n  }\\r\\n  \\r\\n  /* Carousel Content */\\r\\n  .AutoCarousel_carousel-content__Vs2rP {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-image-wrapper__RqjBh {\\r\\n    width: 300px;\\r\\n    aspect-ratio: 9 / 19.5;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    overflow: hidden;\\r\\n    border-radius: 6px;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-image__QgvD3 {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-text__oQS_H {\\r\\n    flex: 1 1;\\r\\n    color: var(--primary-color);\\r\\n    text-align: left;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-text__oQS_H h2 {\\r\\n    font-size: 1.5rem;\\r\\n    margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-text__oQS_H p {\\r\\n    font-size: 1rem;\\r\\n    color: var(--secondary-color);\\r\\n  }\\r\\n  \\r\\n  /* Pagination Controls */\\r\\n  .AutoCarousel_pagination__nBhTM {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 16px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_prev-button__d0ErS,\\r\\n  .AutoCarousel_next-button__mgV50 {\\r\\n    padding: 12px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_prev-button__d0ErS:hover,\\r\\n  .AutoCarousel_next-button__mgV50:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_progress-bar__RnvM2 {\\r\\n    flex: 1 1;\\r\\n    height: 6px;\\r\\n    background-color: #333;\\r\\n    border-radius: 3px;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_progress__6nXpl {\\r\\n    height: 100%;\\r\\n    background-color: var(--accent-color);\\r\\n    transition: width 0.1s linear;\\r\\n  }\\r\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/AutoCarousel.module.css\"],\"names\":[],\"mappings\":\"AAAA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,cAAc;EAChB;;EAEA,0BAA0B;EAC1B;IACE,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sCAAsC;EACxC;;EAEA;IACE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA;IACE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA,qBAAqB;EACrB;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,SAAS;IACT,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,yCAAyC;EAC3C;;EAEA,qBAAqB;EACrB;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,SAAO;IACP,2BAA2B;IAC3B,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,6BAA6B;EAC/B;;EAEA,wBAAwB;EACxB;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,WAAW;EACb;;EAEA;;IAEE,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sCAAsC;EACxC;;EAEA;;IAEE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA;IACE,SAAO;IACP,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,qCAAqC;IACrC,6BAA6B;EAC/B\",\"sourcesContent\":[\"/* Main Container */\\r\\n.container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    padding: 16px;\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n  \\r\\n  /* Mode Switch Container */\\r\\n  .mode-switch-container {\\r\\n    width: 100%;\\r\\n    margin-bottom: 32px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  \\r\\n  .mode-switch {\\r\\n    display: flex;\\r\\n    gap: 32px;\\r\\n  }\\r\\n  \\r\\n  .mode-switch button {\\r\\n    padding: 16px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .mode-switch button:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .mode-switch button.active {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  /* Carousel Wrapper */\\r\\n  .auto-carousel {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    background-color: #121212;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n    padding: 32px;\\r\\n    border-radius: 8px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\\r\\n  }\\r\\n  \\r\\n  /* Carousel Content */\\r\\n  .carousel-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .carousel-image-wrapper {\\r\\n    width: 300px;\\r\\n    aspect-ratio: 9 / 19.5;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    overflow: hidden;\\r\\n    border-radius: 6px;\\r\\n  }\\r\\n  \\r\\n  .carousel-image {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  \\r\\n  .carousel-text {\\r\\n    flex: 1;\\r\\n    color: var(--primary-color);\\r\\n    text-align: left;\\r\\n  }\\r\\n  \\r\\n  .carousel-text h2 {\\r\\n    font-size: 1.5rem;\\r\\n    margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .carousel-text p {\\r\\n    font-size: 1rem;\\r\\n    color: var(--secondary-color);\\r\\n  }\\r\\n  \\r\\n  /* Pagination Controls */\\r\\n  .pagination {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 16px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .prev-button,\\r\\n  .next-button {\\r\\n    padding: 12px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .prev-button:hover,\\r\\n  .next-button:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .progress-bar {\\r\\n    flex: 1;\\r\\n    height: 6px;\\r\\n    background-color: #333;\\r\\n    border-radius: 3px;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  \\r\\n  .progress {\\r\\n    height: 100%;\\r\\n    background-color: var(--accent-color);\\r\\n    transition: width 0.1s linear;\\r\\n  }\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"AutoCarousel_container__mGb58\",\n\t\"mode-switch-container\": \"AutoCarousel_mode-switch-container___kOAf\",\n\t\"mode-switch\": \"AutoCarousel_mode-switch__rED9_\",\n\t\"active\": \"AutoCarousel_active__zuf6E\",\n\t\"auto-carousel\": \"AutoCarousel_auto-carousel__bb9xC\",\n\t\"carousel-content\": \"AutoCarousel_carousel-content__Vs2rP\",\n\t\"carousel-image-wrapper\": \"AutoCarousel_carousel-image-wrapper__RqjBh\",\n\t\"carousel-image\": \"AutoCarousel_carousel-image__QgvD3\",\n\t\"carousel-text\": \"AutoCarousel_carousel-text__oQS_H\",\n\t\"pagination\": \"AutoCarousel_pagination__nBhTM\",\n\t\"prev-button\": \"AutoCarousel_prev-button__d0ErS\",\n\t\"next-button\": \"AutoCarousel_next-button__mgV50\",\n\t\"progress-bar\": \"AutoCarousel_progress-bar__RnvM2\",\n\t\"progress\": \"AutoCarousel_progress__6nXpl\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls3XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbN10udXNlWzJdIS4vc3JjL3N0eWxlcy9BdXRvQ2Fyb3VzZWwubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHNLQUFrRjtBQUM1SDtBQUNBO0FBQ0Esa0dBQWtHLHNCQUFzQiwrQkFBK0IsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLE9BQU8seUZBQXlGLG9CQUFvQiw0QkFBNEIsc0JBQXNCLGdDQUFnQyxPQUFPLDhDQUE4QyxzQkFBc0Isa0JBQWtCLE9BQU8scURBQXFELDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsK0NBQStDLE9BQU8sMkRBQTJELDhDQUE4QyxvQ0FBb0MsT0FBTyxnRkFBZ0YsOENBQThDLG9DQUFvQyxPQUFPLDRFQUE0RSxzQkFBc0IsK0JBQStCLDRCQUE0QixrQ0FBa0Msa0JBQWtCLG9CQUFvQixzQkFBc0IsMkJBQTJCLHlCQUF5QixrREFBa0QsT0FBTywrRUFBK0Usc0JBQXNCLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLG9CQUFvQixPQUFPLHlEQUF5RCxxQkFBcUIsK0JBQStCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QiwyQkFBMkIsT0FBTyxpREFBaUQsb0JBQW9CLHFCQUFxQiwwQkFBMEIsT0FBTyxnREFBZ0Qsa0JBQWtCLG9DQUFvQyx5QkFBeUIsT0FBTyxtREFBbUQsMEJBQTBCLDRCQUE0QixPQUFPLGtEQUFrRCx3QkFBd0Isc0NBQXNDLE9BQU8sNEVBQTRFLHNCQUFzQiw0QkFBNEIsa0JBQWtCLG9CQUFvQixPQUFPLHFGQUFxRiwyQkFBMkIsa0NBQWtDLHNDQUFzQyxxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLCtDQUErQyxPQUFPLGlHQUFpRyw4Q0FBOEMsb0NBQW9DLE9BQU8sK0NBQStDLGtCQUFrQixvQkFBb0IsK0JBQStCLDJCQUEyQix5QkFBeUIsT0FBTywyQ0FBMkMscUJBQXFCLDhDQUE4QyxzQ0FBc0MsT0FBTyxhQUFhLDBHQUEwRyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsOERBQThELHNCQUFzQiwrQkFBK0IsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLE9BQU8scUVBQXFFLG9CQUFvQiw0QkFBNEIsc0JBQXNCLGdDQUFnQyxPQUFPLDBCQUEwQixzQkFBc0Isa0JBQWtCLE9BQU8saUNBQWlDLDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsK0NBQStDLE9BQU8sdUNBQXVDLDhDQUE4QyxvQ0FBb0MsT0FBTyx3Q0FBd0MsOENBQThDLG9DQUFvQyxPQUFPLHdEQUF3RCxzQkFBc0IsK0JBQStCLDRCQUE0QixrQ0FBa0Msa0JBQWtCLG9CQUFvQixzQkFBc0IsMkJBQTJCLHlCQUF5QixrREFBa0QsT0FBTywyREFBMkQsc0JBQXNCLDRCQUE0Qiw0QkFBNEIsa0JBQWtCLG9CQUFvQixPQUFPLHFDQUFxQyxxQkFBcUIsK0JBQStCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QiwyQkFBMkIsT0FBTyw2QkFBNkIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsT0FBTyw0QkFBNEIsZ0JBQWdCLG9DQUFvQyx5QkFBeUIsT0FBTywrQkFBK0IsMEJBQTBCLDRCQUE0QixPQUFPLDhCQUE4Qix3QkFBd0Isc0NBQXNDLE9BQU8sd0RBQXdELHNCQUFzQiw0QkFBNEIsa0JBQWtCLG9CQUFvQixPQUFPLDZDQUE2QywyQkFBMkIsa0NBQWtDLHNDQUFzQyxxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLCtDQUErQyxPQUFPLHlEQUF5RCw4Q0FBOEMsb0NBQW9DLE9BQU8sMkJBQTJCLGdCQUFnQixvQkFBb0IsK0JBQStCLDJCQUEyQix5QkFBeUIsT0FBTyx1QkFBdUIscUJBQXFCLDhDQUE4QyxzQ0FBc0MsT0FBTyx5QkFBeUI7QUFDdnlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxCb29nYVxcT25lRHJpdmVcXERlc2t0b3BcXEFQLTI0MjVcXENFXFxMQUJWXFxsYWJWXFxzcmNcXHN0eWxlc1xcQXV0b0Nhcm91c2VsLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE1haW4gQ29udGFpbmVyICovXFxyXFxuLkF1dG9DYXJvdXNlbF9jb250YWluZXJfX21HYjU4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RlIFN3aXRjaCBDb250YWluZXIgKi9cXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2gtY29udGFpbmVyX19fa09BZiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9tb2RlLXN3aXRjaF9fckVEOV8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2hfX3JFRDlfIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX21vZGUtc3dpdGNoX19yRUQ5XyBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2hfX3JFRDlfIGJ1dHRvbi5BdXRvQ2Fyb3VzZWxfYWN0aXZlX196dWY2RSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ2Fyb3VzZWwgV3JhcHBlciAqL1xcclxcbiAgLkF1dG9DYXJvdXNlbF9hdXRvLWNhcm91c2VsX19iYjl4QyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIENhcm91c2VsIENvbnRlbnQgKi9cXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtY29udGVudF9fVnMyclAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX2Nhcm91c2VsLWltYWdlLXdyYXBwZXJfX1JxakJoIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDkgLyAxOS41O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX2Nhcm91c2VsLWltYWdlX19RZ3ZEMyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX2Nhcm91c2VsLXRleHRfX29RU19IIHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtdGV4dF9fb1FTX0ggaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9jYXJvdXNlbC10ZXh0X19vUVNfSCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogUGFnaW5hdGlvbiBDb250cm9scyAqL1xcclxcbiAgLkF1dG9DYXJvdXNlbF9wYWdpbmF0aW9uX19uQmhUTSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfcHJldi1idXR0b25fX2QwRXJTLFxcclxcbiAgLkF1dG9DYXJvdXNlbF9uZXh0LWJ1dHRvbl9fbWdWNTAge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9wcmV2LWJ1dHRvbl9fZDBFclM6aG92ZXIsXFxyXFxuICAuQXV0b0Nhcm91c2VsX25leHQtYnV0dG9uX19tZ1Y1MDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9wcm9ncmVzcy1iYXJfX1Judk0yIHtcXHJcXG4gICAgZmxleDogMSAxO1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX3Byb2dyZXNzX182blhwbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBsaW5lYXI7XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9BdXRvQ2Fyb3VzZWwubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUEsMEJBQTBCO0VBQzFCO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQywyQkFBMkI7RUFDN0I7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUNBQXlDO0VBQzNDOztFQUVBLHFCQUFxQjtFQUNyQjtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQU87SUFDUCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUEsd0JBQXdCO0VBQ3hCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0NBQXNDO0VBQ3hDOztFQUVBOztJQUVFLHFDQUFxQztJQUNyQywyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxTQUFPO0lBQ1AsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyw2QkFBNkI7RUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBDb250YWluZXIgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RlIFN3aXRjaCBDb250YWluZXIgKi9cXHJcXG4gIC5tb2RlLXN3aXRjaC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RlLXN3aXRjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGUtc3dpdGNoIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kZS1zd2l0Y2ggYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kZS1zd2l0Y2ggYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ2Fyb3VzZWwgV3JhcHBlciAqL1xcclxcbiAgLmF1dG8tY2Fyb3VzZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAzMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBDYXJvdXNlbCBDb250ZW50ICovXFxyXFxuICAuY2Fyb3VzZWwtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC1pbWFnZS13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDkgLyAxOS41O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2Fyb3VzZWwtaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcm91c2VsLXRleHQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC10ZXh0IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC10ZXh0IHAge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBQYWdpbmF0aW9uIENvbnRyb2xzICovXFxyXFxuICAucGFnaW5hdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wcmV2LWJ1dHRvbixcXHJcXG4gIC5uZXh0LWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucHJldi1idXR0b246aG92ZXIsXFxyXFxuICAubmV4dC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wcm9ncmVzcy1iYXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucHJvZ3Jlc3Mge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgbGluZWFyO1xcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQXV0b0Nhcm91c2VsX2NvbnRhaW5lcl9fbUdiNThcIixcblx0XCJtb2RlLXN3aXRjaC1jb250YWluZXJcIjogXCJBdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2gtY29udGFpbmVyX19fa09BZlwiLFxuXHRcIm1vZGUtc3dpdGNoXCI6IFwiQXV0b0Nhcm91c2VsX21vZGUtc3dpdGNoX19yRUQ5X1wiLFxuXHRcImFjdGl2ZVwiOiBcIkF1dG9DYXJvdXNlbF9hY3RpdmVfX3p1ZjZFXCIsXG5cdFwiYXV0by1jYXJvdXNlbFwiOiBcIkF1dG9DYXJvdXNlbF9hdXRvLWNhcm91c2VsX19iYjl4Q1wiLFxuXHRcImNhcm91c2VsLWNvbnRlbnRcIjogXCJBdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtY29udGVudF9fVnMyclBcIixcblx0XCJjYXJvdXNlbC1pbWFnZS13cmFwcGVyXCI6IFwiQXV0b0Nhcm91c2VsX2Nhcm91c2VsLWltYWdlLXdyYXBwZXJfX1JxakJoXCIsXG5cdFwiY2Fyb3VzZWwtaW1hZ2VcIjogXCJBdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtaW1hZ2VfX1FndkQzXCIsXG5cdFwiY2Fyb3VzZWwtdGV4dFwiOiBcIkF1dG9DYXJvdXNlbF9jYXJvdXNlbC10ZXh0X19vUVNfSFwiLFxuXHRcInBhZ2luYXRpb25cIjogXCJBdXRvQ2Fyb3VzZWxfcGFnaW5hdGlvbl9fbkJoVE1cIixcblx0XCJwcmV2LWJ1dHRvblwiOiBcIkF1dG9DYXJvdXNlbF9wcmV2LWJ1dHRvbl9fZDBFclNcIixcblx0XCJuZXh0LWJ1dHRvblwiOiBcIkF1dG9DYXJvdXNlbF9uZXh0LWJ1dHRvbl9fbWdWNTBcIixcblx0XCJwcm9ncmVzcy1iYXJcIjogXCJBdXRvQ2Fyb3VzZWxfcHJvZ3Jlc3MtYmFyX19SbnZNMlwiLFxuXHRcInByb2dyZXNzXCI6IFwiQXV0b0Nhcm91c2VsX3Byb2dyZXNzX182blhwbFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[2]!./src/styles/AutoCarousel.module.css\n"));

/***/ })

});