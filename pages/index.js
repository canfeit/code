import Layout from '../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
  return <Layout id='home'>
    <> TypeScript是Microsoft公司注册商标。TypeScript具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。
    <p>安装: <a href='https://yarnpkg.com/docs/getting-started'>yarn</a> global add <a href='https://github.com/TypeStrong/ts-node'>ts-node</a></p>
      <SyntaxHighlighter language="typescript">
        {`// hello.ts
interface Person { name: string; }
const greeter = (person: Person) =>${'`Hello ${person.name}`'};
console.log(greeter({ name: "World" }));`}
      </SyntaxHighlighter>
      运行: ts-node hello.ts
        </>
    <>Rust 是一种安全、并发、实用的编程语言，有着惊人的运行速度，能够防止段错误，并保证线程安全,使每个人都能够构建 可靠，高效的软件
      <SyntaxHighlighter language="rust">
        {`use ferris_says::say; // from the previous step
use std::io::{stdout, BufWriter};

fn main() {
    let stdout = stdout();
    let out = b"Hello fellow Rustaceans!";
    let width = 24;

    let mut writer = BufWriter::new(stdout.lock());
    say(out, width, &mut writer).unwrap();
}`}
      </SyntaxHighlighter></>
    <>
      <SyntaxHighlighter language="kotlin">
        {`suspend fun main() = coroutineScope {
  for (i in 0 until 10) {
    launch {
      delay(1000L - i * 10)
      print("❤️$i ")
    }
  }
}`}
      </SyntaxHighlighter></>
    <> Python使用缩进来组织代码块
      <SyntaxHighlighter language="python">
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
print "你好，世界";`}
      </SyntaxHighlighter></>
  </Layout>
}
