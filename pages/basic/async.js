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
            {`#协程，单线程异步
async def hello():
    print("Hello world!")
    r = await asyncio.sleep(1)
    print("Hello again!")
`}
        </SyntaxHighlighter>
    </Layout>
}
