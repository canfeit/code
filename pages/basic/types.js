import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='types'>
        <SyntaxHighlighter language="typescript">
            {`let isDone = false;//boolean 布尔值 true/false
//number 所有数字都是浮点数
let decLiteral = 6;// 十进制
let hexLiteral = 0xf00d;// 十六进制
let binaryLiteral = 0b1010;// 二进制
let octalLiteral = 0o744;// 八进制
//string 双引号或单引号表示字符串;反引号表示模版字符串，\${ }内嵌表达式
let name = "bob";
let sentence = \`Hello, I'm \${ name }.\`;
//symbol,不可改变且唯一。
const getClassNameSymbol = Symbol();//通过Symbol构造函数创建
class C {
    [getClassNameSymbol](){ }//用symbol声明类成员
}
(new C())[getClassNameSymbol]();//用symbol访问类成员
//null和undefined
//Use undefined，Don't use null.使用 "strict" 或者 "strictNullChecks" 编译选项
//在tsconfig.js中:
{
    "compilerOptions": {
        "strict": true,
        //...
    }
}
//类型断言
let someValue: any = "this is a string";
let strLength = (someValue as string).length;`}
        </SyntaxHighlighter>
        <> 1</>
        <> 2</>
        <SyntaxHighlighter language="python">
            {`#整数
-80#十进制整数
0xff00#十六进制整数
#浮点数
1.23#小数
1.2e-5#科学计数法表示0.000012
#字符串，单引号'或双引号"括起来的任意文本
"abc"#字符串abc
'I\\'m OK!'#I'm OK!，\\是转移字符
print(r'\\n表示换行')#\\n表示输出时换行，r'表示不转义即输出字符\\n而不是换行
'''三个单引号或三个双引号
可以表示多行文本
可用于多行注释'''#'''表示多行文本,r'''表示不转义多行文本
#布尔值，只有True、False两种值
3 > 2#True,布尔运算
5 > 3 and 3 > 1#True,与运算，只有所有都为True，结果才是True
5 > 3 or 1 > 3#True,或运算，只要其中有一个为True，结果就是True
not 1 > 2 #True,非运算，把True变成False，False变成True
#空值用None表示
`}
        </SyntaxHighlighter>
    </Layout>
}
