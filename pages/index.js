import Layout from '../layout';
import { Prism as Code } from 'react-syntax-highlighter';
export default () => {
  return <Layout id='home'>
    <> TypeScript是Microsoft公司注册商标。TypeScript具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。
    <p>安装: <a href='https://yarnpkg.com/docs/getting-started'>yarn</a> global add <a href='https://github.com/TypeStrong/ts-node'>ts-node</a></p>
      <Code language="typescript">
        {`// code hello.ts
interface Person { name: string; }
const greeter = (person: Person) =>${'`Hello ${person.name}`'};
console.log(greeter({ name: "World" }));
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
      运行: ts-node hello.ts
        </>
    <>Rust 是一种安全、并发、实用的编程语言，有着惊人的运行速度，能够防止段错误，并保证线程安全,使每个人都能够构建 可靠，高效的软件
    Rust 是一门注重安全（safety）、速度（speed）和并发（concurrency）的现代系统编程语言。Rust 通过内存安全来实现以上目标，但不用垃圾回收机制（garbage collection, GC)。
      <Code language="rust">
        {`// 这是注释内容，将会被编译器忽略掉
// 这是主函数
fn main() {
    // 调用编译生成的可执行文件时，这里的语句将被运行。
    // println! 是一个宏（macros），可以将文本输出到控制台（console）
    println!("Hello World!");
}`}
      </Code>
      使用 Rust 的编译器 rustc 可以从源程序生成可执行文件：
<Code language="bash">
        rustc hello.rs
</Code>
      使用 rustc 编译后将得到可执行文件 hello：
<Code language="bash">
        ./hello
</Code>
      Hello World!
    </>
    <>
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
      </Code></>
    <> Python使用缩进来组织代码块
      <Code language="python">
        {`#!/usr/bin/env python3
# -*- coding: UTF-8 -*-
# 以#开头的语句是注释，注释是给人看的，可以是任意内容，解释器会忽略掉注释。
'''
这里是多行注释
最开始以#!开头的行注释告诉Linux/OS X系统让python3解释器来执行脚本
第二个行注释表示告诉Python解释器按UTF-8编码读取代码
通过编辑器保存源代码时也需要保存为UTF-8 without BOM编码
除注释外，每一行都是一个语句，当语句以冒号:结尾时，缩进的语句视为代码块
'''
print "你好，世界";
#不存在自动合并
1 + 2#3
+ 3#3
1 + 2 +#错误
3`}
      </Code></>
    <Code>
      {`Expression: 表达式，执行之后都会有一个值
      function() {} // 函数表达式
      1+1
      Statement: 语句，每一个语句都会做些事情 一个程序经常是由一系列的语句组成的
      function twice(x) { }// 函数声明
      var foo = 1+1; // 赋值
`}
    </Code>
  </Layout>
}
