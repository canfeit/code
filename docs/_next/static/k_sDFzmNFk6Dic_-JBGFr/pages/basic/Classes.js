(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{KLcP:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),s=a.n(t),r=a("YA/R"),c=a("uUdh"),o="C:\\Users\\canfe\\Documents\\GitHub\\code\\pages\\basic\\Classes.js";n.default=function(){return s.a.createElement(r.a,{cat:"basic",id:"Classes",__source:{fileName:o,lineNumber:5},__self:this},s.a.createElement(c.a,{language:"typescript",__source:{fileName:o,lineNumber:6},__self:this},"abstract class Animal {//\u62bd\u8c61\u7c7b\uff0c\u4e00\u822c\u4e0d\u4f1a\u76f4\u63a5\u88ab\u5b9e\u4f8b\u5316\u3002 \u4e0d\u540c\u4e8e\u63a5\u53e3\uff0c\u62bd\u8c61\u7c7b\u53ef\u4ee5\u5305\u542b\u6210\u5458\u7684\u5b9e\u73b0\u7ec6\u8282\n    static origin = {x: 0, y: 0};//\u9759\u6001\u6210\u5458\u5c5e\u6027\n    constructor(protected name: string) { }//\u5e26\u53c2\u6570\u5c5e\u6027\u7684\u6784\u9020\u51fd\u6570\uff0c\u5b9e\u4f8b\u5c5e\u6027\u58f0\u660e\u548c\u8d4b\u503c\u5408\u5e76\uff0cprotected\u58f0\u660e\u4ec5\u5728\u7c7b\uff08\u53ca\u5176\u5b50\u7c7b\uff09\u5185\u90e8\u53ef\u7528\n    abstract bark(): void;//\u62bd\u8c61\u65b9\u6cd5\u4e0d\u5305\u542b\u5177\u4f53\u5b9e\u73b0\u5e76\u4e14\u5fc5\u987b\u5728\u6d3e\u751f\u7c7b\u4e2d\u5b9e\u73b0\n}\nclass Dog extends Animal {//\u7ee7\u627f\n    constructor(name) {\n        super(name); // \u82e5\u91cd\u5199\u6784\u9020\u65b9\u6cd5\u5fc5\u987b\u9996\u5148\u8c03\u7528 super()\n    }\n    private readonly department=\"001\";//\u79c1\u6709\u53ea\u8bfb\u5c5e\u6027\uff0c\u4ec5\u5728\u5185\u90e8\u53ef\u7528,\u9ed8\u8ba4\u4e3apublic\n    bark() {//\u6210\u5458\u65b9\u6cd5\uff0c\u5b9e\u73b0\u7236\u7c7b\u62bd\u8c61\u65b9\u6cd5\n        console.log(this.name,this.department,'Woof! Woof!');\n    }\n}\nconst dog = new Dog('\u96ea\u7403');\ndog.bark();\n"),s.a.createElement(s.a.Fragment,null,"rs"),s.a.createElement(s.a.Fragment,null,"kt"),s.a.createElement(s.a.Fragment,null,"py"))}},mjoX:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic/Classes",function(){var e=a("KLcP");return{page:e.default||e}}])}},[["mjoX",1,0]]]);