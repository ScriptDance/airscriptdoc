---
title: 意图
---

# 意图

意图是Android 四大组件(Activity,Service,content provider,broadcast receiver)的核心

AirSctipt中我们提供了一个继承 android.content.Intent 的意图.

在拓展Android意图的同时,又继承了android.content.Intent 的方法,我们可以利用 Python 与 Android混编,编写各种意图功能.

## 启动APP

```python
# 导包
from airscript.intent import Intent 
```

<b>Intent</b><font color="#3376d0">.run(tag)</font>

<font color="#3376d0">启动APP</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| tag      | string | 必填 |启动的应用名称,或包名<br> 注意:包名启动快于应用名称启动<br>包名称可以通过[APP-开发者-查包工具]获得|

</font>

```python
# 案例1:使用应用名称启动APP,推荐萌新使用
#导包
from airscript.intent import Intent 

# 根据应用名称启动. PS:启动略慢于包名启动
Intent.run("高德地图")
```

```python
# 案例2:通过包名称,启动APP,推荐高手使用
#导包
from airscript.intent import Intent 

# 根据包名启动,推荐使用
Intent.run("com.autonavi.minimap")
```


## 浏览器打开网页

```python
# 导包
from airscript.intent import Intent 
```

<b>Intent</b><font color="#3376d0">.browser(tag)</font>

<font color="#3376d0">用浏览器打开网页</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| tag      | string | 必填 |启动的网址 如:(http://www.airscript.com)|

</font>

```python
# 案例:打开AirSctipt 官网
#导包
from airscript.intent import Intent 

# 输入网址,用浏览器打开
Intent.browser("http://www.airscript.cn")
```

## 安卓 Intent 

```python
# 导包
from airscript.intent import Intent 
```

此Intent 继承自 android.content.Intent

接下来我们将用混编完成意图代码编写

### android.content.Intent

详细属性方法请查阅[Android Intent](https://developer.android.google.cn/guide/components/intents-common?hl=zh_cn#java)

也可以百度Android Intent 相关用法.

### 案例:发短信

```python
#导包
from airscript.intent import Intent 
from airscript.system import R

it =  Intent(Intent.ACTION_VIEW) 
it.putExtra('sms_body', '你好这是短信内容');
it.setType('vnd.android-dir/mms-sms');

# 部分Activity 启动需要一个新的TASK ,通常都固定写这一行代码
it.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
R.context().startActivity(it);


```

### 案例:抖音直播间跳转

```python
# 通过 房间ID 跳转抖音直播间

# 导包
from airscript.intent import Intent 
from airscript.system import R
from android.net import Uri

roomid = '6901450157649300232'
uri = Uri.parse("snssdk1128://live?room_id="+roomid);
it =  Intent(Intent.ACTION_VIEW,uri) 
it.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
R.context().startActivity(it);

```

### 案例:跳转应用详情

```python

from airscript.intent import Intent 
from airscript.system import R
from android.net import Uri
from android.provider import Settings

# 根据需求改变包名,即可跳转,跳转后,可点击停止程序等等.
intent = Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS).setData(Uri.fromParts("package", "com.aojoy.airscript", None))
intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
R.context().startActivity(intent);

```