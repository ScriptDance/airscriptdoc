---
title: Root
---


``` python
# 包
from airscript.system import Progress
```

::: warning 需要您的设备有Root权限
- 该部分内容,执行Android Shell指令,因此您的设备必须Root 才可使用该模块
:::

## 执行指令

- <b>Progress.</b><font color="#3376d0">shell(msg)</font>

运行一条Android shell指令

<font color="#3376d0" size="2">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| msg      | string | 必填 |执行的 shell 指令|

</font>

<font color="#3376d0" size="2">

| 返回参数        | 备注|
| ------------- |----:|
| Result      |包含两个属性:<br> res:shell指令的回执消息.<br>error:如果命令行指令出错,返回的错误信息|

</font>


```python
from airscript.system import Progress

r = Progress.shell("pm list packages")

# 打印 命令行回执消息
if r.res:
    for x in r.res:
        print(x)

# 打印 命令行错误回执消息
if r.error:
    print("命令行指令出错了")
    for x in r.error:
        print(x)
```

## 命令大全


