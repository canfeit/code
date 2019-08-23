import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='Encoding'>
        <SyntaxHighlighter language="typescript">
            {``}
        </SyntaxHighlighter>
        <> 1</>
        <SyntaxHighlighter language="kotlin">
            {`
val b="ABC".toByteArray(Charsets.US_ASCII)//获取ASCII编码的ByteArray，like encode() in Python.
String(b, Charsets.US_ASCII)//获取ASCII编码的字符串，like decode() in Python.
String("中文".toByteArray())//默认为UTF-8编码
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
            {`'\u4e2d\u6587' #十六进制Unicode字符'中文'
b'ABC'.decode('ascii') # 'ABC' b代表字节编码bytes， 每个字符都只占用一个字节
b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8') # '中文' decode()方法对字节编码进行解码
'Hello, %s' % 'world' # 'Hello, world'，格式化字符串，%s表示用字符串替换，只有一个%占位符，括号可以省略。
'%4d-%02d-%02d'%(2019,2,1) #'2019-02-01'%d表示用十进制整数替换，%4d代表4位整数，%02d代表2位整数，不足补0
'%05.2f %% %x' % (3.1415926, 10) #'03.14 % a' %f代表浮点数，05总长度为5，不足补0，.2保留两位小数不足补0，%x代表十六进制整数，%%转义表示一个%：
'%.2g' % 123.456 # '1.2e+02' 取2位有效数字，必要时自动转换为科学计数法
`}
        </SyntaxHighlighter>
    </Layout>
}
