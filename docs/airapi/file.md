---
title: 文件
---

文件读写中,我们使用内置函数[open](https://docs.python.org/zh-cn/3.8/library/functions.html#open)操作文件

```python
# open 语法如下
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

## 路径
Android 是基于 Linux,因此文件系统和Linux 雷同.

在Android 中如果您的手机没有Root,那我们仅有权限自如的操作 "/sd" 卡路径下的文件.

### 友好的路径写法
获取SD卡中文件路径 我们可以借助from airscript.system import R 环境模块.

以下是几个路径写法案例:

```python
from airscript.system import R
# 获取SD卡根目录下的1.png 的完整路径
path = R.sd("1.png") 
print(path)
```

```python
from airscript.system import R
# 获取SD卡根目录下的airscript文件夹下的 a.txt文件夹
path = R.sd("/airscript/a.txt") 
print(path)
```

## 创建文件

```python
from airscript.system import R
file = open(R.sd("a.txt"),mode='w')
# 上面这句代码意思:打开当前文件路径下的这个文件并采用写入的文件模式，当这个文件不存在的时候就会去创建
# w、w+、a+、a模式都能创建新文件
file.close()
```

## 创建文件夹

创建文件夹用到了 os模块

``` python
import os
from airscript.system import R
path = R.sd("aaa") # 在sd卡创建一个 aaa文件夹
os.mkdir(path)
```

## 删除文件
在Python 中删除文件的方法比较多

### 删除文件
os.remove(path)

```python
import os
from airscript.system import R
# 删除sd卡下的 1.txt文件
os.remove(R.sd("1.txt"))
```

### 删除文件夹
os.rmdir(path)

```python
import os
from airscript.system import R
# 删除sd卡下的 b文件夹
os.rmdir(R.sd("/b")) 
```

## 读文件

### 读取所有内容

file.read()

```python
from airscript.system import R
file = open(R.sd("/1.txt"),"r+")
str= file.read()
print(str)
file.close()
```

### 读取一行

file.readline([size])

读取整行，包括 "\n" 字符。

读取所有行并返回列表，若给定sizeint>0，返回总和大约为sizeint字节的行, 实际读取值可能比 sizeint 较大, 因为需要填充缓冲区。

```python
from airscript.system import R
file = open(R.sd("/1.txt"),"r+")
content = file.readline()
print(content)
file.close()
```

### 读取所有行

file.readlines([sizeint])

读取所有行并返回列表，若给定sizeint>0，返回总和大约为sizeint字节的行, 实际读取值可能比 sizeint 较大, 因为需要填充缓冲区。

```python
from airscript.system import R
file = open(R.sd("/1.txt"),"r+")
for line in file.readlines():
    print(line)

file.close()
```

## 写文件

### 写入字符串

file.write(str)

将字符串写入文件，返回的是写入的字符长度。

```python
# w+模式打开此文件后,每次写都会清空源文件内容,重新写入
from airscript.system import R
file = open(R.sd("/1.txt"),"w+")
file.write("自在老师")
file.close()

```

### 写入字符串序列

file.writelines(sequence)

向文件写入一个序列字符串列表，如果需要换行则要自己加入每行的换行符。

```python
from airscript.system import R
file = open(R.sd("/1.txt"),"w+")
strs = ["自在老师\n","你好"]
file.writelines(strs)
file.close()
```

### 在文件末尾追加

在末尾读写 使用到了 seek函数

```python
from airscript.system import R
file = open(R.sd("/1.txt"),"r+")
file.seek(0, 2)
file.write("我会追加在末尾")
file.close()
```




