
# 编辑器拓展接口

开放接口 是AirScript APP 启动后 对外开放的接口

通过对外开放的接口,可以实现工程的管理,工程的运行停止.

可以实现第三方编辑器的插件开发

## 接口规范

### host地址

host地址 为请求开放接口 的 基址.

它是一个http地址,有了它后才可以定位请求哪台机器的开放接口.

#### 如何获得host地址?

- 1. 首先需要您在手机等移动设备上安装 Airscript app

- 2. host地址获取: Airscript App主页 - 开发者 - (局域网ip地址,或公网ip地址)

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_host_des.jpg" style="width:300px"/>

- 3. 如上图中: 

局域网ip:http://192.168.31.58:9096 

公网ip:http://ide.airscript.cn/1/2/9096/

都可作为Host 地址,来请求Airscript 开放接口

### 请求方式

Post/Get

开放接口中 Post 或 Get 形式都是支持的.

### 参数要求

Get,Post 形式中如出现特殊字符,或中文等情况.

请务必进行urlencode 处理.

### 数据返回

所有接口的返回数据格式均为json

- 结构如下:

```json
{
	"code": 1,
	"msg": "success",
    "data": []/{}
}

```

- 返回值说明

| 返回值        | 必须  | 备注|
| -------------| -----:|----:|
| code      | 必有 |接口成功返回1,其他值为失败|
| msg      | 必有 |接口的处理结果信息|
| data      | 必有 |每个接口的回执数据,有可能是一个class,或者是一个数组|



## 工程管理

工程类的开放接口 ,可以实现工程的管理.

如通过接口,创建,删除,重命名,获取已创建的工程列表等功能.


### 创建

创建一个新的工程

- 接口地址

> [host](#host地址)/api/model/create

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| name      | 必填 |工程的名称|

- 返回结果

```json
{
	"code": 1,
	"msg": "success"
}
```


### 删除
删除一个Airscript工程

- 接口地址

> [host](#host地址)/api/model/remove

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| name      | 必填 |要删除的工程名|

- 返回结果

```json
{
	"code": 1,
	"msg": "success"
}
```


### 重命名
工程重命名

- 接口地址

> [host](#host地址)/api/model/rename

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| name      | 必填 |目标工程名称|
| rename      | 必填 |要替换的名称|

- 返回结果

```json
{
	"code": 1,
	"msg": "success"
}
```


### 工程列表
获取所有已创建的工程

- 接口地址

> [host](#host地址)/api/model/getlist

- 参数

无

- 返回结果

```json
{
	"code": 1,
	"data": [{
		"childs": [],
		"ico": "/storage/emulated/0/airscript/model/888/res/img/logo.png",
		"isFile": false,
		"lastModified": 1685325500000,
		"lastModified_format": "2023-05-29 09:58:20",
		"length": 3488,
		"length_format": "3.406KB",
		"name": "888",
		"path": "/storage/emulated/0/airscript/model/888"
	}, {
		"childs": [],
		"ico": "/storage/emulated/0/airscript/model/测试log/res/img/logo.png",
		"isFile": false,
		"lastModified": 1685287188000,
		"lastModified_format": "2023-05-28 23:19:48",
		"length": 3488,
		"length_format": "3.406KB",
		"name": "测试log",
		"path": "/storage/emulated/0/airscript/model/测试log"
	}],
	"msg": "success"
}
```

- 返回值说明

| 返回值        | 必须  | 备注|
| -------------| -----:|----:|
| ico      | 必有 |工程的logo|
| lastModified      | 必有 |最后一次更新的时间|
| lastModified_format      | 必有 |格式化后的最后一次更新时间|
| length      | 必有 |工程的大小,单位字节|
| length_format      | 必有 |格式化后的工程大小|
| name      | 必有 |工程的名称|
| path      | 必有 |工程的文件路径|


## 小程序

小程序接口,可以控制本地小程序的启停,打包,获取小程序源码文件列表 等操作

### 启动
启动一个本地小程序

- 接口地址

> [host](#host地址)/api/model/run

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| name      | 必填 |本地小程序的名称|



### 停止
停止当前运行的小程序

- 接口地址

> [host](#host地址)/api/model/stop

- 参数

无


### 小程序文件信息
获取小程序的详细信息,返回文件列表等信息

- 接口地址

> [host](#host地址)/api/model/get

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| name      | 必填 |本地小程序名称|

- 返回结果

```json
{
	"code": 1,
	"data": {
		"childs": [{
			"childs": [{
				"childs": [{
					"childs": [],
					"isFile": true,
					"lastModified": 1682498798000,
					"lastModified_format": "2023-04-26 16:46:38",
					"length": 2424,
					"length_format": "2.367KB",
					"name": "xcx.png",
					"path": "/storage/emulated/0/airscript/model/a/res/img/xcx.png"
				}],
				"isFile": false,
				"lastModified": 1682498798000,
				"lastModified_format": "2023-04-26 16:46:38",
				"length": 3488,
				"length_format": "3.406KB",
				"name": "img",
				"path": "/storage/emulated/0/airscript/model/a/res/img"
			}, {
				"childs": [],
				"isFile": false,
				"lastModified": 1679888239000,
				"lastModified_format": "2023-03-27 11:37:19",
				"length": 3488,
				"length_format": "3.406KB",
				"name": "layout",
				"path": "/storage/emulated/0/airscript/model/a/res/layout"
			}],
			"isFile": false,
			"lastModified": 1679888239000,
			"lastModified_format": "2023-03-27 11:37:19",
			"length": 3488,
			"length_format": "3.406KB",
			"name": "res",
			"path": "/storage/emulated/0/airscript/model/a/res"
		}, {
			"childs": [],
			"isFile": true,
			"lastModified": 1685328504000,
			"lastModified_format": "2023-05-29 10:48:24",
			"length": 3,
			"length_format": "3.000B",
			"name": "__init__.py",
			"path": "/storage/emulated/0/airscript/model/a/__init__.py"
		}],
		"isFile": false,
		"lastModified": 1682500673000,
		"lastModified_format": "2023-04-26 17:17:53",
		"length": 3488,
		"length_format": "3.406KB",
		"name": "a",
		"path": "/storage/emulated/0/airscript/model/a"
	},
	"msg": "success"
}
```

- 返回值说明

| 返回值        | 必须  | 备注|
| -------------| -----:|----:|
| isFile      | 必有 |是否是文件,false为文件夹,true为文件|
| lastModified      | 必有 |最后一次更新的时间|
| lastModified_format      | 必有 |格式化后的最后一次更新时间|
| length      | 必有 |工程的大小,单位字节|
| length_format      | 必有 |格式化后的工程大小|
| name      | 必有 |文件的名称|
| path      | 必有 |文件路径|
| childs      | 必有 |如果包含子文件<br/>则会出现数组数据,每一条数据就是一个子文件的详细描述|


### 导出小程序

导出小程序包

- 接口地址

> [host](#host地址)/api/model/export

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| name      | 必填 |本地小程序的名称|

- 返回

数据包文件

### 获取已安装的Python包

查询已安装的Python包

- 接口地址

> [host](#host地址)/api/model/pip

- 参数

无

- 返回

```python
{
	"code": 1,
	"data": {
		"install": ["opencv-contrib-python\u003d\u003d4.1.2.30", "requests", "pymysql", "numpy"],
		"options": ["--timeout", "1000"]
	},
	"msg": "success"
}
```

- 返回值说明

| 返回值        | 必须  | 备注|
| -------------| -----:|----:|
| install      | 必有 |已安装python包的 数组列表|
| options      | 必有 |pip install 的额外参数配置|


### 日志监听

Airscript 内置了



## 文件管理

文件管理接口,可以删除,获取,重命名,上传某个文件

### 创建

创建文件或文件夹

- 接口地址

> [host](#host地址)/api/file/create

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| path      | 必填 |文件夹的路径|
| name      | 必填 |文件的名称|
| type      | 必填 |文件类型:<br>创建文件 type=file <br> 创建文件夹type=dir|



### 删除

删除制定文件

- 接口地址

> [host](#host地址)/api/file/remove

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| path      | 必填 |要删除的文件全路径|




### 获取文件内容
获取文件内容

- 接口地址

> [host](#host地址)/api/file/get

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| path      | 必填 |文件的路径|

- 返回结果

文件内容

### 存储文件

存储内容到制定文件

- 接口地址

> [host](#host地址)/api/file/save

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| path      | 必填 |文件的路径|
| content      | 必填 |文件的内容|


### 重命名

指定文件重命名

- 接口地址

> [host](#host地址)/api/file/rename

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| path      | 必填 |要重命名的文件全路径|
| name      | 必填 |重命名名称|


### 上传文件或小程序

上传文件,或小程序

- 接口地址

> [host](#host地址)/api/file/rename

- 参数

| 参数        | 必须  | 备注|
| -------------| -----:|----:|
| body data      | 必填 |需要将文件信息传入body 中的 data字段中|
| path      | 必填 |上传的文件路径|
| zip      | 选填 |zip= 1<br> 传入此参数,系统默认上传的是一个as小程序包,会自动解压至小程序目录中|

