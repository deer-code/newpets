import{_ as e}from"./chunks/ArticleMetadata.EniEqKqn.js";import{_ as h,D as k,o as n,c as r,I as d,w as o,k as l,a as c,R as g,b as C,e as y}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const F="/assets/202210282235156.piJI5yLy.png",D="/assets/202210282236211.o-8CIAKg.png",b=JSON.parse('{"title":"Docker 安装 MinIO 详细步骤","description":"","frontmatter":{"title":"Docker 安装 MinIO 详细步骤","author":"查尔斯","date":"2022/10/28 22:37","categories":["杂碎逆袭史"],"tags":["MinIO","Docker","容器"],"showComment":false},"headers":[],"relativePath":"categories/fragments/2022/10/28/Docker安装MinIO.md","filePath":"categories/fragments/2022/10/28/Docker安装MinIO.md","lastUpdated":1722413097000}'),m={name:"categories/fragments/2022/10/28/Docker安装MinIO.md"},A=l("h1",{id:"docker-安装-minio-详细步骤",tabindex:"-1"},[c("Docker 安装 MinIO 详细步骤 "),l("a",{class:"header-anchor",href:"#docker-安装-minio-详细步骤","aria-label":'Permalink to "Docker 安装 MinIO 详细步骤"'},"​")],-1),E=g(`<div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>笔者下面的步骤及配置是基于指定版本的实践，大多数程序大多数情况下在相差不大的版本时可以直接参考。（当然了，即使是非 Docker 方式安装程序也是一样道理）</p></div><h2 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-label="Permalink to &quot;拉取镜像&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>拉取镜像时需要明确镜像版本（Tag）。</p></div><p>不指定版本（Tag）就拉取镜像，那拉取下来的镜像版本（Tag）默认是 <code>latest</code>（最新的）。<code>latest</code> 会跟随 Docker Registry 中的记录变化，现在拉取下来的 <code>latest</code> 是 x1 版本，但隔了一段时间后你在其他机器上再拉取 <code>latest</code> 可能就是 x2 版本了。</p><p>变化的版本，不利于生产环境部署的稳定。无论是后续在其他环境部署还是扩容集群等场景均要求根据架构要求指定好版本。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-label="Permalink to &quot;运行容器&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p><strong>下方的配置，切记要根据个人实际情况来修改。</strong></p></div><ul><li>容器的名称</li><li>镜像名称:版本</li><li>是否设置自启动？</li><li>是否端口映射？</li><li>环境变量配置</li><li>映射的话映射到宿主机哪个端口？</li><li>是否挂载卷？</li><li>挂载的话要挂载宿主机哪个目录？</li><li>......</li><li>等自定义配置</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_ACCESS_KEY：用户名，默认为 minioadmin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_SECRET_KEY：用户密码，默认为 minioadmin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_COMPRESS：开启压缩 on 开启 off 关闭</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_COMPRESS_EXTENSIONS：扩展名 .pdf,.doc 为空 所有类型均压缩</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_COMPRESS_MIME_TYPES：mime 类型 application/pdf 为空 所有类型均压缩</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_SERVER_URL：HTTPS 需要指定服务域名，例如：https://xxx.com:9000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MINIO_BROWSER_REDIRECT_URL：HTTPS 需要指定服务域名，例如：https://xxx.com:9001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">minio</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--restart=always </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">TZ=&quot;Asia/Shanghai&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">MINIO_ACCESS_KEY=&quot;minioadmin&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">MINIO_SECRET_KEY=&quot;minioadmin&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">MINIO_COMPRESS=&quot;off&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">MINIO_COMPRESS_EXTENSIONS=&quot;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">MINIO_COMPRESS_MIME_TYPES=&quot;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-p </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">9000</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:9000</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 9001</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:9001</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/minio/conf:/root/.minio</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/minio/data:/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">server </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">--address</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;:9000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --console-address</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;:9001&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /data</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 使用该参数，容器内的 root 用户才拥有真正的 root 权限</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--privileged</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span></code></pre></div><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h2><p>服务器开放好相应端口或设置好安全组规则后，访问 <code>http://宿主机IP:映射的端口</code> （例如按上方配置那就是：<a href="http://xn--IP-wz2c754c5qn:9001" target="_blank" rel="noreferrer">http://宿主机IP:9001</a>）即可看到 MinIO 管理界面。</p><p><img src="`+F+'" alt="202210282235156"></p><p>输入你刚才指定的用户名、密码，登录进来后，可以看到当前一个 Bucket 也没有，可以点击右侧的 [Create Bucket] 来创建。</p><p><img src="'+D+`" alt="202210282236211"></p><h2 id="docker-compose脚本" tabindex="-1">Docker Compose脚本 <a class="header-anchor" href="#docker-compose脚本" aria-label="Permalink to &quot;Docker Compose脚本&quot;">​</a></h2><p>如果你是用的 docker-compose 来安装，下方附上相应 docker-compose.yml 脚本内容。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  minio</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">minio</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">minio/minio:RELEASE.2022-08-02T23-59-16Z.fips</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      MINIO_ACCESS_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">minioadmin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      MINIO_SECRET_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">minioadmin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # HTTPS 需要指定域名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      #MINIO_SERVER_URL: &#39;https://xxx.com:9000&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      #MINIO_BROWSER_REDIRECT_URL: &#39;https://xxx.com:9001&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # 开启压缩 on 开启 off 关闭</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      MINIO_COMPRESS</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;off&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # 扩展名 .pdf,.doc 为空 所有类型均压缩</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      MINIO_COMPRESS_EXTENSIONS</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # mime 类型 application/pdf 为空 所有类型均压缩</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      MINIO_COMPRESS_MIME_TYPES</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">9000:9000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">9001:9001</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/minio/conf:/root/.minio</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/minio/data:/data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">server --address &#39;:9000&#39; --console-address &#39;:9001&#39; /data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    privileged</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span></code></pre></div><p>编写好 docker-compose.yml 脚本后，在脚本同级目录执行下方命令即可。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span></span></code></pre></div>`,20);function _(s,u,B,I,S,M){const t=e,p=k("ClientOnly");return n(),r("div",null,[A,d(p,null,{default:o(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),C(t,{key:0,article:s.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),E])}const R=h(m,[["render",_]]);export{b as __pageData,R as default};
