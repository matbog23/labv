"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/FAQ.js":
/*!*******************************!*\
  !*** ./src/components/FAQ.js ***!
  \*******************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FAQ)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/FAQ.module.css */ \"./src/styles/FAQ.module.css\");\n\nvar _s = $RefreshSig$();\n\n\nfunction FAQ() {\n    _s();\n    const [openQuestion, setOpenQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const faqs = [\n        {\n            question: 'How do I sign up as a passenger?',\n            answer: 'To sign up, simply download the app, enter your email address, and create a password. You’ll also need to verify your phone number.'\n        },\n        {\n            question: 'How do I become a driver?',\n            answer: 'To become a driver, download the app, select \"Driver Sign-Up,\" and complete the registration process, including submitting your vehicle and license details for approval.'\n        },\n        {\n            question: 'Can I schedule rides in advance?',\n            answer: 'Yes, passengers can schedule rides in advance by selecting a date and time when creating a ride. Drivers will be notified accordingly.'\n        },\n        {\n            question: 'How are drivers paid?',\n            answer: 'Drivers are paid weekly via direct deposit. You can view detailed earnings and payout information in the \"Completed Rides\" section of the app.'\n        },\n        {\n            question: 'What safety measures are in place?',\n            answer: 'We prioritize safety with features like real-time ride tracking, driver background checks, and the option to share ride details with friends or family.'\n        },\n        {\n            question: 'What if I need help during a ride?',\n            answer: 'If you need assistance, tap the help button in the app to access emergency support or contact customer service directly.'\n        }\n    ];\n    const toggleQuestion = (index)=>{\n        setOpenQuestion((prevIndex)=>prevIndex === index ? null : index);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"FAQ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqTitle,\n                        children: \"Frequently Asked Questions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqList,\n                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqItem, \" \").concat(openQuestion === index ? _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.active : ''),\n                                onClick: ()=>toggleQuestion(index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqHeader,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqQuestion,\n                                                children: faq.question\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"\".concat(_styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.arrow, \" \").concat(openQuestion === index ? _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.open : ''),\n                                                children: \"›\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this),\n                                    openQuestion === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: _styles_FAQ_module_css__WEBPACK_IMPORTED_MODULE_2__.faqAnswer,\n                                        children: faq.answer\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Booga\\\\OneDrive\\\\Desktop\\\\AP-2425\\\\CE\\\\LABV\\\\labV\\\\src\\\\components\\\\FAQ.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FAQ, \"al/aNt7BNqeEK4ZqAIoRtVrBqdM=\");\n_c = FAQ;\nvar _c;\n$RefreshReg$(_c, \"FAQ\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GQVEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ2E7QUFFL0IsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1LLE9BQU87UUFDWDtZQUNFQyxVQUFVO1lBQ1ZDLFFBQVE7UUFDVjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsUUFBUTtRQUNWO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxRQUFRO1FBQ1Y7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLFFBQVE7UUFDVjtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsUUFBUTtRQUNWO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxRQUFRO1FBQ1Y7S0FDRDtJQUVELE1BQU1DLGlCQUFpQixDQUFDQztRQUN0QkwsZ0JBQWdCLENBQUNNLFlBQWVBLGNBQWNELFFBQVEsT0FBT0E7SUFDL0Q7SUFFQSxxQkFDRTs7MEJBQ0EsOERBQUNFOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFJQyxXQUFXWixnRUFBbUI7O2tDQUVqQyw4REFBQ2M7d0JBQUdGLFdBQVdaLDREQUFlO2tDQUFFOzs7Ozs7a0NBQ2hDLDhEQUFDVzt3QkFBSUMsV0FBV1osMkRBQWM7a0NBQzNCSSxLQUFLYSxHQUFHLENBQUMsQ0FBQ0MsS0FBS1Ysc0JBQ2QsOERBQUNHO2dDQUVDQyxXQUFXLEdBQ1RWLE9BRFlGLDJEQUFjLEVBQUMsS0FFNUIsT0FEQ0UsaUJBQWlCTSxRQUFRUiwwREFBYSxHQUFHO2dDQUUzQ3FCLFNBQVMsSUFBTWQsZUFBZUM7O2tEQUU5Qiw4REFBQ0c7d0NBQUlDLFdBQVdaLDZEQUFnQjs7MERBQzlCLDhEQUFDdUI7Z0RBQUtYLFdBQVdaLCtEQUFrQjswREFBR2tCLElBQUliLFFBQVE7Ozs7OzswREFDbEQsOERBQUNrQjtnREFDQ1gsV0FBVyxHQUNUVixPQURZRix5REFBWSxFQUFDLEtBRTFCLE9BRENFLGlCQUFpQk0sUUFBUVIsd0RBQVcsR0FBRzswREFFMUM7Ozs7Ozs7Ozs7OztvQ0FJRkUsaUJBQWlCTSx1QkFDaEIsOERBQUNHO3dDQUFJQyxXQUFXWiw2REFBZ0I7a0RBQUdrQixJQUFJWixNQUFNOzs7Ozs7OytCQWpCMUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QmpCO0dBcEV3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQm9vZ2FcXE9uZURyaXZlXFxEZXNrdG9wXFxBUC0yNDI1XFxDRVxcTEFCVlxcbGFiVlxcc3JjXFxjb21wb25lbnRzXFxGQVEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0ZBUS5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZBUSgpIHtcclxuICBjb25zdCBbb3BlblF1ZXN0aW9uLCBzZXRPcGVuUXVlc3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGZhcXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgc2lnbiB1cCBhcyBhIHBhc3Nlbmdlcj8nLFxyXG4gICAgICBhbnN3ZXI6ICdUbyBzaWduIHVwLCBzaW1wbHkgZG93bmxvYWQgdGhlIGFwcCwgZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLCBhbmQgY3JlYXRlIGEgcGFzc3dvcmQuIFlvdeKAmWxsIGFsc28gbmVlZCB0byB2ZXJpZnkgeW91ciBwaG9uZSBudW1iZXIuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiAnSG93IGRvIEkgYmVjb21lIGEgZHJpdmVyPycsXHJcbiAgICAgIGFuc3dlcjogJ1RvIGJlY29tZSBhIGRyaXZlciwgZG93bmxvYWQgdGhlIGFwcCwgc2VsZWN0IFwiRHJpdmVyIFNpZ24tVXAsXCIgYW5kIGNvbXBsZXRlIHRoZSByZWdpc3RyYXRpb24gcHJvY2VzcywgaW5jbHVkaW5nIHN1Ym1pdHRpbmcgeW91ciB2ZWhpY2xlIGFuZCBsaWNlbnNlIGRldGFpbHMgZm9yIGFwcHJvdmFsLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogJ0NhbiBJIHNjaGVkdWxlIHJpZGVzIGluIGFkdmFuY2U/JyxcclxuICAgICAgYW5zd2VyOiAnWWVzLCBwYXNzZW5nZXJzIGNhbiBzY2hlZHVsZSByaWRlcyBpbiBhZHZhbmNlIGJ5IHNlbGVjdGluZyBhIGRhdGUgYW5kIHRpbWUgd2hlbiBjcmVhdGluZyBhIHJpZGUuIERyaXZlcnMgd2lsbCBiZSBub3RpZmllZCBhY2NvcmRpbmdseS4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246ICdIb3cgYXJlIGRyaXZlcnMgcGFpZD8nLFxyXG4gICAgICBhbnN3ZXI6ICdEcml2ZXJzIGFyZSBwYWlkIHdlZWtseSB2aWEgZGlyZWN0IGRlcG9zaXQuIFlvdSBjYW4gdmlldyBkZXRhaWxlZCBlYXJuaW5ncyBhbmQgcGF5b3V0IGluZm9ybWF0aW9uIGluIHRoZSBcIkNvbXBsZXRlZCBSaWRlc1wiIHNlY3Rpb24gb2YgdGhlIGFwcC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246ICdXaGF0IHNhZmV0eSBtZWFzdXJlcyBhcmUgaW4gcGxhY2U/JyxcclxuICAgICAgYW5zd2VyOiAnV2UgcHJpb3JpdGl6ZSBzYWZldHkgd2l0aCBmZWF0dXJlcyBsaWtlIHJlYWwtdGltZSByaWRlIHRyYWNraW5nLCBkcml2ZXIgYmFja2dyb3VuZCBjaGVja3MsIGFuZCB0aGUgb3B0aW9uIHRvIHNoYXJlIHJpZGUgZGV0YWlscyB3aXRoIGZyaWVuZHMgb3IgZmFtaWx5LicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaWYgSSBuZWVkIGhlbHAgZHVyaW5nIGEgcmlkZT8nLFxyXG4gICAgICBhbnN3ZXI6ICdJZiB5b3UgbmVlZCBhc3Npc3RhbmNlLCB0YXAgdGhlIGhlbHAgYnV0dG9uIGluIHRoZSBhcHAgdG8gYWNjZXNzIGVtZXJnZW5jeSBzdXBwb3J0IG9yIGNvbnRhY3QgY3VzdG9tZXIgc2VydmljZSBkaXJlY3RseS4nLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB0b2dnbGVRdWVzdGlvbiA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0T3BlblF1ZXN0aW9uKChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8aDE+RkFRPC9oMT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFxQ29udGFpbmVyfT5cclxuXHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5mYXFUaXRsZX0+RnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcUxpc3R9PlxyXG4gICAgICAgIHtmYXFzLm1hcCgoZmFxLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5mYXFJdGVtfSAke1xyXG4gICAgICAgICAgICAgIG9wZW5RdWVzdGlvbiA9PT0gaW5kZXggPyBzdHlsZXMuYWN0aXZlIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVF1ZXN0aW9uKGluZGV4KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYXFIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZhcVF1ZXN0aW9ufT57ZmFxLnF1ZXN0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXJyb3d9ICR7XHJcbiAgICAgICAgICAgICAgICAgIG9wZW5RdWVzdGlvbiA9PT0gaW5kZXggPyBzdHlsZXMub3BlbiA6ICcnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAmcnNhcXVvO1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtvcGVuUXVlc3Rpb24gPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhcUFuc3dlcn0+e2ZhcS5hbnN3ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiRkFRIiwib3BlblF1ZXN0aW9uIiwic2V0T3BlblF1ZXN0aW9uIiwiZmFxcyIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidG9nZ2xlUXVlc3Rpb24iLCJpbmRleCIsInByZXZJbmRleCIsImgxIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmFxQ29udGFpbmVyIiwiaDIiLCJmYXFUaXRsZSIsImZhcUxpc3QiLCJtYXAiLCJmYXEiLCJmYXFJdGVtIiwiYWN0aXZlIiwib25DbGljayIsImZhcUhlYWRlciIsInNwYW4iLCJmYXFRdWVzdGlvbiIsImFycm93Iiwib3BlbiIsImZhcUFuc3dlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FAQ.js\n"));

/***/ })

});