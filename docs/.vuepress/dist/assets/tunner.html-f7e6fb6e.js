import{_ as e,r as t,o as p,c as o,d as n,e as s,b as i,a as c}from"./app-a76de4ec.js";const l={},u=n("h1",{id:"通信",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通信","aria-hidden":"true"},"#"),s(" 通信")],-1),r=n("h2",{id:"http",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http","aria-hidden":"true"},"#"),s(" Http")],-1),d={href:"https://requests.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},k=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导包</span>
<span class="token keyword">import</span> requrest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模版" tabindex="-1"><a class="header-anchor" href="#模版" aria-hidden="true">#</a> 模版</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> requests

<span class="token comment"># 请求模版</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span> 
<span class="token comment"># 打印状态Code</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> 
<span class="token comment"># 打印header 中的 content-type</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
<span class="token comment">#打印字符编码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>encoding<span class="token punctuation">)</span> 
<span class="token comment">#打印返回文本内容</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">)</span> 

<span class="token comment"># 如果服务器返回json,可使用以下语句进行json转换</span>
<span class="token comment"># r.json() </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-案例" tabindex="-1"><a class="header-anchor" href="#get-案例" aria-hidden="true">#</a> get 案例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token comment"># 访问天气预报接口</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.weather.com.cn/data/sk/101010100.html&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 进行转码</span>
r<span class="token punctuation">.</span>encoding <span class="token operator">=</span> r<span class="token punctuation">.</span>apparent_encoding
<span class="token comment"># 打印获取的所有文本信息</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
<span class="token comment"># 转换为json对象</span>
obj <span class="token operator">=</span>  r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;weatherinfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;city&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># 获取当前城市名称</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post-案例" tabindex="-1"><a class="header-anchor" href="#post-案例" aria-hidden="true">#</a> post 案例</h3><ul><li>Form 形式发送</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token comment"># 使用post请求获取 ip所属信息</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span><span class="token string">&quot;https://api.oioweb.cn/api/ip/ipaddress&quot;</span><span class="token punctuation">,</span>data <span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;ip&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;114.114.114.114&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 打印一下返回的文本</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># 看文本格式,服务器返回的是json数据,转换为json对象,方便拿属性</span>
obj <span class="token operator">=</span> r<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#获取 ip所在地址</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;disp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Json 形式发送</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token comment"># 访问地址</span>
url <span class="token operator">=</span> <span class="token string">&#39;http://httpbin.org/post&#39;</span>

<span class="token comment"># json 格式化</span>
s <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment"># 发送 post请求</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>s<span class="token punctuation">)</span>

<span class="token comment"># 打印文本</span>
<span class="token keyword">print</span> <span class="token punctuation">(</span>r<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><ul><li>小文件下载</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入http模块</span>
<span class="token keyword">import</span> requests
<span class="token comment"># 导入环境R,方便获取文件路径</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R

<span class="token comment"># 指定下载文件的地址</span>
url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/img/flexible/logo/pc/result@2.png&#39;</span> <span class="token comment"># 目标下载链接</span>

<span class="token comment"># 通过get获取数据</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># 保存文件至sd卡下的1.png</span>
<span class="token keyword">with</span> <span class="token builtin">open</span> <span class="token punctuation">(</span>R<span class="token punctuation">.</span>sd<span class="token punctuation">(</span><span class="token string">&quot;/1.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>大文件下载</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 导入http库</span>
<span class="token keyword">import</span> requests
<span class="token comment"># 导入环境R,方便得到存储文件地址</span>
<span class="token keyword">from</span> airscript<span class="token punctuation">.</span>system <span class="token keyword">import</span> R
<span class="token comment"># 下载文件地址</span>
url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/img/flexible/logo/pc/result@2.png&#39;</span> <span class="token comment"># 目标下载链接</span>

<span class="token comment"># get获取数据,传入stream 分批流形式获取数据</span>
r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> stream<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment"># 打开sd卡文件,准备写入数据</span>
f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>R<span class="token punctuation">.</span>sd<span class="token punctuation">(</span><span class="token string">&quot;/2.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 循环批次写入数据</span>
<span class="token keyword">for</span> chunk <span class="token keyword">in</span> r<span class="token punctuation">.</span>iter_content<span class="token punctuation">(</span>chunk_size<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> chunk<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>

<span class="token comment">#关闭文件</span>
f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2><p>长连接通信通道</p><h3 id="websocket-client" tabindex="-1"><a class="header-anchor" href="#websocket-client" aria-hidden="true">#</a> websocket-client</h3><p>AirScript 内置了 websocket-client Python包</p><p>我们可以使用该方法快速连接某一WebSocketServer</p><p>下面是使用案例:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">from</span> websocket <span class="token keyword">import</span> WebSocketApp

<span class="token keyword">def</span> <span class="token function">on_message</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;####### on_message #######&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;message：%s&quot;</span> <span class="token operator">%</span> message<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">on_error</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;####### on_error #######&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;error：%s&quot;</span> <span class="token operator">%</span> error<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">on_close</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;####### on_close #######&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">on_open</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;####### on_open #######&quot;</span><span class="token punctuation">)</span>


url <span class="token operator">=</span> <span class="token string">&quot;ws://192.168.31.108:10102/log/&quot;</span>

ws <span class="token operator">=</span> WebSocketApp<span class="token punctuation">(</span>url<span class="token punctuation">,</span>
                    on_open<span class="token operator">=</span>on_open<span class="token punctuation">,</span>
                    on_message<span class="token operator">=</span>on_message<span class="token punctuation">,</span>
                    on_error<span class="token operator">=</span>on_error<span class="token punctuation">,</span>
                    on_close<span class="token operator">=</span>on_close<span class="token punctuation">)</span>
ws<span class="token punctuation">.</span>run_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function v(m,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[n("a",d,[s("requests"),i(a)]),s(" 是 Python 的Http 请求库,AirScript中内置了这个库")]),k])}const g=e(l,[["render",v],["__file","tunner.html.vue"]]);export{g as default};
