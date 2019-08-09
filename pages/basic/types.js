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
//string 双引号或单引号表示字符串;反引号表示模版字符串，\${ }内嵌表达式
let name = "bob";
let sentence = \`Hello, I'm \${ name }.\`;
//symbol
//null
//undefined
//类型断言
let someValue: any = "this is a string";
let strLength = (someValue as string).length;`}
        </SyntaxHighlighter>
        <> 1</>
        <> 2</>
        <> 3</>
    </Layout>
}
