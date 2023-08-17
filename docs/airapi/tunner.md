
# 通信

## Http

[requests](https://requests.readthedocs.io/en/latest/) 是 Python 的Http 请求库,AirScript中内置了这个库

``` python
# 导包
import requrest
```

### 模版

```python

import requests

# 请求模版
r = requests.get("http://www.baidu.com") 
# 打印状态Code
print(r.status_code) 
# 打印header 中的 content-type
print(r.headers['content-type']) 
#打印字符编码
print(r.encoding) 
#打印返回文本内容
print(r.text) 

# 如果服务器返回json,可使用以下语句进行json转换
# r.json() 

```

### get 案例

```python
import requests
# 访问天气预报接口
r = requests.get("http://www.weather.com.cn/data/sk/101010100.html")
# 进行转码
r.encoding = r.apparent_encoding
# 打印获取的所有文本信息
print(r.text)
# 转换为json对象
obj =  r.json()

print(obj['weatherinfo']['city']) # 获取当前城市名称

```

### post 案例

- Form 形式发送

```python
import requests
# 使用post请求获取 ip所属信息
r = requests.post("https://api.oioweb.cn/api/ip/ipaddress",data ={"ip":"114.114.114.114"})

# 打印一下返回的文本
print(r.text)

# 看文本格式,服务器返回的是json数据,转换为json对象,方便拿属性
obj = r.json()

#获取 ip所在地址
print(obj["result"]["disp"])

```

- Json 形式发送

```python
import requests
import json
# 访问地址
url = 'http://httpbin.org/post'

# json 格式化
s = json.dumps({'key1': 'value1', 'key2': 'value2'})

# 发送 post请求
r = requests.post(url, data=s)

# 打印文本
print (r.text)

```

### 下载

- 小文件下载

```python
# 导入http模块
import requests
# 导入环境R,方便获取文件路径
from airscript.system import R

# 指定下载文件的地址
url = 'https://www.baidu.com/img/flexible/logo/pc/result@2.png' # 目标下载链接

# 通过get获取数据
r = requests.get(url)

# 保存文件至sd卡下的1.png
with open (R.sd("/1.png"), 'wb') as f:
    f.write(r.content)
```

- 大文件下载

```python
# 导入http库
import requests
# 导入环境R,方便得到存储文件地址
from airscript.system import R
# 下载文件地址
url = 'https://www.baidu.com/img/flexible/logo/pc/result@2.png' # 目标下载链接

# get获取数据,传入stream 分批流形式获取数据
r = requests.get(url, stream=True)

# 打开sd卡文件,准备写入数据
f = open(R.sd("/2.png"), "wb")

# 循环批次写入数据
for chunk in r.iter_content(chunk_size=512):
  if chunk:
    f.write(chunk)

#关闭文件
f.close()
```

## WebSocket

长连接通信通道

### websocket-client

AirScript 内置了 websocket-client Python包

我们可以使用该方法快速连接某一WebSocketServer

下面是使用案例:

```python

from websocket import WebSocketApp

def on_message(self, message):
    print("####### on_message #######")
    print("message：%s" % message)

def on_error(self, error):
    print("####### on_error #######")
    print("error：%s" % error)

def on_close(self):
    print("####### on_close #######")

def on_open(self):
    print("####### on_open #######")


url = "ws://192.168.31.108:10102/log/"

ws = WebSocketApp(url,
                    on_open=on_open,
                    on_message=on_message,
                    on_error=on_error,
                    on_close=on_close)
ws.run_forever()

```
