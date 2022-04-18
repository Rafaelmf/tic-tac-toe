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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar PlayerFormInputs = function(param) {\n    var side = param.side, setColorHex = param.setColorHex, colorHex = param.colorHex;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    textShadow: \"2px 2px 0px \".concat(colorHex[side]),\n                    fontSize: \"4rem\"\n                },\n                className: \"grid-cell\",\n                children: \"O\"\n            }, void 0, false, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                label: \"Player name:\",\n                name: \"name\".concat(side),\n                rules: [\n                    {\n                        required: true,\n                        message: \"Please input your username!\"\n                    }\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {}, void 0, false, {\n                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                label: \"Color:\",\n                name: \"color\".concat(side),\n                rules: [\n                    {\n                        required: true,\n                        message: \"Please select a color!\"\n                    }\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_1__.CirclePicker, {\n                    onChange: function(color) {\n                        return setColorHex(function(oldState) {\n                            return _objectSpread({}, oldState, _defineProperty({}, side, color.hex));\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/PlayerFormInputs.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_c = PlayerFormInputs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerFormInputs);\nvar _c;\n$RefreshReg$(_c, \"PlayerFormInputs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllckZvcm1JbnB1dHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcyQztBQUNBO0FBcUIzQyxJQUFNRyxnQkFBZ0IsR0FBRyxnQkFBNEM7UUFBekNDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxXQUFXLFNBQVhBLFdBQVcsRUFBRUMsUUFBUSxTQUFSQSxRQUFRO0lBQ3JELHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsR0FBQztnQkFDQUMsS0FBSyxFQUFFO29CQUNMQyxVQUFVLEVBQUUsY0FBYSxDQUFpQixPQUFmSixRQUFRLENBQUNGLElBQUksQ0FBQyxDQUFFO29CQUMzQ08sUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2dCQUNEQyxTQUFTLEVBQUMsV0FBVzswQkFDdEIsR0FFRDs7Ozs7cUJBQUk7MEJBQ0osOERBQUNaLDJDQUFTO2dCQUNSYyxLQUFLLEVBQUMsY0FBYztnQkFDcEJDLElBQUksRUFBRSxNQUFLLENBQU8sT0FBTFgsSUFBSSxDQUFFO2dCQUNuQlksS0FBSyxFQUFFO29CQUFDO3dCQUFFQyxRQUFRLEVBQUUsSUFBSTt3QkFBRUMsT0FBTyxFQUFFLDZCQUE2QjtxQkFBRTtpQkFBQzswQkFFbkUsNEVBQUNqQix1Q0FBSzs7Ozt5QkFBRzs7Ozs7cUJBQ0M7MEJBQ1osOERBQUNELDJDQUFTO2dCQUNSYyxLQUFLLEVBQUMsUUFBUTtnQkFDZEMsSUFBSSxFQUFFLE9BQU0sQ0FBTyxPQUFMWCxJQUFJLENBQUU7Z0JBQ3BCWSxLQUFLLEVBQUU7b0JBQUM7d0JBQUVDLFFBQVEsRUFBRSxJQUFJO3dCQUFFQyxPQUFPLEVBQUUsd0JBQXdCO3FCQUFFO2lCQUFDOzBCQUU5RCw0RUFBQ2hCLHFEQUFZO29CQUNYaUIsUUFBUSxFQUFFLFNBQUNDLEtBQXNCOytCQUMvQmYsV0FBVyxDQUFDLFNBQUNnQixRQUEyQixFQUFLOzRCQUMzQyxPQUFPLGtCQUFLQSxRQUFRLEVBQUUsb0JBQUNqQixJQUFJLEVBQUdnQixLQUFLLENBQUNFLEdBQUcsRUFBRSxDQUFDO3lCQUMzQyxDQUFDO3FCQUFBOzs7Ozt5QkFFSjs7Ozs7cUJBQ1E7Ozs7OzthQUNSLENBQ047Q0FDSDtBQWxDS25CLEtBQUFBLGdCQUFnQjtBQW9DdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyRm9ybUlucHV0cy50c3g/MWQ1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBDaXJjbGVQaWNrZXIgfSBmcm9tIFwicmVhY3QtY29sb3JcIjtcbmltcG9ydCB7IEF1ZGl0T3V0bGluZWQsIFJvY2tldE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBwcmV2aW91c0RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlZ2lzdGVyUGxheWVycyB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zXCI7XG5cbmltcG9ydCB1c2VBbmltZUxldHRlcnMgZnJvbSBcIi4uL2hvb2tzL3VzZUFuaW1lTGV0dGVyc1wiO1xudHlwZSBzZXRTdGF0ZUNvbG9yID0gKG9sZFN0YXRlOiBQcm9wc1tcImNvbG9ySGV4XCJdKSA9PiB7XG4gIHJpZ2h0OiBzdHJpbmc7XG4gIGxlZnQ6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNpZGU6IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuICBzZXRDb2xvckhleChhOiBzZXRTdGF0ZUNvbG9yKTogdm9pZDtcbiAgY29sb3JIZXg6IHtcbiAgICByaWdodDogc3RyaW5nO1xuICAgIGxlZnQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IFBsYXllckZvcm1JbnB1dHMgPSAoeyBzaWRlLCBzZXRDb2xvckhleCwgY29sb3JIZXggfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0U2hhZG93OiBgMnB4IDJweCAwcHggJHtjb2xvckhleFtzaWRlXX1gLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjRyZW1cIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jZWxsXCJcbiAgICAgID5cbiAgICAgICAgT1xuICAgICAgPC9wPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBsYWJlbD1cIlBsYXllciBuYW1lOlwiXG4gICAgICAgIG5hbWU9e2BuYW1lJHtzaWRlfWB9XG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSFcIiB9XX1cbiAgICAgID5cbiAgICAgICAgPElucHV0IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbGFiZWw9XCJDb2xvcjpcIlxuICAgICAgICBuYW1lPXtgY29sb3Ike3NpZGV9YH1cbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgYSBjb2xvciFcIiB9XX1cbiAgICAgID5cbiAgICAgICAgPENpcmNsZVBpY2tlclxuICAgICAgICAgIG9uQ2hhbmdlPXsoY29sb3I6IHsgaGV4OiBzdHJpbmcgfSkgPT5cbiAgICAgICAgICAgIHNldENvbG9ySGV4KChvbGRTdGF0ZTogUHJvcHNbXCJjb2xvckhleFwiXSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4geyAuLi5vbGRTdGF0ZSwgW3NpZGVdOiBjb2xvci5oZXggfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJGb3JtSW5wdXRzO1xuIl0sIm5hbWVzIjpbIkZvcm0iLCJJbnB1dCIsIkNpcmNsZVBpY2tlciIsIlBsYXllckZvcm1JbnB1dHMiLCJzaWRlIiwic2V0Q29sb3JIZXgiLCJjb2xvckhleCIsImRpdiIsInAiLCJzdHlsZSIsInRleHRTaGFkb3ciLCJmb250U2l6ZSIsImNsYXNzTmFtZSIsIkl0ZW0iLCJsYWJlbCIsIm5hbWUiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIm9uQ2hhbmdlIiwiY29sb3IiLCJvbGRTdGF0ZSIsImhleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PlayerFormInputs.tsx\n");

/***/ })

});