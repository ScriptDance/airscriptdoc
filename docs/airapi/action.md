---
title: 动作
---


# 动作

动作(action)包中,包含了点击、滑动、输入、手势等操作.

用来模拟人手操作设备.


::: warning Android版本限制
动作模块需 >= Android 7.0
:::


## 点击 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=4" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>
<div></div>


``` python
# 导包
from airscript.action import click
```

- <b>click</b>(<font color="#3376d0">x,y,dur</font>)

点击屏幕某个位置

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |屏幕的x坐标|
| y      | number | 必填 |屏幕的y坐标|
| dur    | number | 可选 |点击屏幕的时长,单位毫秒(ms),默认为 20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>


``` python
#案例

# 导包
from airscript.action import click

# 点击坐标 x=100,y=200 的位置
click(100,200)

# 点击坐标 x=100,y=200 的位置,按压3000ms 后释放
click(100,200,3000)

```

- <b>click</b>(<font color="#3376d0">point,dur</font>)

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| point      | android.graphics.Point | 必填 |一个点对象|
| dur    | number | 可选 |点击屏幕的时长,单位毫秒(ms),默认为 20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

``` python
#案例

# 导包
from airscript.action import click
from android.graphics import Point

# 点击坐标 x=100,y=200 的位置
p =  Point(100,200)
click(p)

# 点击坐标 x=100,y=200 的位置,按压3000ms 后释放
p =  Point(100,200)
click(p,3000)

```
---

---

## 滑动 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=5" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>

``` python 案例
# 导包
from airscript.action import slide
```

<b>slide</b>(<font color="#3376d0">x,y,x1,y1,dur</font>)

模拟手指滑动

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |滑动起始点 x 坐标|
| y      | number | 必填 |滑动起始点 y 坐标|
| x1      | number | 必填 |滑动结束点 x 坐标|
| y1      | number | 必填 |滑动结束点 y 坐标|
| dur    | number | 可选 |滑动过程耗费的时长,单位毫秒(ms),默认20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>



``` python
#案例

# 导包
from airscript.action import slide

# 从(100,200) 滑动到 (300,400) 滑动时间默认20毫秒
slide(100,200,300,400)

# 从(100,200) 滑动到 (300,400) 滑动时间为3000毫秒
slide(100,200,300,400,3000)

```

## 触摸 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=6" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>

``` python
# 导包
from airscript.action import touch
```

::: warning 触摸提示
一个完整的触摸动作,必须包含三个部分(按下,移动,抬起)
:::




### 触摸 - 按下

<b>touch.down</b>(<font color="#3376d0">x,y,dur</font>)

在屏幕上某坐标 按下

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |滑动起始点 x 坐标|
| y      | number | 必填 |滑动起始点 y 坐标|
| dur    | number | 可选 |滑动过程耗费的时长,单位毫秒(ms),默认20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

### 触摸 - 移动

<b>touch.move</b>(<font color="#3376d0">x,y,dur</font>)

移动到指定坐标.

<font color="#ee3d30">move方法可以在 down 和 up 之间出现多次</font>

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |移动目标点 x 坐标|
| y      | number | 必填 |移动目标点 y 坐标|
| dur    | number | 可选 |移动过程耗费的时长,单位毫秒(ms),默认20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

### 触摸 - 抬起

<b>touch.up</b>(<font color="#3376d0">x,y,dur</font>)

从指定坐标 抬起

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |抬起目标点 x 坐标|
| y      | number | 必填 |抬起目标点 y 坐标|
| dur    | number | 可选 |移动至抬起点过程耗费的时长,单位毫秒(ms),默认20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

### 一个完整的触摸


``` python
#案例

# 导包
from airscript.action import touch

# 从坐标(100,200)的位置按下
touch.down(100,200)
# 按下的同时,移动到坐标(300,300)
touch.move(200,300)
# 按下的同时,再次移动到坐标(400,350),移动用时 1000毫秒
touch.move(400,600,1000)
# 移动至坐标(450,400)位置 抬起
touch.up(450,400)
```



## 手势 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=7" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>

```python
#导入手势包
from airscript.action import gesture
#导入手势辅助包 - 路径
from airscript.action import path
```

模拟复杂的人手操作

如:单指画圆、双指捏和、多指操控等.

### 手势-创建路径

<b>path</b>(<font color="#3376d0">startTime,duration,willContinue</font>)

创建一个新的path路径

路径的规划决定手势如何移动

<font color="#3376d0" size= "2">

| 构造参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| startTime     | number | 可选 | 延迟多久开始绘制路径,单位ms,默认0 |
| duration      | number | 可选 | 路径绘制的时常,单位ms,默认20|
| willContinue  | boolean | 可选 | 在路径结束后,手指是否抬起,默认 ‘false’|


</font>


### 手势-路径方法


path 实现了 [android.graphics.Path](https://developer.android.google.cn/reference/android/graphics/Path?hl=en) 中的大部分方法.


<font color="#3376d0" size= "2">

| 支持的绘制方法如下        | 参数传递参考:[android.graphics.Path](https://developer.android.google.cn/reference/android/graphics/Path?hl=en)  |
| ------------- | ----:|
| moveTo      | rCubicTo |
| lineTo      | rMoveTo |
| quadTo      | reset |
| rCubicTo    | rewind |
| rQuadTo    | addArc |
| addCircle    | addOval |
| addRect    | addRoundRect |
| arcTo    | cubicTo |
| setLastPoint    | rLineTo |
| setFillType    |  |

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

``` python
# 一个简单的 路径规划案例

#导包
from airscript.action import gesture
from airscript.action import path

# 创建一个新的path路径,延迟执行0ms,总时长1000ms
line1 = path(0,1000);

# 移动初始点
line1.moveTo(500,200) 

# 画直线到点
line1.lineTo(500,500)

# 使用二次贝塞尔曲线 从点(500,800) 到 (250,900)
line1.quadTo(500,800,250,900)

```
---

### 手势执行
<b>gesture.perform</b>(<font color="#3376d0">path[],callback</font>)

<font color="#3376d0">路径规划后,必须执行手势才可看到效果</font>

<font color="#3376d0" size="2" >

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| path[]      | path数组 | 必填 |执行的一组路径,当不填写callback参数时候,path格式,可改为多参传递 如(path,path)|
| callback    | class | 可选 |手势执行完成后的回调类,必须存在 <b>onCompleted()</b> 和 <b>onCancelled()</b> 两个回调函数|


</font>



``` python
#案例1:执行一组动作,分别模拟两个手指同时操作

# 导包
from airscript.action import gesture
from airscript.action import path

# 创建一个新的path路径 模拟 手指1
line1 = path();
line1.moveTo(200,200) 
line1.lineTo(200,500)

# 创建另一个新的path路径 模拟 手指2
line2 = path(0,1200);
line2.moveTo(500,200) 
line2.lineTo(500,500)

# 执行 这一组动作
gesture.perform(line1,line2)
```

``` python
#案例2,执行一组动作,分别模拟两个手指同时操作,并监听动作是否执行结束

# 导包
from airscript.action import gesture
from airscript.action import path

# 创建一个新的path路径 模拟 手指1
line1 = path(0,1000);
line1.moveTo(200,200) 
line1.lineTo(200,500)

# 创建另一个新的path路径 模拟 手指2(*第二条路径相对于第一条,会延迟500ms启动)
line2 = path(500,1200);
line2.moveTo(500,200) 
line2.lineTo(500,500)

class listener:
    def onCompleted():
        print("结束了")
    def onCancelled():
        print("被中断取消了")

# 执行 这一组动作
gesture.perform([line1,line2],listener)
```

``` python
#案例3:连续 执行两个Path路径,中途不松手指

# 导包
from airscript.action import gesture
from airscript.action import path

# 创建一个新的path路径 模拟 手指1
line1 = path(0,1000,True);
line1.moveTo(200,200) 
line1.lineTo(200,500)

# 创建另一个新的path路径 模拟 手指2
line2 = path(1000,500);
line2.moveTo(200,500) 
line2.lineTo(500,500)

class listener:
    def onCompleted():
        gesture.perform(line2)
    def onCancelled():
        print("被中断取消了")

gesture.perform([line1],listener)
```
---

## 输入 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=8" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>
``` python
# 导包
from airscript.action import input 
```

<b>input</b>(<font color="#3376d0">msg,Selector...</font>)

在‘文本输入框控件’中输入文本

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:|:----------:|----:|
| msg      | string | 必填 |输入的文本信息|
| Selector...      | Selector 可变参数 | 可选 |控件选择器<br>如果不填写该参数,则会获取当前屏幕上获取焦点的输入框,进行输入.|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>



``` python
#案例1: 在当前获取焦点的,输入框中输入文本

# 导包
from airscript.action import input 

# 输入文本
input("我是自在老师")
```

``` python 
#案例2: 在指定的控件中,输入文本

# 导包
from airscript.node import Selector
from airscript.action import input 

# 控件筛选器 定位 要输入文本的控件
view = Selector().id("com.aojoy.airscript:id/search_bar_text");

# 输入文本信息
input("我是自在老师",view)
```

---

## 按键 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=9" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>

``` python
# 导包
from airscript.action import key
```

模拟部分按键

::: warning 如何模拟键盘按键?
如果您想尝试模拟键盘按键,比如 A,B 等. 请尝试通过 android debug bridge(adb) 来模拟.
:::

<font color="#3376d0" size="2">

| 模拟         | 备注|
| ------------- |----:|
| key.home()      |模拟HOME按键|
| key.back()    | 模拟返回按键|
| key.notifactions()    | 模拟呼出通知栏|
| key.lockscreen()    | 模拟锁屏|
| key.screenshot()    | 模拟截屏|
| key.recents()    | 模拟呼出任务栏|

</font>

``` python
# 导包
from airscript.action import key

# 模拟 home 按键
key.home()

# 模拟 back 按键
key.back()

# 模拟 notifactions 按键
key.notifactions()
```

## 捕获 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=10" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>

``` python
# 导包
from airscript.action import Catch
```

```python
#创建一个捕获对象
Catch()
```

### 捕获点击
<b>Catch()</b><font color="#3376d0">.click()</font>

捕捉用户点击坐标

<font color="#3376d0" size ="2">

| 返回结果       | 备注|
| -------------|----:|
| Point    | 点位对象,可通过.x,.y 来获取xy坐标|

</font>

``` python
#案例1:简单的捕捉点击

# 导包
from airscript.action import Catch

# 捕获用户点击
p =  Catch().click()
# 打印捕获点的x,y坐标
print(p.x,p.y)

```

``` python
#案例2:捕捉用户点击,并配置捕捉界面信息

# 导包
from airscript.action import Catch

# 捕获用户点击,配置页面展示的信息,并闪烁屏幕
p =  Catch().msg("请点击红包位置").shine(True).click()
# 打印捕获点的x,y坐标
print(p.x,p.y)

```
---

### 捕获页面配置-信息
<b>Catch()</b><font color="#3376d0">.msg(str)</font>

设置捕获界面展示的信息

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:|:----------:|----:|
| msg      | string | 必填 |输入的文本信息|


</font>


``` python
#案例

# 导包
from airscript.action import Catch

# 展示界面显示信息‘请点击’,并捕获用户点击
p =  Catch().msg("请点击").click()
# 打印捕获点的x,y坐标
print(p.x,p.y)

```
---

### 捕获页面配置-是否闪屏
<b>Catch()</b><font color="#3376d0">.shine(isShine)</font>

设置捕获界面展示的信息

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:|:----------:|----:|
| isShine      | boolean | 必填 |True:闪屏,False:不闪屏|


</font>


``` python
#案例

# 导包
from airscript.action import Catch

# 展示界面并闪屏提醒,捕获用户点击
p =  Catch().shine(True).click()
# 打印捕获点的x,y坐标
print(p.x,p.y)

```
---

## hid

``` python
# 导包
from airscript.action import hid
```

hid 虚拟外设动作类,此模块可在无障碍模式下使用hid

在使用前请确保 已经绑定设备成功

### 点击
<b>hid</b><font color="#3376d0">.click(x,y,dur)</font>

点击屏幕某个坐标

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |屏幕的x坐标|
| y      | number | 必填 |屏幕的y坐标|
| dur    | number | 可选 |点击屏幕的时长,单位毫秒(ms),默认为 20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

### 滑动

hid.<b>slide</b>(<font color="#3376d0">x,y,x1,y1,dur</font>)

模拟手指滑动

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | number | 必填 |滑动起始点 x 坐标|
| y      | number | 必填 |滑动起始点 y 坐标|
| x1      | number | 必填 |滑动结束点 x 坐标|
| y1      | number | 必填 |滑动结束点 y 坐标|
| dur    | number | 可选 |滑动过程耗费的时长,单位毫秒(ms),默认20ms|

<!-- |     |  |  |[视频教程:<img src="/assets/img/shipin2.png" width="30" height="30" alt="视频教程" style="margin-bottom:-8px" />](http://www.baidu.com)| -->

</font>

### 按键
hid.<b>key</b>(<font color="#3376d0">keycode...</font>)

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| keycode      | string 可变参数 | 必填 | 输入的key值|

</font>

#### key值

- **类型**: 

     - 字母键:
              - `a` - A键
              - `b` - B键
              - `c` - C键
                  ...
              - `z` - Z键

    - 数字键:
              - `1` - 数字1键
              - `2` - 数字2键
                  ...
              - `0` - 数字0键
    - 功能键:
              - `enter` - 回车键
              - `esc` - ESC键
              - `backspace` - 退格键
              - `tab` - Tab键
              - `space` - 空格键
              - `capsLock` - 大写锁定键
              - `f1` - F1功能键
                  ...
              - `f12` - F12功能键
              - `printScreen` - 打印屏幕键
              - `scrollLock` - 滚动锁定键
              - `pause` - 暂停键
    - 导航键:
              - `insert` - 插入键
              - `home` - Home键
              - `pageUp` - 上翻页键
              - `delete` - 删除键
              - `end` - End键
              - `pageDown` - 下翻页键
              - `rightArrow` - 右箭头键
              - `leftArrow` - 左箭头键
              - `downArrow` - 下箭头键
              - `upArrow` - 上箭头键
    - 符号键:
              - `minus` - 减号键
              - `equal` - 等号键
              - `leftBracket` - 左方括号键
              - `rightBracket` - 右方括号键
              - `backslash` - 反斜杠键
              - `semicolon` - 分号键
              - `quote` - 单引号键
              - `grave` - 重音符键
              - `comma` - 逗号键
              - `period` - 句号键
              - `slash` - 斜杠键
    - 小键盘:
              - `numLock` - 小键盘锁定键
              - `keypadDivide` - 小键盘除号键
              - `keypadMultiply` - 小键盘乘号键
              - `keypadSubtract` - 小键盘减号键
              - `keypadAdd` - 小键盘加号键
              - `keypadEnter` - 小键盘回车键
              - `keypad1` - 小键盘1键
                  ...
              - `keypad9` - 小键盘9键
              - `keypad0` - 小键盘0键
              - `keypadDecimal` - 小键盘小数点键
          
      - **描述**: 要发送的按键值。
    - `Shift`: 
      - **类型**: Boolean | undefined
      - **描述**: Shift键的状态，表示是否按下。不传默认为 false。
    - `Ctrl`: 
      - **类型**: Boolean | undefined
      - **描述**: Ctrl键的状态，表示是否按下。不传默认为 false。
    - `Alt`: 
      - **类型**: Boolean | undefined
      - **描述**: Alt键的状态，表示是否按下。不传默认为 false。
    - `Command`: 
      - **类型**: Boolean | undefined
      - **描述**: Command键的状态，表示是否按下。不传默认为 false。
    - `id`: 
      - **类型**: String
      - **描述**: 要操作的设备的唯一标识符。
