import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Generics'>
        <SyntaxHighlighter language="typescript">
            {`//泛型函数，使用类型变量T表示类型。
function identity<T>(arg: T): T {}//<>中是类型参数，声明参数arg与返回值是相同的类型
let output = identity<string>("myString");//使用<>指定类型参数
let output = identity("myString"); //利用类型推论根据传入的参数自动确定T的类型
interface GenericIdentityFn<T> { (arg: T): T; }//定义泛型接口
let myIdentity: GenericIdentityFn<number> = function (arg){};//使用泛型接口定义函数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {}//keyof，索引类型查询操作符，keyof T，T上属性名的联合，T[K]索引访问操作符
getProperty({a:1}, "m"); // error: m在{a:1}主键中不存在
`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <>py</>
    </Layout>
}
