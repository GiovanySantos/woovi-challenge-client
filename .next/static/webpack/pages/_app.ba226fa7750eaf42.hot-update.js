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

/***/ "./src/contexts/ContentKeyContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ContentKeyContext.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContentKeyContext\": function() { return /* binding */ ContentKeyContext; }\n/* harmony export */ });\n/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/types/enums */ \"./src/types/enums.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LANGUAGE_INITIAL_VALUE = _types_enums__WEBPACK_IMPORTED_MODULE_0__.EnumLanguageAvaliable.ptBR;\nconst ContentKeyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    language: _types_enums__WEBPACK_IMPORTED_MODULE_0__.EnumLanguageAvaliable.ptBR,\n    contentKeys: undefined,\n    setContentKeys: ()=>{},\n    language: LANGUAGE_INITIAL_VALUE,\n    setLanguage: ()=>{}\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ29udGVudEtleUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0Q7QUFFaEI7QUFTdEMsTUFBTUUseUJBQ0pGLG9FQUEwQjtBQUVyQixNQUFNSSxrQ0FBb0JILG9EQUFhQSxDQUFxQjtJQUNqRUksVUFBVUwsb0VBQTBCO0lBQ3BDTSxhQUFhQztJQUNiQyxnQkFBZ0IsSUFBTSxDQUFDO0lBQ3ZCSCxVQUFVSDtJQUNWTyxhQUFhLElBQU0sQ0FBQztBQUN0QixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9Db250ZW50S2V5Q29udGV4dC50c3g/MDY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtTGFuZ3VhZ2VBdmFsaWFibGUgfSBmcm9tIFwiQC90eXBlcy9lbnVtc1wiO1xuaW1wb3J0IHsgSUNvbnRlbnRLZXlzIH0gZnJvbSBcIkAvdHlwZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSUNvbnRlbnRLZXlDb250ZXh0IHtcbiAgY29udGVudEtleXM/OiBJQ29udGVudEtleXNbXTtcbiAgc2V0Q29udGVudEtleXM/OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxJQ29udGVudEtleXNbXT4+O1xuICBsYW5ndWFnZT86IEVudW1MYW5ndWFnZUF2YWxpYWJsZTtcbiAgc2V0TGFuZ3VhZ2U/OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxFbnVtTGFuZ3VhZ2VBdmFsaWFibGU+Pjtcbn1cblxuY29uc3QgTEFOR1VBR0VfSU5JVElBTF9WQUxVRTogRW51bUxhbmd1YWdlQXZhbGlhYmxlID1cbiAgRW51bUxhbmd1YWdlQXZhbGlhYmxlLnB0QlI7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50S2V5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUNvbnRlbnRLZXlDb250ZXh0Pih7XG4gIGxhbmd1YWdlOiBFbnVtTGFuZ3VhZ2VBdmFsaWFibGUucHRCUixcbiAgY29udGVudEtleXM6IHVuZGVmaW5lZCxcbiAgc2V0Q29udGVudEtleXM6ICgpID0+IHt9LFxuICBsYW5ndWFnZTogTEFOR1VBR0VfSU5JVElBTF9WQUxVRSxcbiAgc2V0TGFuZ3VhZ2U6ICgpID0+IHt9LFxufSk7XG5cbiJdLCJuYW1lcyI6WyJFbnVtTGFuZ3VhZ2VBdmFsaWFibGUiLCJjcmVhdGVDb250ZXh0IiwiTEFOR1VBR0VfSU5JVElBTF9WQUxVRSIsInB0QlIiLCJDb250ZW50S2V5Q29udGV4dCIsImxhbmd1YWdlIiwiY29udGVudEtleXMiLCJ1bmRlZmluZWQiLCJzZXRDb250ZW50S2V5cyIsInNldExhbmd1YWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/ContentKeyContext.tsx\n"));

/***/ })

});