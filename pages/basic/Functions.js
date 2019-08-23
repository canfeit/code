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
        <SyntaxHighlighter language="kotlin">
            {`//使用fun关键字声明函数,必须声明参数和返回值类型。函数名使用lowerCamelCase而不是snake_case
fun happyBirthday(name: String, age: Int): String {
    return "Happy \${age}th birthday, $name!"
}
fun square(number: Int) = number * number//oneliner function
fun square(number: Double) = number * number//Overloading
fun countAndPrintArgs(vararg numbers: Int) {//vararg声明可变参数numbers，类型为IntArray，接收任意数量的参数
    for (number in numbers) println(number)
}
countAndPrintArgs(*listOf(1, 2, 3).toIntArray())
fun foo(number: Double,text: String = "Hello") { }//带默认值的可选参数，
foo(text = "hi",number = 12)//调用时可选择命名部分或全部参数，调用时命名参数位置随意
fun tricky(x: Int, numbers: MutableList<Int> = mutableListOf()) {//每次调用都会计算默认值
    numbers.add(x)
    println(numbers)
}
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
            {`#在Python中，定义一个函数要使用def语句，依次写出函数名、括号、括号中的参数和冒号:，然后，在缩进块中编写函数体，函数的返回值用return语句返回。如果没有return语句，函数执行完毕后也会返回结果，只是结果为None。
def f1(x,y=1,z=2):#自定义函数f1,y,z是默认参数
    return x,y,z #在语法上，返回一个tuple可以省略括号，而多个变量可以同时接收一个tuple，按位置赋给对应的值，所以，Python的函数返回多值其实就是返回一个tuple
x,y=f1(6,z=8)#函数调用，调用函数的时候，如果传入的参数数量不对会报TypeError的错误，参数类型不匹配的情况需要在函数内部自行处理
def tricky(x, numbers=[]):#默认参数应指向不变对象,因为默认参数的值只在定义时计算确定，每次调用都指向同一个对象，对象的修改会导致所有函数默认参数值的变化
    numbers.append(x)
    return numbers
tricky(1)#每次调用，返回值都会保留上次调用结果
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
#偏函数，把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单。
int2 = functools.partial(int, base=2)#int()函数可以把字符串转换为整数，要转换大量的二进制字符串，每次都要传base=2非常麻烦int(x, base=2)
int2('1000000')#64，新的int2函数，把base参数设定默认值为2
`}
        </SyntaxHighlighter>
        <>
            使用不变对象，多任务环境下同时读取对象不需要加锁，应优先使用不变对象。
            在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。

理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。

使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。
解决递归调用栈溢出的方法是通过尾递归优化，事实上尾递归和循环是等价的，所以，把循环看成是一种特殊的尾递归函数也是可以的。

尾递归是指，在函数返回的时候，调用自身本身，并且，return语句不能包含表达式。这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，都只占用一个栈帧，不会出现栈溢出的情况。python不支持尾递归优化
一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数
        </>
    </Layout>
}
