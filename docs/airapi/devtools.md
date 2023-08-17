---

title: 工具
tagline: Python驱动的自动化小程序文档
# sidebar: auto
# displayAllHeaders: true
# collapsable: false
# footer: MIT Licensed | Copyright © 2018-present Evan You

---

# 工具

## Pycharm 开发(推荐)
开发Python最好用的工具是 pycharm

AS开发者(請丶随便)也贡献了相应的插件. 感谢开发者(請丶随便) 大佬QQ:1132454419

使用 Pycharm 开发的优势:

- 自动导包
- 代码提示
- 内置函数查看等

    [详细使用说明](./tool/pycharm/readme.md)

## 原生开发

::: warning 免部署模式
采用‘WEB-IDE’作为开发工具.

APP内置服务器,供开发者访问,免去开发者的环境配置.极大降低研发成本.
:::

### 安装
[下载](http://py.airscript.cn/getApk)并在您的移动设备上安装<b>AirScript App</b>即可.

### 权限申请
区别于传统Appimage.png,AirScript会申请高危权限来帮助小程序执行自动化测试逻辑.
#### SD卡权限 
App需要在您的SD中读写文件
- 保存或读取您研发的文件代码或资源
- 下载网络文件
#### 悬浮窗权限
- 提示小程序运行状态
- 显示日志窗口

#### 无障碍权限
- 采集View控件信息,辅助小程序逻辑运行

### 局域网研发

打开APP后,点击“开发者”,即可看到 “开发地址->局域网IP(192.168....*)”

- 确认手机和电脑处于同一个局域网(PS:连接同一个Wifi)
- 在您的电脑(windows,mac,linux) 等设备中,访问该ip地址即可研发


### 公网研发

打开APP后,点击“开发者”,即可看到 “开发地址->公网IP”

- 点击公网IP开关,给予VPN权限
- 在您的电脑(windows,mac,linux) 等设备中,访问公网地址(http://ide.airscript.cn/.*)即可研发


## visualstudio 开发

::: warning 需安装好 AirScriptApp
Vs开发也需要在您的手机设备上安装 AirScript App

否则无法连接调试
:::

VsCode 插件适合开发一些大型的项目工程.

其中对Python,Html,Js 的代码提示比较友好,我们也<b>'比较推荐'</b>这种形式的开发


对于图色工具,节点工具,导包等,我们还是需要在网页端完成,VsCode 目前还没有提供这些功能入口.

### 安装App
[下载](http://py.airscript.cn/getApk)并在您的移动设备上安装<b>AirScript App</b>即可.

### 下载VsCode

- 下载地址
 
[https://code.visualstudio.com](https://code.visualstudio.com)


### 插件的安装

- 1. 打开VsCode 中的插件拓展
- 2. 搜索 ‘AirScript’
- 3. 点击安装 并重启 VsCode

- 如下图所示:

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_vscode_install_plug.jpg">

### 插件的使用

- 1. 创建一个空工程文件夹,文件夹名称任意,并用VsCode 打开

- 2. 在弹出框中,连接手机设备!

- 3. 创建新工程,或拉取手机中的项目.

- 4. 右键工程文件夹 运行或停止

- 如下图(2)所示:
 

 <img src ="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_vscode_plug_conn.jpg">


 <img src ="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_vscode_plug_menu.jpg">
