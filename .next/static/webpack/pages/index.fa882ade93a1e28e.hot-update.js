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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nconst meetupArr = [\n    {\n        id: \"m1\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-1\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m2\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-2\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m3\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-3\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m4\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-4\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m5\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-5\",\n        address: \"xyz street\"\n    }\n];\nconst HomePage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gauta\\\\OneDrive\\\\Desktop\\\\Esha Projects\\\\MeetMinder\\\\pages\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUl6RCxNQUFNQyxZQUFZO0lBQ2Q7UUFDSUMsSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtJQUNaO0lBQ0E7UUFDSUgsSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtJQUNaO0lBQ0E7UUFDSUgsSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtJQUNaO0lBQ0E7UUFDSUgsSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtJQUNaO0lBQ0E7UUFDSUgsSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtJQUNaO0NBQ0g7QUFFRCxNQUFNQyxXQUFXLENBQUNDO0lBQ2hCLHFCQUNFO2tCQUNDLDRFQUFDUCxzRUFBVUE7WUFBQ1EsU0FBU0QsTUFBTUMsT0FBTzs7Ozs7OztBQUl2QztLQVBNRjs7QUF5Q04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCdcclxuXHJcblxyXG5cclxuY29uc3QgbWVldHVwQXJyID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOidtMScsXHJcbiAgICAgICAgaW1hZ2U6Jy9waG90by0xNDcxMDM5NDk3Mzg1LWI2ZDZiYTYwOWY5Yy5hdmlmJyxcclxuICAgICAgICB0aXRsZTonTUVFVFVQLTEnLFxyXG4gICAgICAgIGFkZHJlc3M6J3h5eiBzdHJlZXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidtMicsXHJcbiAgICAgICAgaW1hZ2U6Jy9waG90by0xNDcxMDM5NDk3Mzg1LWI2ZDZiYTYwOWY5Yy5hdmlmJyxcclxuICAgICAgICB0aXRsZTonTUVFVFVQLTInLFxyXG4gICAgICAgIGFkZHJlc3M6J3h5eiBzdHJlZXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidtMycsXHJcbiAgICAgICAgaW1hZ2U6Jy9waG90by0xNDcxMDM5NDk3Mzg1LWI2ZDZiYTYwOWY5Yy5hdmlmJyxcclxuICAgICAgICB0aXRsZTonTUVFVFVQLTMnLFxyXG4gICAgICAgIGFkZHJlc3M6J3h5eiBzdHJlZXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidtNCcsXHJcbiAgICAgICAgaW1hZ2U6Jy9waG90by0xNDcxMDM5NDk3Mzg1LWI2ZDZiYTYwOWY5Yy5hdmlmJyxcclxuICAgICAgICB0aXRsZTonTUVFVFVQLTQnLFxyXG4gICAgICAgIGFkZHJlc3M6J3h5eiBzdHJlZXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOidtNScsXHJcbiAgICAgICAgaW1hZ2U6Jy9waG90by0xNDcxMDM5NDk3Mzg1LWI2ZDZiYTYwOWY5Yy5hdmlmJyxcclxuICAgICAgICB0aXRsZTonTUVFVFVQLTUnLFxyXG4gICAgICAgIGFkZHJlc3M6J3h5eiBzdHJlZXQnXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxyXG4gICAgPC8+XHJcbiAgIFxyXG4gIClcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG4vLyAgICAgLy9oZXJlIGRhdGEgd2lsbCBiZSBmZXRjaGVkIFxyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHByb3BzOntcclxuLy8gICAgICAgICAgICAgbWVldHVwczogbWVldHVwQXJyXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIC8vaGVyZSBkYXRhIGdldHMgZmV0Y2hlZCBkdXJpbmcgYnVpbGQgb3IgYmVmb3JlIHRoZSBwYWdlIGdldCByZW5kZXJcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL25ld3VzZXItNjAxOjNQTmZyd0luOUkxTFRNUlFAY2x1c3RlcjAudnpmZGJmcy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwJyk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIC8vIEFjY2Vzc2luZyB0aGUgbWVldHVwcyBjb2xsZWN0aW9uXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbmV3LW1lZXR1cHMnKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKClcclxuICAgIGNvbnN0IG1lZXR1cEFyciA9IG1lZXR1cHMudG9cclxuXHJcbiAgICAvL3dpbGwgYWx3YXlzIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggY29udGFpbnMgcHJvcHMgdGhhdCBoYXMgZGF0YVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBzOiBtZWV0dXBBcnJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6MTBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSAiXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIm1lZXR1cEFyciIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});