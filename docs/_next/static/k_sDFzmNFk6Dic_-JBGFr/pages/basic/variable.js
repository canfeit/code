(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"U7+c":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic/variable",function(){var e=a("zZUZ");return{page:e.default||e}}])},zZUZ:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),s=a.n(t),c=a("YA/R"),r=a("uUdh"),i="C:\\Users\\canfe\\Documents\\GitHub\\code\\pages\\basic\\variable.js";n.default=function(){return s.a.createElement(c.a,{cat:"basic",id:"variable",__source:{fileName:i,lineNumber:5},__self:this},s.a.createElement(r.a,{language:"typescript",__source:{fileName:i,lineNumber:6},__self:this},'//\u53d8\u91cf\u58f0\u660e\nlet hello = "Hello!";//\u5757\u4f5c\u7528\u57df\uff0c\u5148\u5b9a\u4e49\u540e\u4f7f\u7528\nconst numLivesForCat = 9;//\u4e0d\u53ef\u53d8\u91cf\u58f0\u660e\nlet [first, second] = [1, 2];//\u89e3\u6784\u8d4b\u503c\nlet [, second] = [1, 2, 3, 4, 5];//\u5ffd\u7565\u4e0d\u5173\u5fc3\u7684\u5143\u7d20\nlet [, second,, ...rest] = [1, 2, 3, 4, 5];//...\u521b\u5efa\u5269\u4f59\u53d8\u91cf\uff0crest=[4,5]\n[first, second] = [second, first];//\u53d8\u91cf\u4ea4\u6362\nconst { a=0, b:b1 } = { b: 1 };//\u5bf9\u8c61\u89e3\u6784,\u5c5e\u6027a\u4e0d\u5b58\u5728\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\u5c5e\u6027b\u8d4b\u503c\u7ed9b1\n//\u9ed8\u8ba4\u53c2\u6570\u53ca\u53c2\u6570\u7ed3\u6784\nfunction f({ a, b = 0 } = { a: "" }){ };//\u53c2\u6570\u7c7b\u578b\u63a8\u65ad{ a: string; b?: number; }\nf();//\u542f\u7528\u9ed8\u8ba4\u53c2\u6570{a: ""}\u89e3\u6784\u5f97a="",b=0\nf({});//\u62a5\u9519\uff0c\u63d0\u4f9b\u7684\u53c2\u6570\u7f3a\u5c11\u5c5e\u6027\'a\'\nlet defaults = { food: "spicy", price: "$$", ambiance: "noisy" };\nlet search = { ...defaults, food: "rich" };//...\u5c55\u5f00\u64cd\u4f5c\u7b26\u521b\u5efa\u6d45\u62f7\u8d1d\n'),s.a.createElement(s.a.Fragment,null,"rs"),s.a.createElement(s.a.Fragment,null,"kt"),s.a.createElement(s.a.Fragment,null,"py"))}}},[["U7+c",1,0]]]);