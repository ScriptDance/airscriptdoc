# Python库拓展

::: warning Python包拓展需要重新打包AirScript
为何不能动态拓展?

Android 7.0开始对动态引入 动态链接库做了限制,因此我们只能重新打包把需要的动态链接库内置进AirscriptApp中

:::


AirScript App 中可以通过Pip 进行Python包的拓展




## 查找包含指定Python 包的 AirScript

如果您需要下载一个 包含指定Python包的 Airscript App,您可以前往[官网查询](http://www.airscript.cn/aspip.html#)


如想使用在AirScript 中使用 tensorflow ,您可以搜索 tensorflow 如果存在,并且Airscript 版本合适, 可直接下载安装.

如果并没有合适的条目,您需要通过Pip配置 编译出一个合适的AirScript

<img src ="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc_pip_search.jpg">


## Python包拓展 Pip

pip 是一个现代的，通用的 Python 包管理工具。提供了对 Python 包的查找、下载、安装、卸载的功能

AirScript 中要通过Pip 管理Python包,需要做一些配置.

 - 1. 登录 [开发者后台](http://py.airscript.cn/)

 - 2. 点击Pip 应用管理-> [Pip拓展](http://py.airscript.cn/admin/pip/list)

 - 3. 点击右上角 新增

 - 4. 编辑新增

 - 5. 提交后,等待编译完成,即可下载安装使用

 <img src = "https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc_pip_create.jpg">

### Pip 配置

Pip 的 模版

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



- pip install

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

- pip options

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