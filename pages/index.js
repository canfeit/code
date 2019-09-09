import Layout from '../layout';
import { Prism as Code } from 'react-syntax-highlighter';
export default () => {
  return <Layout id='home'>
    <> TypeScript是Microsoft公司注册商标。TypeScript具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。
      <Code language="typescript">
        {`// 双斜杠后是单行注释,注释内容直到行尾，注释是给人看的，将会被编译或解释器忽略掉。
/* 块注释， 注释内容一直到结束分隔符。 */
console.log("你好，世界！♥")
`}
      </Code>
    </>
    <>Rust 是一门注重安全（safety）、速度（speed）和并发（concurrency）的现代系统编程语言。Rust 通过内存安全来实现以上目标，不用垃圾回收机制（garbage collection, GC)。
      <Code language="rust">
        {`// 双斜杠后是单行注释。main是主函数，程序入口
fn main() {//函数体由花括号分隔,缩进是为了美观和可读性。
    // 调用编译生成的可执行文件时，main花括号里的语句将被运行。
    println!("你好，世界！♥");// println! 是一个宏（macros），可以将文本输出到控制台（console）
}`}
      </Code>
      使用 Rust 的编译器 rustc 可以从 hello.rs源程序生成可执行文件 hello：
<Code language="bash">
        rustc hello.rs
</Code>
      运行 hello 可执行文件：
<Code language="bash">
        ./hello # 输出：Hello World!
</Code>
    </>
    <>
      <Code language="kotlin">
        {`// 双斜杠后是注释，注释是给人看的，可以是任意内容，将会被编译器忽略掉
// main是主函数，程序入口
fun main() {函数体由花括号分隔,缩进是为了美观和可读性。
  println("你好，世界！♥")
}
`}
      </Code></>
    <> Python使用缩进来组织代码块
      <Code language="python">
        {`#!/usr/bin/env python3
# 以#开头的语句是单行注释，最开始以#!开头的注释指定让python3解释器来执行脚本。
'''
多行注释以'''开始并以'''结束。
通过编辑器保存源代码时需要保存为UTF-8(without BOM)编码
除注释外，每一行都是一个语句，当语句以冒号:结尾时，缩进的语句视为代码块
'''
print("你好，世界！♥");
`}
      </Code></>
    <>
      <Code language="typescript">
        {`//Expression: 表达式，执行之后都会有一个值
function() {} // 函数表达式
1+1
//Statement: 语句，每一个语句都会做些事情 一个程序经常是由一系列的语句组成的
function twice(x) { }// 函数声明
var foo = 1+1; // 赋值
      `}
      </Code>
      变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，赋值语句如下（// 表示注释）：
      <Code language="typescript">
        {`int a = 123; // a是整数类型变量
a = "ABC"; // 错误：不能把字符串赋给整型变量`}
      </Code>
      和静态语言相比，动态语言更灵活，就是这个原因。<br />
      请不要把赋值语句的等号等同于数学的等号。比如下面的代码：
      <Code language="typescript">{`
x = 10
x = x + 2
`}</Code>
      如果从数学上理解x = x + 2那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式x + 2，得到结果12，再赋给变量x。由于x之前的值是10，重新赋值后，x的值变成12。
      </>
  </Layout>
}
