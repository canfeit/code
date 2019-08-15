import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='if' title="循环">
        <SyntaxHighlighter language="typescript">
            {``}
        </SyntaxHighlighter>
        <> 1</>
        <> 2</>
        <SyntaxHighlighter language="python">
            {`#for...in循环,依次把list或tuple中的每个元素迭代出来
sum = 0
for x in [1, 2, 3]:
    sum = sum + x
#while循环，只要条件满足，就不断循环，条件不满足时退出循环。
sum = 0
n = 3
while n > 0:
    sum = sum + n
    n = n - 1
`}
        </SyntaxHighlighter>
        <>
            不外乎，for，while，break，continue
            循环是让计算机做重复任务的有效的方法。

break语句可以在循环过程中直接退出循环，而continue语句可以提前结束本轮循环，并直接开始下一轮循环。这两个语句通常都必须配合if语句使用。

要特别注意，不要滥用break和continue语句。break和continue会造成代码执行逻辑分叉过多，容易出错。大多数循环并不需要用到break和continue语句，上面的两个例子，都可以通过改写循环条件或者修改循环逻辑，去掉break和continue语句。
        </>
    </Layout>
}
