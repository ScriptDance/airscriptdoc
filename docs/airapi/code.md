---
title: 语言
---

# 语言

Airscript 采用Python 3.8 驱动编程

因此你需要掌握一些Python的基础语法.


## <img src="/assets/img/ico_python.png" style="width:25px"/> Python


Airscript 内部集成了Python 的运行环境.



[Python官方视频教程](https://www.bilibili.com/video/BV1WX4y1s7Ab)



### 标准库

由于Android 平台的迁移,大部分Python标准库是支持的.

[Python 标准库](https://docs.python.org/zh-cn/3.8/library/)

 ```
以下模块不受支持，因为它们需要Android上没有的操作系统功能：

- crypt
- grp
- nis
- spwd
 ```

```

以下模块不受支持，因为它们需要我们目前不包括的库：

- curses
- dbm.gnu
- dbm.ndbm
- readline
- tkinter
- turtle

```

### import




::: warning 不支持 import .*
由于import 经过重载更改,因此 .* 不在支持.
:::

::: tip import 可以导入哪些库
标准库

工程目录下的库 (工程目录下的py文件)

拓展库 (通过pip install 安装的库)

java或android库( AirScript把java和android api 封装成了内置python库)

:::


下面是一些案例

- 导入本工程下的python文件

这是一个as工程结构,我们来看不同层级,是如何导入文件的
``` 
.demo "工程名称"
├─ __init__.py "小程序启动入口"
├─ main.py
├─ app 
│  └─ home 
│     └─ banner.py 
└─ vip 
   └─ login.py
```

```python
# 在__init__.py 中导入同级的 main.py
from . import main
```

```python
# 在__init__.py 中导入vip/login.py
from .vip import login
```

```python
# 在__init__.py 中导入app/home/banner.py
from .app.home import banner
```

```python
# 在banner.py 中导入login.py
from airscript.system import R
__import__(R(__file__).name+".vip.login")
```



## <img src="/assets/img/ico_pypi.png" style="width:25px"/> Python包拓展

如果Airscript app中内置的python包无法满足你的开发需求.

开发者可通过pip配置,将需要的第三方python包编译进Airscript app中.

::: warning Python包拓展需要重新打包AirScript
为何不能动态拓展?

Android 7.0开始对动态引入 动态链接库做了限制,因此我们只能重新打包把需要的动态链接库内置进AirscriptApp中

:::


### Pip

pip 是一个通用的 Python 包管理工具。提供了对 Python 包的查找、下载、安装、卸载的功能

Airscript 中也需要通过Pip配置 安装Python包


### Pip 模版

模版中的name属性,不允许修改

通过Pip模版的修改,就可以将Python包 配置进 AirScript 中了.

- 这是默认的模版
 ```json
 {
	"name": "__name_zwf__",
	"pip": {
		"options": ["--timeout", "1000"],
		"install": [
			"opencv-contrib-python==4.1.2.30",
			"requests",
			"pymysql",
			"numpy"
		]
	}
}
 ```

 我们只需要 按照上方的json 格式 去拓展我们想要的Python库即可.

 --- 

###  pip intall 安装

比如我们想要拓展 tensorflow python 包,我们可以这样写


```json
 {
	"name": "__name_zwf__",
	"pip": {
		"options": ["--timeout", "1000"],
		"install": [
			"opencv-contrib-python==4.1.2.30",
			"requests",
			"pymysql",
			"numpy",
            "tensorflow"
		]
	}
}
```

### pip options 参数

比如我们要加入 额外的包索引地址 ‘https://example.com/private/repository’,我们可以这样配置

```json
{
	"name": "__name_zwf__",
	"pip": {
		"options": [ "--timeout", "1000",
                     "--extra-index-url","https://example.com/private/repository"
                   ],
		"install": [
			"opencv-contrib-python==4.1.2.30",
			"requests",
			"pymysql",
			"numpy",
            "tensorflow"
		]
	}
}
```

### Pip 安装编译

AirScript 中要通过Pip 管理Python包,需要做一些配置.

 - 1. 登录 [开发者后台](http://py.airscript.cn/)

 - 2. 点击Pip 应用管理-> [Pip拓展](http://py.airscript.cn/admin/pip/list)

 - 3. 点击右上角 新增

 - 4. 编辑新增

 - 5. 提交后,等待编译完成,即可下载安装使用

 <img src = "https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc_pip_create.jpg">

### 查找已编译的App

如果您需要下载一个 包含指定Python包的 Airscript App,您可以前往[官网查询](http://www.airscript.cn/aspip.html#)


如想使用在AirScript 中使用 tensorflow ,您可以搜索 tensorflow 如果存在,并且Airscript 版本合适, 可直接下载安装.

如果并没有合适的条目,您需要通过Pip配置 编译出一个合适的AirScript

<img src ="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc_pip_search.jpg">

## Python导入AndroidApi

AirScript 的强大在于可以与AndroidSDK 混编

在AirScript 可以像引入Python包那样,引入Java Class

###  导入java 类

- 利用jclass 导入 java类
```python
from java import jclass
# 通过 java Claendar获取当前时间的毫秒值
Calendar = jclass("java.util.Calendar")
c = Calendar.getInstance()
t = c.getTimeInMillis()
print(t)
```

- 例如: 在Python中使用 java 的 Map
```python
from java.util import HashMap

map = HashMap()
map.put("1","自在")
map.put("2",True)

print(map.get("1"))

```


### 实现 java 接口
- 例如:用动态代理,来使用java 多线程Thread

```python
from java.lang import Runnable, Thread
from java import dynamic_proxy
class R(dynamic_proxy(Runnable)):
   def __init__(self, name):
      super().__init__()
      self.name = name
   def run(self):
      print("Running " + self.name)

r = R("hello")
t = Thread(r)
t.start()

```

