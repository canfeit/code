import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='if'>
        <SyntaxHighlighter language="typescript">
            {``}
        </SyntaxHighlighter>
        <> 1</>
        <> 2</>
        <SyntaxHighlighter language="python">
            {`#if条件判断
age = input('age: ')#input()等待用户输入读取用户从命令行输入的字符串
age = int(age)#input()返回的数据类型是str，必须先用int()函数把str转换成整数
if age >= 18:#如果age大于等于18，执行如下
    print('your age is', age)
    print('成年')
elif age:#else if的简写，否则如果年龄存在（非零数值、非空字符串、非空list）
    print('未成年')
else:#否则
    print('没写年龄')
`}
        </SyntaxHighlighter>
    </Layout>
}
