---
title: 控件
---

``` python
# 包路径
from airscript.node
```

# 控件 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=11" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>


通过选择器(Selector)检索 获取指定控件(Node)

::: tip 全分辨率支持
- 控件检索支持全分辨率适配,单一设备上研发,多台设备兼容运行.
:::




## 选择器 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=12" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>

``` python
# 导包
from airscript.node import Selector
```

<b>Selector</b>(<font color="#3376d0">mode</font>)

创建一个选择器

选择器用来描述控件的规则,并查找到控件.

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| mode      | number | 选填 |默认为 0<br>0:普通检索模式,这种模式下只展示重要控件<br>1:复杂模式,这种模式下展示所有控件.层级会很深.|

``` python
#案例

# 导包
from airscript.node import Selector
# 创建一个选择器,简单模式检索
Selector()

# 创建一个选择器 ,复杂模式检索
Selector(1)

```


<!-- 启动查询,并得到查询结果 -->

## 选择器_查找

### find

<b>Selector()</b><font color="#3376d0">.find()</font>

查询一个控件

<font color="#ee3d30">如多个控件满足规则,返回头部的第一个.</font>

<font color="#3376d0" size ="2">

| 返回结果       | 备注|
| -------------|----:|
| [Node](#Node)    | 查询到 一个 Node(控件)对象,无结果时,返回null |

</font>


``` python
#案例:查找出符合条件的第一个控件

from airscript.node import Selector

node =  Selector().find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')

```

### find_all

<b>Selector()</b><font color="#3376d0">.find_all()</font>

查询全部结果

返回所有满足规则的控件

<font color="#3376d0" size="2">

| 返回结果       | 备注|
| -------------|----:|
| [Node](#结果_Node)[]    | 查询到 一组 Node(控件)对象,无结果时,返回null |

</font>


``` python
#案例:查找出所有符合条件的控件

from airscript.node import Selector

nodes =  Selector().find_all()

if nodes:
    #找到了一组控件
    print( len(nodes) )
else:
    print('没有找到任何控件')

```

## 选择器_规则  <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=13" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>
<font color="#3376d0">通过约束规则,查询我们想要的控件</font>

有很多的约束方法,来满足我们对不同场景的需求

- 通常我们可以通过‘控件检索’工具获取控件属性,生成 Selector 规则

- 属性约束:约束目标控件的属性

<font color="#3376d0" size='2'>

| 约束方法         | 备注|
| ------------- |----:|
| Selector().id(string)      | 约束 id|
| Selector().text(string)    | 约束 文本 |
| Selector().type(string)    | 约束 类型|
| Selector().desc(string)    | 约束 描述|
| Selector().hintText(string)    | 约束 默认文本,通常在EditText中会有此属性|
| Selector().packageName(string)    | 约束 包名,包名通常为 APP的ID|
| Selector().childCount(number)    | 约束 孩子数量|
| Selector().inputType(number)    | 约束 可输入类型,通常在EditText 中会存在输入类型|
| Selector().maxTextLength(number)    | 约束 最大字符长度|
| Selector().clickable(boolean)    | 约束 是否可点击|
| Selector().checkable(number)    | 约束 是否可选中|
| Selector().checked(number)    | 约束 是否选中|
| Selector().editable(number)    | 约束 是否可编辑|
| Selector().enabled(number)    | 约束 是否可访问|
| Selector().dismissable(number)    | 约束 是否可取消|
| Selector().focusable(number)    | 约束 是否可以获取焦点|
| Selector().focused(number)    | 约束 是否已经获取了焦点|
| Selector().longClickable(number)    | 约束 是否可以长按|
| Selector().visible(boolean)    | 约束 是否用户可见|
| Selector().parent(number)    | 约束 获取第N个父元素|
| Selector().child(number)    | 约束 获取第N个孩子|
| Selector().brother(number)    | 约束 获取第N个兄弟|
</font>

---

###  id

<b>Selector().id</b>(<font color="#3376d0">str</font>)

指定要检索的控件 id

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| str      | 正则 | 必填 |要检索的控件id|


</font>

``` python
#案例1: 在id约束中使用完整的id

# 导包
from airscript.node import Selector

# 查找id值为 “com.aojoy.airscript:id/search_bar_text” 的控件
node =  Selector().id("com.aojoy.airscript:id/search_bar_text").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```
--- 

``` python
# 案例2: 在id约束中使用正则表达式

# 导包
from airscript.node import Selector

# 查找id值为 ‘search_bar_text结尾’ 的控件 ,在正则中 ‘.’代表任何值,‘*’代表出现多次,‘^’代表以什么开头,‘$’代表以什么结尾
node =  Selector().id(".*search_bar_text$").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```

---

###  text

<b>Selector().text</b>(<font color="#3376d0">str</font>)

指定要检索的控件 文本

<font color="#3376d0" size="2" >

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| str      | 正则 | 必填 |要检索的控件文本.|


</font>

``` python
# 案例1: 在text约束中使用完整文本

# 导包
from airscript.node import Selector

# 查找文本为 ‘关于AirScript’
node =  Selector().text("关于AirScript").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```
--- 

``` python
# 案例2: 在text约束中使用正则匹配 所有文本中包含 'AirScript' 的控件

# 导包
from airscript.node import Selector

# 查找 文本 中包含 了‘AirScript’ 的控件
nodes =  Selector().text(".*AirScript.*").find_all()

if nodes:
    #找到了控件
    print( len(nodes) )
else:
    print('没有找到任何控件')
```
--- 
###  type

<b>Selector().type</b>(<font color="#3376d0">str</font>)

指定要检索的控件 类型

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| str      | 正则 | 必填 |要检索的控件类型|


</font>

``` python
#案例: 查找出 所有类型为 TextView 的控件

# 导包
from airscript.node import Selector

# 约束 type 为“TextView”
nodes =  Selector().type("TextView").find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```
--- 

###  desc

<b>Selector().desc</b>(<font color="#3376d0">str</font>)

控件的描述

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| str      | 正则 | 必填 |要检索的控件描述|


</font>

``` python
#案例: 查找出 描述信息为 ‘这是关闭按钮’ 的控件

# 导包
from airscript.node import Selector

# 约束 desc 为“这是关闭按钮”
node =  Selector().desc("这是关闭按钮").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```
--- 

###  hintText

<b>Selector().hintText</b>(<font color="#3376d0">str</font>)

输入框中的默认展示文本

- 通常在 EditText 控件中存在的属性[tip:输入框不输入文本时,展示的值]

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| str      | 正则 | 必填 |默认展示的文本|


</font>

``` python
#案例: 查找出 描述信息为 ‘这是关闭按钮’ 的控件

# 导包
from airscript.node import Selector

# 约束 desc 为“这是关闭按钮”
node =  Selector().desc("这是关闭按钮").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```


###  packageName

<b>Selector().packageName</b>(<font color="#3376d0">str</font>)

包名,通常为App的唯一标识

>例如:AirScript 的包名为 ‘com.aojoy.airscript’

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| str      | 正则 | 必填 |包名属性,隶属于哪个App|

</font>

``` python


#案例: 查找出 包名 属性为 com.aojoy.airscript 的控件

# 导包
from airscript.node import Selector

# 约束 desc 为“这是关闭按钮”
node =  Selector().packageName("com.aojoy.airscript").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```
---

###  inputType

<b>Selector().inputType</b>(<font color="#3376d0">i</font>)

通常指 EditText 的输入类型 

> 输入类型: 在Android 的文本输入框中 有很多类型,比如 密码,数字,邮件 等等.

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| i      | number | 必填 | 子控件个数<br>整数:为约束具体个数 <br>小数:如1.2 则表示拥有1-2 个子控件的都满足结果  |


</font>

``` python


# 案例: 查找出 包名 属性为 com.aojoy.airscript 的控件

# 导包
from airscript.node import Selector

# 约束 desc 为“这是关闭按钮”
node =  Selector().packageName("com.aojoy.airscript").find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```
---

###  childCount

<b>Selector().childCount</b>(<font color="#3376d0">i</font>)

拥有子节点的数量

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| i      | number... | 必填 | 子控件个数<br>整数:为约束具体个数 <br>小数:如1.2 则表示拥有1-2 个子控件的都满足结果  |


</font>

``` python
#案例1: 查找 子控件个数 为 9 的控件

# 导包
from airscript.node import Selector

# 约束 desc 为“这是关闭按钮”
node =  Selector().childCount(9).find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```


``` python
#案例2: 查找 子控件个数 为 1-3 之间, 8.9 之间的 所有 

# 导包
from airscript.node import Selector

# 约束 desc 为“这是关闭按钮”
nodes =  Selector().childCount(1.3,8.9).find_all()

if nodes:
    #找到了控件
    for n in nodes:
        print(n)
else:
    print('没有找到任何控件')
```

---

###  inputType

<b>Selector().inputType</b>(<font color="#3376d0">i</font>)

输入类型

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| i      | number | 必填 | 输入类型<br>可通过‘控件检索工具’查看具体数值 |


</font>

``` python
# 案例: 查找输入类型为 1 的 控件

# 导包
from airscript.node import Selector

# 约束 输入类型 为1
node =  Selector().inputType(1).find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```

---

###  maxTextLength

<b>Selector().maxTextLength</b>(<font color="#3376d0">i</font>)

允许文本的最大长度

>部分控件为了布局的美观,设置最大文本长度,溢出部分用...代替

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| i      | number | 必填 | 允许文本的最大长度 |


</font>

``` python
# 案例: 查找最大文本长度 限制为 50 的 控件

# 导包
from airscript.node import Selector

# 约束 最大文本长度 为 50
node =  Selector().maxTextLength(50).find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```

---

###  clickable

<b>Selector().clickable</b>(<font color="#3376d0">b</font>)

是否可以点击

>在Android布局中.控件有‘可点击’、‘不可点击’ 两种状态.

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:可点击 , False:不可点击 |


</font>

``` python
# 案例: 查找出当前页面中 所有可以被点击的控件

# 导包
from airscript.node import Selector

# 约束 可以点击
nodes =  Selector().clickable(True).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  checkable

<b>Selector().checkable</b>(<font color="#3376d0">b</font>)

是否可以选中

>在界面上可以被选中的控件一般为‘单选框’,‘多选框’

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:可以选中 , False:不可以选中 |


</font>

``` python
#案例: 查找出当前页面中 所有可以选中的控件

# 导包
from airscript.node import Selector

# 约束 可以选中
nodes =  Selector().checkable(True).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  checked

<b>Selector().checked</b>(<font color="#3376d0">b</font>)

是否已经选中

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:已选中 , False:没有选中 |


</font>

``` python
# 案例: 查找出当前页面中 所有已经选中的控件

# 导包
from airscript.node import Selector

# 约束 可以选中
nodes =  Selector().checked(True).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  editable

<b>Selector().editable</b>(<font color="#3376d0">b</font>)

是否可以编辑值

>通常在文本输入框中,此属性才会为True

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:可编辑 , False:不可编辑 |


</font>

``` python
#案例: 查找出当前页面中 所有可以编辑文本的控件

# 导包
from airscript.node import Selector

# 约束 可以编辑
nodes =  Selector().editable(True).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  enabled

<b>Selector().enabled</b>(<font color="#3376d0">b</font>)

是否可以访问

>当该属性为False时,控件则不可点击,不可获取焦点,不可输入文本...

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:可以访问 , False:不可访问 |


</font>

``` python
#案例: 查找出当前页面中 所有不可以访问的控件

# 导包
from airscript.node import Selector

# 约束 不可以访问
nodes =  Selector().enabled(False).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

###  dismissable

<b>Selector().dismissable</b>(<font color="#3376d0">b</font>)

是否可以被关闭

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:可以关闭 , False:不可关闭 |


</font>

``` python
#案例: 查找出当前页面中 所有可以被关闭的控件

# 导包
from airscript.node import Selector

# 约束 不可以访问
nodes =  Selector().dismissable(True).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  focusable

<b>Selector().focusable</b>(<font color="#3376d0">b</font>)

是否可以获取焦点

> 在页面中某些控件可以获取焦点,部分控件(容器)不可获取焦点
> - 焦点:例如输入框,点击后弹出输入法,这时候 输入框就是获取焦点的状态.


<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:可以获取焦点 , False:不可获取焦点 |


</font>

``` python
# 案例: 查找出当前页面中 所有所有可以被获取焦点的控件

# 导包
from airscript.node import Selector

# 约束 可以获取焦点的控件
nodes =  Selector().focusable(True).find_all()

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  focused

<b>Selector().focused</b>(<font color="#3376d0">b</font>)

是否已获取焦点

> 焦点:例如输入框,点击后弹出输入法,这时候 输入框就是获取焦点的状态.

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:已获取焦点 , False:没有获得焦点 |


</font>

``` python
#案例: 查找出当前页面中 所有所有可以被获取焦点的控件

# 导包
from airscript.node import Selector

# 约束 已经获取焦点
node =  Selector().focused(True).find()

if node:
    #找到了控件
    print(node)
else:
    print('没有找到任何控件')
```

---

###  longClickable

<b>Selector().longClickable</b>(<font color="#3376d0">b</font>)

是否支持长按

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| b      | boolean | 必填 | True:支持长按 , False:不支持长按 |


</font>

``` python
#案例: 查找出当前页面中 所有支持长按的控件

# 导包
from airscript.node import Selector

# 约束 已经获取焦点
node =  Selector().longClickable(True).find_all()

if node:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  visable

<b>Selector().visible</b>(<font color="#3376d0">isVisible</font>)

针对用户是否可见

> 用户可见:在一个Android界面中,部分控件属于隐藏状态,部分控件用户可见.

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| isVisible      | boolean | 必填 | 是否针对用户可见,True:可见,False:不可见 |


</font>

``` python
# 案例: 查找出,所有用户不可见的控件

# 导包
from airscript.node import Selector

# 约束 显示在界面上
node =  Selector().visible(False).find_all()

if node:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

###  parent

<b>Selector().parent</b>(<font color="#3376d0">i</font>)

获取父元素

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| i      | number... | 必填 | 获取第i个父元素,默认获取所有父元素<br> (2):获取爷爷元素<br>(3):获取太爷爷元素<br>(1,3):获取第1和第3个父元素<br>(1.3):获取第1-3 之间的所有父元素 |


</font>

``` python
# 案例1: 获取指定 id控件的 所有父元素(父元素,爷爷元素,太爷爷,祖太爷...统统获取)

# 导包
from airscript.node import Selector

# 约束 获取所有父元素
nodes =  Selector().id("com.aojoy.airscript:id/search_bar_text").parent().find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例2: 获取指定 id控件的 太爷爷元素

# 导包
from airscript.node import Selector

# 约束 已经获取焦点
nodes =  Selector().id("com.aojoy.airscript:id/search_bar_text").parent(3).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例3: 获取父元素,太太爷元素

# 导包
from airscript.node import Selector

# 约束 获取1和3 父元素
nodes =  Selector().id("com.aojoy.airscript:id/search_bar_text").parent(1,3).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例4: 获取往上数3辈 所有元素

# 导包
from airscript.node import Selector

# 约束 获取1-3 之间的所有父元素
nodes =  Selector().id("com.aojoy.airscript:id/search_bar_text").parent(1.3).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node)
else:
    print('没有找到任何控件')
```

---


###  child

<b>Selector().child</b>(<font color="#3376d0">i</font>)

获取孩子控件

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| i      | number... | 可填 | 可以填写多个数字<br>不填写任何参数,获取所有孩子控件<br>当数字为正整数(例如1):获取第1个孩子控件<br>当数字为负整数(例如:-1) 获取倒数第1个孩子<br>当数字为正小数(例如:1.3):获取1-3之间的所有孩子<br> 当数字为负小数(例如:-1.3):获取倒数 1-3之间的所有孩子 |


</font>


``` python
# 案例1: 获取所有孩子

# 导包
from airscript.node import Selector

# 约束 默认无参下,获取所有
nodes =  Selector().id("com.aojoy.airscript:id/search_query_section").child().find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.type)
else:
    print('没有找到任何控件')
```
---

``` python
# 案例2: 获取第一个孩子

# 导包
from airscript.node import Selector

# 约束 获取第一个孩子
nodes =  Selector().id("com.aojoy.airscript:id/search_query_section").child(1).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.type)
else:
    print('没有找到任何控件')
```
---

``` python
# 案例3: 获取第1和 第2个孩子

# 导包
from airscript.node import Selector

# 约束 可变参数,填写多个
nodes =  Selector().id("com.aojoy.airscript:id/search_query_section").child(1,2).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.type)
else:
    print('没有找到任何控件')
```
---

``` python
# 案例4: 获取第1-3个孩子

# 导包
from airscript.node import Selector

# 约束 填写一个小数,获取区间孩子
nodes =  Selector().id("com.aojoy.airscript:id/search_query_section").child(1.3).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.type)
else:
    print('没有找到任何控件')
```
---

``` python
# 案例5: 获取第倒数第一个孩子

# 导包
from airscript.node import Selector

# 约束 负数,倒数取值
nodes =  Selector().id("com.aojoy.airscript:id/search_query_section").child(-1).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.type)
else:
    print('没有找到任何控件')
```
---

``` python
# 案例6: 获取第倒数第1-3 个孩子

# 导包
from airscript.node import Selector

# 约束 负数,倒数区间取值
nodes =  Selector().id("com.aojoy.airscript:id/search_query_section").child(-1.3).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.type)
else:
    print('没有找到任何控件')
```
---


###  brother

<b>Selector().brother</b>(<font color="#3376d0">n</font>)

获取兄弟元素

> 兄弟元素:同层级的控件

<font color="#3376d0" size="2">

| 参数        | 类型           | 必填  | 备注|
| ------------- |:-------------:| -----:|:----|
| n      | number... | 可选 | 获取第n个兄弟控件<br>() 默认不填:获取所有兄弟控件<br>(1) 获取第一个兄弟控件 <br>(1,2) 获取第1和第2个兄弟控件<br>(1.4) 获取1-4之间的所有兄弟控件<br>(0.1) 获取当前控件的下一个兄弟控件<br>(-0.1) 获取当前控件的上一个兄弟控件<br>(-1) 获取倒数第1个兄弟控件 |


</font>

``` python
# 案例1: 获取所有兄弟
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother().find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例2: 获取第一个兄弟控件 
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother(1).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例3: 获取第1和第2个兄弟控件
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother(1,2).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例4:获取1-4之间的所有兄弟控件
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother(1.4).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例5:获取当前控件的下一个兄弟控件
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother(0.1).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例6:获取当前控件的上一个兄弟控件
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother(-0.1).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

``` python
# 案例7:获取倒数第1个兄弟控件
# 导包
from airscript.node import Selector

nodes =  Selector().desc("分享可爱立体边框").brother(-1).find_all();

if nodes:
    #找到了控件
    for node in nodes:
        print(node.desc)
else:
    print('没有找到任何控件')
```

---

## 选择器_动作

在约束规则的同时,施加动作

让控件点击,滑动,输入等


<font color="#3376d0">

| 执行动作方法         | 备注|
| ------------- |----:|
| Selector().click()      | 控件点击|
| Selector().long_click()    | 控件长按|
| Selector().slide(number)    | 控件滑动 |
| Selector().input(string)    | 控件输入|


</font>

###  click

<b>Selector().click</b>(<font color="#3376d0"></font>)

控件点击 (透传点击)

> 透传点击:透传点击通过系统操作控件底层执行点击. 而屏幕坐标点击 通过模拟手势操作屏幕.
> - 透传点击,哪怕界面上看不见控件.但存在索引依然可以点击.透传点击忽视坐标分辨率,因此可以达到全部分辨率适配的效果.

``` python
#导包
from airscript.node import Selector

# 查找 到指定可控件 ,执行点击方法,点击方法也是约束的一种,因此不能忘记后面的find或_find_all
Selector().type("ImageView").id("com.aojoy.airscript:id/iv_statue1").click().find()
```
---

###  long_click

<b>Selector().long_click</b>(<font color="#3376d0"></font>)

控件长按 

>透传长按


``` python{4}
#导包
from airscript.node import Selector

node = Selector().id("com.aojoy.airscript:id/search_bar_text").type("EditText").long_click().find()
```
---


###  slide

<b>Selector().slide</b>(<font color="#3376d0">ori</font>)

控件滑动

::: warning 控件滑动
控件滑动,只支持向前滑动,向后滑动.

步长默认一屏,无法自定义步长
:::

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| ori      | number | 必填 | 滑动的方向<br> -1:向前滑动<br>1:向后滑动 |


</font>



``` python
#导包
from airscript.node import Selector

# 查找 到指定可控件 ,执行向后滑动
Selector().type("RecyclerView").id("com.android.settings:id/scroll_headers").slide(1).find()
```
---

###  input

<b>Selector().input</b>(<font color="#3376d0">msg</font>)

控件输入

::: warning 控件输入
当存在可输入文本的控件时,才可输入.

无需获取焦点,直接输入.
:::

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| msg      | string | 必填 | 要输入的内容 |


</font>



``` python
#导包
from airscript.node import Selector

# 查找 到指定可控件 , 输入‘自在老师’
Selector().id("com.aojoy.airscript:id/search_bar_text").input("自在老师").find()
```
---

## 结果_Node

::: tip Node
Node对象 就是一个控件对象.
包含了众多属性供我们书写代码逻辑使用.

Selector().<b>find()</b> 和  Selector().<b>find_all()</b> 都会返回  <b>Node</b> 对象

:::


### Node 属性

Node有很多公开的成员属性,我们通过‘.’直接读取

<font size=2>

| 属性         | 备注|
| ------------- |----:|
| id      | 控件ID<br><font color="#e04f40">部分APP中ID属性,随手机安装可能动态变化,谨慎使用</font>|
| text    | 控件的文本 |
| type    | 控件的类型|
| desc    | 控件的描述|
| hintText    | 控件的默认展示文本|
| packageName    | 控件所属包名|
| rect    | 控件在屏幕中的位置<br><b>rect 属性</b><br>rect.left:x坐标<br>rect.top:y坐标<br><b>rect 方法</b><br>rect.width():控件的宽度<br>rect.height():控件的高度<br>rect.centerX():控件的中心坐标X<br>rect.centerY():控件的中心坐标Y|
| childCount    | 子控件数量|
| inputType    | 输入类型|
| maxTextLength    | 控件最大文本长度|
| clickable    | 是否可点击|
| checkable    | 是否可选中|
| checked    | 是否已选中|
| editable    | 是否支持编辑|
| enabled    | 是否可访问|
| visible    | 是否针对用户展示|
| dismissable    | 是否可取消|
| focusable    | 是否可以获取焦点|
| focused    | 是否已获取了焦点|
| longClickable    | 是否可以长按|

</font>

``` python
#导包
from airscript.node import Selector

# 查询控件
node = Selector().id("com.aojoy.airscript:id/search_bar_text").find();

if node:
    # 打印 查询到的控件属性
    print(node.id) # 控件ID
    print(node.text) # 控件文本
    print(node.desc) # 控件描述
    print(node.type) # 控件类型
    print(node.hintText) # 控件默认文本
    print(node.packageName) # 控件包名

    print(node.rect) # 控件在屏幕中的坐标 矩形范围
    print(node.rect.left) # 控件在屏幕中的坐标 左上角x
    print(node.rect.top) # 控件在屏幕中的坐标 左上角y
    print(node.rect.width()) # 控件在屏幕中的宽度
    print(node.rect.height()) # 控件在屏幕中的高度
    print(node.rect.centerX()) # 控件的中心点坐标X
    print(node.rect.centerY()) # 控件的中心点坐标Y

    print(node.childCount) # 子控件数量
    print(node.inputType) # 输入模式
    print(node.maxTextLength) # 最大文本长度
    print(node.clickable) # 是否可点击
    print(node.checkable) # 是否可选中
    print(node.checked) # 是否选中
    print(node.editable) # 是否可编辑
    print(node.enabled) # 是否可访问
    print(node.visible) # 是否针对用户展示
    print(node.dismissable) # 是否可取消
    print(node.focusable) # 是否可以获取焦点
    print(node.focused) # 是否获取了焦点
    print(node.longClickable) # 是否支持长按

    
else:
    print("没有找到控件")
```

### Node find

Node()<font color="#3376d0">.find(selector)</font>

查询到Node结果后,在此基础上进行二次查找, 查询一个结果返回

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| selector      | Selector | 必填 | 在此Node的基础上,还可以再次传入Selector,二次检索 |


</font>

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| Node    | 查询到 一个 Node(控件)对象,无结果时,返回None |

</font>


``` python
#案例:查找到一个控件,再此基础上再次进行二次查找

#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 在node 控件中 查找 它的倒数第一个子控件
    nchild = node.find( Selector().child(-1) )
    if nchild:
        print(nchild)

```



### Node find_all

Node()<font color="#3376d0">.find_all(selector)</font>

查询到Node结果后,在此基础上进行二次查找, 查询一组结果返回

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| selector      | Selector | 必填 | 在此Node的基础上,还可以再次传入Selector,二次检索 |


</font>

<font color="#3376d0" size=2>

| 返回结果       | 备注|
| -------------|----:|
| Node[]    | 查询到 一组 Node(控件)对象,无结果时,返回None |

</font>


``` python
#案例:查找到一个控件,再此基础上再次进行二次查找

#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 在node 控件中 查找 它的所有孩子控件
    nchilds = node.find_all( Selector().child() )
    if nchilds:
        for nchild in nchilds:
            print(nchild)

```


### Node parent

Node()<font color="#3376d0">.parent(*num)</font>

获取当前控件的父元素

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| *num      | 可变参数number | 必填 | 可选 | 获取第i个父元素,默认获取所有父元素<br> (2):获取爷爷元素<br>(3):获取太爷爷元素<br>(1,3):获取第1和第3个父元素<br>(1.3):获取第1-3 之间的所有父元素|

</font>

<font color="#3376d0" size=2>

| 返回结果       | 备注|
| -------------|----:|
| Node    | 当参数为整数切 只传一个参数时 返回Node 对象 |
| Node[]    | 当参数为为小数,或传多个参数时 ,返回 Node 数组对象 |

</font>


``` python
#案例:查找到一个控件,再此基础上再次进行二次查找

#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 获取node 控件的父元素
    nP = node.parent(1)
    if nP:
        print(nP)

```

``` python
#案例:查找到一个控件,再此基础上再次进行二次查找

#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 获取node 控件的父元素和爷爷元素
    nPs = node.parent(1,2)
    print(nPs) #

```




### Node child

Node()<font color="#3376d0">.child(*num)</font>

获取当前控件的一个子控件

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| *num      | 可变number | 可选 | 可以填写多个数字<br>不填写任何参数,获取所有孩子控件<br>当数字为正整数(例如1):获取第1个孩子控件<br>当数字为负整数(例如:-1) 获取倒数第1个孩子<br>当数字为正小数(例如:1.3):获取1-3之间的所有孩子<br> 当数字为负小数(例如:-1.3):获取倒数 1-3之间的所有孩子 |


</font>

<font color="#3376d0" size=2>

| 返回结果       | 备注|
| -------------|----:|
| Node    | 当参数为整数切 只传一个参数时 返回Node 对象 |
| Node[]    | 当参数为为小数,或传多个参数时 ,返回 Node 数组对象 |

</font>

``` python
#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 获取node 控件的第一个孩子
    node_child = node.child(1)
    if node_child:
        print(node_child)

```

``` python
#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 获取node 控件的所有孩子
    node_childs = node.child()
    if node_childs:
        print(len(node_child))

```



### Node brother

Node()<font color="#3376d0">.brother(*n)</font>

获取当前控件的一个兄弟控件

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| n      | number | 可选 | 获取第n个兄弟控件<br>() 默认不填:获取所有兄弟控件<br>(1) 获取第一个兄弟控件 <br>(1,2) 获取第1和第2个兄弟控件<br>(1.4) 获取1-4之间的所有兄弟控件<br>(0.1) 获取当前控件的下一个兄弟控件<br>(-0.1) 获取当前控件的上一个兄弟控件<br>(-1) 获取倒数第1个兄弟控件|


</font>

<font color="#3376d0" size=2>

| 返回结果       | 备注|
| -------------|----:|
| Node    | 当参数为整数切 只传一个参数时 返回Node 对象 |
| Node[]    | 当参数为为小数,或传多个参数时 ,返回 Node 数组对象 |

</font>

``` python
#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()

if node:
    # 获取node 控件的所有兄弟控件第1个
    node_brother = node.brother(1)
    if node_brother:
        print(node_brother)

```

### Node click

Node()<font color="#3376d0">.click()</font>

控件点击

``` python
#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()
if node:
    # 点击控件自身
    node.click()
```

### Node long_click

Node()<font color="#3376d0">.long_click()</font>

控件长按

``` python {5}
#导包
from airscript.node import Selector
node = Selector().id("com.aojoy.airscript:id/search_bar_text").type("EditText").find()
if node:
    node.long_click()
```

### Node slide

Node()<font color="#3376d0">.slide(ori)</font>

控件滑动

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| ori      | number | 必填 | 滑动的方向<br> -1:向前滑动<br>1:向后滑动   |


</font>

``` python
#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_query_section").type("FrameLayout").find()
if node:
    # 控件向后滑动
    node.slide(1)
```

### Node input

Node()<font color="#3376d0">.input(content)</font>

控件输入文本

<font color="#3376d0" size=2>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| content      | string | 必填 | 滑动的方向<br> -1:向前滑动<br>1:向后滑动   |


</font>

``` python
#导包
from airscript.node import Selector

node =  Selector().id("com.aojoy.airscript:id/search_bar_text").type("EditText").find()
if node:
    # 当前控件 输入文本
    node.input("自在老师讲的不错")
```
