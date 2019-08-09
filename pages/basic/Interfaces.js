import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Interfaces'>
        <SyntaxHighlighter language="typescript">
            {`interface SquareConfig {color?: string;width: number;}//接口定义
interface PenStroke {penWidth: number;}
interface Shape extends SquareConfig, PenStroke {sideLength: number;}//继承接口
function createSquare(config: SquareConfig) {}//鸭式辨型法约束参数类型
class Square implements SquareConfig {//接口描述类成员
    width = 1;
    constructor(h: number, m: number) { }
}
`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <>py</>
    </Layout>
}
