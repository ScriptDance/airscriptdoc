import{_ as l,r as c,o as i,c as u,d as n,b as a,w as o,e as s,a as t}from"./app-5b009630.js";const r={},d=t(`<h1 id="数据" tabindex="-1"><a class="header-anchor" href="#数据" aria-hidden="true">#</a> 数据</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>data 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速存读" tabindex="-1"><a class="header-anchor" href="#快速存读" aria-hidden="true">#</a> 快速存读</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>data <span class="token keyword">import</span> Kv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>快速存读工具,可将键值数据 存储在本地或从本地读取出来.</p><p>常用于一些简单数据存储.</p><h3 id="存储" tabindex="-1"><a class="header-anchor" href="#存储" aria-hidden="true">#</a> 存储</h3>`,7),k=n("b",null,"Kv",-1),m=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"right"}},"必须"),n("th",{style:{"text-align":"right"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"key"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"right"}},"必填"),n("td",{style:{"text-align":"right"}},"数据的id")]),n("tr",null,[n("td",null,"value"),n("td",{style:{"text-align":"center"}},"string,number,boolean"),n("td",{style:{"text-align":"right"}},"必填"),n("td",{style:{"text-align":"right"}},"数据")])])],-1),v=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>data <span class="token keyword">import</span> Kv

<span class="token comment"># 存储string类型</span>
Kv<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;自在&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 存储number类型</span>
Kv<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span>

<span class="token comment"># 存储boolean类型</span>
Kv<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="读取" tabindex="-1"><a class="header-anchor" href="#读取" aria-hidden="true">#</a> 读取</h3>`,3),b=n("b",null,"Kv",-1),h=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"right"}},"必须"),n("th",{style:{"text-align":"right"}},"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"key"),n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"right"}},"必填"),n("td",{style:{"text-align":"right"}},"数据的id")]),n("tr",null,[n("td",null,"defaultvvalue"),n("td",{style:{"text-align":"center"}},"string,number,boolean"),n("td",{style:{"text-align":"right"}},"必填"),n("td",{style:{"text-align":"right"}},"如果数据不存在,返回的默认值. !该值,必须和存储的数据类型一致")])])],-1),g=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>data <span class="token keyword">import</span> Kv

<span class="token comment"># 取string 类型数据</span>
v <span class="token operator">=</span> Kv<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 取number 类型数据</span>
v <span class="token operator">=</span> Kv<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment"># 取boolean 类型数据</span>
v <span class="token operator">=</span> Kv<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="数据库-mysql" tabindex="-1"><a class="header-anchor" href="#数据库-mysql" aria-hidden="true">#</a> 数据库-MySql</h2><p>该模块需要开发者掌握一定的“SQL”语法</p>`,4),y={href:"https://www.runoob.com/sql/sql-tutorial.html",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"小程序开发中,我们需要将大量数据存储在数据库,或从数据库获取数据.",-1),_=n("h3",{id:"账号获取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#账号获取","aria-hidden":"true"},"#"),s(" 账号获取")],-1),f=n("p",null,"AirScript 为各位开发者 提供了 云数据库,免去开发者服务器部署环境.",-1),x={href:"http://py.airscript.cn/admin/db/list",target:"_blank",rel:"noopener noreferrer"},w=t(`<ul><li><ol><li>登录开发者后台,并点击 &quot;数据库&quot;</li></ol></li><li><ol start="2"><li>点击 “新增” 增加数据库账号,与密码</li></ol></li><li><ol start="3"><li>这样你就生成了一个云端Mysql数据库</li></ol></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建成功后得到: 主机地址,端口,用户名,数据库密码,数据库名 .

pymsql连接时需使用.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),j={start:"4"},S={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},E=t(`<img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/开发文档/doc_mysql_create.jpg"><hr><img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/开发文档/doc_des_ceate_mysql_2.jpg"><hr><img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/开发文档/doc_create_mysql3.jpg"><h3 id="导包" tabindex="-1"><a class="header-anchor" href="#导包" aria-hidden="true">#</a> 导包</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h3><p>Airscript 内置 pymysql 包方便对mysql数据库的访问</p><ul><li>连接数据库</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>


<span class="token comment"># 执行完毕后记得关闭db,不然会并发连接失败哦</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3>`,12),K={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},z=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>
 
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;create table stu(id int ,name varchar(20),gender int,age varchar(10))&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment"># 执行完之后要记得关闭游标和数据库连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发现 表已经创建成功了 <img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/开发文档/doc_mysql_createtable.jpg"></p><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3>`,3),L={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>
 
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;INSERT INTO stu ( id, name,gender,age ) VALUES ( 10,&#39;张三&#39;,1,&#39;12岁&#39;)&quot;</span>&quot;<span class="token punctuation">)</span>
db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 不要忘了提交,不然数据上不去哦</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment"># 执行完之后要记得关闭游标和数据库连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过数据库后台,可以看到数据已经上去了.</p><img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/开发文档/doc_mysql_insert.jpg"><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3>`,4),T={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},V=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>
 
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM stu WHERE name = &#39;张三&#39;&quot;</span> <span class="token punctuation">)</span>
results <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 循环遍历所有数据</span>
<span class="token keyword">for</span> row <span class="token keyword">in</span> results<span class="token punctuation">:</span>
    <span class="token comment"># 我们的表数据,总共4列,因此逐个获取每列数据</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>row<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">,</span>row<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>row<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 执行完之后要记得关闭游标和数据库连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改数据" tabindex="-1"><a class="header-anchor" href="#更改数据" aria-hidden="true">#</a> 更改数据</h3>`,2),A={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>
 
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;update stu set age = &#39;99岁&#39; WHERE name = &#39;张三&#39;&quot;</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 不要忘了提交,不然数据上不去哦</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment"># 执行完之后要记得关闭游标和数据库连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://airscript.oss-cn-hangzhou.aliyuncs.com/res/开发文档/doc_mysql_update.jpg"><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3>`,3),M={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},R=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>
 
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># res = cursor.execute(&quot;delete from stu&quot;) # 删除所有数据</span>
res <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;delete from stu where name=&#39;张三&#39;&quot;</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 不要忘了提交,不然数据上不去哦</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment"># 执行完之后要记得关闭游标和数据库连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h3>`,2),B={href:"http://mysql.nspirit.cn",target:"_blank",rel:"noopener noreferrer"},C=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> pymysql

db <span class="token operator">=</span> pymysql<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>
    host<span class="token operator">=</span><span class="token string">&quot;8.140.162.237&quot;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “主机地址”</span>
    port<span class="token operator">=</span><span class="token number">3307</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台,创建的数据库 “端口”</span>
    user<span class="token operator">=</span><span class="token string">&#39;换成自己的用户名&#39;</span><span class="token punctuation">,</span>    <span class="token comment">#开发者后台,创建的数据库 “用户名”</span>
    password<span class="token operator">=</span><span class="token string">&#39;换成自己的密码&#39;</span><span class="token punctuation">,</span>     <span class="token comment">#开发者后台,创建的数据库 “初始密码”</span>
    database <span class="token operator">=</span><span class="token string">&#39;换成自己的&#39;</span><span class="token punctuation">,</span> <span class="token comment">#开发者后台 ,创建的 &quot;数据库&quot;</span>
    charset<span class="token operator">=</span><span class="token string">&#39;utf8mb4&#39;</span>  <span class="token string">&quot;&quot;</span>
<span class="token punctuation">)</span> <span class="token comment">#连接数据库</span>
 
cursor <span class="token operator">=</span> db<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;drop table stu&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 这样这个表就被彻底删除了</span>
db<span class="token punctuation">.</span>commit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># 不要忘了提交,不然数据上不去哦</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment"># 执行完之后要记得关闭游标和数据库连接</span>
cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>



<span class="token comment">## Json</span>

<span class="token comment">### 转换</span>

\`\`\`python
<span class="token comment">#导包 标准json库</span>
<span class="token keyword">import</span> json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在http数据传递,或者对象格式化时候.都需要 Json 和Object 的互相转换.</p><p>我们可以通过Python 的标准json库来完成操作</p>`,3),O={href:"https://docs.python.org/zh-cn/3/library/json.html",target:"_blank",rel:"noopener noreferrer"},F=t(`<h4 id="class-转-json" tabindex="-1"><a class="header-anchor" href="#class-转-json" aria-hidden="true">#</a> class 转 json</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包json</span>
<span class="token keyword">import</span> json

<span class="token comment"># 一个 object 对象</span>
obj <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token string">&#39;a&#39;</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span> <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span> <span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span> <span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span> <span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>

<span class="token comment"># 转换为 json String</span>
jsonstr <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>jsonstr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="json-转-class" tabindex="-1"><a class="header-anchor" href="#json-转-class" aria-hidden="true">#</a> json 转 class</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包json</span>
<span class="token keyword">import</span> json

<span class="token comment"># 一段json 字符串</span>
jsonStr <span class="token operator">=</span> <span class="token string">&#39;[{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3, &quot;d&quot;: 4, &quot;e&quot;: 5}]&#39;</span>

<span class="token comment"># 转换为对象,方便属性访问</span>
obj <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 访问对象中的属性</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function H(J,Q){const p=c("font"),e=c("ExternalLinkIcon");return i(),u("div",null,[d,n("p",null,[k,a(p,{color:"#3376d0"},{default:o(()=>[s(".save(key,value)")]),_:1})]),a(p,{color:"#3376d0"},{default:o(()=>[s("快速存储一对 键值到本地")]),_:1}),a(p,{color:"#3376d0"},{default:o(()=>[m]),_:1}),v,n("p",null,[b,a(p,{color:"#3376d0"},{default:o(()=>[s(".get(key,defaultvvalue)")]),_:1})]),a(p,{color:"#3376d0"},{default:o(()=>[s("快速读取通过key值,读取本地的value值")]),_:1}),a(p,{color:"#3376d0"},{default:o(()=>[h]),_:1}),g,n("p",null,[s("如果你还不会SQL语法,请前往"),n("a",y,[s("https://www.runoob.com/sql/sql-tutorial.html"),a(e)]),s(" 学习相关语法.")]),q,_,f,n("p",null,[s("开发者只需"),n("a",x,[s("注册,登录AirScript"),a(e)]),s(" 开发者账号,即可拥有自己的云端Mysql端数据库.")]),w,n("ul",null,[n("li",null,[n("ol",j,[n("li",null,[s("拿到账号密码,也可以登录"),n("a",S,[s("数据库云端管理后台"),a(e)]),s(" 了,通过这个平台也可以管理数据库哦~")])])])]),E,n("p",null,[s("我们可以配合,"),n("a",K,[s("数据库后台"),a(e)]),s(" 来查看执行结果")]),z,n("p",null,[s("我们可以配合,"),n("a",L,[s("数据库后台"),a(e)]),s(" 来查看执行结果")]),N,n("p",null,[s("我们可以配合,"),n("a",T,[s("数据库后台"),a(e)]),s(" 来查看执行结果")]),V,n("p",null,[s("我们可以配合,"),n("a",A,[s("数据库后台"),a(e)]),s(" 来查看执行结果")]),I,n("p",null,[s("我们可以配合,"),n("a",M,[s("数据库后台"),a(e)]),s(" 来查看执行结果")]),R,n("p",null,[s("我们可以配合,"),n("a",B,[s("数据库后台"),a(e)]),s(" 来查看执行结果")]),C,n("p",null,[s("该库包含很多的 参数与方法,如需查看请点击 "),n("a",O,[s("json文档"),a(e)])]),F])}const P=l(r,[["render",H],["__file","data.html.vue"]]);export{P as default};
