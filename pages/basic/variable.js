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
        <>kt</>
        <SyntaxHighlighter language="python">{`#变量名为字母、数字或_的组合，不能用数字开头，不建议使用非ASCII字符
a = 1#变量a是一个整数
a = 'ABC' # a变为字符串,同一个变量可以反复赋值，而且可以是不同类型的变量
#常量，通常用全部大写的变量名表示常量，但事实上PI仍然是一个变量，Python根本没有任何机制保证PI不会被改变，所以，用全部大写的变量名表示常量只是一个习惯上的用法，如果你一定要改变变量PI的值，也没人能拦住你。
PI = 3.14159265359
#除法
9 / 3 #3.0，/除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数：
10 // 3 #3,//除法只取结果的整数部分
10 % 3 #1,%运算可以得到两数相除的余数

`}
        </SyntaxHighlighter>

    </Layout>
}
