import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='variable'>
        <SyntaxHighlighter language="typescript">
            {`//变量声明
let hello = "Hello!";//块作用域，先定义后使用
const numLivesForCat = 9;//不可变量声明
let [first, second] = [1, 2];//解构赋值
let [, second] = [1, 2, 3, 4, 5];//忽略不关心的元素
let [, second,, ...rest] = [1, 2, 3, 4, 5];//...创建剩余变量，rest=[4,5]
[first, second] = [second, first];//变量交换
const { a=0, b:b1 } = { b: 1 };//对象解构,属性a不存在提供默认值，属性b赋值给b1
//默认参数及参数结构
function f({ a, b = 0 } = { a: "" }){ };//参数类型推断{ a: string; b?: number; }
f();//启用默认参数{a: ""}解构得a="",b=0
f({});//报错，提供的参数缺少属性'a'
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };//...展开操作符创建浅拷贝
`}
        </SyntaxHighlighter>
        <>rs</>
        <SyntaxHighlighter language="kotlin">
            {`//变量的声明，每个变量都必需声明。任何尝试使用尚未声明的变量都会是语法错误；因此可以防止意外赋值给拼错的变量。声明还决定了允许在变量中存储哪种数据。局部变量通常在声明时同时初始化，对于这种情况，变量的类型推断为初始化所使用的表达式的类型，变量名使用lowerCamelCase而不是snake_case
var number = 42//var声明一个可变变量number，其值为 42、其类型为 Int
var message = "Hello"//变量 message，其值为 Hello、其类型为 String
val m1=message//val声明一个只读变量，只读变量本身不是常量：它可以使用变量初始化（因此在编译时不需要知道它的值）它可以引用本身可变的对象
const val x = 2//常量，值是在编译时已知的字符串或基本类型，只能在文件的顶层或对象声明内（但不在类声明中）声明常量
val \`123, this is not an error!\`=1//标识符可以由字母，数字和下划线组成不能以数字开头，反引号加任意内容为有效标识符
//变量的使用
number += 7
println(number)
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">{`#变量名为字母、数字或_的组合，不能用数字开头，不建议使用非ASCII字符(不要使用中文、特殊字符)
a = 1#变量a是一个整数
a = 'ABC' # a变为字符串,同一个变量可以反复赋值，而且可以是不同类型的变量
#常量，通常用全部大写的变量名表示常量，但事实上PI仍然是一个变量，Python根本没有任何机制保证PI不会被改变，所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果你一定要改变变量PI的值，也没人能拦住你。
PI = 3.14159265359
`}
        </SyntaxHighlighter>

    </Layout>
}
