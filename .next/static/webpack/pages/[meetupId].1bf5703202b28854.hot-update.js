"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\n\n\nconst Details = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gauta\\\\OneDrive\\\\Desktop\\\\Esha Projects\\\\MeetMinder\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: props.meetupData\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gauta\\\\OneDrive\\\\Desktop\\\\Esha Projects\\\\MeetMinder\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gauta\\\\OneDrive\\\\Desktop\\\\Esha Projects\\\\MeetMinder\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetupData: props.meetupData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gauta\\\\OneDrive\\\\Desktop\\\\Esha Projects\\\\MeetMinder\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Details;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDc0M7QUFFbkUsTUFBTUUsVUFBVSxDQUFDQztJQUNmLHFCQUNFOzswQkFDQSw4REFBQ0gsa0RBQUlBOztrQ0FDSCw4REFBQ0k7a0NBQU9ELE1BQU1FLFVBQVUsQ0FBQ0QsS0FBSzs7Ozs7O2tDQUM5Qiw4REFBQ0U7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVNMLE1BQU1FLFVBQVU7Ozs7Ozs7Ozs7OzswQkFFbEQsOERBQUNKLHlFQUFhQTtnQkFBQ0ksWUFBWUYsTUFBTUUsVUFBVTs7Ozs7Ozs7QUFJakQ7S0FYTUg7O0FBNEROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanM/OGZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCxPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscyc7XHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtwcm9wcy5tZWV0dXBEYXRhfT48L21ldGE+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxNZWV0dXBEZXRhaWxzIG1lZXR1cERhdGE9e3Byb3BzLm1lZXR1cERhdGF9IC8+XHJcbiAgICA8Lz5cclxuICBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL25ld3VzZXItNjAxOjNQTmZyd0luOUkxTFRNUlFAY2x1c3RlcjAudnpmZGJmcy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwJyk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgLy8gQWNjZXNzaW5nIHRoZSBtZWV0dXBzIGNvbGxlY3Rpb25cclxuICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbmV3LW1lZXR1cHMnKTtcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKHt9LHtfaWQ6MX0pLnRvQXJyYXkoKVxyXG4gIFxyXG4gIGNsaWVudC5jbG9zZSgpXHJcblxyXG4gIFxyXG4gIGNvbnN0IHBhdGhzID0gbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH1cclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICAgIHBhdGhzOnBhdGhzXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4gXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9uZXd1c2VyLTYwMTozUE5mcndJbjlJMUxUTVJRQGNsdXN0ZXIwLnZ6ZmRiZnMubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCcpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIC8vIEFjY2Vzc2luZyB0aGUgbWVldHVwcyBjb2xsZWN0aW9uXHJcbiAgY29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ25ldy1tZWV0dXBzJyk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kT25lKHtfaWQ6bmV3IE9iamVjdElkKG1lZXR1cElkKX0pXHJcbiAgY2xpZW50LmNsb3NlKClcclxuIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6c2VsZWN0ZWRNZWV0dXBzLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOnNlbGVjdGVkTWVldHVwcy50aXRsZSxcclxuICAgICAgICBpbWFnZTpzZWxlY3RlZE1lZXR1cHMuaW1hZ2UsXHJcbiAgICAgICAgYWRkcmVzczpzZWxlY3RlZE1lZXR1cHMuYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjpzZWxlY3RlZE1lZXR1cHMuZGVzY3JpcHRpb24sXHJcbiAgICB9XHJcbiAgfSxcclxuICByZXZhbGlkYXRlOjFcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIk1lZXR1cERldGFpbHMiLCJEZXRhaWxzIiwicHJvcHMiLCJ0aXRsZSIsIm1lZXR1cERhdGEiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});