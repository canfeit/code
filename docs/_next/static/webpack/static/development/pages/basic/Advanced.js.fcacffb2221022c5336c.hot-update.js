webpackHotUpdate("static\\development\\pages\\basic\\Advanced.js",{

/***/ "./pages/basic/Advanced.js":
/*!*********************************!*\
  !*** ./pages/basic/Advanced.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout */ "./layout.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
var _jsxFileName = "C:\\Users\\canfe\\Documents\\GitHub\\code\\pages\\basic\\Advanced.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cat: "basic",
    id: "Advanced",
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
  }, "//\u4EA4\u53C9\u7C7B\u578B\uFF0C\u5C06\u591A\u4E2A\u7C7B\u578B\u5408\u5E76\u4E3A\u4E00\u4E2A\u7C7B\u578B\u3002 \u5B83\u5305\u542B\u4E86\u6240\u6709\u7C7B\u578B\u7684\u7279\u6027\uFF0C\u540C\u65F6\u62E5\u6709\u4E86\u6240\u6709\u7C7B\u578B\u7684\u6210\u5458\u3002\ninterface a {a:string;}\ninterface b {b:string;}\nconst ab:a&b={a:'1',b:'2'}//\u4F7F\u7528\u4EA4\u53C9\u7C7B\u578Ba&b\u58F0\u660Eab\n//\u8054\u5408\u7C7B\u578B\u8868\u793A\u4E00\u4E2A\u503C\u53EF\u4EE5\u662F\u51E0\u79CD\u7C7B\u578B\u4E4B\u4E00\u3002 \u7528\u7AD6\u7EBF\uFF08|\uFF09\u5206\u9694\u6BCF\u4E2A\u7C7B\u578B\nfunction getSmallPet(): Fish | Bird {}//\u8FD4\u56DE\u503C\u53EF\u4EE5\u662FFish\u6216Bird\u7C7B\u578B\u3002\nlet pet = getSmallPet();//\u9ED8\u8BA4\u53EA\u80FD\u8BBF\u95EEpet\u8054\u5408\u7C7B\u578B\uFF08Fish|Bird\uFF09\u91CC\u5171\u6709\u7684\u6210\u5458\n//\u7C7B\u578B\u5B88\u536B\nfunction isFish(pet: Fish | Bird): pet is Fish {//pet is Fish\u5C31\u662F\u7C7B\u578B\u8C13\u8BCD\u3002 \u8C13\u8BCD\u4E3Aparam is Type\u8FD9\u79CD\u5F62\u5F0F\uFF0Cparam\u5FC5\u987B\u4E3A\u5F53\u524D\u51FD\u6570\u7684\u53C2\u6570\n    return (pet as Fish).swim !== undefined;\n}\nif (isFish(pet)) pet.swim();//TypeScript\u77E5\u9053\u5728if\u5206\u652F\u91CCpet\u662FFish\u7C7B\u578B\uFF0C\u5728else\u5206\u652F\u91CC\u662FBird\u7C7B\u578B\nelse pet.fly();\n//typeof\u7C7B\u578B\u5B88\u536B\uFF0Ctypeof v === \"typename\"\u548Ctypeof v !== \"typename\"\u80FD\u88AB\u81EA\u52A8\u8BC6\u522B\u4E3A\u7C7B\u578B\u5B88\u536B\uFF0C\"typename\"\u5FC5\u987B\u662F\"number\"\uFF0C\"string\"\uFF0C\"boolean\"\u6216\"symbol\"\u3002 \nif (typeof padding === \"number\") {}\n//instanceof\u7C7B\u578B\u5B88\u536B\nif (padder instanceof SpaceRepeatingPadder) {}\n//\u975E\u7A7A\u7C7B\u578B\u65AD\u8A00,!\u540E\u7F00\nfunction fixed(name: string | null): string { return name!.charAt(0) }//\u58F0\u660E\u6B64\u5904name\u4E0D\u662Fnull\u6216undefined\uFF08\u6B64\u5904\u793A\u4F8B\u4E0D\u5F53\uFF09\n//\u7C7B\u578B\u522B\u540D\uFF0C\u7ED9\u7C7B\u578B\u8D77\u4E2A\u65B0\u540D\u5B57\uFF0C\u4E0D\u4F1A\u65B0\u5EFA\u7C7B\u578B\u800C\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u540D\u5B57\u6765\u5F15\u7528\u90A3\u4E2A\u7C7B\u578B\ntype Tree<T> = {//\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u5728\u5C5E\u6027\u91CC\u5F15\u7528\u81EA\u5DF1\n    value: T;\n    left: Tree<T>;\n    right: Tree<T>;\n}\n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "rs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "kt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "py"));
});

/***/ })

})
//# sourceMappingURL=Advanced.js.fcacffb2221022c5336c.hot-update.js.map