import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Functions'>
        <SyntaxHighlighter language="typescript">
            {`// 命名函数,参数类型必须为number，参数y可不传
function add(x: number, y?: number) { }
// 匿名函数,参数类型必须为number，参数y不传（为undefined）时，使用默认值1
let add = function(x: number, y=1) { };
// 剩余参数，不知道会有多少参数传递进来时，可以使用剩余参数把所有参数收集到一个变量里
function buildName(firstName: string, ...restOfName: string[]) {}
`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <SyntaxHighlighter language="python">
            {`#在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。如果没有return语句，函数执行完毕后也会返回结果，只是结果为None。
def f1(x,y=1,z=2):#自定义函数f1,y,z是默认参数,默认参数必须指向不变对象,默认参数的值在定义时确定，每次调用都指向同一个对象，对象的修改会导致所以函数默认参数值的变化
    return x,y,z #在语法上，返回一个tuple可以省略括号，而多个变量可以同时接收一个tuple，按位置赋给对应的值，所以，Python的函数返回多值其实就是返回一个tuple
x,y=f1(6,z=8)#函数调用，调用函数的时候，如果传入的参数数量不对会报TypeError的错误，参数类型不匹配的情况需要在函数内部自行处理
#可变参数
def calc(*numbers):
    return numbers#参数numbers接收到的是一个tuple
calc(1,2,3)
calc(*[1,2,3])
#关键字参数
def person(name, age, **kw):#kw是关键字参数接收任意个含参数名的参数组装为一个dict,它可以扩展函数的功能,接收用户自定义参数
    print(kw)
person('Adam', 45, gender='M', job='Engineer')
person('Jack', 24, **{'city': 'Beijing', 'job': 'Engineer'})
`}
        </SyntaxHighlighter>
        <>
            使用不变对象，多任务环境下同时读取对象不需要加锁，应优先使用不变对象。
        </>
    </Layout>
}
