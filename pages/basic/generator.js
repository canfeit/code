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
            {`#generator,如果一个函数定义中包含yield关键字，那么这个函数就不再是一个普通函数，而是一个generator：
def odd():
    print('step 1')
    yield 1
    print('step 2')
    yield(3)
    print('step 3')
    yield(5)
o = odd()
next(o)#step 1 1
next(o)#step 2 3
next(o)#step 3 5
next(o)#StopIteration,return的返回值包含在StopIteration的value中
`}
        </SyntaxHighlighter>
        <>
            generator和函数的执行流程不一样。函数是顺序执行，遇到return语句或者最后一行函数语句就返回。而变成generator的函数，在每次调用next()的时候执行，遇到yield语句返回，再次执行时从上次返回的yield语句处继续执行。generator是一个Iterator，Iterator的计算是惰性的，只有在需要返回下一个数据时它才会计算。我们却不能提前知道序列的长度，Iterator甚至可以表示一个无限大的数据流，例如全体自然数。</>
    </Layout>
}
