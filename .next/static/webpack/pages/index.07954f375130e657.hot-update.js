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

/***/ "./components/PlayerFormInputs.tsx":
/*!*****************************************!*\
  !*** ./components/PlayerFormInputs.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\nvar _this = undefined;\n\n\n\nvar PlayerFormInputs = function(param) {\n    var side = param.side, handleChangeColor = param.handleChangeColor, colorHex = param.colorHex;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    textShadow: \"2px 2px 0px \".concat(colorHex.right),\n                    fontSize: \"4rem\"\n                },\n                className: \"grid-cell\",\n                children: \"O\"\n            }, void 0, false, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                label: \"Player name:\",\n                name: \"nameRight\",\n                rules: [\n                    {\n                        required: true,\n                        message: \"Please input your username!\"\n                    }\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {\n                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                label: \"Color:\",\n                name: \"colorRight\",\n                rules: [\n                    {\n                        required: true,\n                        message: \"Please select a color!\"\n                    }\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_1__.CirclePicker, {\n                    onChange: function(color) {\n                        return handleChangeColor(color, \"right\");\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_c = PlayerFormInputs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerFormInputs);\nvar _c;\n$RefreshReg$(_c, \"PlayerFormInputs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllckZvcm1JbnB1dHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRzJDO0FBQ0E7QUFpQjNDLElBQU1HLGdCQUFnQixHQUFHLGdCQUFrRDtRQUEvQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGlCQUFpQixTQUFqQkEsaUJBQWlCLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtJQUMzRCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLEdBQUM7Z0JBQ0FDLEtBQUssRUFBRTtvQkFDTEMsVUFBVSxFQUFFLGNBQWEsQ0FBaUIsT0FBZkosUUFBUSxDQUFDSyxLQUFLLENBQUU7b0JBQzNDQyxRQUFRLEVBQUUsTUFBTTtpQkFDakI7Z0JBQ0RDLFNBQVMsRUFBQyxXQUFXOzBCQUN0QixHQUVEOzs7OztxQkFBSTswQkFDSiw4REFBQ2IsMkNBQVM7Z0JBQ1JlLEtBQUssRUFBQyxjQUFjO2dCQUNwQkMsSUFBSSxFQUFDLFdBQVc7Z0JBQ2hCQyxLQUFLLEVBQUU7b0JBQUM7d0JBQUVDLFFBQVEsRUFBRSxJQUFJO3dCQUFFQyxPQUFPLEVBQUUsNkJBQTZCO3FCQUFFO2lCQUFDOzBCQUVuRSw0RUFBQ2xCLHVDQUFLOzs7O3lCQUFHOzs7OztxQkFDQzswQkFDWiw4REFBQ0QsMkNBQVM7Z0JBQ1JlLEtBQUssRUFBQyxRQUFRO2dCQUNkQyxJQUFJLEVBQUMsWUFBWTtnQkFDakJDLEtBQUssRUFBRTtvQkFBQzt3QkFBRUMsUUFBUSxFQUFFLElBQUk7d0JBQUVDLE9BQU8sRUFBRSx3QkFBd0I7cUJBQUU7aUJBQUM7MEJBRTlELDRFQUFDakIscURBQVk7b0JBQ1hrQixRQUFRLEVBQUUsU0FBQ0MsS0FBc0I7K0JBQy9CaEIsaUJBQWlCLENBQUNnQixLQUFLLEVBQUUsT0FBTyxDQUFDO3FCQUFBOzs7Ozt5QkFFbkM7Ozs7O3FCQUNROzs7Ozs7YUFDUixDQUNOO0NBQ0g7QUFoQ0tsQixLQUFBQSxnQkFBZ0I7QUFrQ3RCLCtEQUFlQSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllckZvcm1JbnB1dHMudHN4PzFkNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQ2lyY2xlUGlja2VyIH0gZnJvbSBcInJlYWN0LWNvbG9yXCI7XG5pbXBvcnQgeyBBdWRpdE91dGxpbmVkLCBSb2NrZXRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgcHJldmlvdXNEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyByZWdpc3RlclBsYXllcnMgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9uc1wiO1xuXG5pbXBvcnQgdXNlQW5pbWVMZXR0ZXJzIGZyb20gXCIuLi9ob29rcy91c2VBbmltZUxldHRlcnNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG4gIHNldENvbG9ySGV4KGNvbG9yOiBzdHJpbmcpOiB2b2lkO1xuICBjb2xvckhleDoge1xuICAgIHJpZ2h0OiBzdHJpbmc7XG4gICAgbGVmdDogc3RyaW5nO1xuICB9O1xufTtcblxuY29uc3QgUGxheWVyRm9ybUlucHV0cyA9ICh7IHNpZGUsIGhhbmRsZUNoYW5nZUNvbG9yLCBjb2xvckhleCB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRTaGFkb3c6IGAycHggMnB4IDBweCAke2NvbG9ySGV4LnJpZ2h0fWAsXG4gICAgICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNlbGxcIlxuICAgICAgPlxuICAgICAgICBPXG4gICAgICA8L3A+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIGxhYmVsPVwiUGxheWVyIG5hbWU6XCJcbiAgICAgICAgbmFtZT1cIm5hbWVSaWdodFwiXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSFcIiB9XX1cbiAgICAgID5cbiAgICAgICAgPElucHV0IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbGFiZWw9XCJDb2xvcjpcIlxuICAgICAgICBuYW1lPVwiY29sb3JSaWdodFwiXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgY29sb3IhXCIgfV19XG4gICAgICA+XG4gICAgICAgIDxDaXJjbGVQaWNrZXJcbiAgICAgICAgICBvbkNoYW5nZT17KGNvbG9yOiB7IGhleDogc3RyaW5nIH0pID0+XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2VDb2xvcihjb2xvciwgXCJyaWdodFwiKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyRm9ybUlucHV0cztcbiJdLCJuYW1lcyI6WyJGb3JtIiwiSW5wdXQiLCJDaXJjbGVQaWNrZXIiLCJQbGF5ZXJGb3JtSW5wdXRzIiwic2lkZSIsImhhbmRsZUNoYW5nZUNvbG9yIiwiY29sb3JIZXgiLCJkaXYiLCJwIiwic3R5bGUiLCJ0ZXh0U2hhZG93IiwicmlnaHQiLCJmb250U2l6ZSIsImNsYXNzTmFtZSIsIkl0ZW0iLCJsYWJlbCIsIm5hbWUiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm9uQ2hhbmdlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PlayerFormInputs.tsx\n");

/***/ })

});