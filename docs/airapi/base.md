---

title: 工程
tagline: Python驱动的自动化小程序文档
# sidebar: auto
# displayAllHeaders: true
# collapsable: false
# footer: MIT Licensed | Copyright © 2018-present Evan You

---

# 工程

## 结构

一个新的 AirScript工程目录结构

``` python
.
├─ __init__.py "小程序启动入口"
├─ res "资源目录"
│  ├─ img "图片资源"
│  │  └─ logo.png "默认的logo"
│  └─ ui "布局文件资源"
│
└─ other "开发者自由创建"
   └─ ?.py
```
### 更改logo

替换 /res/img/logo.png 即可.

### 资源路径

系统中提供了访问工程的上下文 [R](./system/#环境与资源)


## 发布

### 上传

- 1. 在代码编辑器中导出后缀名为as的工程包

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_module_export.jpg"/>

--- 

- 2. 打开 [开发者后台](http://py.airscript.cn/admin/apply/list),进入小程序列表

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_create_list.jpg"/>

- 3. 点击新增,填写资料,提交发布

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_create_addbtutton.jpg"/>

- 4. 在Airscript App中 通过id检索

上传后,在小程序列表中 会有对应小程序ID

我们可以在Airscript首页通过这个ID搜索并运行小程序.
<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_module_where_id.jpg"/>

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_module_search.jpg" style="width:40%"/>

### 打包独立APP

- 1. 您需要发布一款小程序才可打包

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_makeapp_btn.jpg"/>

- 2. 在 [开发者后台](http://py.airscript.cn/admin/apply/list) 中找到一款发布的小程序,点击后方打包小程序

- 3. 填写打包信息,点击开始打包等待完成即可.

- - 打包需要10分钟左右,可以离开界面

<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/img/doc/doc_makeapp_writeinfo.jpg"/>


