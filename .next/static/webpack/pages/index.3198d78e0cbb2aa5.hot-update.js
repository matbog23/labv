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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Main Container */\\r\\n.AutoCarousel_container__mGb58 {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 16px;\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n  \\r\\n  /* Carousel Wrapper */\\r\\n  .AutoCarousel_auto-carousel__bb9xC {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    background-color: #121212;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n    padding: 32px;\\r\\n    border-radius: 8px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\\r\\n  }\\r\\n  \\r\\n  /* Carousel Content */\\r\\n  .AutoCarousel_carousel-content__Vs2rP {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-image-wrapper__RqjBh {\\r\\n    width: 300px;\\r\\n    aspect-ratio: 9 / 19.5;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    overflow: hidden;\\r\\n    border-radius: 6px;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-image__QgvD3 {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-text__oQS_H {\\r\\n    flex: 1 1;\\r\\n    color: var(--primary-color);\\r\\n    text-align: left;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-text__oQS_H h2 {\\r\\n    font-size: 1.5rem;\\r\\n    margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_carousel-text__oQS_H p {\\r\\n    font-size: 1rem;\\r\\n    color: var(--secondary-color);\\r\\n  }\\r\\n  \\r\\n  /* Pagination Controls */\\r\\n  .AutoCarousel_pagination__nBhTM {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 16px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_prev-button__d0ErS,\\r\\n  .AutoCarousel_next-button__mgV50 {\\r\\n    padding: 12px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_prev-button__d0ErS:hover,\\r\\n  .AutoCarousel_next-button__mgV50:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_progress-bar__RnvM2 {\\r\\n    flex: 1 1;\\r\\n    height: 6px;\\r\\n    background-color: #333;\\r\\n    border-radius: 3px;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_progress__6nXpl {\\r\\n    height: 100%;\\r\\n    background-color: var(--accent-color);\\r\\n    transition: width 0.1s linear;\\r\\n  }\\r\\n  \\r\\n  /* Mode Switch */\\r\\n  .AutoCarousel_mode-switch-container___kOAf {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ {\\r\\n    display: flex;\\r\\n    gap: 32px;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ button {\\r\\n    padding: 16px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ button:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .AutoCarousel_mode-switch__rED9_ button.AutoCarousel_active__zuf6E {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/AutoCarousel.module.css\"],\"names\":[],\"mappings\":\"AAAA,mBAAmB;AACnB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,iBAAiB;IACjB,cAAc;EAChB;;EAEA,qBAAqB;EACrB;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,SAAS;IACT,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,yCAAyC;EAC3C;;EAEA,qBAAqB;EACrB;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,SAAO;IACP,2BAA2B;IAC3B,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,6BAA6B;EAC/B;;EAEA,wBAAwB;EACxB;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,WAAW;EACb;;EAEA;;IAEE,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sCAAsC;EACxC;;EAEA;;IAEE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA;IACE,SAAO;IACP,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,qCAAqC;IACrC,6BAA6B;EAC/B;;EAEA,gBAAgB;EAChB;IACE,aAAa;IACb,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sCAAsC;EACxC;;EAEA;IACE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA;IACE,qCAAqC;IACrC,2BAA2B;EAC7B\",\"sourcesContent\":[\"/* Main Container */\\r\\n.container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 16px;\\r\\n    max-width: 1200px;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n  \\r\\n  /* Carousel Wrapper */\\r\\n  .auto-carousel {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    background-color: #121212;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n    padding: 32px;\\r\\n    border-radius: 8px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\\r\\n  }\\r\\n  \\r\\n  /* Carousel Content */\\r\\n  .carousel-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .carousel-image-wrapper {\\r\\n    width: 300px;\\r\\n    aspect-ratio: 9 / 19.5;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    overflow: hidden;\\r\\n    border-radius: 6px;\\r\\n  }\\r\\n  \\r\\n  .carousel-image {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  \\r\\n  .carousel-text {\\r\\n    flex: 1;\\r\\n    color: var(--primary-color);\\r\\n    text-align: left;\\r\\n  }\\r\\n  \\r\\n  .carousel-text h2 {\\r\\n    font-size: 1.5rem;\\r\\n    margin-bottom: 16px;\\r\\n  }\\r\\n  \\r\\n  .carousel-text p {\\r\\n    font-size: 1rem;\\r\\n    color: var(--secondary-color);\\r\\n  }\\r\\n  \\r\\n  /* Pagination Controls */\\r\\n  .pagination {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 16px;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .prev-button,\\r\\n  .next-button {\\r\\n    padding: 12px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .prev-button:hover,\\r\\n  .next-button:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .progress-bar {\\r\\n    flex: 1;\\r\\n    height: 6px;\\r\\n    background-color: #333;\\r\\n    border-radius: 3px;\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  \\r\\n  .progress {\\r\\n    height: 100%;\\r\\n    background-color: var(--accent-color);\\r\\n    transition: width 0.1s linear;\\r\\n  }\\r\\n  \\r\\n  /* Mode Switch */\\r\\n  .mode-switch-container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .mode-switch {\\r\\n    display: flex;\\r\\n    gap: 32px;\\r\\n  }\\r\\n  \\r\\n  .mode-switch button {\\r\\n    padding: 16px 24px;\\r\\n    background-color: #1c1c1c;\\r\\n    color: var(--secondary-color);\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n    transition: background-color 0.3s ease;\\r\\n  }\\r\\n  \\r\\n  .mode-switch button:hover {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \\r\\n  .mode-switch button.active {\\r\\n    background-color: var(--accent-color);\\r\\n    color: var(--primary-color);\\r\\n  }\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"AutoCarousel_container__mGb58\",\n\t\"auto-carousel\": \"AutoCarousel_auto-carousel__bb9xC\",\n\t\"carousel-content\": \"AutoCarousel_carousel-content__Vs2rP\",\n\t\"carousel-image-wrapper\": \"AutoCarousel_carousel-image-wrapper__RqjBh\",\n\t\"carousel-image\": \"AutoCarousel_carousel-image__QgvD3\",\n\t\"carousel-text\": \"AutoCarousel_carousel-text__oQS_H\",\n\t\"pagination\": \"AutoCarousel_pagination__nBhTM\",\n\t\"prev-button\": \"AutoCarousel_prev-button__d0ErS\",\n\t\"next-button\": \"AutoCarousel_next-button__mgV50\",\n\t\"progress-bar\": \"AutoCarousel_progress-bar__RnvM2\",\n\t\"progress\": \"AutoCarousel_progress__6nXpl\",\n\t\"mode-switch-container\": \"AutoCarousel_mode-switch-container___kOAf\",\n\t\"mode-switch\": \"AutoCarousel_mode-switch__rED9_\",\n\t\"active\": \"AutoCarousel_active__zuf6E\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls3XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbN10udXNlWzJdIS4vc3JjL3N0eWxlcy9BdXRvQ2Fyb3VzZWwubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHNLQUFrRjtBQUM1SDtBQUNBO0FBQ0Esa0dBQWtHLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLE9BQU8sNEVBQTRFLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGtDQUFrQyxrQkFBa0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIseUJBQXlCLGtEQUFrRCxPQUFPLCtFQUErRSxzQkFBc0IsNEJBQTRCLDRCQUE0QixrQkFBa0Isb0JBQW9CLE9BQU8seURBQXlELHFCQUFxQiwrQkFBK0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIseUJBQXlCLDJCQUEyQixPQUFPLGlEQUFpRCxvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLGdEQUFnRCxrQkFBa0Isb0NBQW9DLHlCQUF5QixPQUFPLG1EQUFtRCwwQkFBMEIsNEJBQTRCLE9BQU8sa0RBQWtELHdCQUF3QixzQ0FBc0MsT0FBTyw0RUFBNEUsc0JBQXNCLDRCQUE0QixrQkFBa0Isb0JBQW9CLE9BQU8scUZBQXFGLDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsK0NBQStDLE9BQU8saUdBQWlHLDhDQUE4QyxvQ0FBb0MsT0FBTywrQ0FBK0Msa0JBQWtCLG9CQUFvQiwrQkFBK0IsMkJBQTJCLHlCQUF5QixPQUFPLDJDQUEyQyxxQkFBcUIsOENBQThDLHNDQUFzQyxPQUFPLCtFQUErRSxzQkFBc0IsZ0NBQWdDLG9CQUFvQixPQUFPLDhDQUE4QyxzQkFBc0Isa0JBQWtCLE9BQU8scURBQXFELDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsK0NBQStDLE9BQU8sMkRBQTJELDhDQUE4QyxvQ0FBb0MsT0FBTyxnRkFBZ0YsOENBQThDLG9DQUFvQyxPQUFPLGFBQWEsMEdBQTBHLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsOERBQThELHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLE9BQU8sd0RBQXdELHNCQUFzQiwrQkFBK0IsNEJBQTRCLGtDQUFrQyxrQkFBa0Isb0JBQW9CLHNCQUFzQiwyQkFBMkIseUJBQXlCLGtEQUFrRCxPQUFPLDJEQUEyRCxzQkFBc0IsNEJBQTRCLDRCQUE0QixrQkFBa0Isb0JBQW9CLE9BQU8scUNBQXFDLHFCQUFxQiwrQkFBK0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIseUJBQXlCLDJCQUEyQixPQUFPLDZCQUE2QixvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLDRCQUE0QixnQkFBZ0Isb0NBQW9DLHlCQUF5QixPQUFPLCtCQUErQiwwQkFBMEIsNEJBQTRCLE9BQU8sOEJBQThCLHdCQUF3QixzQ0FBc0MsT0FBTyx3REFBd0Qsc0JBQXNCLDRCQUE0QixrQkFBa0Isb0JBQW9CLE9BQU8sNkNBQTZDLDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsK0NBQStDLE9BQU8seURBQXlELDhDQUE4QyxvQ0FBb0MsT0FBTywyQkFBMkIsZ0JBQWdCLG9CQUFvQiwrQkFBK0IsMkJBQTJCLHlCQUF5QixPQUFPLHVCQUF1QixxQkFBcUIsOENBQThDLHNDQUFzQyxPQUFPLDJEQUEyRCxzQkFBc0IsZ0NBQWdDLG9CQUFvQixPQUFPLDBCQUEwQixzQkFBc0Isa0JBQWtCLE9BQU8saUNBQWlDLDJCQUEyQixrQ0FBa0Msc0NBQXNDLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix3QkFBd0IsK0NBQStDLE9BQU8sdUNBQXVDLDhDQUE4QyxvQ0FBb0MsT0FBTyx3Q0FBd0MsOENBQThDLG9DQUFvQyxPQUFPLHlCQUF5QjtBQUNodFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEJvb2dhXFxPbmVEcml2ZVxcRGVza3RvcFxcQVAtMjQyNVxcQ0VcXExBQlZcXGxhYlZcXHNyY1xcc3R5bGVzXFxBdXRvQ2Fyb3VzZWwubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTWFpbiBDb250YWluZXIgKi9cXHJcXG4uQXV0b0Nhcm91c2VsX2NvbnRhaW5lcl9fbUdiNTgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBDYXJvdXNlbCBXcmFwcGVyICovXFxyXFxuICAuQXV0b0Nhcm91c2VsX2F1dG8tY2Fyb3VzZWxfX2JiOXhDIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ2Fyb3VzZWwgQ29udGVudCAqL1xcclxcbiAgLkF1dG9DYXJvdXNlbF9jYXJvdXNlbC1jb250ZW50X19WczJyUCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtaW1hZ2Utd3JhcHBlcl9fUnFqQmgge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogOSAvIDE5LjU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtaW1hZ2VfX1FndkQzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtdGV4dF9fb1FTX0gge1xcclxcbiAgICBmbGV4OiAxIDE7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9jYXJvdXNlbC10ZXh0X19vUVNfSCBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX2Nhcm91c2VsLXRleHRfX29RU19IIHAge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBQYWdpbmF0aW9uIENvbnRyb2xzICovXFxyXFxuICAuQXV0b0Nhcm91c2VsX3BhZ2luYXRpb25fX25CaFRNIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9wcmV2LWJ1dHRvbl9fZDBFclMsXFxyXFxuICAuQXV0b0Nhcm91c2VsX25leHQtYnV0dG9uX19tZ1Y1MCB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX3ByZXYtYnV0dG9uX19kMEVyUzpob3ZlcixcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbmV4dC1idXR0b25fX21nVjUwOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX3Byb2dyZXNzLWJhcl9fUm52TTIge1xcclxcbiAgICBmbGV4OiAxIDE7XFxyXFxuICAgIGhlaWdodDogNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfcHJvZ3Jlc3NfXzZuWHBsIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjFzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTW9kZSBTd2l0Y2ggKi9cXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2gtY29udGFpbmVyX19fa09BZiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkF1dG9DYXJvdXNlbF9tb2RlLXN3aXRjaF9fckVEOV8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2hfX3JFRDlfIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXV0b0Nhcm91c2VsX21vZGUtc3dpdGNoX19yRUQ5XyBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2hfX3JFRDlfIGJ1dHRvbi5BdXRvQ2Fyb3VzZWxfYWN0aXZlX196dWY2RSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL0F1dG9DYXJvdXNlbC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5Q0FBeUM7RUFDM0M7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBTztJQUNQLDJCQUEyQjtJQUMzQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQ0FBc0M7RUFDeEM7O0VBRUE7O0lBRUUscUNBQXFDO0lBQ3JDLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFNBQU87SUFDUCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLDZCQUE2QjtFQUMvQjs7RUFFQSxnQkFBZ0I7RUFDaEI7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQywyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMsMkJBQTJCO0VBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1haW4gQ29udGFpbmVyICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIENhcm91c2VsIFdyYXBwZXIgKi9cXHJcXG4gIC5hdXRvLWNhcm91c2VsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ2Fyb3VzZWwgQ29udGVudCAqL1xcclxcbiAgLmNhcm91c2VsLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2Fyb3VzZWwtaW1hZ2Utd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA5IC8gMTkuNTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcm91c2VsLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC10ZXh0IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2Fyb3VzZWwtdGV4dCBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2Fyb3VzZWwtdGV4dCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogUGFnaW5hdGlvbiBDb250cm9scyAqL1xcclxcbiAgLnBhZ2luYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucHJldi1idXR0b24sXFxyXFxuICAubmV4dC1idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnByZXYtYnV0dG9uOmhvdmVyLFxcclxcbiAgLm5leHQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucHJvZ3Jlc3MtYmFyIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnByb2dyZXNzIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjFzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTW9kZSBTd2l0Y2ggKi9cXHJcXG4gIC5tb2RlLXN3aXRjaC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RlLXN3aXRjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGUtc3dpdGNoIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kZS1zd2l0Y2ggYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kZS1zd2l0Y2ggYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkF1dG9DYXJvdXNlbF9jb250YWluZXJfX21HYjU4XCIsXG5cdFwiYXV0by1jYXJvdXNlbFwiOiBcIkF1dG9DYXJvdXNlbF9hdXRvLWNhcm91c2VsX19iYjl4Q1wiLFxuXHRcImNhcm91c2VsLWNvbnRlbnRcIjogXCJBdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtY29udGVudF9fVnMyclBcIixcblx0XCJjYXJvdXNlbC1pbWFnZS13cmFwcGVyXCI6IFwiQXV0b0Nhcm91c2VsX2Nhcm91c2VsLWltYWdlLXdyYXBwZXJfX1JxakJoXCIsXG5cdFwiY2Fyb3VzZWwtaW1hZ2VcIjogXCJBdXRvQ2Fyb3VzZWxfY2Fyb3VzZWwtaW1hZ2VfX1FndkQzXCIsXG5cdFwiY2Fyb3VzZWwtdGV4dFwiOiBcIkF1dG9DYXJvdXNlbF9jYXJvdXNlbC10ZXh0X19vUVNfSFwiLFxuXHRcInBhZ2luYXRpb25cIjogXCJBdXRvQ2Fyb3VzZWxfcGFnaW5hdGlvbl9fbkJoVE1cIixcblx0XCJwcmV2LWJ1dHRvblwiOiBcIkF1dG9DYXJvdXNlbF9wcmV2LWJ1dHRvbl9fZDBFclNcIixcblx0XCJuZXh0LWJ1dHRvblwiOiBcIkF1dG9DYXJvdXNlbF9uZXh0LWJ1dHRvbl9fbWdWNTBcIixcblx0XCJwcm9ncmVzcy1iYXJcIjogXCJBdXRvQ2Fyb3VzZWxfcHJvZ3Jlc3MtYmFyX19SbnZNMlwiLFxuXHRcInByb2dyZXNzXCI6IFwiQXV0b0Nhcm91c2VsX3Byb2dyZXNzX182blhwbFwiLFxuXHRcIm1vZGUtc3dpdGNoLWNvbnRhaW5lclwiOiBcIkF1dG9DYXJvdXNlbF9tb2RlLXN3aXRjaC1jb250YWluZXJfX19rT0FmXCIsXG5cdFwibW9kZS1zd2l0Y2hcIjogXCJBdXRvQ2Fyb3VzZWxfbW9kZS1zd2l0Y2hfX3JFRDlfXCIsXG5cdFwiYWN0aXZlXCI6IFwiQXV0b0Nhcm91c2VsX2FjdGl2ZV9fenVmNkVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[7].use[2]!./src/styles/AutoCarousel.module.css\n"));

/***/ })

});