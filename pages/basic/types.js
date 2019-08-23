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
1.1-1//0.10000000000000009
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
        <SyntaxHighlighter language="kotlin">
            {`//整型，Kotlin中的整数类型具有有限的大小，而不是Python中的任意大整数,如果需要无限大小的整数，请使用非基本类型BigInteger。
val anInt = 3//Int	32位 [-2147483648,2147483647]
val aLong = 2147483648//Long	64位
val aSmallLong = 3L
val aShort: Short = 32767//Short	16位	[-32768,32767]
val anotherShort = aSmallLong.toShort()
val aByte: Byte = 65//Byte	8位	[-128,127]
val anotherByte = anInt.toByte()
7 / 3//2,整数除以整数会产生整数
7 / 3.0//2.3333333333333335,如果你想要一个浮点数结果，至少有一个操作数需要是一个浮点数
1.1-1//0.10000000000000009
2147483647+1//-2147483648,只存储了“真实”结果的低32位,当您对两个不同类型的整数使用算术运算符时，结果将“升级”为最宽的类型,如果结果不适合该类型不会自动“升级”！
//Double	64位	16-17位有效数字（与Python 相同）
//Float	32位	6-7位有效数字
//Boolean	8位	true/false
//如果您需要更高的精度，或使用金额（或其他必须具有精确结果的情况），请使用非基本类型BigDecimal
'x' // Char 16位	
"Hello" // String
"Hello"[0] // Char
//字符串插值$,花括号中表达式
val name = "Anne"
val yearOfBirth = 1985
val yearNow = 2018
"$name is \${yearNow - yearOfBirth} years old"//Anne is 33 years old
        `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
            {`#整数
-80#十进制整数
0xff00#十六进制整数
#浮点数
1.23#小数
1.2e-5#科学计数法表示0.000012
1.1-1#0.10000000000000009
#除法
9 / 3 #3.0，/除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数：
10 // 3 #3,//除法只取结果的整数部分
10 % 3 #1,%运算可以得到两数相除的余数
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
