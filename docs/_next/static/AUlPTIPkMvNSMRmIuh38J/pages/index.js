(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RNiq:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("YA/R"),s=t("uUdh"),i="C:\\Users\\canfe\\Documents\\GitHub\\code\\pages\\index.js";n.default=function(){return r.a.createElement(l.a,{id:"home",__source:{fileName:i,lineNumber:4},__self:this},r.a.createElement(r.a.Fragment,null," TypeScript\u662fMicrosoft\u516c\u53f8\u6ce8\u518c\u5546\u6807\u3002TypeScript\u5177\u6709\u7c7b\u578b\u7cfb\u7edf\uff0c\u4e14\u662fJavaScript\u7684\u8d85\u96c6\u3002 \u5b83\u53ef\u4ee5\u7f16\u8bd1\u6210\u666e\u901a\u7684JavaScript\u4ee3\u7801\u3002 TypeScript\u652f\u6301\u4efb\u610f\u6d4f\u89c8\u5668\uff0c\u4efb\u610f\u73af\u5883\uff0c\u4efb\u610f\u7cfb\u7edf\u5e76\u4e14\u662f\u5f00\u6e90\u7684\u3002",r.a.createElement("p",{__source:{fileName:i,lineNumber:6},__self:this},"\u5b89\u88c5: ",r.a.createElement("a",{href:"https://yarnpkg.com/docs/getting-started",__source:{fileName:i,lineNumber:6},__self:this},"yarn")," global add ",r.a.createElement("a",{href:"https://github.com/TypeStrong/ts-node",__source:{fileName:i,lineNumber:6},__self:this},"ts-node")),r.a.createElement(s.a,{language:"typescript",__source:{fileName:i,lineNumber:7},__self:this},"// hello.ts\ninterface Person { name: string; }\nconst greeter = (person: Person) =>".concat("`Hello ${person.name}`",';\nconsole.log(greeter({ name: "World" }));')),"\u8fd0\u884c: ts-node hello.ts"),r.a.createElement(r.a.Fragment,null,"Rust \u662f\u4e00\u79cd\u5b89\u5168\u3001\u5e76\u53d1\u3001\u5b9e\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u6709\u7740\u60ca\u4eba\u7684\u8fd0\u884c\u901f\u5ea6\uff0c\u80fd\u591f\u9632\u6b62\u6bb5\u9519\u8bef\uff0c\u5e76\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168,\u4f7f\u6bcf\u4e2a\u4eba\u90fd\u80fd\u591f\u6784\u5efa \u53ef\u9760\uff0c\u9ad8\u6548\u7684\u8f6f\u4ef6",r.a.createElement(s.a,{language:"rust",__source:{fileName:i,lineNumber:16},__self:this},'use ferris_says::say; // from the previous step\nuse std::io::{stdout, BufWriter};\n\nfn main() {\n    let stdout = stdout();\n    let out = b"Hello fellow Rustaceans!";\n    let width = 24;\n\n    let mut writer = BufWriter::new(stdout.lock());\n    say(out, width, &mut writer).unwrap();\n}')),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{language:"kotlin",__source:{fileName:i,lineNumber:30},__self:this},'suspend fun main() = coroutineScope {\n  for (i in 0 until 10) {\n    launch {\n      delay(1000L - i * 10)\n      print("\u2764\ufe0f$i ")\n    }\n  }\n}')),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{language:"python",__source:{fileName:i,lineNumber:41},__self:this},'#!/usr/bin/python\n# -*- coding: UTF-8 -*-\n \nprint "\u4f60\u597d\uff0c\u4e16\u754c";')))}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);