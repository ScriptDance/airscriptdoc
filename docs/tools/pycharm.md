
# PyCharm · 推荐

## 1.安装Python

### 下载

1. 自行到[官网](https://www.python.org/downloads/)下载合适的版本
2. （推荐）通过[官网](https://www.python.org/ftp/python/3.8.10/python-3.8.10-amd64.exe)或者通过[百度网盘](https://pan.baidu.com/s/1VVIscWwUVltYCAwdLiMSQw?pwd=yvw8) 下载和AS设备相同版本解释器。

### 安装
![](/img/tool/pycharm/20230812203420.png)
![](/img/tool/pycharm/20230812203453.png)
![](/img/tool/pycharm/20230812203513.png)
![](/img/tool/pycharm/20230812203559.png)

等待安装完成后点击`Close`

![](/img/tool/pycharm/20230812203705.png)

然后打开按住键盘的`win + r`组合键，输入 `cmd` 再输入 `python` 验证是否安装成功，如果看到如下界面，代表安装成功。

![](/img/tool/pycharm/20230812203828.png)
## 2. 安装PyCharm

### 下载
- pycharm是Jetbrains公司开发的一款专门用于python开发的IDE，是目前在市场上用于python开发最好的工具。使用pycharm开发python有代码智能提示、语法检测、包管理等强大的功能。
- pycharm有2个版本，分别是收费的Professional版和免费的Community版，如果不是有强烈的python开发需求，仅仅是开发AS的话，社区版足够使用了。建议下载社区版。

1. 打开[官网](https://www.jetbrains.com/pycharm/download/)
2. 拖到页面的最下面下载社区版即可
![](/img/tool/pycharm/20230812204132.png)

### 安装
![](/img/tool/pycharm/20230812204514.png)
![](/img/tool/pycharm/20230812204618.png)
![](/img/tool/pycharm/20230812204634.png)
![](/img/tool/pycharm/20230812204649.png)

等待安装完成后打开pycharm

### 测试环境
![](/img/tool/pycharm/20230812204844.png)
![](/img/tool/pycharm/20230812204906.png)
然后可以看到如下界面，点击图中内容创建项目
![](/img/tool/pycharm/20230812205050.png)

配置解释器

![](/img/tool/pycharm/20230812205244.png)
![](/img/tool/pycharm/20230812205323.png)

点击OK后，会回到创建界面，点击`Create`创建项目

![](/img/tool/pycharm/20230812205411.png)

直接点击右上角的运行，看看是否成功

![](/img/tool/pycharm/20230812205627.png)

### 汉化
![](/img/tool/pycharm/20230812210229.png)
![](/img/tool/pycharm/20230812210405.png)

等待安装完成后，点击重启pycharm

![](/img/tool/pycharm/20230812210539.png)

即可看到中文界面


## 3.AirScript插件

使用pycharm开发AS需要用到AS开发插件，该插件在pycharm上提供和web ide一致的开发体验。

### 下载
目前插件只能通过离线的方式安装，点击下面的链接下载最新插件。

[Pycharm AirScript离线版下载](https://pan.baidu.com/s/1UGM6ucM_Wn7X4RiAQm7q9g?pwd=pggv)
### 安装插件
![](/img/tool/pycharm/20230812211222.png)
![](/img/tool/pycharm/20230812211302.png)

然后选择刚刚下载插件包的位置，即可安装，安装完成后重启IDE使插件生效。

![](/img/tool/pycharm/20230812211403.png)

### 使用

1. 打开手机上的AS找到开发地址

2. 把设备信息配置到插件
![](/img/tool/pycharm/20230812213238.png)
![](/img/tool/pycharm/20230812213507.png)

3. 点击连接设备
![](/img/tool/pycharm/20230812213620.png)

提示设备连接成功即代表成功连接，如连接失败，可到浏览器访问手机AirScript APP提供的地址，看看是否可以成功访问。例如：

![](/img/tool/pycharm/20230812213726.png)

浏览器可以打开，代表能成功访问，如果浏览器能打开插件还是提示连接失败，请联系作者。

#### 新建/拉取项目
![](/img/tool/pycharm/20230812214033.png)
![](/img/tool/pycharm/20230812214357.png)

依次输入项目名，选择设备列表。

目录的最后一级为项目名，项目名对应设备上这个界面的项目名

![](/img/tool/pycharm/20230812214510.png)

比如我现在新建的项目为AirScriptProject，而我的设备上可以看到已经有一个同名项目为AirScriptProject，那么这次创建就是拉取项目，如果我这次新建的是设备上没有的，那么就会在设备上新建项目。

项目创建成功后重新连接设备，点击旁边的运行即可。
![](/img/tool/pycharm/20230812220133.png)

## 4.代码提示的安装
使用pip工具可以安装as-android的代码提示包
```bash
pip install as-android
```

![](/img/tool/pycharm/install_airscript_tip.jpg)

## 5.贡献者

| 网名        | 联系方式           |
| ------------- |:-------------:|
| 請丶随便        | QQ:1132454419           |

--- 

Pycharm - Airscript 是该作者通过 [编辑器拓展接口](./open.md) 完成的IDEA 插件.

AirScript 官方 非常肯定,开发者做出的杰出贡献.

---
    如果您觉得该插件还有一些需求需要补充,请联系该开发者.

    如果您觉得该插件好用,请记为该开发者打Call.


