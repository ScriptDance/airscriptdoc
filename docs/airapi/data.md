
# 数据
``` python
# 包
from airscript.data 
```

## 快速存读
``` python
# 导包
from airscript.data import Kv
```

快速存读工具,可将键值数据 存储在本地或从本地读取出来.

常用于一些简单数据存储.

### 存储

<b>Kv</b><font color="#3376d0">.save(key,value)</font>

<font color="#3376d0">快速存储一对 键值到本地</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| key      | string | 必填 |数据的id|
| value      | string,number,boolean | 必填 |数据|

</font>



``` python
# 导包
from airscript.data import Kv

# 存储string类型
Kv.save("user","自在")

# 存储number类型
Kv.save("age",18)

# 存储boolean类型
Kv.save("man",True)

```
---

### 读取

<b>Kv</b><font color="#3376d0">.get(key,defaultvvalue)</font>

<font color="#3376d0">快速读取通过key值,读取本地的value值</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| key      | string | 必填 |数据的id|
| defaultvvalue      | string,number,boolean | 必填 | 如果数据不存在,返回的默认值. !该值,必须和存储的数据类型一致 |

</font>


``` python
# 导包
from airscript.data import Kv

# 取string 类型数据
v = Kv.get("user","")

# 取number 类型数据
v = Kv.get("age",0)

# 取boolean 类型数据
v = Kv.get("age",False)

```
---

## 数据库-MySql

该模块需要开发者掌握一定的“SQL”语法

如果你还不会SQL语法,请前往[https://www.runoob.com/sql/sql-tutorial.html](https://www.runoob.com/sql/sql-tutorial.html) 学习相关语法.

小程序开发中,我们需要将大量数据存储在数据库,或从数据库获取数据.


### 账号获取

AirScript 为各位开发者 提供了 云数据库,免去开发者服务器部署环境.

开发者只需[注册,登录AirScript](http://py.airscript.cn/admin/db/list) 开发者账号,即可拥有自己的云端Mysql端数据库.

- 1. 登录开发者后台,并点击 "数据库"

- 2. 点击 “新增” 增加数据库账号,与密码

- 3. 这样你就生成了一个云端Mysql数据库

```
创建成功后得到: 主机地址,端口,用户名,数据库密码,数据库名 .

pymsql连接时需使用.

```

- 4. 拿到账号密码,也可以登录[数据库云端管理后台](http://mysql.nspirit.cn) 了,通过这个平台也可以管理数据库哦~

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_mysql_create.jpg">

--- 

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_des_ceate_mysql_2.jpg">

---

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_create_mysql3.jpg">



### 导包
```python 
import pymysql
```

### 连接

Airscript 内置 pymysql 包方便对mysql数据库的访问

-  连接数据库

```python
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库


# 执行完毕后记得关闭db,不然会并发连接失败哦
db.close()

```

### 创建表

我们可以配合,[数据库后台](http://mysql.nspirit.cn) 来查看执行结果


```python 
# 导包
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库
 
cursor = db.cursor()
res = cursor.execute("create table stu(id int ,name varchar(20),gender int,age varchar(10))")
print(res)

# 执行完之后要记得关闭游标和数据库连接
cursor.close()
db.close()

```

我们发现 表已经创建成功了
<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_mysql_createtable.jpg">

### 插入数据

我们可以配合,[数据库后台](http://mysql.nspirit.cn) 来查看执行结果

```python 
# 导包
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库
 
cursor = db.cursor()
res = cursor.execute("INSERT INTO stu ( id, name,gender,age ) VALUES ( 10,'张三',1,'12岁')"")
db.commit(); # 不要忘了提交,不然数据上不去哦
print(res)

# 执行完之后要记得关闭游标和数据库连接
cursor.close()
db.close()

```

我们通过数据库后台,可以看到数据已经上去了.

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_mysql_insert.jpg">

### 查询数据

我们可以配合,[数据库后台](http://mysql.nspirit.cn) 来查看执行结果

```python 
# 导包
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库
 
cursor = db.cursor()
cursor.execute("SELECT * FROM stu WHERE name = '张三'" )
results = cursor.fetchall()
# 循环遍历所有数据
for row in results:
    # 我们的表数据,总共4列,因此逐个获取每列数据
    print('id',row[0])
    print('name',row[1])
    print('gender',row[2])
    print('age',row[3])

# 执行完之后要记得关闭游标和数据库连接
cursor.close()
db.close()

```

### 更改数据


我们可以配合,[数据库后台](http://mysql.nspirit.cn) 来查看执行结果

```python 
# 导包
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库
 
cursor = db.cursor()
res = cursor.execute("update stu set age = '99岁' WHERE name = '张三'")
db.commit(); # 不要忘了提交,不然数据上不去哦
print(res)

# 执行完之后要记得关闭游标和数据库连接
cursor.close()
db.close()

```

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/doc_mysql_update.jpg">


### 删除数据

我们可以配合,[数据库后台](http://mysql.nspirit.cn) 来查看执行结果

```python 
# 导包
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库
 
cursor = db.cursor()
# res = cursor.execute("delete from stu") # 删除所有数据
res = cursor.execute("delete from stu where name='张三'")
db.commit(); # 不要忘了提交,不然数据上不去哦
print(res)

# 执行完之后要记得关闭游标和数据库连接
cursor.close()
db.close()

```

### 删除表

我们可以配合,[数据库后台](http://mysql.nspirit.cn) 来查看执行结果

```python 
# 导包
import pymysql

db = pymysql.connect(
    host="8.140.162.237", #开发者后台,创建的数据库 “主机地址”
    port=3307, #开发者后台,创建的数据库 “端口”
    user='换成自己的用户名',    #开发者后台,创建的数据库 “用户名”
    password='换成自己的密码',     #开发者后台,创建的数据库 “初始密码”
    database ='换成自己的', #开发者后台 ,创建的 "数据库"
    charset='utf8mb4'  ""
) #连接数据库
 
cursor = db.cursor()
res = cursor.execute("drop table stu") # 这样这个表就被彻底删除了
db.commit(); # 不要忘了提交,不然数据上不去哦
print(res)

# 执行完之后要记得关闭游标和数据库连接
cursor.close()
db.close()



## Json

### 转换

```python
#导包 标准json库
import json
```

在http数据传递,或者对象格式化时候.都需要 Json 和Object 的互相转换.

我们可以通过Python 的标准json库来完成操作

该库包含很多的 参数与方法,如需查看请点击 [json文档](https://docs.python.org/zh-cn/3/library/json.html)

#### class 转 json

```python
# 导包json
import json

# 一个 object 对象
obj = [ { 'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5 } ]

# 转换为 json String
jsonstr = json.dumps(obj)

print(jsonstr)
```

#### json 转 class

```python
# 导包json
import json

# 一段json 字符串
jsonStr = '[{"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}]'

# 转换为对象,方便属性访问
obj = json.loads(jsonStr);

# 访问对象中的属性
print(obj[0]['a'])
print(obj[0]['b'])
```


