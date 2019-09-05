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
        <SyntaxHighlighter language="typescript">
            {`//必须需要显式声明它们属于哪个包,包声明必须放在文件的顶部
package content.exercises
// 导入包内容的三种方式
import content.exercises.Exercise
import content.exercises.*
import content.exercises.Exercise as Ex
            `}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">{`#在Python中，一个.py文件就称之为一个模块（Module），Python按目录来组织模块，称为包（Package），mycompany目录下的abc.py文件就是一个名字叫mycompany.abc的模块，每一个包目录下面都会有一个__init__.py的文件，这个文件是必须存在的，否则，Python就把这个目录当成普通目录，而不是一个包。__init__.py可以是空文件，也可以有Python代码，因为__init__.py本身就是一个模块，而它的模块名就是mycompany。
#导入该模块：
import sys#导入sys模块后，我们就有了变量sys指向该模块，利用sys这个变量，就可以访问sys模块的所有功能。

`}</SyntaxHighlighter>
        <>使用模块可以避免命名冲突。相同名字的函数和变量完全可以分别存在不同的模块中</>
    </Layout>
}
