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

/***/ "./components/RegisterPlayers.tsx":
/*!****************************************!*\
  !*** ./components/RegisterPlayers.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ \"./store/actions.ts\");\n/* harmony import */ var _hooks_useAnimeLetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAnimeLetters */ \"./hooks/useAnimeLetters.ts\");\n/* harmony import */ var _PlayerFormInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerFormInputs */ \"./components/PlayerFormInputs.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar RegisterPlayers = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), formVisible = ref[0], setFormVisible = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        left: \"#00000000\",\n        right: \"#00000000\"\n    }), colorHex = ref1[0], setColorHex = ref1[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var animeTicTacToe = (0,_hooks_useAnimeLetters__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().animeTicTacToe;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (formVisible) return;\n        animeTicTacToe();\n    }, [\n        formVisible\n    ]);\n    var finishForm = function(values) {\n        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.registerPlayers)(_objectSpread({}, values, {\n            colorLeft: values.colorLeft.hex,\n            colorRight: values.colorRight.hex\n        })));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !formVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml11\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"line line1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"letters\",\n                                    children: \"Tic Tac Toe\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        onClick: function() {\n                            return setFormVisible(true);\n                        },\n                        type: \"primary\",\n                        size: \"large\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.AuditOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"Register Players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            formVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                onFinish: finishForm,\n                size: \"large\",\n                className: \"players-form\",\n                layout: \"vertical\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerFormInputs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        side: \"Left\",\n                        colorHex: colorHex,\n                        setColorHex: setColorHex\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerFormInputs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        side: \"Right\",\n                        colorHex: colorHex,\n                        setColorHex: setColorHex\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        style: {\n                            gridColumn: \"1 / span 2\"\n                        },\n                        type: \"primary\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.RocketOutlined, {}, void 0, false, void 0, void 0),\n                        htmlType: \"submit\",\n                        children: \"GO!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(RegisterPlayers, \"WUZnFanN5zTjuCrUUu6o/7auFUI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        _hooks_useAnimeLetters__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = RegisterPlayers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPlayers);\nvar _c;\n$RefreshReg$(_c, \"RegisterPlayers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztRQU1GSixvREFBVztRQUNERSw4REFBZTs7O0FBUHRDRSxLQUFBQSxlQUFlO0FBNEVyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0ZXJQbGF5ZXJzLnRzeD8zZGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IENpcmNsZVBpY2tlciB9IGZyb20gXCJyZWFjdC1jb2xvclwiO1xuaW1wb3J0IHsgQXVkaXRPdXRsaW5lZCwgUm9ja2V0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHByZXZpb3VzRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJQbGF5ZXJzIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcblxuaW1wb3J0IHVzZUFuaW1lTGV0dGVycyBmcm9tIFwiLi4vaG9va3MvdXNlQW5pbWVMZXR0ZXJzXCI7XG5pbXBvcnQgUGxheWVyRm9ybUlucHV0cyBmcm9tIFwiLi9QbGF5ZXJGb3JtSW5wdXRzXCI7XG5cbmNvbnN0IFJlZ2lzdGVyUGxheWVycyA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1WaXNpYmxlLCBzZXRGb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xvckhleCwgc2V0Q29sb3JIZXhdID0gdXNlU3RhdGUoe1xuICAgIGxlZnQ6IFwiIzAwMDAwMDAwXCIsXG4gICAgcmlnaHQ6IFwiIzAwMDAwMDAwXCIsXG4gIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgYW5pbWVUaWNUYWNUb2UgfSA9IHVzZUFuaW1lTGV0dGVycygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvcm1WaXNpYmxlKSByZXR1cm47XG4gICAgYW5pbWVUaWNUYWNUb2UoKTtcbiAgfSwgW2Zvcm1WaXNpYmxlXSk7XG5cbiAgY29uc3QgZmluaXNoRm9ybSA9ICh2YWx1ZXMpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIHJlZ2lzdGVyUGxheWVycyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgY29sb3JMZWZ0OiB2YWx1ZXMuY29sb3JMZWZ0LmhleCxcbiAgICAgICAgY29sb3JSaWdodDogdmFsdWVzLmNvbG9yUmlnaHQuaGV4LFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshZm9ybVZpc2libGUgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbDExXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZSBsaW5lMVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGV0dGVyc1wiPlRpYyBUYWMgVG9lPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtVmlzaWJsZSh0cnVlKX1cbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBpY29uPXs8QXVkaXRPdXRsaW5lZCAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWdpc3RlciBQbGF5ZXJzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtmb3JtVmlzaWJsZSAmJiAoXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgb25GaW5pc2g9e2ZpbmlzaEZvcm19XG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5ZXJzLWZvcm1cIlxuICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxQbGF5ZXJGb3JtSW5wdXRzXG4gICAgICAgICAgICBzaWRlPVwiTGVmdFwiXG4gICAgICAgICAgICBjb2xvckhleD17Y29sb3JIZXh9XG4gICAgICAgICAgICBzZXRDb2xvckhleD17c2V0Q29sb3JIZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGxheWVyRm9ybUlucHV0c1xuICAgICAgICAgICAgc2lkZT1cIlJpZ2h0XCJcbiAgICAgICAgICAgIGNvbG9ySGV4PXtjb2xvckhleH1cbiAgICAgICAgICAgIHNldENvbG9ySGV4PXtzZXRDb2xvckhleH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IGdyaWRDb2x1bW46IFwiMSAvIHNwYW4gMlwiIH19XG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPXs8Um9ja2V0T3V0bGluZWQgLz59XG4gICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR08hXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclBsYXllcnM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiQXVkaXRPdXRsaW5lZCIsIlJvY2tldE91dGxpbmVkIiwidXNlRGlzcGF0Y2giLCJyZWdpc3RlclBsYXllcnMiLCJ1c2VBbmltZUxldHRlcnMiLCJQbGF5ZXJGb3JtSW5wdXRzIiwiUmVnaXN0ZXJQbGF5ZXJzIiwiZm9ybVZpc2libGUiLCJzZXRGb3JtVmlzaWJsZSIsImxlZnQiLCJyaWdodCIsImNvbG9ySGV4Iiwic2V0Q29sb3JIZXgiLCJkaXNwYXRjaCIsImFuaW1lVGljVGFjVG9lIiwiZmluaXNoRm9ybSIsInZhbHVlcyIsImNvbG9yTGVmdCIsImhleCIsImNvbG9yUmlnaHQiLCJoMSIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwidHlwZSIsInNpemUiLCJpY29uIiwib25GaW5pc2giLCJsYXlvdXQiLCJzaWRlIiwic3R5bGUiLCJncmlkQ29sdW1uIiwiaHRtbFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RegisterPlayers.tsx\n");

/***/ })

});