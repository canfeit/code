import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Modules'>
        <SyntaxHighlighter language="typescript">
            {`// 导出，模块里的变量，函数，类等等在模块外部是不可见的，除非使用export导出
export const numberRegexp = /^[0-9]+$/;
export { numberRegexp as mainValidator };
//重新导出
export * from "./ZipCodeValidator";
//导入，可以对导入内容重命名
import { numberRegexp as ZCV  } from "./ZipCodeValidator";
//默认导出，一个模块只能够有一个default导出
export default /^[0-9]+$/;
import validator from "./ZipCodeValidator";

`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <>py</>
    </Layout>
}
