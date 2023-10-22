---
title: 模式
---


# 模式

AirScript 包含了3种运行模式:[无障碍模式](#),[Hid模式](#),[Root模式](#)

3种模式的区别:

| 功能        | 无障碍           | HID  | ROOT|
| ------------- |:-------------:| :-----|:----|
| 动作      | ✅ | 支持:<br/>点击,滑动,模拟键盘输入 | ✅ |
| 控件检索      | ✅ | ❌ | ✅ |
| 图色检索:<br/>找色,找图,文字识别,目标      | ✅ | ✅ | ✅ |
| UI      | ✅ | ✅<br/>透传模式部分机型不支持 | ✅<br/>透传模式部分机型不支持 |
| 其他功能      | ✅ | ✅ | ✅ |
| 被检测概率     | 中 | 小 | 大 |
| 适用场景      | APP类 | 游戏类 | 模拟器运行 |
| 独立运行     | ✅ | ❌  | ✅ |


## 无障碍模式
借助Android 的无障碍访问权限,来实现手机的自动化程序.

该模式较为稳定,且拥有最稳定,最兼容的权限.

该模式下,只需在手机上安装 AirScript APP 即可编写运行程序.

安装APP后选择该 “无障碍模式运行” 即可

## Hid模式

HID模式,其实就是:模拟虚拟鼠标,键盘外设给手机设备使用.

从而达到,点击,滑动,模拟按键等功能.

<strong>HID模式下,需要PC(电脑端) 安装相应的驱动和软件才可使用.</strong>

- 我们可以按照以下方式,来完成HID的配置

### 1.驱动的安装

- mac 驱动的安装

``` 命令行
brew install libusb
```

---

- windows驱动的安装

 先行下载[usb驱动](https://airscript.oss-cn-hangzhou.aliyuncs.com/hid/libusbK-inf-wizard.exe),并双击打开

 安装步骤:

![](/img/model/libusbk_install_step1.jpg)
![](/img/model/libusbk_install_step2.jpg)
![](/img/model/libusbk_install_step3.jpg)
![](/img/model/libusbk_install_step4.jpg)
![](/img/model/libusbk_install_step5.jpg)

### 2.软件安装与启动

根据您的电脑操作系统 下载HID设备管理器软件:

| 平台        |
| --- |
| [win-x64](https://airscript.oss-cn-hangzhou.aliyuncs.com/hid/ASHID-win-x64.exe)   |
| [macos-x64](https://airscript.oss-cn-hangzhou.aliyuncs.com/hid/ASHID-macos-x64) |
| [macos-arm64](https://airscript.oss-cn-hangzhou.aliyuncs.com/hid/ASHID-macos-arm64)|
| [linux-x64](https://airscript.oss-cn-hangzhou.aliyuncs.com/hid/ASHID-linux-x64)|

![](/img/model/hid_soft_open1.jpg)
![](/img/model/hid_soft_open2.png)


### 3.HID的激活与初始化

::: danger 激活前注意事项

- 必须关闭开发者模式,否则可能会出现error -3 的错误.

:::

![](/img/model/hid_soft_jh1.jpg)

![](/img/model/hid_soft_jh2.jpg)





### 4.设备的绑定

::: danger 绑定前注意事项

- 请保持设备和电脑 处于同一个局域网,否则不可用.

:::

- 启动APP,选择HID模式

<img src="/img/model/hid_bind_1.jpg" width="200" />

- 绑定IP地址 与 设备ID

<img src="/img/model/hid_bind_2.jpg" />


## Root模式

如果您的设备已经具有Root权限.

则拥有最高权限,这种模式不用开启无障碍,对手机无系统版本要求.

适合于模拟器使用.

安装APP后选择该 “Root模式运行” 即可