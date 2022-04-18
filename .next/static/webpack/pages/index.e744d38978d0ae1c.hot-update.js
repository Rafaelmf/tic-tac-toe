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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ \"./store/actions.ts\");\n/* harmony import */ var _hooks_useAnimeLetters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useAnimeLetters */ \"./hooks/useAnimeLetters.ts\");\n/* harmony import */ var _PlayerFormInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlayerFormInputs */ \"./components/PlayerFormInputs.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar RegisterPlayers = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), formVisible = ref[0], setFormVisible = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        left: \"#00000000\",\n        right: \"#00000000\"\n    }), colorHex = ref1[0], setColorHex = ref1[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var animeTicTacToe = (0,_hooks_useAnimeLetters__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().animeTicTacToe;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (formVisible) return;\n        animeTicTacToe();\n    }, [\n        formVisible\n    ]);\n    var handleChangeColor = function(color, side) {\n        setColorHex(function(oldState) {\n            return _objectSpread({}, oldState, _defineProperty({}, side, color.hex));\n        });\n    };\n    var finishForm = function(values) {\n        dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_4__.registerPlayers)(_objectSpread({}, values, {\n            colorLeft: values.colorLeft.hex,\n            colorRight: values.colorRight.hex\n        })));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !formVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml11\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"line line1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"letters\",\n                                    children: \"Tic Tac Toe\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        onClick: function() {\n                            return setFormVisible(true);\n                        },\n                        type: \"primary\",\n                        size: \"large\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.AuditOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"Register Players\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true),\n            formVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onFinish: finishForm,\n                size: \"large\",\n                className: \"players-form\",\n                layout: \"vertical\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    textShadow: \"2px 2px 0px \".concat(colorHex.left),\n                                    fontSize: \"4rem\"\n                                },\n                                className: \"grid-cell\",\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {\n                                label: \"Player name:\",\n                                name: \"nameLeft\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your username!\"\n                                    }, \n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Input, {}, void 0, false, {\n                                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {\n                                label: \"Color:\",\n                                name: \"colorLeft\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please select a color!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_2__.CirclePicker, {\n                                    onChange: function(color) {\n                                        return handleChangeColor(color, \"left\");\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerFormInputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        side: \"right\",\n                        colorHex: colorHex,\n                        setColorHex: setColorHex\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        style: {\n                            gridColumn: \"1 / span 2\"\n                        },\n                        type: \"primary\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.RocketOutlined, {}, void 0, false, void 0, void 0),\n                        htmlType: \"submit\",\n                        children: \"GO!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rafael/Documents/tic-tac-toe/components/RegisterPlayers.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(RegisterPlayers, \"WUZnFanN5zTjuCrUUu6o/7auFUI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        _hooks_useAnimeLetters__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = RegisterPlayers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPlayers);\nvar _c;\n$RefreshReg$(_c, \"RegisterPlayers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQ3BCQyxJQUFJLEVBQUMsVUFBVTtnQ0FDZkMsS0FBSyxFQUFFO29DQUNMO3dDQUFFQyxRQUFRLEVBQUUsSUFBSTt3Q0FBRUMsT0FBTyxFQUFFLDZCQUE2QjtxQ0FBRTtpQ0FDM0Q7MENBRUQsNEVBQUM3Qyx1Q0FBSzs7Ozt5Q0FBRzs7Ozs7cUNBQ0M7MENBQ1osOERBQUNELDJDQUFTO2dDQUNSMEMsS0FBSyxFQUFDLFFBQVE7Z0NBQ2RDLElBQUksRUFBQyxXQUFXO2dDQUNoQkMsS0FBSyxFQUFFO29DQUFDO3dDQUFFQyxRQUFRLEVBQUUsSUFBSTt3Q0FBRUMsT0FBTyxFQUFFLHdCQUF3QjtxQ0FBRTtpQ0FBQzswQ0FFOUQsNEVBQUM1QyxxREFBWTtvQ0FDWDZDLFFBQVEsRUFBRSxTQUFDNUIsS0FBc0I7K0NBQy9CRCxpQkFBaUIsQ0FBQ0MsS0FBSyxFQUFFLE1BQU0sQ0FBQztxQ0FBQTs7Ozs7eUNBRWxDOzs7OztxQ0FDUTs7Ozs7OzZCQUNSO2tDQUNOLDhEQUFDWCx5REFBZ0I7d0JBQ2ZZLElBQUksRUFBQyxPQUFPO3dCQUNaTixRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCQyxXQUFXLEVBQUVBLFdBQVc7Ozs7OzZCQUN4QjtrQ0FDRiw4REFBQ2hCLHdDQUFNO3dCQUNMdUMsS0FBSyxFQUFFOzRCQUFFVSxVQUFVLEVBQUUsWUFBWTt5QkFBRTt3QkFDbkNqQixJQUFJLEVBQUMsU0FBUzt3QkFDZEUsSUFBSSxnQkFBRSw4REFBQzdCLDZEQUFjLG9DQUFHO3dCQUN4QjZDLFFBQVEsRUFBQyxRQUFRO2tDQUNsQixLQUVEOzs7Ozs2QkFBUzs7Ozs7O3FCQUNKOztvQkFFUixDQUNIO0NBQ0g7R0E3R0t4QyxlQUFlOztRQU1GSixvREFBVztRQUNERSw4REFBZTs7O0FBUHRDRSxLQUFBQSxlQUFlO0FBK0dyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0ZXJQbGF5ZXJzLnRzeD8zZGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IENpcmNsZVBpY2tlciB9IGZyb20gXCJyZWFjdC1jb2xvclwiO1xuaW1wb3J0IHsgQXVkaXRPdXRsaW5lZCwgUm9ja2V0T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHByZXZpb3VzRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJQbGF5ZXJzIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnNcIjtcblxuaW1wb3J0IHVzZUFuaW1lTGV0dGVycyBmcm9tIFwiLi4vaG9va3MvdXNlQW5pbWVMZXR0ZXJzXCI7XG5pbXBvcnQgUGxheWVyRm9ybUlucHV0cyBmcm9tIFwiLi9QbGF5ZXJGb3JtSW5wdXRzXCI7XG5cbmNvbnN0IFJlZ2lzdGVyUGxheWVycyA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1WaXNpYmxlLCBzZXRGb3JtVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xvckhleCwgc2V0Q29sb3JIZXhdID0gdXNlU3RhdGUoe1xuICAgIGxlZnQ6IFwiIzAwMDAwMDAwXCIsXG4gICAgcmlnaHQ6IFwiIzAwMDAwMDAwXCIsXG4gIH0pO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgYW5pbWVUaWNUYWNUb2UgfSA9IHVzZUFuaW1lTGV0dGVycygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZvcm1WaXNpYmxlKSByZXR1cm47XG4gICAgYW5pbWVUaWNUYWNUb2UoKTtcbiAgfSwgW2Zvcm1WaXNpYmxlXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ29sb3IgPSAoXG4gICAgY29sb3I6IHsgaGV4OiBzdHJpbmcgfSxcbiAgICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICApID0+IHtcbiAgICBzZXRDb2xvckhleCgob2xkU3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLm9sZFN0YXRlLCBbc2lkZV06IGNvbG9yLmhleCB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbmlzaEZvcm0gPSAodmFsdWVzKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICByZWdpc3RlclBsYXllcnMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIGNvbG9yTGVmdDogdmFsdWVzLmNvbG9yTGVmdC5oZXgsXG4gICAgICAgIGNvbG9yUmlnaHQ6IHZhbHVlcy5jb2xvclJpZ2h0LmhleCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWZvcm1WaXNpYmxlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwxMVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUgbGluZTFcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxldHRlcnNcIj5UaWMgVGFjIFRvZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Rm9ybVZpc2libGUodHJ1ZSl9XG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgaWNvbj17PEF1ZGl0T3V0bGluZWQgLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVnaXN0ZXIgUGxheWVyc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7Zm9ybVZpc2libGUgJiYgKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uRmluaXNoPXtmaW5pc2hGb3JtfVxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGxheWVycy1mb3JtXCJcbiAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0U2hhZG93OiBgMnB4IDJweCAwcHggJHtjb2xvckhleC5sZWZ0fWAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNHJlbVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNlbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBYXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGxheWVyIG5hbWU6XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVMZWZ0XCJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIVwiIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29sb3I6XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbG9yTGVmdFwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgY29sb3IhXCIgfV19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDaXJjbGVQaWNrZXJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNvbG9yOiB7IGhleDogc3RyaW5nIH0pID0+XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VDb2xvcihjb2xvciwgXCJsZWZ0XCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBsYXllckZvcm1JbnB1dHNcbiAgICAgICAgICAgIHNpZGU9XCJyaWdodFwiXG4gICAgICAgICAgICBjb2xvckhleD17Y29sb3JIZXh9XG4gICAgICAgICAgICBzZXRDb2xvckhleD17c2V0Q29sb3JIZXh9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17eyBncmlkQ29sdW1uOiBcIjEgLyBzcGFuIDJcIiB9fVxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgaWNvbj17PFJvY2tldE91dGxpbmVkIC8+fVxuICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdPIVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQbGF5ZXJzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiQ2lyY2xlUGlja2VyIiwiQXVkaXRPdXRsaW5lZCIsIlJvY2tldE91dGxpbmVkIiwidXNlRGlzcGF0Y2giLCJyZWdpc3RlclBsYXllcnMiLCJ1c2VBbmltZUxldHRlcnMiLCJQbGF5ZXJGb3JtSW5wdXRzIiwiUmVnaXN0ZXJQbGF5ZXJzIiwiZm9ybVZpc2libGUiLCJzZXRGb3JtVmlzaWJsZSIsImxlZnQiLCJyaWdodCIsImNvbG9ySGV4Iiwic2V0Q29sb3JIZXgiLCJkaXNwYXRjaCIsImFuaW1lVGljVGFjVG9lIiwiaGFuZGxlQ2hhbmdlQ29sb3IiLCJjb2xvciIsInNpZGUiLCJvbGRTdGF0ZSIsImhleCIsImZpbmlzaEZvcm0iLCJ2YWx1ZXMiLCJjb2xvckxlZnQiLCJjb2xvclJpZ2h0IiwiaDEiLCJjbGFzc05hbWUiLCJzcGFuIiwib25DbGljayIsInR5cGUiLCJzaXplIiwiaWNvbiIsIm9uRmluaXNoIiwibGF5b3V0IiwiZGl2IiwicCIsInN0eWxlIiwidGV4dFNoYWRvdyIsImZvbnRTaXplIiwiSXRlbSIsImxhYmVsIiwibmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJncmlkQ29sdW1uIiwiaHRtbFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RegisterPlayers.tsx\n");

/***/ })

});