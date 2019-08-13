import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='object'>
        <SyntaxHighlighter language="typescript">
            {`//数组 Array,变长，各项类型相同
let list: number[] = [1, 2];//数组声明方式1：元素类型[]
let list: Array<number> = [1, 2];//数组声明方式2：数组泛型，Array<元素类型>
//元组 Tuple,定长数组,各项类型可以不同
let x: [string, number] = ['hi', 10];//元组声明：[元素类型,元素类型,...]
const arr = ['I', 'l', 4, '514'] as const;//只读元组
//枚举,为一组数值赋予友好的名字
enum Color {Red, Green, Blue}
let c:Color = Color.Green; // 1
Color[c]; // "Green"
//常量枚举,编译阶段会被删除,成员在使用的地方会被内联进来
const enum Directions {Up,Down}
`}
        </SyntaxHighlighter>
        <> 1</>
        <> 2</>
        <> 3</>
    </Layout>
}
