import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Decorators'>
        <SyntaxHighlighter language="typescript">
            {`// 多个装饰器应用在一个声明上时先由上至下依次对装饰器表达式求值。求值的结果会被当作函数，由下至上依次调用。
//类装饰器，紧靠着类声明之前被声明。 类的构造函数作为其唯一的参数。
//如果类装饰器返回一个值，它会被用来替换类的声明。
function sealed(constructor: Function) {}
@sealed
class Greeter {}
// 方法装饰器，紧靠着方法声明之前，传入下列3个参数：
对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
成员的名字。
成员的属性描述符。
如果方法装饰器返回一个值，它会被用作方法的属性描述符
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}
class Greeter {
    @enumerable(false)
    greet() { }
}
//属性装饰器，紧靠着属性声明之前，传入下列2个参数：
对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
成员的名字。
//参数装饰器，紧靠着参数声明之前，传入下列3个参数：
对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
成员的名字。
参数在函数参数列表中的索引。
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {}
class Greeter {
    @validate
    greet(@required name: string) {}
}
`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <SyntaxHighlighter language="python">
            {`#decorator就是一个返回函数的高阶函数。我们要借助Python的@语法，把decorator置于函数的定义处
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper
@log
def now():
    print('2015-3-25')
# 带参数的decorator
import functools

def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator
@log('execute')
def now():
    print('2015-3-25')
`}
        </SyntaxHighlighter>
    </Layout>
}
