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
        <>py</>
    </Layout>
}
