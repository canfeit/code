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
            {`#当我们认为某些代码可能会出错时，就可以用try来运行这段代码，如果执行出错直接跳转至错误处理代码，即except语句块，执行完except后，无论是否出错如果有finally语句块，则执行finally语句块
try:
    r = 10 / 0
except ZeroDivisionError as e:
    print('except:', e)
    raise ValueError('input error!')#将异常继续向上抛出
finally:
    print('finally...')
`}
        </SyntaxHighlighter>
    </Layout>
}
