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
        <>py</>
    </Layout>
}
