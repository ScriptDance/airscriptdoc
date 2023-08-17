---
title: Python 语法
tagline: Python驱动的自动化小程序文档
sidebar: auto
---

# Python

[Python官网](https://www.python.org)

<img src="/assets/img/ico_python.png">

Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。

Python 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年。

像 Perl 语言一样, Python 源代码同样遵循 GPL(GNU General Public License) 协议。

- 本教程适合想从零开始学习 Python 编程语言的开发人员。当然本教程也会对一些模块进行深入，让你更好的了解 Python 的应用。

## 变量

- 什么是变量?

在程序中一个可以变的值. 称之为变量.(类似于小学数学中的 x,y)

### 申明一个变量

```python
x = 10 # 其中x就是变量, 等号左边的是变量,等号右边的是值.

pirnt(x)
```

- 输出
> 10

### 变量的覆盖特性
```python
x = 10 # 其中x就是变量, 等号左边的是变量,等号右边的是值.

x = 12 # 变量指向的值,是最后一次赋值的值.(变量可以覆盖指引)

pirnt(x)
```
- 输出
> 12

## 数据类型

-  什么是数据类型?

在程序中,你要让程序明白,你输入的是文本? 还是数字? 还是对错?

则需要不同的数据类型来表示

### 字符串

用 "英文双引号"或者 '英文单引号' 扩起来的数据,称为字符串

::: warning 必须英文引号,否则报错
- 英文引号 是 "" 或 ''
- 中文引号 是 “” 或 ‘’

对比一下,区别还是很明显的.

怎么切换中英文?

一般 control + 空格 会切换. 也可以通过输入法,中英文字样切换.

:::

- 申明一个变量,指向字符串

```python
a = '你好,自在老师' # 这就是一个 字符串 ,因为你好,自在老师,被引号包裹了.

b = "你好,自在老师" # 同样这也是申明了一个变量,指向了一个字符串.
```

### 数字

程序中,不加任何修饰符的数字,都是 数字类型

如:

```python
# 以下,都是变量指向了 数字类型 (或 可以说:以下变量都是数字)

a = 10

b = 1.134

c = -1

```

### 布尔

布尔类型,只有两个固定的值: False(假) 和 True(真)

::: warning 为什么会存在布尔类型?
- 是为了让程序判断真假,去执行不同的代码块
:::

```python
a = True # a 指向了一个布尔值 (真)

b = False # b 指向了一个布尔值 (假)
```

## 列表

序列是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。

序列都可以进行的操作包括索引，切片，加，乘，检查成员。

此外，Python已经内置确定序列的长度以及确定最大和最小的元素的方法。

列表是最常用的Python数据类型，它可以作为一个方括号内的逗号分隔值出现。

列表的数据项不需要具有相同的类型

<font color="#3376d0">(通俗讲:列表就是一个储物柜,有很多格子,里面可以存放各种数据)</font>


### 创建列表

创建一个列表，只要把逗号分隔的不同的数据项使用 '方括号'[] 括起来即可。

```python
# 以下这些都是列表
list1 = ['AirScript', 'nspirit', 1997, 2000,True]
list2 = [1, 2, 3, 4, 5 ]
list3 = ["a", "b", "c", "d"]

```

### 获取列表中的值

使用下标索引来访问列表中的值，同样你也可以使用方括号的形式截取字符.

::: warning 什么是索引,索引从0开始?
列表中的数据,自带索引也称 ‘角标’ 从0开始.

(通俗来讲:和军训报数一样,每个人都有一个代号,只不过列表报数从0开始)

:::

```python
# 以下这些都是列表
list1 = ['AirScript', 'nspirit', 1997, 2000,True]
list2 = [1, 2, 3, 4, 5 ]

print ("list1中的第一个值是: ", list1[0]) 

print ("list2中的倒数第一个值是: ", list2[-1]) 

print ("list2中的索引 1-4 的值: ", list2[1:4])  #注意这样的写法,包前不包后(通俗来讲:包含角标1,但不包含角标4的数据)

print ("list2中的索引1 开始到结束的所有值 ", list2[1:])

```
- 输出
> AirScript<br>
> 5<br>
> [2, 3, 4]<br>
> [2, 3, 4, 5]

### 更新列表
你可以对列表的数据项进行修改或更新

#### 通过索引即可更改值

```python
list1 = ['AirScript', 'nspirit', 1997, 2000,True]

list1[0] = "AirScript.cn"

print(list1)

```
- 输出
> ['AirScript.cn', 'nspirit', 1997, 2000, True]



### 删除列表元素

可以使用 del 语句来删除列表的元素，如下实例：

```python
list1 = ['AirScript', 'nspirit', 1997, 2000,True]

del list1[0]

print(list1)
```
- 输出
> ['nspirit', 1997, 2000, True]

### 列表操作符

列表对 + 和 * 的操作符与字符串相似。+ 号用于组合列表，* 号用于重复列表。

| Python表达式        | 结果           | 描述  |
| ------------- |:-------------:| -----:|
| len([1, 2, 3])      | 3 | 获取列表长度 |
| [1, 2, 3] + [4, 5, 6]   | [1, 2, 3, 4, 5, 6] | 列表组合 | 
| ['Hi!'] * 4 | ['Hi!', 'Hi!', 'Hi!', 'Hi!'] | 重复 | 
| 3 in [1, 2, 3] | True | 元素是否存在于列表中 | 
| for x in [1, 2, 3]: print x, | 1 2 3 | 迭代列表中的数据 | 

### 操作列表函数

操作列表的函数
| Python表达式        | 结果           |
| ------------- |:-------------:|
| cmp(list1, list2)    | 比较两个函数的元素  |
| len(list)   | 列表元素个数  |
| max(list)  | 返回列表元素最大值  |
| min(list)  | 返回列表元素最小值  |
| list(seq) | 将元组转换为列表  |

### 列表函数

列表对象内部函数

| Python表达式        | 结果           |
| ------------- |:-------------:|
| list.append(obj)    | 在列表末尾添加新的对象  |
| list.count(obj)   | 统计某个元素在列表中出现的次数  |
| list.extend(seq)  | 在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）  |
| list.index(obj)  | 从列表中找出某个值第一个匹配项的索引位置  |
| list.insert(index, obj) | 将对象插入列表  |
| list.pop([index=-1]) | 移除列表中的一个元素（默认最后一个元素），并且返回该元素的值  |
| list.remove(obj) | 移除列表中某个值的第一个匹配项 |
| list.reverse() | 反向列表中元素 |
| list.sort(cmp=None, key=None, reverse=False) | 对原列表进行排序 |




## 元组

元组创建很简单，只需要在‘圆括号’中添加元素，并使用逗号隔开即可。

::: tip 元祖和列表的区别?
- 不同点:

列表创建用 []<br>
元祖创建用 ()

列表可以更改内部值<br>
元祖不可以更改内部值

- 其余一模一样

:::

### 创建元祖

```python
tup1 = ()
```

### 元组方法
| Python表达式        | 结果           |
| ------------- |:-------------:|
| tuple(seq)   | 将列表转为元组  |


## 字典

### 什么是字典?

字典是另一种可变容器模型，且可存储任意类型对象。
字典的每个键值 key:value 对用冒号 : 分割，每个键值对之间用逗号 , 分割，整个字典包括在花括号 {} 中 ,格式如下所示：

```python
d = {key1 : value1, key2 : value2 }
```
::: tip 字典的特性
键一般是唯一的，如果重复最后的一个键值对会替换前面的，值不需要唯一。
值可以取任何数据类型，但键必须是不可变的，如字符串，数字或元组。
:::

```python
tinydict1 = { 'abc': 456 }
tinydict2 = { 'abc': 123, 98.6: 37 }
```

### 访问字典里的值

把相应的键放入熟悉的方括弧，如下实例:

```python
mydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print ("mydict['Name']: ", mydict['Name'])
print ("mydict['Age']: ", mydict['Age'])
```

- 输出
> mydict['Name']: Zara<br>
> mydict['Age']: 7

### 修改字典
向字典添加新内容的方法是增加新的键/值对，修改或删除已有键/值对如下实例:

```python
mydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

mydict['Name'] = 'Sara'

mydict['Gender'] = "boy"

print ("mydict['Name']: ", mydict['Name'])
print ("mydict['Gender']: ", mydict['Gender'])
```
- 输出
> mydict['Name']: Sara
> mydict['Gender']: boy

### 删除字典元素
能删单一的元素也能清空字典，清空只需一项操作。

显示删除一个字典用del命令，如下实例：

```python
mydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

del mydict['Name']

print(mydict)

del mydict

```

- 输出
> {'Age': 7, 'Class': 'First'}

### 字典的特性

字典值可以没有限制地取任何 python 对象，既可以是标准的对象，也可以是用户定义的，但键不行。

- 1. 不允许同一个键出现两次。创建时如果同一个键被赋值两次，后一个值会被记住，如下实例

```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Name': 'Manni'} 
 
print "tinydict['Name']: ", tinydict['Name']
```
- 输出
> tinydict['Name']:  Manni

- 2. 键必须不可变，所以可以用数字，字符串或元组充当，所以用列表就不行，如下实例：

```python
tinydict = {['Name']: 'Zara', 'Age': 7} 
 
print "tinydict['Name']: ", tinydict['Name']
```
- 输出
> TypeError: unhashable type: 'list'

### 字典的内置方法
| Python表达式        | 结果           |
| ------------- |:-------------:|
| dict.clear()  | 删除字典内所有元素  |
| dict.copy()  | 返回一个字典的浅复制  |
| dict.fromkeys(seq[, val])  | 创建一个新字典，以序列 seq 中元素做字典的键，val 为字典所有键对应的初始值  |
| dict.get(key, default=None)  | 返回指定键的值，如果值不在字典中返回default值 |
| dict.has_key(key)  | 如果键在字典dict里返回true，否则返回false  |
| dict.items()  | 以列表返回可遍历的(键, 值) 元组数组  |
| dict.keys()  | 以列表返回一个字典所有的键  |
| dict.setdefault(key, default=None)  | 和get()类似, 但如果键不存在于字典中，将会添加键并将值设为default  |
| dict.update(dict2)  | 把字典dict2的键/值对更新到dict里 |
| dict.values()  | 以列表返回字典中的所有值  |
| dict.pop(key[,default])  | 删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。  |
| dict.popitem() | 返回并删除字典中的最后一对键和值。  |



## 打印

### 语法
语法: print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)


|参数	|含义|
| ------------- |:-------------|
| objects|	复数，表示可以一次输出多个对象。输出多个对象时，需要用 , 分隔。|
|sep|	用来间隔多个对象，默认值是一个空格。|
|end|	用来设定以什么结尾。默认值是换行符 \n，我们可以换成其他字符串。|
|file|	要写入的文件对象。|
|flush|	输出是否被缓存通常决定于 file，但如果 flush 关键字参数为 True，流会被强制刷新。|

### 在控制台输出一段文本




## 注释

## 运算符

## 流程控制

## 循环

## 函数

## 类
