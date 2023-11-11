import{_ as l,r as d,o,c as p,f as c,d as n,e as s,b as t,w as e,a as i}from"./app-5de84421.js";const r={},u=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h1>`,2),v=i(`<h2 id="环境与资源" tabindex="-1"><a class="header-anchor" href="#环境与资源" aria-hidden="true">#</a> 环境与资源</h2><p>R</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当前工程环境</p><h3 id="sd卡路径" tabindex="-1"><a class="header-anchor" href="#sd卡路径" aria-hidden="true">#</a> SD卡路径</h3><ul><li>静态方法</li></ul>`,6),h=n("p",null,"获取SD卡路径,在Android系统中,我们对SD具有访问权限.大多数时候,会把文件存入SD卡",-1),m=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"right"}},"必须"),n("th",{style:{"text-align":"left"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"childpath"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"right"}},"选填"),n("td",{style:{"text-align":"left"}},"sd卡下的子目录.默认返回SD卡根目录")])])],-1),k=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"返回结果"),n("th",{style:{"text-align":"right"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"string"),n("td",{style:{"text-align":"right"}},"sd卡文件的绝对路径")])])],-1),b=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R

<span class="token comment">#获取SD卡根路径 绝对路径</span>
path <span class="token operator">=</span> R<span class="token punctuation">.</span>sd<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">#获取SD/Airscript 绝对路径</span>
path <span class="token operator">=</span> R<span class="token punctuation">.</span>sd<span class="token punctuation">(</span><span class="token string">&quot;/Airscript&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><ul><li>静态方法</li></ul>`,3),y=n("p",null,"获取Android context 上下文",-1),g=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"返回结果"),n("th",{style:{"text-align":"right"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"Context"),n("td",{style:{"text-align":"right"}},"在Android 环境中,很多方法需要使用 context")])])],-1),_=n("hr",null,null,-1),f=n("h3",{id:"工程目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#工程目录","aria-hidden":"true"},"#"),s(" 工程目录")],-1),x=n("ul",null,[n("li",null,"R成员方法")],-1),w=n("strong",null,"file",-1),D=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"right"}},"必须"),n("th",{style:{"text-align":"left"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"childpath"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"right"}},"选填"),n("td",{style:{"text-align":"left"}},"相对于根目录的子目录,默认,返回根目录")])])],-1),R=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"返回结果"),n("th",{style:{"text-align":"right"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"string"),n("td",{style:{"text-align":"right"}},"绝对路径")])])],-1),A=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R

<span class="token comment">#获取当前工程根目录绝对路径</span>
path <span class="token operator">=</span> R<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">.</span>root<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">#获取当前工程下的__init__.py 的绝对路径</span>
path <span class="token operator">=</span> R<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">.</span>root<span class="token punctuation">(</span><span class="token string">&quot;__init__.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="res目录" tabindex="-1"><a class="header-anchor" href="#res目录" aria-hidden="true">#</a> res目录</h3><ul><li>R成员方法</li></ul>`,3),P=n("strong",null,"file",-1),C=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"right"}},"必须"),n("th",{style:{"text-align":"left"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"childpath"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"right"}},"选填"),n("td",{style:{"text-align":"left"}},"相对于res的子目录,默认,返回资源目录")])])],-1),q=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"返回结果"),n("th",{style:{"text-align":"right"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"string"),n("td",{style:{"text-align":"right"}},"绝对路径")])])],-1),S=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R

<span class="token comment">#获取资源目录绝对路径</span>
path <span class="token operator">=</span> R<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">.</span>res<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">#获取资源目录下/img/a.png 的绝对路径</span>
path <span class="token operator">=</span> R<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">.</span>res<span class="token punctuation">(</span><span class="token string">&quot;/img/a.png&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h3>`,3),N=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R

R<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启" aria-hidden="true">#</a> 重启</h3>`,2),I=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R

R<span class="token punctuation">.</span>reboot<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设备信息" tabindex="-1"><a class="header-anchor" href="#设备信息" aria-hidden="true">#</a> 设备信息</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取运行设备的基础信息</p><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3>`,5),V=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">设备出厂序列号,每一台手机的序列号都不一样</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment"># 获取设备唯一ID</span>
<span class="token builtin">id</span> <span class="token operator">=</span> Device<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="屏幕信息" tabindex="-1"><a class="header-anchor" href="#屏幕信息" aria-hidden="true">#</a> 屏幕信息</h3>`,3),j=i(`<table><thead><tr><th>返回结果</th><th>属性</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>DisplayMetrics</td><td></td><td style="text-align:right;">屏幕信息</td></tr><tr><td></td><td>heightPixels</td><td style="text-align:right;">屏幕的高度,单位像素</td></tr><tr><td></td><td>widthPixels</td><td style="text-align:right;">屏幕的宽度,单位像素</td></tr><tr><td></td><td>density</td><td style="text-align:right;">屏幕密度</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment"># 获取屏幕信息对象</span>
display <span class="token operator">=</span> Device<span class="token punctuation">.</span>display<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 获取屏幕高度(像素)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>display<span class="token punctuation">.</span>heightPixels<span class="token punctuation">)</span>
<span class="token comment"># 获取屏幕宽度(像素)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>display<span class="token punctuation">.</span>widthPixels<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="名称" tabindex="-1"><a class="header-anchor" href="#名称" aria-hidden="true">#</a> 名称</h3>`,3),B=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">屏幕信息</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment"># 获取设备名称</span>
name <span class="token operator">=</span> Device<span class="token punctuation">.</span>name<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="品牌" tabindex="-1"><a class="header-anchor" href="#品牌" aria-hidden="true">#</a> 品牌</h3>`,3),L=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">设备信息</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment">#设备品牌</span>
brand <span class="token operator">=</span>  Device<span class="token punctuation">.</span>brand<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>brand<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="型号" tabindex="-1"><a class="header-anchor" href="#型号" aria-hidden="true">#</a> 型号</h3>`,3),E=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">设备信息</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment">#获取设备型号</span>
model <span class="token operator">=</span>  Device<span class="token punctuation">.</span>model<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="android版本" tabindex="-1"><a class="header-anchor" href="#android版本" aria-hidden="true">#</a> android版本</h3>`,3),M=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">设备信息</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment">#获取设备android版本</span>
sdk <span class="token operator">=</span>  Device<span class="token punctuation">.</span>sdk<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sdk<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设备版本" tabindex="-1"><a class="header-anchor" href="#设备版本" aria-hidden="true">#</a> 设备版本</h3>`,3),T=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">设备信息</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment">#获取设备版本</span>
version <span class="token operator">=</span>  Device<span class="token punctuation">.</span>version<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>version<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> ip</h3>`,3),z=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>string</td><td style="text-align:right;">设备信息</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

<span class="token comment">#获取设备ip</span>
ip <span class="token operator">=</span>  Device<span class="token punctuation">.</span>ip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="当前运行信息" tabindex="-1"><a class="header-anchor" href="#当前运行信息" aria-hidden="true">#</a> 当前运行信息</h3>`,3),F=i(`<table><thead><tr><th>返回结果</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td>AppInfo</td><td style="text-align:right;">该对象包含三个属性:<br>name:app的名称<br>packageName:app的包名<br>activity:当前app的activity</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Device

info <span class="token operator">=</span> Device<span class="token punctuation">.</span>currentAppInfo<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 打印,当前运行APP的名称</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token comment"># 打印,当前运行APP的包名</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>packageName<span class="token punctuation">)</span>
<span class="token comment"># 打印,当前运行APP的页面名称</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>activity<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="剪贴板" tabindex="-1"><a class="header-anchor" href="#剪贴板" aria-hidden="true">#</a> 剪贴板</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Clipboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过剪贴板,存入数据,与读取数据.</p><h3 id="存入" tabindex="-1"><a class="header-anchor" href="#存入" aria-hidden="true">#</a> 存入</h3>`,6),G=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"right"}},"必须"),n("th",{style:{"text-align":"left"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"msg"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"right"}},"必填"),n("td",{style:{"text-align":"left"}},"存入剪贴板的数据")])])],-1),H=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Clipboard

<span class="token comment"># 存入剪贴板</span>
Clipboard<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token string">&quot;自在老师&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取" tabindex="-1"><a class="header-anchor" href="#读取" aria-hidden="true">#</a> 读取</h3>`,2),J=i(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> Clipboard

<span class="token comment"># 从剪贴板读取数据</span>
msg <span class="token operator">=</span> Clipboard<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function K(O,Q){const a=d("font");return o(),p("div",null,[u,c(` ## 打印

print(msg...)

打印函数 延用 Python 基础打印函数 print

### 打印回调
\`\`\` python
# 包
from airscript.system.out import Print
\`\`\`
- 静态方法

Print<font color="#3376d0">.listen(py function)</font>

当调用 print 后,回调函数回返回print日志的json字符串

| 参数        | 类型           | 必须  | 备注|
| ------------- |:-------------:| -----:|:----|
| py function      | python函数 | 必填 | python 函数 必须定义一个形参来接收数据 |

\`\`\` python
def printListener(obj):
    #这是print 的回调函数
    #obj 是返回的json数据对象.

Print.listen(printListener)
\`\`\`
 `),v,n("p",null,[s("R"),t(a,{color:"#3376d0"},{default:e(()=>[s(".sd(childpath)")]),_:1})]),h,t(a,{color:"#3376d0"},{default:e(()=>[m]),_:1}),t(a,{color:"#3376d0"},{default:e(()=>[k]),_:1}),b,n("p",null,[s("R"),t(a,{color:"#3376d0"},{default:e(()=>[s(".context()")]),_:1})]),y,t(a,{color:"#3376d0"},{default:e(()=>[g]),_:1}),_,f,x,n("p",null,[s("R("),w,s(")"),t(a,{color:"#3376d0"},{default:e(()=>[s(".root(childpath)")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("获取工程根目录(__init__.py,__init__.pyc 文件所存在的位置)")]),_:1}),t(a,{color:"#3376d0"},{default:e(()=>[D]),_:1}),t(a,{color:"#3376d0"},{default:e(()=>[R]),_:1}),A,n("p",null,[s("R("),P,s(")"),t(a,{color:"#3376d0"},{default:e(()=>[s(".res(childpath)")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("获取res资源目录路径")]),_:1}),t(a,{color:"#3376d0"},{default:e(()=>[C]),_:1}),t(a,{color:"#3376d0"},{default:e(()=>[q]),_:1}),S,n("p",null,[s("R"),t(a,{color:"#3376d0"},{default:e(()=>[s(".exit()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("终止当前小程序")]),_:1}),N,n("p",null,[s("R"),t(a,{color:"#3376d0"},{default:e(()=>[s(".reboot()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("重启小程序")]),_:1}),I,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".id()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("设备唯一id,该方法会获取deviceID,如果返回空.我们还会获取Android ID进行返回.")]),_:1}),V,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".display()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("获取屏显信息")]),_:1}),j,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".name()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("设备名称(开发者,设备名称中显示的信息)")]),_:1}),B,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".brand()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("设备品牌")]),_:1}),L,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".model()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("设备型号")]),_:1}),E,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".sdk()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("当前设备的Android版本")]),_:1}),M,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".version()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("当前设备版本")]),_:1}),T,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".ip()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("当前设备ip地址")]),_:1}),z,n("p",null,[s("Device"),t(a,{color:"#3376d0"},{default:e(()=>[s(".currentAppInfo()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("获取设备当前运行的App信息")]),_:1}),F,n("p",null,[s("Clipboard"),t(a,{color:"#3376d0"},{default:e(()=>[s(".put(msg)")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("将数据存入剪贴板")]),_:1}),t(a,{color:"#3376d0"},{default:e(()=>[G]),_:1}),H,n("p",null,[s("Clipboard"),t(a,{color:"#3376d0"},{default:e(()=>[s(".get()")]),_:1})]),t(a,{color:"#3376d0"},{default:e(()=>[s("读取剪贴板数据")]),_:1}),J])}const W=l(r,[["render",K],["__file","system.html.vue"]]);export{W as default};
