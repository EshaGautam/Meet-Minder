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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ \"./components/meetups/MeetupDetails.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst meetupArr = [\n    {\n        id: \"m1\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-1\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m2\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-2\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m3\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-3\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m4\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-4\",\n        address: \"xyz street\"\n    },\n    {\n        id: \"m5\",\n        image: \"/photo-1471039497385-b6d6ba609f9c.avif\",\n        title: \"MEETUP-5\",\n        address: \"xyz street\"\n    }\n];\nconst Details = (id)=>{\n    _s();\n    const currentId = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetId: currentId,\n        meetupArr: true\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gauta\\\\OneDrive\\\\Desktop\\\\Esha Projects\\\\MeetMinder\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Details, \"t7paloztzy96ByvW874MXbaoKSE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQzJCO0FBRWxFLE1BQU1FLFlBQVk7SUFDZDtRQUNJQyxJQUFHO1FBQ0hDLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxTQUFRO0lBQ1o7SUFDQTtRQUNJSCxJQUFHO1FBQ0hDLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxTQUFRO0lBQ1o7SUFDQTtRQUNJSCxJQUFHO1FBQ0hDLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxTQUFRO0lBQ1o7SUFDQTtRQUNJSCxJQUFHO1FBQ0hDLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxTQUFRO0lBQ1o7SUFDQTtRQUNJSCxJQUFHO1FBQ0hDLE9BQU07UUFDTkMsT0FBTTtRQUNOQyxTQUFRO0lBQ1o7Q0FDSDtBQUdELE1BQU1DLFVBQVUsQ0FBQ0o7O0lBQ2IsTUFBTUssWUFBWVIsc0RBQVNBO0lBQzdCLHFCQUNFLDhEQUFDQyx5RUFBYUE7UUFBQ1EsUUFBUUQ7UUFBV04sU0FBUzs7Ozs7O0FBRS9DO0dBTE1LOztRQUNnQlAsa0RBQVNBOzs7S0FEekJPO0FBT04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsc1wiXHJcblxyXG5jb25zdCBtZWV0dXBBcnIgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J20xJyxcclxuICAgICAgICBpbWFnZTonL3Bob3RvLTE0NzEwMzk0OTczODUtYjZkNmJhNjA5ZjljLmF2aWYnLFxyXG4gICAgICAgIHRpdGxlOidNRUVUVVAtMScsXHJcbiAgICAgICAgYWRkcmVzczoneHl6IHN0cmVldCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J20yJyxcclxuICAgICAgICBpbWFnZTonL3Bob3RvLTE0NzEwMzk0OTczODUtYjZkNmJhNjA5ZjljLmF2aWYnLFxyXG4gICAgICAgIHRpdGxlOidNRUVUVVAtMicsXHJcbiAgICAgICAgYWRkcmVzczoneHl6IHN0cmVldCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J20zJyxcclxuICAgICAgICBpbWFnZTonL3Bob3RvLTE0NzEwMzk0OTczODUtYjZkNmJhNjA5ZjljLmF2aWYnLFxyXG4gICAgICAgIHRpdGxlOidNRUVUVVAtMycsXHJcbiAgICAgICAgYWRkcmVzczoneHl6IHN0cmVldCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J200JyxcclxuICAgICAgICBpbWFnZTonL3Bob3RvLTE0NzEwMzk0OTczODUtYjZkNmJhNjA5ZjljLmF2aWYnLFxyXG4gICAgICAgIHRpdGxlOidNRUVUVVAtNCcsXHJcbiAgICAgICAgYWRkcmVzczoneHl6IHN0cmVldCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6J201JyxcclxuICAgICAgICBpbWFnZTonL3Bob3RvLTE0NzEwMzk0OTczODUtYjZkNmJhNjA5ZjljLmF2aWYnLFxyXG4gICAgICAgIHRpdGxlOidNRUVUVVAtNScsXHJcbiAgICAgICAgYWRkcmVzczoneHl6IHN0cmVldCdcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IERldGFpbHMgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRJZCA9IHVzZVJvdXRlcigpXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZWV0dXBEZXRhaWxzIG1lZXRJZD17Y3VycmVudElkfSBtZWV0dXBBcnIvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNZWV0dXBEZXRhaWxzIiwibWVldHVwQXJyIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsIkRldGFpbHMiLCJjdXJyZW50SWQiLCJtZWV0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});