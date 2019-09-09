import Layout from '../layout';
import { Prism as Code } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='asi'>
        <Code language="typescript">
            {`
//多行优先，解析器会尽量将新行并入当前行，当且仅当符合ASI规则时才会将新行视为独立的语句。
/*ASI规则
continue,return,break,throw后自动插入分号
++、--表达式作为行的开始，在行首自动插入分号
新行以([/+-%*,.开始,自动与上一行合并，应注意必要时在该类语句前加分号
*/
1 + 2
+ 3//6，两行自动合并为一个表达式
1 + 2 +
3//6
`}
        </Code>
        <Code language="rust">
            {`// 这是注释内容，将会被编译器忽略掉
// 这是主函数
fn main() {
    // 调用编译生成的可执行文件时，这里的语句将被运行。
    // println! 是一个宏（macros），可以将文本输出到控制台（console）
    println!("Hello World!");
}`}
        </Code>
        <Code language="kotlin">
            {`/*
*/
//code hello.kt
fun main(args: Array<String>) {//入口，该函数有一个名为 args、类型为“字符串数组”的参数。args 会包含调用程序的命令行参数，类似于 Python 中的 sys.argv；如果程序并不需要接受命令行参数并且使用的是 Kotlin 1.3，那么可以省略该参数，函数体由花括号分隔——缩进在 Kotlin 中通常不重要1，但是为了肉眼可读性理应正确缩进代码。


  println("Hello World!")
}
//单行优先，如果行合并是使代码正确解析的唯一方式，那么该行会自动与一到多个后续行相连
1 + 2//3
+ 3//3
1 + 2 +
3//6
`}
        </Code>
        <> Python使用缩进来组织代码块
      <Code language="python">
                {`#!/usr/bin/env python3
#不存在自动合并
1 + 2#3
+ 3#3
1 + 2 +#错误
3`}
            </Code></>
    </Layout >
}
