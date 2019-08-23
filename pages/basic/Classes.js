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
        <SyntaxHighlighter language="kotlin">
            {`//UpperCamelCase
/*
每个没有显式声明父类的类都继承自Any，这是类层次结构的根（类似于Python的object）每个类自动具有以下功能：
--toString()返回对象的字符串表示，类似于Python的__str__()
--equals(x)检查这个对象是否等于x（默认情况下，这只是检查这个对象是否和x是同一个对象- 就像is在Python中一样 - 但它可以被子类覆盖以进行属性值的自定义比较）
--hashCode()返回一个整数（equals()判断相等的对象必须具有相同哈希码，因此如果两个对象的哈希码不同，则对象不能相等）
*/
class Person(firstName: String, lastName: String) {//直接在类中声明属性不会创建类级属性，而是创建实例级属性：每个实例都将拥有自己的 name和age,不能在运行时向对象或类添加新属性
    val fullName: String
    var age = 32//不变属性fullName，可变属性age
    get() = field//age的getters
    set(value) {//age的setters
        field = value
    }
    init {//初始化方法，可以进行参数校验
        this.fullName = "$firstName $lastName"//属性fullName初始化，没有命名冲突的情况下this可以省略
    }
    fun present() {//实例方法
        println("Hello, I'm $fullName!")
    }
    fun greet(other: Person) = println("Hello, \${other.fullName}, I'm $fullName!")
}
val people1 = Person("Jaime", "Wang")
people1.age = 35
class Person2(val fullName: String, var age: Int)//构造函数参数列表中声明属性,不变属性fullName，可变属性age
Person2("Jaime Wang", 35)
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
            {`class Student(object):#class后面紧接着是类名，即Student，类名通常是大写开头的单词，紧接着是(object)，表示该类是从哪个类继承下来的,通常，如果没有合适的继承类，就使用object类，这是所有类最终都会继承的类。继承可以把父类的所有功能都直接拿过来，这样就不必重零做起，子类只需要新增自己特有的方法，也可以把父类不适合的方法覆盖重写。
    name="Tom"    #公有的类属性
    def __init__(self, score):#通过定义一个特殊的__init__方法，在创建实例的时候，就把name，score等属性绑上去：__init__方法的第一个参数永远是self，表示创建的实例本身。

        self.__score = score#私有的实例属性，属性名如果以__开头，就变成了一个私有变量（private），只有内部可以访问，外部不能访问

    @property
    def score(self):
        return self.__score

    @score.setter
    def score(self, value):
        self.__score = value

    def print_score(self):#实例方法
        print('%s: %s' % (self.name, self.score))

bart = Student(59)
bart.name#访问类属性
bart.name="Bart"#动态添加实例属性
bart.name#访问实例属性
bart.score=60#实例属性
bart.print_score()#要调用一个方法，只需要在实例变量上直接调用
Student.set_score = ...#动态绑定允许我们在程序运行的过程中动态给class加上方法
`}
        </SyntaxHighlighter>
        <>面向对象最重要的概念就是类（Class）和实例（Instance），必须牢记类是抽象的模板，比如Student类，而实例是根据类创建出来的一个个具体的“对象”，每个对象都拥有相同的方法，但各自的数据可能不同。
        动态语言的“鸭子类型”，它并不要求严格的继承体系，一个对象只要“看起来像鸭子，走起路来像鸭子”，那它就可以被看做是鸭子。

Python的“file-like object“就是一种鸭子类型。对真正的文件对象，它有一个read()方法，返回其内容。但是，许多对象，只要有read()方法，都被视为“file-like object“。许多函数接收的参数就是“file-like object“，你不一定要传入真正的文件对象，完全可以传入任何实现了read()方法的对象。

</>
    </Layout>
}
