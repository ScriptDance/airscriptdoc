---
title: 界面
---

``` python
# 包路径
from airscript.ui
```

# 界面(UI)

::: tip 用户交互
通过界面,程序与用户交互

Airscript UI 采用 <b>Html</b> 与Python交互实现
:::

## 窗口
``` python
# 包路径
from airscript.ui import Window
```

<b>Window</b>(<font color="#3376d0">ui,tunnel</font>)

<font color="#3376d0">用Window 来构建一个用户交互界面</font>

<font color="#3376d0">

| 构造参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| ui      | string | 必填 |html布局路径,请使用 ‘R.res’ 引用资源,也可以传入一个http地址|
| tunnel      | python function(k,v) | 可选 |html 向 python 传递参数的通道<br>该函数需存在两个形式参数 key,value <br> html会传递键值对参数过来|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

``` python
#导包
from airscript.ui import Window 

def tunnel(k,v):
    print(k)
    print(v)

# 构建一个window 显示‘/ui/a.html’ 通信通道为tunnel 函数
w = Window(R(__file__).ui('a.html'),tunnel)

```
</font>

### 模式

<b>Window(...).</b><font color="#3376d0">model(m)</font>

<font color="#3376d0">通过配置model,可以改变窗口的模式</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| m      | int | 可选 |窗口的模式<br>m=0 默认,窗口内和窗口外都可以获取点击触摸事件<br> m=1 只有窗口内的点击触摸事件有效 <br> m=2  窗口内的所有点击触摸事件无效,并透传到窗口下 |

</font>

### 消息通道

<b>Window(...).</b><font color="#3376d0">tunner(pyfun)</font>

<font color="#3376d0">设置消息通道,可以接收到js中传递的消息</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| pyfun      | function | 必填 |必须包含两个形式参数 k,v|

</font>

``` python
from airscript.ui import Window
from airscript.system import R

def tunner(k,v):
    print(k,v)

w =  Window(R(__file__).ui("loger.html"))
w.tunner(tunner) # 在这里设置消息通道
w.show()
```

### 尺寸

#### 窗口宽

<b>Window(...).</b><font color="#3376d0">width(size)</font>

<font color="#3376d0">可更改 窗口的显示宽度</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| size     | number 或 string | 必填 | 当值为number类型时<br> .width(300) 设置窗口宽度为300px <br> 当值为string类型时 <br> .width("80vw") 设置宽度为屏幕宽度的 80% <br> .width("80vh") 设置宽度为屏幕高度的 80%   |

</font>

#### 窗口高


<b>Window(...).</b><font color="#3376d0">height(size)</font>

<font color="#3376d0">可更改 窗口的显示高度</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| size     | number 或 string | 必填 | 当值为number类型时<br> .height(300) 设置窗口高度为300px <br> 当值为string类型时 <br> .height("80vw") 设置高度为屏幕宽度的 80% <br> .width("80vh") 设置高度为屏幕高度的 80%   |

</font>

---

### 背景

<b>Window(...).</b><font color="#3376d0">background(color)</font>

<font color="#3376d0">设置UI背景色,默认为白色</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| color     | string | 必填 | argb 颜色值 <br> 透明:#00000000 <br>白色:#FFFFFF <br>黑色:#000000 |

</font>

### 拖拽

<b>Window(...).</b><font color="#3376d0">drag(bol)</font>

<font color="#3376d0">UI窗口是否可被用户拖拽,默认为False</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| bol     | boolean | 必填 | 系统默认为False<br> 设置为True 后,在UI顶部出现拖动条,和改变尺寸的按钮 |

</font>

### 遮罩

<b>Window(...).</b><font color="#3376d0">dimAmount(fol)</font>

<font color="#3376d0">设置窗口遮罩层透明度,默认为0.5</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| fol     | float | 必填 | 数值在 0-1之间 <br> 0 :完全没有遮罩,1:完全黑的遮罩,0.5:半透明遮罩,默认为0.5|

</font>

### 引力 

<b>Window(...).</b><font color="#3376d0">gravity(g)</font>

<font color="#3376d0">可更改 窗口的引力方向,随着引力方向的改变. 窗口的位置 属性也会随着引力点改变.</font>

- 引力方向: 窗口靠左,窗口靠右,还是窗口居中 等.

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| g     | number | 必填 | 此值需传入 android.view.Gravity 中的常量值   |


| android.view.Gravity 的常用常量   | 数值   |  备注|
| ------------- |----|:----|
| LEFT     |3|窗口居左   |
| TOP    |48|窗口居上   |
| RIGHT   | 5 |窗口居右   |
| BOTTOM   | 80 |窗口居底   |
| CENTER_HORIZONTAL   | 1 |水平居中   |
| CENTER_VERTICAL   | 16 |垂直居中   |
| CENTER   | 17 |屏幕居中   |


::: warning  Android 类的常量使用
可以 通过python 引入使用 from android.view import Gravity

也可以 直接填入常量数值使用
:::


</font>

--- 

### 位置

#### 窗口横坐标x

<b>Window(...).</b><font color="#3376d0">x(n)</font>

<font color="#3376d0">更改窗口横向坐标x,x的距离是相对于引力而言</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| n     | number  | 必填 | 距离引力点的横向距离<br> .x(100)距离 引力点 横向距离100px  |

</font>


#### 窗口纵坐标y

<b>Window(...).</b><font color="#3376d0">y(n)</font>

<font color="#3376d0">更改窗口横向坐标x,x的距离是相对于引力而言</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| n     | number  | 必填 | 距离引力点的纵向距离<br> .y(100)距离引力点纵向距离100px  |

</font>

### 显示
<b>Window(...).</b><font color="#3376d0">show()</font>

<font color="#3376d0">展现UI,启动一个窗口展示html</font>

### 关闭

<font color="#3376d0">关闭当前Window</font>

#### Python 中关闭

<b>Window(...).</b><font color="#3376d0">close()</font>

#### Html javascript 中关闭

<b>window.</b><font color="#3376d0">airscript.close()</font>



### 数据交互

#### Python 调用 JavaScript 方法

<font color="#3376d0">请确定,在html 加载 javascript 代码中 存在将被调用的函数</font>

``` python
# 导包
from airscript.ui import Window 
#构建与展示UI
w = Window(R(__file__).res('/ui/a.html'))
w.show()

# 调用 javascript 中的 函数 fun1 ,并传入参数 "自在老师",2
w.call('fun1("自在老师",2)')

```

#### JavaScript 向 Python 传递数据
<font color="#3376d0">在html中,使用javascript 方法调用内置jairscript对象</font>

``` javascript
<script>
    //这里的 key,value 用户填入自定义的值 ,在 python 的Window 构造参数 tunnel 中会回调
    window.airscript.call('key',"value")
</script>

```

#### JavaScript 中的快捷方法

| 方法        | 备注|
| ------------- |:----|
| airscript.close()     | 关闭当前窗口|
| airscript.get("key")     | 获取 Python 中Kv 存储的数据,仅支持string数据|
| airscript.save("key","value")     | 快速存储数据到本地,和Python Kv函数数据互通,仅支持string数据|

``` javascript
<script>
    //在JS 中直接关闭当前窗口
    window.airscript.close()
</script>

<script>
    //在JS 中获取 Python代码中 Kv 存储的值
    var value = window.airscript.get("key")
</script>

<script>
    //在JS 调用 save 将数据存储在本地 只支持存储string 类型的值.
    window.airscript.save("key","value")
</script>

```




## 弹窗

### 吐司

<b></b><font color="#3376d0">toast(msg,dur,x,y)</font>

<font color="#3376d0">展示一个吐司提示,用户无需操作,可自动消失</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| msg    | string  | 必填 | 消息提示信息  |
| dur    | number  | 可选 | 时间长度,单位毫秒  |
| x    | number  | 可选 | 在屏幕上的x坐标<br> -1 为屏幕中间 |
| y    | number  | 可选 | 在屏幕上的y坐标<br> -1 为屏幕中间 |

</font>

```python
# 导包
from airscript.ui.dialog import toast

# 展示一个简单吐司提示,3秒后消失
toast('我认识自在老师')

```

```python
# 导包
from airscript.ui.dialog import toast

# 展示一个简单吐司提示,5秒后消失,在屏幕的左上角显示
toast('我认识自在老师',5000,0,0)

```

### 消息提示

``` python
# 导包
from airscript.ui.dialog import alert
```

<b></b><font color="#3376d0">alert(msg,submit)</font>

<font color="#3376d0">弹出一个确认框,无取消按钮</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| msg    | string  | 必填 | 消息提示信息  |
| submit    | string  | 必填 | 消息提示确认按钮文本,默认为‘确认’  |

</font>

```python
# 导包
from airscript.ui.dialog import alert

# 案例1: 弹出一个信息提示框
alert('您好,我是你们的API导师,自在老师.')

```

```python
# 导包
from airscript.ui.dialog import alert

# 案例2: 弹出一个信息提示框,并更改确认按钮为知道了
alert('您好,我是你们的API导师,自在老师.','知道了')

```

---

### 消息确认

```python
# 导包
from airscript.ui.dialog import confirm
```

- 创建一个消息确认对话框

<b></b><font color="#3376d0">confirm(msg)</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| msg    | string  | 必填 | 消息提示信息  |
</font>

- 属性方法

| 方法与参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| .title(msg)    | string  | 必填 | 设置标题  |
| .submit(msg)    | string  | 必填 | 设置确认按钮值  |
| .cancle(msg)    | string  | 必填 | 设置取消按钮值  |
| .close()    |   |  | 关闭弹窗  |
| .show(pyfun)    | python 函数,需要两个形参  | 必填 | UI数据回调函数, 格式如:<br>'comfirm - 回调函数格式'<br> 点击确认按钮后 k = "__confirm",v = "sure"<br>点击取消按钮后 k = "__confirm",v = "cancle" |

```python
# comfirm - 回调函数格式
def tunner(k,v):
    if(k=="__confirm"):
        if v = "sure":
            print('点击了确认')
        else:
            print('点击了取消')

```

```python
# 导包
from airscript.ui.dialog import confirm

# 案例1: 弹出一个确认框
def tunner(k,v):
    if(k=="__confirm"):
        if v == "sure":
            print('点击了确认')
        else:
            print('点击了取消')

dialog =  confirm('您确定要学习Airscript吗?').show(tunner)

```

```python
# 导包
from airscript.ui.dialog import confirm

# 案例2: 弹出一个确认框,并指定标题
def tunner(k,v):
    if(k=="__confirm"):
        if v == "sure":
            print('点击了确认')
        else:
            print('点击了取消')

dialog =  confirm('您确定要学习Airscript吗?').title("学习提示").show(tunner)

```

```python
# 导包
from airscript.ui.dialog import confirm

# 案例3: 弹出一个确认框,并指定标题,确认按钮 和取消按钮文本
def tunner(k,v):
    if(k=="__confirm"):
        if v == "sure":
            print('点击了确认')
        else:
            print('点击了取消')

dialog =  confirm('您确定要学习Airscript吗?')
dialog.title("学习提示")
dialog.submit("我要学习")
dialog.cancle("不想学")
dialog.show(tunner)

```

---

### 文本输入

```python
# 导包
from airscript.ui.dialog import promat
```

- 创建文本输入框

<b></b><font color="#3376d0">promat(msg)</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| msg    | string  | 必填 | 消息提示信息  |
</font>

- 属性方法

<font color="#3376d0">

| 方法与参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| .title(msg)    | string  | 必填 | 设置标题  |
| .value(msg)    | string  | 必填 | 设置默认文本  |
| .hint(msg)    | string  | 必填 | 设置输入框中的默认提示  |
| .submit(msg)    | string  | 必填 | 设置确认按钮值  |
| .cancle(msg)    | string  | 必填 | 设置取消按钮值  |
| .close()    |   |  | 关闭弹窗  |
| .show(pyfunction)    | python 函数,需要两个形参  | 必填 | UI数据回调函数, 格式如:<br>'promat - 回调函数案例'<br> 点击确认按钮后 k = "__promat",v = 用户输入的内容<br>点击取消按钮后 k = "__promat",v = "cancle" |


</font>

```python
# promat - 回调函数格式
def tunner(k,v):
    if(k=="__promat"):
        if v == "cancle":
            print('点击了取消')
        else:
            print('点击了确认:输入值为:',v)

```

```python
# 导包
from airscript.ui.dialog import promat

# 案例: 弹出一个文本输入框
def tunner(k,v):
    if(k=="__promat"):
        if v == "cancle":
            print('点击了取消')
        else:
            print('点击了确认:输入值为:',v)

dialog =  promat('您确定要学习Airscript吗?').show(tunner)

```

```python
# 导包
from airscript.ui.dialog import promat

# 案例2: 弹出一个文本框,设置详细属性
def tunner(k,v):
    if(k=="__promat"):
        if v == "cancle":
            print('点击了取消')
        else:
            print('点击了确认:输入值为:',v)

dialog =  promat('您确定要学习Airscript吗?')
dialog.value("文本内容预设值")
dialog.hint("这是默认提示")
dialog.title("标题文本")
dialog.submit("提交")
dialog.cancle("再见")
dialog.show(tunner)


```

### 日志窗口

``` python
# 包路径
from airscript.ui.dialog import loger
```
- 日志窗口

<b></b><font color="#3376d0">loger().show()</font>

```python
from airscript.ui.dialog import loger
# loger 继承与 Window 因此,我们可以使用 Window中任何方法
log =  loger()
log.show()
# log.close()

```
#### 自定义日志窗口

自定义日志窗口需要下载[UI模版](http://nsnn.oss-cn-qingdao.aliyuncs.com/file/data/202308/51f9187aea12dc45bdd2f4c09b0ff59b.asui)

```python
from airscript.ui.dialog import loger

def tunner(k,v):
    print(k,v)

# loger 继承 Window ,因此 Window 中的方法,loger都可以使用
lw = loger(R(__file__).ui("loger.html"))
lw.tunner(tunner) # 设置消息通道
lw.show() # 展示 
```



## 悬浮窗
``` python
# 包路径
from airscript.ui import Float
```

### 隐藏悬浮窗
```python
# 导包
from airscript.ui import Float 
# 隐藏悬浮窗
Float.hide()
```

### 展示悬浮窗

```python
# 导包
from airscript.ui import Float 
# 显示悬浮窗
Float.show()
```