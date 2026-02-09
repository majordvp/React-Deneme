"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native */ \"(pages-dir-node)/./node_modules/react-native-web/dist/cjs/index.js\");\n\n\n\n\n// React Native Web'in Next.js ile server-side rendering (SSR) yapabilmesi için gerekli olan dosya.\n// Burası, uygulama sunucuda render edilirken CSS stillerini yakalayıp sayfaya ekler.\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    static async getInitialProps({ renderPage }) {\n        react_native__WEBPACK_IMPORTED_MODULE_3__.AppRegistry.registerComponent('Main', ()=>next_document__WEBPACK_IMPORTED_MODULE_2__.Main);\n        const { getStyleElement } = react_native__WEBPACK_IMPORTED_MODULE_3__.AppRegistry.getApplication('Main');\n        const page = await renderPage();\n        const styles = [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                dangerouslySetInnerHTML: {\n                    __html: `html,body,#__next{height:100%}`\n                }\n            }, \"rn-style\", false, {\n                fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            getStyleElement()\n        ];\n        return {\n            ...page,\n            styles: react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(styles)\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            style: {\n                height: '100%'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            charSet: \"UTF-8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    style: {\n                        height: '100%',\n                        overflow: 'hidden'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\seyit\\\\IlkUygulamam\\\\pages\\\\_document.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDc0M7QUFDNUI7QUFFM0MsbUdBQW1HO0FBQ25HLHFGQUFxRjtBQUV0RSxNQUFNTyxtQkFBbUJOLHNEQUFRQTtJQUM5QyxhQUFhTyxnQkFBZ0IsRUFBRUMsVUFBVSxFQUFFLEVBQUU7UUFDM0NILHFEQUFXQSxDQUFDSSxpQkFBaUIsQ0FBQyxRQUFRLElBQU1OLCtDQUFJQTtRQUNoRCxNQUFNLEVBQUVPLGVBQWUsRUFBRSxHQUFHTCxxREFBV0EsQ0FBQ00sY0FBYyxDQUFDO1FBQ3ZELE1BQU1DLE9BQU8sTUFBTUo7UUFDbkIsTUFBTUssU0FBUzswQkFDYiw4REFBQ0M7Z0JBQXFCQyx5QkFBeUI7b0JBQUVDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQztnQkFBQztlQUEvRTs7Ozs7WUFDWE47U0FDRDtRQUNELE9BQU87WUFBRSxHQUFHRSxJQUFJO1lBQUVDLFFBQVFkLDJDQUFRQSxDQUFDa0IsT0FBTyxDQUFDSjtRQUFRO0lBQ3JEO0lBRUFLLFNBQVM7UUFDUCxxQkFDRSw4REFBQ2pCLCtDQUFJQTtZQUFDYSxPQUFPO2dCQUFFSyxRQUFRO1lBQU87OzhCQUM1Qiw4REFBQ2pCLCtDQUFJQTs7c0NBQ0gsOERBQUNrQjs0QkFBS0MsU0FBUTs7Ozs7O3NDQUNkLDhEQUFDRDs0QkFBS0UsV0FBVTs0QkFBa0JDLFNBQVE7Ozs7Ozs7Ozs7Ozs4QkFFNUMsOERBQUNDO29CQUFLVixPQUFPO3dCQUFFSyxRQUFRO3dCQUFRTSxVQUFVO29CQUFTOztzQ0FDaEQsOERBQUN0QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2V5aXRcXElsa1V5Z3VsYW1hbVxccGFnZXNcXF9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcclxuaW1wb3J0IHsgQXBwUmVnaXN0cnkgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xyXG5cclxuLy8gUmVhY3QgTmF0aXZlIFdlYidpbiBOZXh0LmpzIGlsZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgKFNTUikgeWFwYWJpbG1lc2kgacOnaW4gZ2VyZWtsaSBvbGFuIGRvc3lhLlxyXG4vLyBCdXJhc8SxLCB1eWd1bGFtYSBzdW51Y3VkYSByZW5kZXIgZWRpbGlya2VuIENTUyBzdGlsbGVyaW5pIHlha2FsYXnEsXAgc2F5ZmF5YSBla2xlci5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlbmRlclBhZ2UgfSkge1xyXG4gICAgQXBwUmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoJ01haW4nLCAoKSA9PiBNYWluKTtcclxuICAgIGNvbnN0IHsgZ2V0U3R5bGVFbGVtZW50IH0gPSBBcHBSZWdpc3RyeS5nZXRBcHBsaWNhdGlvbignTWFpbicpO1xyXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IHJlbmRlclBhZ2UoKTtcclxuICAgIGNvbnN0IHN0eWxlcyA9IFtcclxuICAgICAgPHN0eWxlIGtleT1cInJuLXN0eWxlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBgaHRtbCxib2R5LCNfX25leHR7aGVpZ2h0OjEwMCV9YCB9fSAvPixcclxuICAgICAgZ2V0U3R5bGVFbGVtZW50KCksXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHsgLi4ucGFnZSwgc3R5bGVzOiBDaGlsZHJlbi50b0FycmF5KHN0eWxlcykgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIdG1sIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHkgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoaWxkcmVuIiwiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiQXBwUmVnaXN0cnkiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVuZGVyUGFnZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0U3R5bGVFbGVtZW50IiwiZ2V0QXBwbGljYXRpb24iLCJwYWdlIiwic3R5bGVzIiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRvQXJyYXkiLCJyZW5kZXIiLCJoZWlnaHQiLCJtZXRhIiwiY2hhclNldCIsImh0dHBFcXVpdiIsImNvbnRlbnQiLCJib2R5Iiwib3ZlcmZsb3ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.js\n");

/***/ }),

/***/ "fbjs/lib/invariant":
/*!*************************************!*\
  !*** external "fbjs/lib/invariant" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "fbjs/lib/warning":
/*!***********************************!*\
  !*** external "fbjs/lib/warning" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "inline-style-prefixer/lib/createPrefixer":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/createPrefixer" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/crossFade":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/crossFade" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/imageSet":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/imageSet" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/logical":
/*!************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/logical" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/position":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/position" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/sizing":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/sizing" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/transition":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/transition" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nullthrows":
/*!*****************************!*\
  !*** external "nullthrows" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nullthrows");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "postcss-value-parser":
/*!***************************************!*\
  !*** external "postcss-value-parser" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("postcss-value-parser");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styleq":
/*!*************************!*\
  !*** external "styleq" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("styleq");

/***/ }),

/***/ "styleq/transform-localize-style":
/*!**************************************************!*\
  !*** external "styleq/transform-localize-style" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("styleq/transform-localize-style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-native-web","vendor-chunks/next","vendor-chunks/@babel","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_document.js")));
module.exports = __webpack_exports__;

})();