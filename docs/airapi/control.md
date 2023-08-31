

# 云控

云端控制,可满足企业对设备的批量管理

如:批量启动小程序,批量停止,自定义指令等.

## http 对接

- 什么是Http方式对接?

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_control_web.jpg">



AirScript App 启动后内置了websocket通道,并主动连接了 AirScript 服务器.

服务器开放了Http接口,通过参数,发送消息给指定的Websocket 通道

这样就形成了 http方式 传递消息给设备.

### App连接云控

将设备连接至AirScript 云控服务器.

- 如何连接?

- 1. 在首页,点击第4个状态按钮,即可打开云控连接弹窗.
- 2. 输入AirScript 开发者账号,点击连接即可.

如图所示:


<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_control_app_click.jpg" style="width:200px">


### token获取

我们可以通过开发者账号与密码获取到token值 [前去注册开发者账号](http://py.airscript.cn/admin).

所有接口访问都需要Token值,传入header 中.



- 请求地址:

``` python
http://py.airscript.cn/api/v1/devLogin
```

- 参数:

| 参数        | 必须  | 备注|
| ------------- |:-----:|----:|
| name      | 必填 |开发者账号|
| pwd      | 必填 |开发者账号密码|

- 返回结果:

```json
{
    "code": 1,
    "msg": "ok",
    "data": {
        "token": "07ec7e2261dc5c4dc************",
        "name": "游自在",
        "mobile": "开发者4",
        "is_vip": 1,
        "vip_expired": "2100-01-01 00:00:00",
        "vipId": 0,
        "vipName": "",
        "from": 1,
        "is_ad": 1,
        "applyList": []
    }
}
```

返回值中的 data.token 就是我们要获取的 token值


### 在线设备列表

获取所有在线设备

- 请求地址:

```python
http://py.airscript.cn/api/v1/getDeviceList
```

- Header参数: 

| Header 参数        | 必须  | 备注|
| ------------- |:-----:|----:|
| token      | 必填 | 通过 开发者账号与密码获取的值,请见接口[token获取](#token获取)|


### 发送指令

通过发送指令,可通知设备启动,停止,或自定义事件.

- 请求地址:

```python
http://py.airscript.cn/api/v1/con/sendMsg
```
- Header参数: 

| Header 参数        | 必须  | 备注|
| ------------- |:-----:|----:|
| token      | 必填 | 通过 开发者账号与密码获取的值,请见接口[token获取](#token获取)|

- body 参数:

在这里我们需要 传递 body参数 以raw json 格式传递.

```json
{
	"path": "start",
	"deviceIdList": ["1111", "2222"],
	"params": {
		"aaa": "111",
		"bbb": "222"
	}
}
```

- json属性解释: 

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| path      | string | 必填 |命令标识,可自定义,注意不要和系统保留path重复.|
| deviceIdList      | string数组 | 必填 |当为空数组:发给所有设备<br>非空数组: 发给指定设备|
| params      | 对象参数 | 必填 |可自定义参数,根据需求自行拓展|

- 返回值:

```python
{
    "code": 1,
    "msg": "ok"
}
```

### 案例:运行小程序

- 请求地址:
```python
http://py.airscript.cn/api/v1/con/sendMsg
```

- header参数:
```http
token: ******* 通过账号密码获取的值
```
- body raw json 参数

该参数中的 scriptid 为 开发者后台上传小程序的id

```json
{
	"path": "/device/start",
	"deviceIdList": [],
	"params": {
		"scriptid": "19"
	}
}
```

### 案例:停止小程序

- 请求地址:
```python
http://py.airscript.cn/api/v1/con/sendMsg
```

- header参数:
```http
token: ******* 通过账号密码获取的值
```
- body raw json 参数

```json
{
	"path": "/device/stop",
	"deviceIdList": [],
	"params": {}
}
```

### 自定义指令

- 什么是自定义指令?

我们可以随意定义 path 和 params 参数,这样就形成了一条自定义指令.

- 自定义指令如何在小程序里接收?

小程序中写入代码,监听通道消息.

```python
from airscript.system import Channel
def a(m):
    print(m)

Channel(a)
```

- 发送自定义消息
我们用 PostMan 模拟 发送指令
<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_air_ws_send_demo.jpg">

---

### 自定义指令接收

接着我们在编辑器命令行查看,已经打印了发送的消息

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_ws_send_demo_receive.jpg">


--- 

#### 使用须知

::: tip 该方法需配合云控接口来使用
- 云控接口发送自定义消息,小程序里接收相关消息

如果您想建立双向通道,请使用websocket-client 连接 您自己的 ws服务器
:::

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