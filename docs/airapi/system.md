---
title: 系统
---


``` python
# 包
from airscript.system
```

# 系统

<!-- ## 打印

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
 -->


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

---

### 退出

R<font color="#3376d0">.exit()</font>

<font color="#3376d0">终止当前小程序</font>

```python
#导包
from airscript.system import R

R.exit()

```

### 重启

R<font color="#3376d0">.reboot()</font>

<font color="#3376d0">重启小程序</font>

```python
#导包
from airscript.system import R

R.reboot()

```

## 设备信息

``` python
# 包
from airscript.system import Device
```

获取运行设备的基础信息

### id

Device<font color="#3376d0">.id()</font>

<font color="#3376d0">设备唯一id,该方法会获取deviceID,如果返回空.我们还会获取Android ID进行返回.</font>

| 返回结果        |备注|
| -------------|----:|
| string    | 设备出厂序列号,每一台手机的序列号都不一样 |

```python
#导包
from airscript.system import Device

# 获取设备唯一ID
id = Device.id()

print(id)

```

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



