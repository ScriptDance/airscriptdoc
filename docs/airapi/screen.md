---
title: 图色
---

``` python
# 包路径
from airscript.screen
```

# 图色检索

## 图像 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=20" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>
<b>Screen</b>.<font color="#3376d0">*</font>

<font color="#3376d0">Screen 屏幕截图控制器</font>

``` python
# 所属包
from airscript.screen import Screen

# 通过Screen 操作
Screen.*

```


### 从屏幕获取图像

<b>Screen</b><font color="#3376d0">.bitmap(x,y,x1,y1)</font>

<font color="#3376d0">将屏幕指定区域截取为Bitmap可操作的对象</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x,y,x1,y1      | int | 选填 |要截取的屏幕范围坐标,默认截取全屏|


| 返回结果       | 备注|
| :-------------|----:|
| android.graphics.Bitmap    | java中的Bitmap对象,详细属性见:<br>[https://developer.android.google.cn/reference/kotlin/android/graphics/Bitmap?hl=en](https://developer.android.google.cn/reference/kotlin/android/graphics/Bitmap?hl=en) |

</font>

```python
from airscript.screen import Screen 
from airscript.system import R

# 截取整个屏幕为Bitmap对象
bitmap = Screen.bitmap();

# 截取屏幕范围[361,309,718,659]为Bitmap对象
bitmap = Screen.bitmap(361,309,718,659);

# 打印截取的图片宽度, 关于Bitmap的更多属性请见:https://developer.android.google.cn/reference/kotlin/android/graphics/Bitmap?hl=en
print(bitmap.getWidth()) 

```

### 从文件获取图像

<b>Screen</b><font color="#3376d0">.file2Bitmap(path,sampleSize)</font>

<font color="#3376d0">将图片文件,读取为内存图像Bitmap</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| path     | string | 必填 | 图片路径地址|
| sampleSize     | int | 选填 |图像缩放参数<br>如参数为2:每隔2行,2列采集1行,结果为原图的1/4大小|


| 返回结果       | 备注|
| :-------------|----:|
| android.graphics.Bitmap    | java中的Bitmap对象,详细属性见:<br>[https://developer.android.google.cn/reference/kotlin/android/graphics/Bitmap?hl=en](https://developer.android.google.cn/reference/kotlin/android/graphics/Bitmap?hl=en) |

</font>

```python
from airscript.screen import Screen 
from airscript.system import R

# 将sd卡中的文件/a/3.jpg 读取为bitmap对象
bitmap = Screen.file2Bitmap(R.sd('/a/3.jpg'))
print(bitmap.getWidth())

```

### 保存图像
<b>Screen</b><font color="#3376d0">.toFile(path,bitmap,quality)</font>

<font color="#3376d0">截图到指定的文件地址</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| path      | string | 必填 |存入的路径|
| bitmap      | Bitmap | 选填 |Android 图像,默认全屏截图|
| quality      | int | 选填 |截图的清晰度 1-100,默认:100原图,20:20%原图分辨率|

</font>

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| java.io.File    | java中的Fiel对象,详细属性见:<br>[https://tool.oschina.net/uploads/apidocs/jdk-zh/java/io/File.html](https://tool.oschina.net/uploads/apidocs/jdk-zh/java/io/File.html) |

</font>


``` python
# 导包
from airscript.screen import Screen 
from airscript.system import R

# 截取屏幕到 /sd/a/1.png 目录中
cpFile =  Screen.toFile(R.sd('/a/1.png'));

# 截取屏幕区域[10,10,500,500]到 /sd/a/2.png 目录中
cpFile =  Screen.toFile(R.sd('/a/2.jpg'),Screen.bitmap(10,10,500,500));

# 截取屏幕到 /sd/a/3.png 目录中,清晰度为 50%
cpFile =  Screen.toFile(R.sd('/a/3.jpg'),50);


# 截取屏幕区域[10,10,500,500]到 /sd/a/4.png 目录中,清晰度为30%
cpFile =  Screen.toFile(R.sd('/a/4.jpg'),Screen.bitmap(10,10,500,500),30);

```
---

## 找色 <a href="https://www.bilibili.com/video/BV1HX4y1i7pf?p=21" title="视频教程" style="margin-left:5px"><img style="width:20px;height:20px;" src="/assets/img/ico_video_player.png"></a>
``` python
# 导包
from airscript.screen import FindColors
```

### 构造

<b>FindColors</b><font color="#3376d0">(colors)</font>

<font color="#3376d0">截图到指定的文件地址</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| colors      | string | 必填 | 颜色参数,一般使用编辑器中的找色工具生成<br> 格式:"x,y,#rgb\|x,y,#rgb" <br>颜色参数 由多组坐标与颜色 构成,每一组颜色之间用‘\|’分割<br>例如:'426,346,#05D395\|502,351,#05D015\|676,569,#05D294' |

- 找色原理:
> '426,346,#05D395\|502,351,#05D015\|676,569,#05D294' <br>
上述含义:在#05D395这个颜色的相对位置(x=502-426,y=351-346)有一个颜色值 #05D015
<br>并且 <br>
在#05D395这个颜色的相对位置(x=676-426,y=569-346) 存在一个颜色值 #05D294<br><b>所有的颜色都属于第一个颜色点的定位点.</b>

</font>

``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象
FindColors('426,346,#05D395|502,351,#05D015|676,569,#05D294')

```

### 范围

<b>FindColors(colors)</b><font color="#3376d0">.rect(x,y,x1,y1)</font>

<font color="#3376d0">圈定要在屏幕的哪个范围内找色</font>

> 缺省rect参数将默认全屏幕找色

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | int | 必填 | 左上角x坐标 |
| y      | int | 必填 | 左上角y坐标 |
| x1      | int | 必填 | 右下脚x坐标 |
| y2      | int | 必填 | 右下脚y坐标 |

> 一个矩形范围 由左上角坐标,和右下脚坐标来指定

``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象,并指定找色范围[353,289,758,707]
FindColors('426,346,#05D395|502,351,#05D015|676,569,#05D294').rect(353,289,758,707)

```

</font>

### 间隔

<b>FindColors(colors)</b><font color="#3376d0">.space(num)</font>

<font color="#3376d0">指定找色结果点的间距</font>

> 缺省space 默认为 5

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| num      | int | 必填 | 找色结果的间距,默认每5个像素只能存在1个结果 |


``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象,并指定找色的结果间距为 10
FindColor('931,549,#EFEFEF|932,496,#EEEEEE|964,523,#EFEFEF|862,475,#0B0B16').space(10)

```
</font>


### 方向

<b>FindColors(colors)</b><font color="#3376d0">.ori(num)</font>

<font color="#3376d0">找色的方向</font>

> 缺省ori 默认为 2

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| num      | int | 必填 | 找色的方向,默认为2 <br>取值:1-8 之间,见下图 |

<img src="/assets/img/findcolors_ore.png" style="width:300px; height:260px"/>

- 1: 左上角到右下角，纵向开始找色，先找到 a 顶点。
- 2: 左上角到右下角，横向开始找色，先找到 b 顶点。
- 3: 右上角到左下角，横向开始找色，先找到 c 顶点。
- 依此类推



``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象,并指定找色的结果间距为 10
FindColor('931,549,#EFEFEF|932,496,#EEEEEE|964,523,#EFEFEF|862,475,#0B0B16').ori(3)

```
</font>


### 偏色

<b>FindColors(colors)</b><font color="#3376d0">.diff(rgb)</font>

<font color="#3376d0">设置偏色</font>

> 缺省ori 默认为 2

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| rgb      | string(rgb颜色值) | 必填 | 如‘#050505’ |

<img src="/assets/img/findcolors_ore.png" style="width:300px; height:260px"/>

- 1: 左上角到右下角，纵向开始找色，先找到 a 顶点。
- 2: 左上角到右下角，横向开始找色，先找到 b 顶点。
- 3: 右上角到左下角，横向开始找色，先找到 c 顶点。
- 依此类推



``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象,并指定找色的结果间距为 10
FindColor('931,549,#EFEFEF|932,496,#EEEEEE|964,523,#EFEFEF|862,475,#0B0B16').ori(3)

```
</font>

### 查找一个结果

<b>FindColors(colors)</b><font color="#3376d0">.find()</font>

<font color="#3376d0">查找符合特诊的第一个结果</font>

| 返回结果       | 备注|
| -------------|----:|
| android.graphics.Point   | 点位对象, Point有x和y属性.用来获取坐标位置. |

``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象,并执行查找
point = FindColors('931,549,#EFEFEF|932,496,#EEEEEE|964,523,#EFEFEF|862,475,#0B0B16').find()
if point:
    # 打印 x坐标 和 y坐标
    print(point.x,point.y)

```


### 查找全部结果
<b>FindColors(colors)</b><font color="#3376d0">.find_all()</font>

<font color="#3376d0">查找符合特诊的所有结果</font>

| 返回结果       | 备注|
| -------------|----:|
| android.graphics.Point[]   | 点位对象数组,Point有x和y属性.可用来获取坐标位置. |

``` python
# 导包
from airscript.screen import FindColors

# 构造一个FindColor对象,并执行查找
points = FindColors('931,549,#EFEFEF|932,496,#EEEEEE|964,523,#EFEFEF|862,475,#0B0B16').find_all()
if points:
    print('共查到%d个结果'%len(points))
    for point in points:
        print(point.x,point.y)

```


## 找图

``` python
# 导包
from airscript.screen import FindImages
```

通过局部图片,我们可以在屏幕中找到该图片的位置信息

- 找图支持全分辨率.(局部图片尺寸不变,屏幕如何缩放,均可以找到位置信息)

::: tip 什么时候用找图合适

当我们想适配全分辨率时,可通过找图方法.

:::


### 构造

<b>FindImages</b><font color="#3376d0">(part_img)</font>

<font color="#3376d0">创建一个找图对象</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| part_img      | string | 必填 | 局部图片的绝对路径 |


</font>

``` python
# 导包
from airscript.screen import FindImages

# 导入上下文环境包,方便导入图片地址
from airscript.system import R

# 构造一个FindColor对象,需要传入一个局部图片的路径

# 通过上下文R得到a.png的绝对位置
path = R(__file__).res("/img/a.png")
# 将路径传入FindImages 构建一个找图对象
FindImages(path)

```
### 范围

<b>FindImages(part_img).</b><font color="#3376d0">rect(l,t,r,b)</font>

<font color="#3376d0">指定屏幕找图范围</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| l      | int | 必填 | 范围左上角x坐标 |
| r      | int | 必填 | 范围左上角y坐标 |
| t      | int | 必填 | 范围右上角x坐标 |
| b      | int | 必填 | 范围右上角y坐标 |

</font>

``` python
# 导包
from airscript.screen import FindImages

# 导入上下文环境包,方便导入图片地址
from airscript.system import R

# 构造一个FindColor对象,需要传入一个局部图片的路径

# 通过上下文R得到a.png的绝对位置
path = R(__file__).res("/img/a.png")
# 将路径传入FindImages 构建一个找图对象,并指定查找图的范围 是[0,0,300,300]
FindImages(path).rect(0,0,300,300)

```



### 信心

<b>FindImages(part_img).</b><font color="#3376d0">confidence(num)</font>

<font color="#3376d0">指定找图结果的可信度,过滤掉可信度低的结果</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| num      | int | 必填 | 可信度,0-1之间的一个值,1为100%准确,0.8为80%的准确度,这个值可以过滤掉准确度低的结果 |


</font>

``` python
# 导包
from airscript.screen import FindImages

# 导入上下文环境包,方便导入图片地址
from airscript.system import R

# 构造一个FindColor对象,需要传入一个局部图片的路径

# 通过上下文R得到a.png的绝对位置
path = R(__file__).res("/img/a.png")
# 将路径传入FindImages 构建一个找图对象,并指定要获取的结果准确度必须0.8以上.
FindImages(path).confidence(0.8)

```

### 查找模式

<font color="#3376d0">

查找模式,主要分为模版查找,全分辨率查找,混合查找

开发者可以根据场景需求使用不同的模式.

</font>

- 返回一个结果

| 查找模式       | 备注|
| -------------|:----|
| find   | 先使用 find_template 查找,如果找不到在用 find_sift 查找|
| find_sift   | 支持全分辨率的单图查找模式 优点:全分辨率 缺点:速度慢|
| find_template   | 优点:速度快 缺点:不支持全分辨率|


- 查找多个结果

| 查找模式       | 备注|
| -------------|:----|
| find_all   | 先使用 find_all_template 查找,如果找不到在用 find_all_sift 查找|
| find_all_sift   | 持全分辨率的查找模式 优点:全分辨率 缺点:速度慢|
| find_all_template   | 优点:速度快 缺点:不支持全分辨率|


### 查找一个结果

<b>FindImages(part_img).</b><font color="#3376d0">find()</font>

<font color="#3376d0">执行查找一个结果,可信度最高的将被保留,先使用模版查找,如找不到在用全分辨率查找</font>

--- 

<b>FindImages(part_img).</b><font color="#3376d0">find_sift()</font>

<font color="#3376d0">执行查找一个结果,全分辨率查,速度慢.但支持全分辨率</font>

--- 

<b>FindImages(part_img).</b><font color="#3376d0">find_template()</font>

<font color="#3376d0">执行查找一个结果,速度快,但不支持全分辨率</font>

--- 



<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| Object   | 结果对象 |

``` json
//结果对象案例
{
    'result': (929.0, 535.0), //找到图片在屏幕上的中心点坐标
    'rectangle': ((832, 437), (832, 633), (1026, 437), (1026, 633)), //图片在屏幕中的范围,4个顶点的坐标
    'confidence': 0.9975173473358154 //可信度
}

```

</font>

``` python
# 导包
from airscript.screen import FindImages
from airscript.system import R


# 构造找图对象,并执行查找
res = FindImages(R(__file__).res("/img/a.png")).find() # 先使用 find_template找不到结果,在用find_sift查询

# res = FindImages(R(__file__).res("/img/a.png")).find_sift() #  全分辨率形式查询

# res = FindImages(R(__file__).res("/img/a.png")).find_template() #  模版查询,速度快,但不支持全分辨率

#判断结果不为空
if res:
    #输入找图结果的属性
    print("中心坐标为:x=%d,y=%d" % (res['result'][0],res['result'][1]))
    print("范围:",res["rectangle"])
    print("准确度:",res["confidence"])

```


### 查找所有结果


<b>FindImages(part_img).</b><font color="#3376d0">find_all()</font>

<font color="#3376d0">混合查找,先使用模版查找,如果找不到就用全分辨率查找</font>

--- 

<b>FindImages(part_img).</b><font color="#3376d0">find_all_sift()</font>

<font color="#3376d0">全分辨率查找,速度慢</font>

--- 

<b>FindImages(part_img).</b><font color="#3376d0">find_all_template()</font>

<font color="#3376d0">模版查找,速度快,但不支持全分辨率</font>

<font color="#3376d0">

| 返回结果       | 备注|
| -------------|----:|
| Object[]   | 结果对象数组 |

``` json
//结果对象案例
[
    {
        'result': (929.0, 535.0), //找到图片在屏幕上的中心点坐标
        'rectangle': ((832, 437), (832, 633), (1026, 437), (1026, 633)), //图片在屏幕中的范围,4个顶点的坐标
        'confidence': 0.9975173473358154 //可信度
    }
]

```

</font>

``` python
# 导包
from airscript.screen import FindImages
from airscript.system import R

# 构造找图对象,过滤掉,可信度小于0.6的 并查找全部结果
ress = FindImages(R(__file__).res("/img/a.png")).confidence(0.6).find_all()

# ress = FindImages(R(__file__).res("/img/a.png")).confidence(0.6).find_all() # 全分辨率查找模式,速度慢

# ress = FindImages(R(__file__).res("/img/a.png")).confidence(0.6).find_all_template() # 模版查找模式,速度快,但不支持全分辨率

#判断结果不为空
if ress:
    print('共查到%d个结果'%len(ress))
    #输入找图结果的属性
    for res in ress:
        print("中心坐标为:x=%d,y=%d" % (res['result'][0],res['result'][1]))
        print("范围:",res["rectangle"])
        print("准确度:",res["confidence"])

```

## 目标检测

``` python
# 导包
from airscript.screen import yolo_v5
```

经过数据集训练,加载模型.检测出屏幕中的目标

### 模型加载

<b>yolo_v5</b><font color="#3376d0">(model)</font>

创建一个yolov5目标检测对象,并初始化模型

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| model      | string | 必填 | 从[模型库](https://card.nspirit.cn/mlist.html) 中加载:("模型名称:模型版本号")<br>也可加载模型文件,填写文件路径即可. |

```python
from airscript.screen import yolo_v5
# 从模型库中加载
yolo = yolo_v5("微信跳一跳:1.5")

```

```python
from airscript.screen import yolo_v5
# 从文件中加载模型()
yolo = yolo_v5(R(__file__).root("as.ai"))

```

### 检测目标

<b>yolo_v5(model).</b><font color="#3376d0">find_all()</font>

检测屏幕中的所有目标

| 返回结果       | 备注|
| -------------|----:|
| Obj[]   | 结果对象数组 |

| Obj属性       | 备注|
| -------------|----:|
|x  | 目标的x坐标 |
|y  | 目标的y坐标 |
|w  | 目标的宽度 |
|w  | 目标的高度 |
|label  | 目标名称 |
|prob  | 准确度,(0-1之间,1为100%准确) |


```python
from airscript.screen import yolo_v5
# 从模型库中加载
yolo = yolo_v5("微信跳一跳:1.5")

res = yolo.find_all()

if res:
    #打印检测结果
    print(res)

```

### 模型训练

模型训练 有很多种方式

[点这里,学习模型训练](./yolo/yolo_learn.md)



## 文字识别

``` python
# 导包
from airscript.screen import Ocr
```

将屏幕中的文字识别出来

### 构造

<b>Ocr</b><font color="#3376d0">(model_path)</font>

创建一个文字识别对象

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| model_path      | string | 选填 | 模型路径,你可以输入您自定义模型的路径地址<br/> 默认会自动下载 ch_PPOCR-V3模型|

``` python
# 导包
from airscript.screen import Ocr

# 创建一个中英文 PPOCR-V3 识别对象
Ocr()

# 创建一个文字识别对象,并设置模型路径为 /sdcard/mymodel/
Ocr("/sdcard/mymodel/")

```
### 范围
<b>Ocr()</b><font color="#3376d0">.rect(x,y,x1,y1)</font>

<font color="#3376d0">识别指定区域内的文字</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x,y,x1,y1      | string | 必填 | 分别是区域 左上角x坐标,左上角y坐标,右下角x坐标,右下脚y坐标|


</font>

``` python
#导包
from airscript.screen import Ocr # 文字识别

#创建一个文字识别对象,指定屏幕识别范围
Ocr().rect(182,630,853,1261)

```

### 匹配
<b>Ocr()</b><font color="#3376d0">.pattern(regx)</font>

<font color="#3376d0">识别指定区域内的文字</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| regx      | string | 必填 | 匹配的正则表达式<br>如保留字符串中包含IT的识别结果:.\*IT.\* |


</font>

``` python
#导包
from airscript.screen import Ocr # 文字识别

#,指定要匹配的结果中包含 “小程序”
Ocr().pattern(".*小程序.*")

```

### 最大边
<b>Ocr()</b><font color="#3376d0">.max_side_len(max)</font>

<font color="#3376d0">
指定识别资源的最大边长

最大边越小,识别速度越快,但识别准确度越低

最大边越大,识别速度越慢.但识别准确度越高

</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| max      | int | 必填 | 如果指定最大边时,如1200,那么所有输入资源都会同比缩放最大边至1200px,再传入引擎识别 |


</font>

``` python
#导包
from airscript.screen import Ocr # 文字识别

#指定所有输入资源 最大边缩放至1200px 后再识别
Ocr().max_side_len(1200)

```

### 精度
<b>Ocr()</b><font color="#3376d0">.precision(num)</font>

<font color="#3376d0">
识别精度分为 16 和 8 ,默认为16

精度低则识别度低,速度快

精度高则识别度高,速度慢

</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| num      | int | 必填 | 精度有16(默认) 和 8  |


</font>

``` python
#导包
from airscript.screen import Ocr # 文字识别

# 设置识别精度为16
Ocr().precision(16)

```

### 从Bitmap识别
<b>Ocr()</b><font color="#3376d0">.bitmap(bitm)</font>

<font color="#3376d0">识别指定图片中的文件</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| bitm      | Bitmap | 必填 | 该Bitmap 可以从Screen().bitmap()获取 |


</font>

``` python
#导包
from airscript.screen import Ocr, Screen

Ocr().bitmap(Screen.bitmap()).find_all()
```

### 从文件识别
<b>Ocr()</b><font color="#3376d0">.file(path)</font>

<font color="#3376d0">识别指定图片中的文件</font>

<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| path      | string | 必填 | 要识别文件的路径,可使用R.sd() 来获取SD卡中的绝对文件地址 |


</font>

``` python
#导包
from airscript.screen import Ocr # 文字识别
from airscript.system import R # 文字识别

#,指定要识别的文件,为当前工程下的
Ocr().file(R.sd("/airscript/temp.png"))
```

### 识别一个结果
<b>Ocr()</b><font color="#3376d0">.find()</font>

<font color="#3376d0">识别一个返回结果,返回可信度最高的结果.</font>

| 返回结果       | 备注|
| :-------------|----:|
| OcrText    | 属性对象<br>具体属性 见下方代码块 |

``` python
#find 返回的结果对象
OcrText {
	confidence = 0.8111246228218079, # 可信度
    text = '*才',                    # 识别到文本
    text_box_position = [            # 识别到的文本在屏幕上的区域坐标
		[746, 32],
		[908, 32],
		[908, 82],
		[746, 82]
	]
}
```


``` python
#导包
from airscript.screen import Ocr # 文字识别

# 识别一个结果
ot =  Ocr().find()
print(ot)
if ot:
    print(ot.confidence) #可信度
    print(ot.text) #识别到文本
    otRect = ot.text_box_position
    print(otRect)
    # 这里的范围是4个坐标,因为文本在屏幕上可能不是规则的矩形. 因此需要4个点位来确定区域
    print(otRect[0][0],otRect[0][1]) # 左上角顶点x,y 坐标
    print(otRect[1][0],otRect[1][1]) # 右上角顶点x,y 坐标
    print(otRect[2][0],otRect[2][1]) # 右下角顶点x,y 坐标
    print(otRect[3][0],otRect[3][1]) # 左下角顶点x,y 坐标
```

### 识别全部结果

<b>Ocr()</b><font color="#3376d0">.find_all()</font>

<font color="#3376d0">识别全部</font>

| 返回结果       | 备注|
| :-------------|----:|
| OcrText[]    | 属性对象数组<br>具体属性 见下方代码块 |

``` python
#find 返回的结果对象
[
    OcrText {
        confidence = 0.8111246228218079, # 可信度
        text = '小程序',                    # 识别到文本
        text_box_position = [            # 识别到的文本在屏幕上的区域坐标
            [746, 32],
            [908, 32],
            [908, 82],
            [746, 82]
        ]
    },
    OcrText {
        confidence = 0.8111246228218079, # 可信度
        text = '应用',                    # 识别到文本
        text_box_position = [            # 识别到的文本在屏幕上的区域坐标
            [746, 32],
            [908, 32],
            [908, 82],
            [746, 82]
        ]
    }...
]
```


``` python
#导包
from airscript.screen import Ocr # 文字识别

#识别全部
ots =  Ocr().find_all()
print(ots)
if ots:
    # 循环打印出所有识别结果
    for ot in ots:
        print(ot.text) #识别到文本
        print(ot.confidence) #可信度
        otRect = ot.text_box_position
        print(otRect)
        # 这里的范围是4个坐标,因为文本在屏幕上可能不是规则的矩形. 因此需要4个点位来确定区域
        print(otRect[0][0],otRect[0][1]) # 左上角顶点x,y 坐标
        print(otRect[1][0],otRect[1][1]) # 右上角顶点x,y 坐标
        print(otRect[2][0],otRect[2][1]) # 右下角顶点x,y 坐标
        print(otRect[3][0],otRect[3][1]) # 左下角顶点x,y 坐标
```

### 加载更多模型

AirScript OCR 集成的是Paddle Ocrv3



因此我们可以下载 更多的[paddle ocrv3 模型](https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/models_list.md)

<font color="#de5d52">当然也可以加载 通过 paddle ocrv3 训练后的模型</font>

python 传入自定义模型的要求案例:

```python
#如果在手机sd目录下有一个 模型文件夹 my_moudle,那么这个 my_module下必须包含7个子文件
model_path = "/sdcard/my_moule/"
#这样的话,就成功加载了 my_module 这个模型
Ocr(model_path).find_all()

```


如果你要记载其他的模型.

::: warning 加载自定义模型注意事项

请确定传入的模型路径下包含7个文件,并且文件名称如下(文件名称必须更改一致):

- 分类模型文件: 
cls.pdiparams , cls.pdmodel
---
- 检测模型文件:
det.pdiparams , det.pdmodel
---
- 识别模型文件:
rec.pdiparams , rec.pdmodel
---
- 字典文件
keys.txt
--- 
如下图:必须包含 7 个文件

<img src="/img/ocr_custom_model.png" style="width:200px">

:::







## 比色
``` python
# 导包
from airscript.screen import CompareColors
```

对比多个坐标点的颜色 是否与当前屏幕想符

::: tip 比色 和 找色

比色要比找色快很多

:::

### 构造
<b>CompareColors</b><font color="#3376d0">(colors)</font>

<font color="#3376d0">创建一个比色对象</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| colors      | string | 必填 | 颜色参数,一般使用编辑器中的比色工具生成<br> 格式:"x,y,#rgb\|x,y,#rgb" <br>颜色参数 由多组坐标与颜色 构成,每一组颜色之间用‘\|’分割<br>例如:'426,346,#05D395\|502,351,#05D015\|676,569,#05D294' |

</font>

``` python
# 导包
from airscript.screen import CompareColors

# 构造一个CompareColors对象
CompareColors('426,346,#05D395|502,351,#05D015|676,569,#05D294')

```

### 偏色
<b>CompareColors(colors)</b><font color="#3376d0">.diff(color)</font>

<font color="#3376d0">创建一个比色对象</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| color      | string | 必填 | 一个16进制颜色的偏色值,默认为‘#050505’<br> #050505 代表RGB通道分别允许5的偏差 |

</font>

``` python
# 导包
from airscript.screen import CompareColors

# 构造一个CompareColors对象
CompareColors('426,346,#05D395|502,351,#05D015|676,569,#05D294').diff("#050505")

```

### 重复直到成功

<b>CompareColors(colors)</b><font color="#3376d0">.until()</font>

<font color="#3376d0">让比色直到成功才返回结果</font>

``` python
# 导包
from airscript.screen import CompareColors

# 构造一个CompareColors对象,并执行比色,直到返回true为止
CompareColors('426,346,#05D395|502,351,#05D015|676,569,#05D294').until()

```

### 异步执行

<b>CompareColors(colors)</b><font color="#3376d0">.asy(method)</font>

<font color="#3376d0">让比色直到成功才返回结果</font>

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| method      | function | 必填 | 一个python的 回掉函数,函数必须存在一个形式参数,接收比色结果 |

``` python
# 导包
#导包
from airscript.screen import CompareColors 

#比色异步回调函数
def compare_result(res):
    print(res)

#创建一个比色,并使用异步线程执行
CompareColors('321,1515,#4CDAAF|512,1539,#51DBB1').asy(compare_result)

```

### 执行

<b>CompareColors(colors)</b><font color="#3376d0">.compare()</font>

<font color="#3376d0">执行比色返回结果</font>

| 返回结果       | 备注|
| :-------------|----:|
| boolean   | 比色结果,全部正确返回True,否则返回False |

-案例1: 执行比色返回结果
``` python
#导包
from airscript.screen import CompareColors 

#创建一个比色,同步执行比色,直到比对成功
res = CompareColors('321,1515,#4CDAAF|512,1539,#51DBB1').compare()

print(res)

```


-案例2: 异步执行比色返回结果
``` python
#导包
from airscript.screen import CompareColors 

#比色异步回调函数
def compare_result(res):
    print(res)

#创建一个比色,并使用异步线程执行
CompareColors('321,1515,#4CDAAF|512,1539,#51DBB1').asy(compare_result).compare()

```

-案例3: 异步执行比色,直到比对成功后,返回结果
``` python
#导包
from airscript.screen import CompareColors 

#比色异步回调函数
def compare_result(res):
    print(res)

#创建一个比色,并使用异步线程执行,直到比对成功才返回结果
CompareColors('321,1515,#4CDAAF|512,1539,#51DBB1').asy(compare_result).until().compare()

```

-案例4: 阻塞执行比色,直到比对成功后,返回结果


``` python
#导包
from airscript.screen import CompareColors 

#创建一个比色,同步执行比色,直到比对成功
res = CompareColors('321,1515,#4CDAAF|512,1539,#51DBB1').until().compare()

print(res)

```




## 二维码识别
``` python
# 导包
from airscript.screen import QRcode
```

从屏幕或图片中识别二维码

### 构造
<b>QRcode</b><font color="#3376d0">()</font>

<font color="#3376d0">创建一个二维码识别对象</font>


``` python
# 导包
from airscript.screen import QRcode

# 构造一个QRcode对象
QRcode()

```

### 范围

<b>QRcode()</b><font color="#3376d0">.rect(x,y,x1,y1)</font>

<font color="#3376d0">指定识别的屏幕范围</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| x      | int | 必填 | 左上角x坐标 |
| y      | int | 必填 | 左上角y坐标 |
| x1      | int | 必填 | 右上角x坐标 |
| y1      | int | 必填 | 右上角y坐标 |

</font>

``` python
# 导包
from airscript.screen import QRcode

# 构造一个二维码识别对象,并制定要识别的屏幕范围
QRcode().rect(100,200,400,600)

```

### 从文件识别

<b>QRcode()</b><font color="#3376d0">.file(path)</font>

<font color="#3376d0">指定识别的屏幕范围</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| path      | string | 必填 | 文件路径 |

</font>

``` python
# 导包
from airscript.screen import QRcode
from airscript.system import R

# 构造一个QRcode对象,并指定要识别的 图片文件地址
QRcode().file(R.sd("1.png"))

```

### 从Bitmap识别
<b>QRcode()</b><font color="#3376d0">.bitmap(pic)</font>

<font color="#3376d0">指定识别的屏幕范围</font>


<font color="#3376d0">

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|----:|
| pic      | Bitmap | 必填 | Bitmap对象 |

</font>

``` python
# 导包
from airscript.screen import QRcode
from airscript.screen import Screen 

# 构造一个QRcode对象,并指定要识别的内存图片
QRcode().bitmap(Screen.bitmap())

```

### 识别

<b>QRcode()</b><font color="#3376d0">.find()</font>

<font color="#3376d0">识别二维码并返回结果</font>


``` python
#案例1:从屏幕识别二维码
# 导包
from airscript.screen import QRcode

# 构造一个QRcode对象,并指定要识别的内存图片
s = QRcode().find()

# 打印识别的结果
print(s)

```

``` python
#案例2:从屏幕指定范围识别二维码
# 导包
from airscript.screen import QRcode

# 构造一个QRcode对象,并指定要识别的内存图片
s = QRcode().rect(204,739,915,1443).find()

# 打印识别的结果
print(s)
```

``` python
#案例3:从屏幕指定文件识别二维码
# 导包
from airscript.screen import QRcode
from airscript.system import R

# 构造一个QRcode对象,并指定要识别的内存图片
s = QRcode().file(R.sd("2.jpg")).find()

# 打印识别的结果
print(s)
```


``` python
#案例4:从Bitmap 识别二维码
# 导包
from airscript.screen import QRcode
from airscript.screen import Screen

# 构造一个QRcode对象,并指定要识别的内存图片
s = QRcode().bitmap(Screen.bitmap()).find()

# 打印识别的结果
print(s)

```



