(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4DGX":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic/for",function(){var n=t("HDW7");return{page:n.default||n}}])},HDW7:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),r=t("YA/R"),o=t("uUdh");e.default=function(){return i.a.createElement(r.a,{cat:"basic",id:"if",title:"\u5faa\u73af"},i.a.createElement(o.a,{language:"typescript"},""),i.a.createElement(o.a,{language:"rust"},""),i.a.createElement(o.a,{language:"kotlin"},'//for\u8fed\u4ee3\u4efb\u4f55\u5177\u6709iterator()\u51fd\u6570\u7684\u5bf9\u8c61\nval names = listOf("Anne", "Peter", "Jeff")\nfor (name in names) {//\u904d\u5386names\uff0c\u521b\u5efa\u5185\u90e8\u53ea\u8bfb\u53d8\u91cfname\n    println(name)\n}\nfor (x in 0..5) println(x)//0 1 2 3 4 5,..range\u64cd\u4f5c\u7b26\u751f\u6210\u53ef\u8fed\u4ee3\u5bf9\u8c61\nfor (x in 0 until 5) println(x)//0 1 2 3 4\nfor (x in 10 downTo 0 step 2) println(x) // Prints 10, 8, 6, 4, 2, 0\n(0..9).toList()\nfor ((index, value) in (0..5).withIndex()) {//\u5e26\u7d22\u5f15\n    println("$index: $value")\n}\nvar x = 0\nwhile (x < 10) {\n    println(x)\n    x++ // Same as x += 1\n}\n'),i.a.createElement(o.a,{language:"python"},"#for...in\u5faa\u73af,\u4f9d\u6b21\u628alist\u6216tuple\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8fed\u4ee3\u51fa\u6765\nsum = 0\nfor x in [1, 2, 3]:\n    sum = sum + x\n#while\u5faa\u73af\uff0c\u53ea\u8981\u6761\u4ef6\u6ee1\u8db3\uff0c\u5c31\u4e0d\u65ad\u5faa\u73af\uff0c\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\u9000\u51fa\u5faa\u73af\u3002\nsum = 0\nn = 3\nwhile n > 0:\n    sum = sum + n\n    n = n - 1\nfor x in range(6):#range([start,] stop[, step])\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u53ef\u8fed\u4ee3\u5bf9\u8c61,\u8ba1\u6570\u5230 stop \u7ed3\u675f\uff0c\u4f46\u4e0d\u5305\u62ec stop,step\uff1a\u6b65\u957f\uff0c\u9ed8\u8ba4\u4e3a1\n    print(x)#0 1 2 3 4 5\nlist(range(6))#\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8f6c\u4e3a\u4e00\u4e2a\u5217\u8868\nfor index, value in enumerate(range(6)):#\u5e26\u7d22\u5f15\n    print(index, value)\n"),i.a.createElement(i.a.Fragment,null,"\u4e0d\u5916\u4e4e\uff0cfor\uff0cwhile\uff0cbreak\uff0ccontinue \u5faa\u73af\u662f\u8ba9\u8ba1\u7b97\u673a\u505a\u91cd\u590d\u4efb\u52a1\u7684\u6709\u6548\u7684\u65b9\u6cd5\u3002 break\u8bed\u53e5\u53ef\u4ee5\u5728\u5faa\u73af\u8fc7\u7a0b\u4e2d\u76f4\u63a5\u9000\u51fa\u5faa\u73af\uff0c\u800ccontinue\u8bed\u53e5\u53ef\u4ee5\u63d0\u524d\u7ed3\u675f\u672c\u8f6e\u5faa\u73af\uff0c\u5e76\u76f4\u63a5\u5f00\u59cb\u4e0b\u4e00\u8f6e\u5faa\u73af\u3002\u8fd9\u4e24\u4e2a\u8bed\u53e5\u901a\u5e38\u90fd\u5fc5\u987b\u914d\u5408if\u8bed\u53e5\u4f7f\u7528\u3002 \u8981\u7279\u522b\u6ce8\u610f\uff0c\u4e0d\u8981\u6ee5\u7528break\u548ccontinue\u8bed\u53e5\u3002break\u548ccontinue\u4f1a\u9020\u6210\u4ee3\u7801\u6267\u884c\u903b\u8f91\u5206\u53c9\u8fc7\u591a\uff0c\u5bb9\u6613\u51fa\u9519\u3002\u5927\u591a\u6570\u5faa\u73af\u5e76\u4e0d\u9700\u8981\u7528\u5230break\u548ccontinue\u8bed\u53e5\uff0c\u4e0a\u9762\u7684\u4e24\u4e2a\u4f8b\u5b50\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u6539\u5199\u5faa\u73af\u6761\u4ef6\u6216\u8005\u4fee\u6539\u5faa\u73af\u903b\u8f91\uff0c\u53bb\u6389break\u548ccontinue\u8bed\u53e5\u3002"))}}},[["4DGX",1,0]]]);