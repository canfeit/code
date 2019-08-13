webpackHotUpdate("static\\development\\pages\\basic\\Generics.js",{

/***/ "./pages/basic/Generics.js":
/*!*********************************!*\
  !*** ./pages/basic/Generics.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout */ "./layout.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
var _jsxFileName = "C:\\Users\\canfe\\Documents\\GitHub\\code\\pages\\basic\\Generics.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cat: "basic",
    id: "Generics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], {
    language: "typescript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "//\u6CDB\u578B\u51FD\u6570\uFF0C\u4F7F\u7528\u7C7B\u578B\u53D8\u91CFT\u8868\u793A\u7C7B\u578B\u3002\nfunction identity<T>(arg: T): T {}//<>\u4E2D\u662F\u7C7B\u578B\u53C2\u6570\uFF0C\u58F0\u660E\u53C2\u6570arg\u4E0E\u8FD4\u56DE\u503C\u662F\u76F8\u540C\u7684\u7C7B\u578B\nlet output = identity<string>(\"myString\");//\u4F7F\u7528<>\u6307\u5B9A\u7C7B\u578B\u53C2\u6570\nlet output = identity(\"myString\"); //\u5229\u7528\u7C7B\u578B\u63A8\u8BBA\u6839\u636E\u4F20\u5165\u7684\u53C2\u6570\u81EA\u52A8\u786E\u5B9AT\u7684\u7C7B\u578B\ninterface GenericIdentityFn<T> { (arg: T): T; }//\u5B9A\u4E49\u6CDB\u578B\u63A5\u53E3\nlet myIdentity: GenericIdentityFn<number> = function (arg){};//\u4F7F\u7528\u6CDB\u578B\u63A5\u53E3\u5B9A\u4E49\u51FD\u6570\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {}//keyof\uFF0C\u7D22\u5F15\u7C7B\u578B\u67E5\u8BE2\u64CD\u4F5C\u7B26\uFF0Ckeyof T\uFF0CT\u4E0A\u5C5E\u6027\u540D\u7684\u8054\u5408\uFF0CT[K]\u7D22\u5F15\u8BBF\u95EE\u64CD\u4F5C\u7B26\ngetProperty({a:1}, \"m\"); // error: m\u5728{a:1}\u4E3B\u952E\u4E2D\u4E0D\u5B58\u5728\n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "rs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "kt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "py"));
});

/***/ })

})
//# sourceMappingURL=Generics.js.ff91ff27b8a9379734a3.hot-update.js.map