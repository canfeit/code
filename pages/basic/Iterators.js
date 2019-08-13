import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Iterators'>
        <SyntaxHighlighter language="typescript">
            {`// for..of vs for..in
for (let i in [4, 5]) {} // "0", "1"。for..in可以操作任何对象，迭代对象的属性
for (let i of [4, 5]) {} // "4", "5"。for..of操作实现了Symbol.iterator的对象，迭代对象的值
`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <>py</>
    </Layout>
}
