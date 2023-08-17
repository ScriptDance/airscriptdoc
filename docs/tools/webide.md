# 原生工具 · 入门

::: warning 免部署模式
采用‘WEB-IDE’作为开发工具.

APP内置服务器,供开发者访问,免去开发者的环境配置.极大降低研发成本.
:::

## 安装
[下载](http://py.airscript.cn/getApk)并在您的移动设备上安装<b>AirScript App</b>即可.

## 权限申请
区别于传统Appimage.png,AirScript会申请高危权限来帮助小程序执行自动化测试逻辑.
### SD卡权限 
App需要在您的SD中读写文件
- 保存或读取您研发的文件代码或资源
- 下载网络文件
### 悬浮窗权限
- 提示小程序运行状态
- 显示日志窗口

### 无障碍权限
- 采集View控件信息,辅助小程序逻辑运行

## 连接

### 局域网

打开APP后,点击“开发者”,即可看到 “开发地址->局域网IP(192.168....*)”

- 确认手机和电脑处于同一个局域网(PS:连接同一个Wifi)
- 在您的电脑(windows,mac,linux) 等设备中,访问该ip地址即可研发


### 公网

打开APP后,点击“开发者”,即可看到 “开发地址->公网IP”

- 点击公网IP开关,给予VPN权限
- 在您的电脑(windows,mac,linux) 等设备中,访问公网地址(http://ide.airscript.cn/.*)即可研发

## 研发

### 访问首页

- 开发工具首页,点击 <b>"开始研发"</b>

<img src="/assets/img/dev_home.jpg">

### 创建工程

- 创建一个新工程

<img src="/assets/img/dev_create_module.jpg">
