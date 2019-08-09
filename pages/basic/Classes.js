import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default () => {
    return <Layout cat='basic' id='Classes'>
        <SyntaxHighlighter language="typescript">
            {`abstract class Animal {//抽象类，一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节
    static origin = {x: 0, y: 0};//静态成员属性
    constructor(protected name: string) { }//带参数属性的构造函数，实例属性声明和赋值合并，protected声明仅在类（及其子类）内部可用
    abstract bark(): void;//抽象方法不包含具体实现并且必须在派生类中实现
}
class Dog extends Animal {//继承
    constructor(name) {
        super(name); // 若重写构造方法必须首先调用 super()
    }
    private readonly department="001";//私有只读属性，仅在内部可用,默认为public
    bark() {//成员方法，实现父类抽象方法
        console.log(this.name,this.department,'Woof! Woof!');
    }
}
const dog = new Dog('雪球');
dog.bark();
`}
        </SyntaxHighlighter>
        <>rs</>
        <>kt</>
        <>py</>
    </Layout>
}
