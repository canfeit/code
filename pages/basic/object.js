import Layout from '../../layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export default () => {
    return <Layout cat='basic' id='object' title='引用类型'>
        <SyntaxHighlighter language="typescript">
            {`//数组 Array,变长，各项类型相同
let list: number[] = [1, 2];//数组声明方式1：元素类型[]
let list: Array<number> = [1, 2];//数组声明方式2：数组泛型，Array<元素类型>
//元组 Tuple,定长数组,各项类型可以不同
let x: [string, number] = ['hi', 10];//元组声明：[元素类型,元素类型,...]
const arr = ['I', 'l', 4, '514'] as const;//只读元组
//枚举,为一组数值赋予友好的名字
enum Color {Red, Green, Blue}
let c:Color = Color.Green; // 1
Color[c]; // "Green"
//常量枚举,编译阶段会被删除,成员在使用的地方会被内联进来
const enum Directions {Up,Down}
`}
        </SyntaxHighlighter>
        <> 1</>
        <> 2</>
        <SyntaxHighlighter language="python">
            {`classmates = ['Michael', 123, 'Tracy']#list,可变的有序集合
len(classmates)#3,len()函数可以获得list元素的个数
classmates[0]#'Michael',用索引来访问list中每一个位置的元素，索引是从0开始
classmates[-1]#'Tracy',用-1做索引，直接获取最后一个元素
#切片（Slice）操作符,适用于list tuple str
classmates[:3] #取从索引0到索引3，但不包括索引3。即索引0，1，2
classmates[-2:] #从倒数第二个元素取到最后（取后两个）
classmates[::2]# 所有数，每2个取一个
classmates.append('Adam')#往list中追加元素到末尾
classmates.insert(0, 'Jack')#把元素插入到指定的位置，比如索引号为0的位置
classmates.pop()#删除并获取list末尾的元素，用pop()方法：
classmates.pop(1)#要删除并获取指定位置的元素，用pop(i)方法，其中i是索引位置：
classmates[2] = 'Sarah'#替换已存在的元素
#列表生成式，把要生成的元素放到前面，后面跟for循环
[x * x for x in range(1, 11) if x % 2 == 0]#[4, 16, 36, 64, 100]
#生成器：generator,如果列表元素可以按照某种算法推算出来，那我们可以在循环的过程中不断推算出后续的元素不必创建完整的list，从而节省大量的空间。
(x * x for x in range(10))#只要把一个列表生成式的[]改成()，就创建了一个generator
map(lambda x: x * x, [1, 2, 3])# lambda表示匿名函数，冒号前面的x表示函数参数。匿名函数只能有一个表达式，不用写return，返回值就是该表达式的结果。map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回
reduce(lambda x,y: x * y, [1, 2, 3])#reduce把结果继续和序列的下一个元素做累积计算
#和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素
filter(lambda s: s and s.strip(), ['A', '', 'B'])#把一个序列中的空字符串删掉
classmates = ('Michael', )#元组 tuple，不可变的list,如果可能用tuple代替list，只有1个元素的tuple定义时必须加一个逗号
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}#dict全称dictionary，在其他语言中也称为map，使用键-值（key-value）存储
d['Adam'] = 67#通过key获取或修改元素
'Thomas' in d#False，通过in判断key是否存在
d.get('Thomas')#get()方法获取字典元素，如果key不存在返回None或者自己指定的value：
d.get('Thomas', -1)
d.pop('Bob')#pop(key)方法删除并返回一个元素
set，无序不重复元素的集合，两个set可以做数学意义上的交集、并集等操作
s = set([1, 2, 3])#要创建一个set，需要提供一个list作为输入集合
s.add(4)#通过add(key)方法可以添加元素到set中，
s.remove(4)#通过remove(key)方法可以删除元素
#枚举
from enum import Enum
Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))#Month类型的枚举类，可以直接使用Month.Jan来引用一个常量，默认从1开始计数
#如果需要更精确地控制枚举类型，可以从Enum派生出自定义类
from enum import Enum, unique
@unique
class Weekday(Enum):
    Sun = 0 # Sun的value被设定为0
    Mon = 1
    Tue = 2
    Wed = 3
    Thu = 4
    Fri = 5
    Sat = 6
Weekday.Tue.value#2
Weekday(1)#Weekday.Mon
`}
        </SyntaxHighlighter>
        <>
            dict的实现原理和查字典是一样的。先在字典的索引表里（比如部首表）查这个字对应的页码，然后直接翻到该页，找到这个字。无论找哪个字，这种查找速度都非常快，不会随着字典大小的增加而变慢。dict在内部直接计算出key值存放的内存地址，直接取出来，所以速度非常快。
            list中查找元素的方法是把字典从第一页往后翻，直到找到我们想要的字为止，list越大，查找越慢。
            dict内部存放的顺序和key放入的顺序是没有关系的。

和list比较，dict有以下几个特点：

查找和插入的速度极快，不会随着key的增加而变慢；
需要占用大量的内存，内存浪费多。
而list相反：

查找和插入的时间随着元素的增加而增加；
占用空间小，浪费内存很少。
所以，dict是用空间来换取时间的一种方法。

dict可以用在需要高速查找的很多地方，在Python代码中几乎无处不在，正确使用dict非常重要，需要牢记的第一条就是dict的key必须是不可变对象。

这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。这个通过key计算位置的算法称为哈希算法（Hash）。

要保证hash的正确性，作为key的对象就不能变。在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key
set的原理和dict一样，一组key的集合，唯一区别仅在于没有存储对应的value
str是不可变的，字符串的replace方法创建了一个新字符串并返回，原字符串并未改变，对于不变对象来说，调用对象自身的任意方法，也不会改变该对象自身的内容。相反，这些方法会创建新的对象并返回，这样，就保证了不可变对象本身永远是不可变的。
</>
    </Layout>
}
