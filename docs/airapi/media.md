---

title: 媒体
tagline: Python驱动的自动化小程序文档
# sidebar: auto
# displayAllHeaders: true
# collapsable: false
# footer: MIT Licensed | Copyright © 2018-present Evan You

---


# 媒体

``` python
# 包
from airscript.system import Media
```

## 音量调节
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

## 语音朗读
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

## 播放音频

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

## 录制音频
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


## 设备震动

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

## 发送邮件

```python 
# 导入 smtp邮件包
import smtplib

```

在这里我们使用 Python库 smtplib 实现邮件的发送