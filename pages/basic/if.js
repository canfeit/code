import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='if'>
        <SyntaxHighlighter language="typescript">
            {`//真值表中空对象为true`}
        </SyntaxHighlighter>
        <> 1</>
        <SyntaxHighlighter language="kotlin">
            {`//没有自动转换为布尔值的真值表,检查零，空或null必须使用==或!=显式地完成
val r=if (age < 10) {//多行，花括号不能省略
    println(age)
    "young"
} else if (age < 13) "You can watch this movie with a parent"//只有一行时花括号可以省略
 else "You can watch this movie"
println(r)//if/else语句也是一个三元表达式,主体包含多个行时最后一行是结果
//===判断 2 个变量是否引用的是同一个对象
//==判断 2 个变量是否值相等
//逻辑短路运算符：与&& 或|| 非!
//位运算：and or
// when表达式
val x = 42
when (x) {
    0 -> println("zero")
    in 1..9 -> println("single digit")
    else -> println("multiple digits")
}
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
            {`#if条件判断，真值表中空对象为False
age = input('age: ')#input()等待用户输入读取用户从命令行输入的字符串
age = int(age)#input()返回的数据类型是str，必须先用int()函数把str转换成整数
if age >= 18:#如果age大于等于18，执行如下
    print('your age is', age)
    print('成年')
elif age:#else if的简写，否则如果年龄存在（非零数值、非空字符串、非空list）
    print('未成年')
else:#否则
    print('没写年龄')
#三元表达式
result = 'young' if age<10 else 'man'
#相等
a=257
b=257
a is b#False
a=b=257
a is b#True,判断 2 个变量是否引用的是同一个对象
x = [4,5,6]
y = [4,5,6]
x==y#True,判断两个对象的值是否相等
//逻辑短路运算符：与and 或or 非not
//位运算：&按位与 |按位或

`}
        </SyntaxHighlighter>
    </Layout>
}
