---
title: 系统
---


``` python
# 包
from airscript.system
```

# 系统

## 打印

print(msg...)

打印函数 延用 Python 基础打印函数 print

### 打印回调
``` python
# 包
from airscript.system.out import Print
```
- 静态方法

Print<font color="#3376d0">.listen(py function)</font>

当调用 print 后,回调函数回返回print日志的json字符串

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| py function      | python函数 | 必填 | python 函数 必须定义一个形参来接收数据 |

``` python
def printListener(obj):
    #这是print 的回调函数
    #obj 是返回的json数据对象.

Print.listen(printListener)
```



## 环境与资源

R

``` python
# 包
from airscript.system import R
```

当前工程环境

### SD卡路径
- 静态方法



R<font color="#3376d0">.sd(childpath)</font>

获取SD卡路径,在Android系统中,我们对SD具有访问权限.大多数时候,会把文件存入SD卡

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| childpath      | string | 选填 | sd卡下的子目录.默认返回SD卡根目录 |

</font>

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| string    | sd卡文件的绝对路径 |

</font>


``` python
from airscript.system import R

#获取SD卡根路径 绝对路径
path = R.sd()

print(path)

#获取SD/Airscript 绝对路径
path = R.sd("/Airscript")

print(path)
```

### context 
- 静态方法

R<font color="#3376d0">.context()</font>

获取Android context 上下文

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| Context    | 在Android 环境中,很多方法需要使用 context |

</font>

--- 

### 工程目录
- R成员方法

R(__file__)<font color="#3376d0">.root(childpath)</font>

<font color="#3376d0">获取工程根目录(__init__.py,__init__.pyc 文件所存在的位置)</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| childpath      | string | 选填 | 相对于根目录的子目录,默认,返回根目录|

</font>

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| string    | 绝对路径 |

</font>


``` python
from airscript.system import R

#获取当前工程根目录绝对路径
path = R(__file__).root()
print(path)

#获取当前工程下的__init__.py 的绝对路径
path = R(__file__).root("__init__.py")
print(path)
```


### res目录
- R成员方法

R(__file__)<font color="#3376d0">.res(childpath)</font>

<font color="#3376d0">获取res资源目录路径</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| childpath      | string | 选填 | 相对于res的子目录,默认,返回资源目录|

</font>

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| string    | 绝对路径 |

</font>


``` python
#导包
from airscript.system import R

#获取资源目录绝对路径
path = R(__file__).res()
print(path)

#获取资源目录下/img/a.png 的绝对路径
path = R(__file__).res("/img/a.png")
print(path)
```


## 设备信息

``` python
# 包
from airscript.system import Device
```

获取运行设备的基础信息

### 屏幕信息

Device<font color="#3376d0">.display()</font>

<font color="#3376d0">获取屏显信息</font>

| 返回结果       |属性 |备注|
| -------------|----|----:|
| DisplayMetrics    || 屏幕信息 |
|     |heightPixels |屏幕的高度,单位像素 |
|     |widthPixels |屏幕的宽度,单位像素 |
|     |density |屏幕密度 |

```python
#导包
from airscript.system import Device

# 获取屏幕信息对象
display = Device.display()

# 获取屏幕高度(像素)
print(display.heightPixels)
# 获取屏幕宽度(像素)
print(display.widthPixels)

```

### 名称

Device<font color="#3376d0">.name()</font>

<font color="#3376d0">设备名称(开发者,设备名称中显示的信息)</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 屏幕信息 |

```python
#导包
from airscript.system import Device

# 获取设备名称
name = Device.name()

print(name)

```

### 品牌

Device<font color="#3376d0">.brand()</font>

<font color="#3376d0">设备品牌</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 设备信息 |

```python
#导包
from airscript.system import Device

#设备品牌
brand =  Device.brand()
print(brand)

```

### 型号

Device<font color="#3376d0">.model()</font>

<font color="#3376d0">设备型号</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 设备信息 |

```python
#导包
from airscript.system import Device

#获取设备型号
model =  Device.model()
print(model)

```

### android版本

Device<font color="#3376d0">.sdk()</font>

<font color="#3376d0">当前设备的Android版本</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 设备信息 |

```python
#导包
from airscript.system import Device

#获取设备android版本
sdk =  Device.sdk()
print(sdk)

```

### 设备版本

Device<font color="#3376d0">.version()</font>

<font color="#3376d0">当前设备版本</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 设备信息 |

```python
#导包
from airscript.system import Device

#获取设备版本
version =  Device.version()
print(version)

```

### ip

Device<font color="#3376d0">.ip()</font>

<font color="#3376d0">当前设备ip地址</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 设备信息 |

```python
#导包
from airscript.system import Device

#获取设备ip
ip =  Device.ip()
print(ip)

```

### 当前运行信息
Device<font color="#3376d0">.currentAppInfo()</font>

<font color="#3376d0">获取设备当前运行的App信息</font>

| 返回结果        |备注|
| -------------|----:|
| AppInfo    | 该对象包含三个属性:<br/>name:app的名称<br/>packageName:app的包名<br/>activity:当前app的activity |

```python
#导包
from airscript.system import Device

info = Device.currentAppInfo()

# 打印,当前运行APP的名称
print(info.name)
# 打印,当前运行APP的包名
print(info.packageName)
# 打印,当前运行APP的页面名称
print(info.activity)

```



## 多媒体

``` python
# 包
from airscript.system import Media
```

### 音量调节
Media<font color="#3376d0">.volume(percent,type)</font>
<font color="#3376d0">调节音量大小(1-100)</font>
| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| percent      | int | 必填 | 音量大小 1-100之间|
| type      | int | 可选 | 音量类型,默认为3,见下表|

- 什么是音量类型?

在Android 系统中,包含了很多音量类型,如 音乐,系统通知,闹钟,电话等等.不同的类型,都有自己的音量

该参数来自 android.media.AudioManager

| 音量类型        | 备注|
| ------------- |----|
| 音乐回放即媒体音量      |3|
| 窗口顶部状态栏Notification      |5|
| 警告      |4|
| 铃声      |2|
| 系统      |1|
| 通话      |0|

```python
# 导包
from airscript.system import Media

# 设置音乐媒体音量 为80%
Media.volume(80)

```

```python
# 导包
from airscript.system import Media

# 设置童话音量为 60%
Media.volume(60,0)

```

### 语音朗读
Media<font color="#3376d0">.talk(text)</font>

<font color="#3376d0">将文本用语音朗读出来</font>

::: warning 部分设备不支持
部分设备缺少语音库,因此不支持,如(雷电模拟器)
:::



| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| text      | string | 必填 | 要朗读的文本|

```python
#导包
from airscript.system import Media

# 文本转语音朗读出来
Media.talk('自在老师你好')

```

### 播放音频

Media<font color="#3376d0">.play(path,callback)</font>

<font color="#3376d0">播放音频文件</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| path      | string | 必填 | 要播放的音频文件|
| callback  | class | 可选 | 一个回调对象<br> 回调对象格式见案例|

</font>

```python
# 导包
from airscript.system import Media
from airscript.system import R 

# 播放一个音频
Media.play(R(__file__).res("/media/y1468.wav"))

```

```python
# 播放音频回调案例
#导包
from airscript.system import Media
from airscript.system import R 

class listener:
    def prepare(self,player):
        # 获取音频时长
        dur = player.getDuration()
        print(dur)
        print('准备完毕')
        # 带监听器,我们需要调用start方法
        player.start()

    def completion(self):
        print('播放完毕')

Media.play(R(__file__).res("/media/y1468.wav"),listener())

```

### 录制音频
Media<font color="#3376d0">.recode(path,time)</font>

<font color="#3376d0">获取录制音频对象</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| path      | string | 必填 | 录制音频的文件放置路径,如果文件不村子啊,会自动创建|
| time  | class | 可选 | 录制音频的时长,如果不填写.则直到stop调用后才停止|

</font>

该方法会返回一个 MediaRecoder java对象. 

我们可以调用该对象的方法,控制开始录音,结束录音,设置录音时长,设置录音文件最大长度 等..

下面是该对象的常用方法:

<font color="#3376d0">

| 常用方法        | 参数             | 备注|
| ------------- |:-------------:| -----:|:----|
| prepare()      | -  | 再设置好所有参数后,调用该方法.|
| start()  |  - | 开始录制音频 |
| stop()  |  - | 结束录制音频 |

更多方法请参阅 android.media.MediaRecorder 使用相关文档.


</font>

```python
# 案例: 录制音频,并在3秒后调用stop停止
from airscript.system import Media
import time
m = Media.recode("/sdcard/1.acc")

# 开始录音
m.start(); 

# 睡眠3秒后 停止录音
time.sleep(3)
m.stop();

```


### 设备震动

Media<font color="#3376d0">.vibrate(time)</font>

<font color="#3376d0">设备震动一段时间</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| time      | string | 必填 | 震动的时长|

</font>

```python
# 导包
from airscript.system import Media

# 震动2秒
Media.vibrate(2000)

```

### 发送邮件

```python 
# 导入 smtp邮件包
import smtplib

```

在这里我们使用 Python库 smtplib 实现邮件的发送

## 剪贴板
```python
# 导包
from airscript.system import Clipboard
```

可以通过剪贴板,存入数据,与读取数据.

### 存入

Clipboard<font color="#3376d0">.put(msg)</font>

<font color="#3376d0">将数据存入剪贴板</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| msg      | string | 必填 | 存入剪贴板的数据|

</font>

```python
# 导包
from airscript.system import Clipboard

# 存入剪贴板
Clipboard.put("自在老师");

```

### 读取

Clipboard<font color="#3376d0">.get()</font>

<font color="#3376d0">读取剪贴板数据</font>


```python
# 导包
from airscript.system import Clipboard

# 从剪贴板读取数据
msg = Clipboard.get();

print(msg)

```

## 云控消息


云控消息通道

当使用官方云控发送自定义消息时,该消息通道回收到通知


### 使用须知

::: tip 该方法需配合云控接口来使用
- 云控接口发送自定义消息,小程序里接收相关消息

如果您想建立双向通道,请使用websocket-client 连接 您自己的 ws服务器
:::

### APP消息接收

``` python
# 导入消息通道
from airscript.system import Channel
```

Channel<font color="#3376d0">(pyfunction)</font>

<font color="#3376d0">建立一个云控自定义 消息监听</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| pyfunction      | python 函数 | 必填 | 需要一个形式参数,作为消息回调|

</font>

```python
# 导入消息通道
from airscript.system import Channel

# 创建一个Python函数,作为消息通道回调
def airws(msg):
    print(msg)

# 建立消息回调通道
Channel(airws)
```

