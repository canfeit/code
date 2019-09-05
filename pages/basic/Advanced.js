import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Advanced'>
        <SyntaxHighlighter language="typescript">
            {`//交叉类型，将多个类型合并为一个类型。 它包含了所有类型的特性，同时拥有了所有类型的成员。
interface a {a:string;}
interface b {b:string;}
const ab:a&b={a:'1',b:'2'}//使用交叉类型a&b声明ab
//联合类型表示一个值可以是几种类型之一。 用竖线（|）分隔每个类型
function getSmallPet(): Fish | Bird {}//返回值可以是Fish或Bird类型。
let pet = getSmallPet();//默认只能访问pet联合类型（Fish|Bird）里共有的成员
//类型守卫
function isFish(pet: Fish | Bird): pet is Fish {//pet is Fish就是类型谓词。 谓词为param is Type这种形式，param必须为当前函数的参数
    return (pet as Fish).swim !== undefined;
}
if (isFish(pet)) pet.swim();//TypeScript知道在if分支里pet是Fish类型，在else分支里是Bird类型
else pet.fly();
//typeof类型守卫，typeof v === "typename"和typeof v !== "typename"能被自动识别为类型守卫，"typename"必须是"number"，"string"，"boolean"或"symbol"。 
if (typeof padding === "number") {}
//instanceof类型守卫
if (padder instanceof SpaceRepeatingPadder) {}
//非空类型断言,!后缀
function fixed(name: string | null): string { return name!.charAt(0) }//声明此处name不是null或undefined（此处示例不当）
//类型别名，给类型起个新名字，不会新建类型而是创建了一个新名字来引用那个类型
type Tree<T> = {//使用类型别名在属性里引用自己
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
`}
        </SyntaxHighlighter>
        <>rs</>
        <SyntaxHighlighter language="typescript">
            {`//与python的None不同，Kotlin的null不是对象，只是一个关键字
fun test(a: String, b: String?) {//?后缀声明变量可为空(默认不能为空)
    // 此处不允许访问b的属性
    if (b == null) {
        // 此处不允许访问b的属性
    } else {
        // 此处可以访问b的属性
        println(b.length)
    }
    println(b!!.length)//非空断言，声明b不为空。一旦为空会抛出运行时异常
    println(b?.length)//b为空输出null否则输出b.length，简化if判断
    println(a.length?:0)//等价于typescript的a.length||0
}
        `}
        </SyntaxHighlighter>
        <>py</>
    </Layout>
}
