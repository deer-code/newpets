import{_ as n}from"./chunks/ArticleMetadata.EniEqKqn.js";import{_ as c,D as m,o as e,c as _,I as d,w as h,k as a,a as s,t as g,R as i,b as u,e as P}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const b="/assets/202103061725199.Z-zuHu_y.jpg",f="/assets/202103061725222.-mn9oE6x.png",v="/assets/202103061725333.pdQp1HbG.png",w="/assets/202103061725566.9OywKihZ.png",k="/assets/202103061725666.wxwj8sAV.png",T="/assets/202103061725677.v-47iIwi.png",A="/assets/202103061725777.NHiGSPtJ.png",S="/assets/202103061725888.REx7QEiT.png",q="/assets/202103061725999.2Zv-Ar4E.png",x="/assets/202103061726166.lldUEmz4.png",O="/assets/202103061726266.jnXhtMIW.png",y="/assets/202103061726366.hVu1KEy7.png",C="/assets/202103061726566.l_rUrrXC.png",I="/assets/202103061726666.kYErV5ic.png",G="/assets/202103061726777.17qa-I9L.png",E="/assets/202103061726888.6TH4BNJR.png",L="/assets/202103061726999.CkRBcukt.png",N="/assets/202103061727122.YfSNsp4B.png",R="/assets/202103061727222.1RjoDJtW.png",V="/assets/202103061727366.gxNOiHTI.png",B="/assets/202103061727521.g-6huTPa.png",D="/assets/202103061727616.pX2c9wgE.png",M="/assets/202103061727717.r7YTRxFR.png",Q="/assets/202103061727818.EFbDrQgs.png",H="/assets/202103061727919.RuuDvRAs.png",J="/assets/202103061728199.xaOOBXBZ.png",U="/assets/202103061728299.DdSfkcB5.png",$="/assets/202103061728399.Jniuj51S.png",X="/assets/202103061728599.UMbuo08G.png",j="/assets/202103061728699.ytn7MP9S.png",rt=JSON.parse('{"title":"Postman 快速入门","description":"","frontmatter":{"title":"Postman 快速入门","author":"查尔斯","date":"2021/03/06 17:55","categories":["工具四海谈"],"tags":["Java","API"]},"headers":[],"relativePath":"categories/tools/2021/03/06/Postman快速入门.md","filePath":"categories/tools/2021/03/06/Postman快速入门.md","lastUpdated":1722413097000}'),W={name:"categories/tools/2021/03/06/Postman快速入门.md"},Z=a("h1",{id:"postman-快速入门",tabindex:"-1"},[s("Postman 快速入门 "),a("a",{class:"header-anchor",href:"#postman-快速入门","aria-label":'Permalink to "Postman 快速入门"'},"​")],-1),z=i('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>近两年前后端分离开发成为了主流趋势，前端可以专心实现自己的客户端样式和交互，而后端可以更多关注业务逻辑的处理。</p><p>在后端开发了接口之后，需要进行测试工作，而由于前端的拆分，这回想要测试一下，可没有相应的页面能够提供功能入口了。</p><p>莫非，要通过浏览器地址栏来进行测试？但这些接口又不仅仅是 GET 请求方式。而且，有些接口的要求很是复杂，需要传递请求头或更为复杂的参数。再不成，后端自己写个简单页面 demo 来进行测试？那也太 Low 了！</p><p>本篇，笔者就要为后端开发推荐一款强大的测试工具，这个工具可是笔者从测试那儿 GET 到的。</p><p><img src="'+b+'" alt="202103061725199"></p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Postman 简介</p><p>Postman 是一款功能强大的，网页调试与发送网页 HTTP 请求的工具，通过 Postman 我们可以发送几乎任何请求方式的请求，也可以附带各种类型的请求头、请求参数。</p></div><p><img src="'+f+'" alt="202103061725222"></p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>Postman 最初是谷歌浏览器的一款插件，后来火了之后，人家自己也开发了相应的客户端以及 Web 端。笔者在本篇就以客户端来进行示例使用，你要是不喜欢这两种，也可以去百度找一下它的插件版。</p><p>复制文章最后参考资料 [1] 的地址，然后粘贴到你的 PC 浏览器地址栏，访问之后就可以点击 [Download the App] 按钮，然后根据自己系统情况来进行客户端下载了。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>你点击 [Download the App] 按钮的时候，它会弹出一个下拉框，让你选择 Windows 系统的某个位数版本，然后再开始下载。</p><p>但实际上 Postman 也有 Mac、Linux 系统的版本，就在下载按钮下方 [Not your OS？] 那儿，点击对应系统版本的链接就可以下载了。</p></div><p><img src="'+v+'" alt="202103061725333"></p><p>下载好了，一个平平无奇的 exe 安装包。</p><p><img src="'+w+'" alt="202103061725566"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>双击 exe 安装包，Postman 就会不识抬举的自行完成安装，想必又是装在了 C 盘。</p><p><img src="'+k+'" alt="202103061725666"></p><p>安装完成后，双击桌面上出现的 Postman 图标，打开后的 Postman 首屏如下。</p><p>Postman 在首屏极力推荐我们进行注册，注册后可以实现云端同步备份，如果你有这需求可以创建一个。当然，点击 [Skip and go to the app] 跳过这一步，直接进入主界面也行。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>如果一会儿体验过打算长期使用起来，别忘了注册个账号，还可以云端同步。</p></div><p><img src="'+T+'" alt="202103061725677"></p><p>和最初版本比起来，Postman 更新的还是挺快的，功能也更加丰富了，但对于咱们来讲，只需要重点关注好它的核心功能即可。</p><p><img src="'+A+'" alt="202103061725777"></p><p>安装好后，笔者将带各位同学，学习 Postman 中的三种基本操作，这也是 Postman 在应用主界面首要推荐你尝试的。</p><p>在开始前，我们先准备一个数据接口，笔者这里注册并申请了天行数据的机器人 API [2]，你也可以用自己的项目 API 来进行测试。</p><p><img src="'+S+'" alt="202103061725888"></p><p><img src="'+q+'" alt="202103061725999"></p><h2 id="测试请求" tabindex="-1">测试请求 <a class="header-anchor" href="#测试请求" aria-label="Permalink to &quot;测试请求&quot;">​</a></h2><p>找到 [Overview] 窗口右侧的 [Get started]，然后点击 [Create a request] 来开始创建一个请求。其实你点击 [Overview] 选项卡右侧的 + 号也可以打开创建请求窗口。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>如果你进入主界面后，不小心把 [Overview] 窗口关闭了，可以点击左侧的 [Scratch Pad] 再次打开它。</p></div><p><img src="'+x+'" alt="202103061726166"></p><p>在弹出的创建请求窗口里，提供了丰富的选项，几乎可以满足我们所有的接口测试需求。</p><p><img src="'+O+'" alt="202103061726266"></p><p>接下来我们按照刚才申请的接口要求，来进行请求测试吧。在大多情况下，我们用的最多的就是 GET 请求和 POST 请求，笔者就用 Postman 来分别演示一下。</p><h3 id="get请求" tabindex="-1">GET请求 <a class="header-anchor" href="#get请求" aria-label="Permalink to &quot;GET请求&quot;">​</a></h3><p>按照 API 介绍依次选择并填写好请求方式，请求URL，请求参数，然后点击 [Send] 发送请求即可。</p><p><img src="'+y+'" alt="202103061726366"></p><p>接收到的响应内容默认是以 [Pretty] 漂亮的格式化好的 [JSON] 格式来展示的，你也可以调整为其他数据格式和展示方式。</p><ul><li><p>Pretty：以漂亮的格式化的形式来展示响应数据，支持 JSON、XML、HTML 等数据内容的格式化；</p></li><li><p>Raw：以普通的文本形式来展示响应数据；</p></li><li><p>Preview：以预览的形式来展示响应数据，适合 HTML 格式的响应数据；（在浏览器控制台的网络选项卡中，查看某个网络请求的响应内容也有此种方式）</p><p><img src="'+C+'" alt="202103061726566"></p></li><li><p>Visualize：以可视化的图形来展示响应数据，但这一项需要提前在 Postman 中编写一些测试脚本。</p></li></ul><h3 id="post请求" tabindex="-1">POST请求 <a class="header-anchor" href="#post请求" aria-label="Permalink to &quot;POST请求&quot;">​</a></h3><p>发送 POST 请求也和 GET 差不多，我们也是依次选择并填写好请求方式，请求URL及请求参数。这里的请求参数，需要在请求体部分设置。</p><p>在请求体 [Body] 中选择 [x-www-form-urlencoded] 然后填写请求参数键值对即可。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>这个过程等价于我们在网页上编写一个 form 表单，设置请求方式为 POST，然后对表单设置好 name 和 value 值一样，以 POST 请求方式来提交 form 表单的时候，默认的 enctype (encodetype，规定了 form 表单在发送到服务器时的编码方式) 就是：application/x-www-form-urlencoded。</p></div><p><img src="'+I+'" alt="202103061726666"></p><p>当然，请求体部分还可以设置为其他的格式：</p><ul><li><p>form-data：做文件上传的时候，我们都知道要将请求的 enctype 设置为 multipart/form-data，该选项等价于此；</p><p><img src="'+G+'" alt="202103061726777"></p></li><li><p>raw：该选项下，可以发送任意格式的普通文本数据，例如：Text、JSON、XML、HTML等；</p></li><li><p>binary：该选项等价于设置请求头 Content-Type 为 application/octet-stream，只可以发送二进制数据，t通常用于文件的上传，且只能上传一个，没有像 form-data 格式的键值对；</p><p><img src="'+E+'" alt="202103061726888"></p></li><li><p>GraphQL：顾名思义，该选项支持 GraphQL 查询。</p><div class="tip custom-block"><p class="custom-block-title">GraphQL 简介</p><p>GraphQL 是一种用于 API 的查询语言，GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，通过向你的 API 发出一个 GraphQL 请求就能准确获得你想要的数据，不多不少。[3]<br> 我们定义的 API 在返回数据的时候，需要定义好相应的 DTO 类，否则直接返回实体类，会包含过多不需要的数据，而 GraphQL 可以有效解决此问题。</p></div><p><img src="'+L+'" alt="202103061726999"></p></li></ul><h2 id="创建collection" tabindex="-1">创建Collection <a class="header-anchor" href="#创建collection" aria-label="Permalink to &quot;创建Collection&quot;">​</a></h2><p>我们在测试 API 的时候，有些 API 是属于用户相关的接口，有些是属于用户相关的接口，零零散散的很混乱。Postman 中提供了 collection （集合）的概念，我们通过创建一个个的 collection，就可以在 Postman 中对创建过的请求归类，更方便我们查阅和使用。</p><p>在 [Overview] 窗口，点击右侧 [Get started] 中的 [Create a collection]，就可以开始创建一个 collection 了。也可以点击左侧 [Collections] 菜单界面中的 + 号来开始创建。</p><p><img src="'+N+'" alt="2021030617271226"></p><p>在创建 collection 界面，先为 collection 起个名，然后就可以点击 [Add a request] 来添加请求了，但是点击这个按钮添加请求，是在 collection 中创建一个新请求，我们之前的那些请求咋办？</p><p><img src="'+R+'" alt="202103061727222"></p><p>别着急，打开之前创建过的请求窗口，点击地址栏上的 [Save] 按钮，可以将其保存到指定 collection 中。</p><p><img src="'+V+'" alt="202103061727366"></p><p>在弹出的保存请求对话框中，依次填写请求名称，请求描述，选择好要保存到的 collection，最后点击保存即可。</p><p><img src="'+B+'" alt="202103061727521"></p><p>笔者只是给你打个样儿。你还可以用项目名作为 collection 的名字，然后在 collection 下可以继续创建一个个的文件夹来细分模块，还是挺方便的。</p><p><img src="'+D+'" alt="202103061727616"></p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>如果你不小心关闭过请求窗口，在 Postman 中还可以点击 [History] 菜单找到之前的历史记录。</p></div><h2 id="创建环境" tabindex="-1">创建环境 <a class="header-anchor" href="#创建环境" aria-label="Permalink to &quot;创建环境&quot;">​</a></h2><p>实际项目开发的时候，我们还要准备多套环境：开发环境、测试环境、生产环境...，这些环境的地址等信息是不同的，总不能让我们对相同接口前缀地址换来换去吧。</p><p>当然不能，在 Postman 中可以通过创建 environment 来方便的进行各种环境切换，更加方便了我们对 API 的测试。</p><p>在 [Overview] 窗口，点击右侧 [Get started] 中的 [Create an environment]，就可以开始创建一个环境了。也可以点击左侧 [Environments] 菜单界面中的 + 号来开始创建。</p><p><img src="'+M+'" alt="202103061727717"></p><p>先给环境起个名，然后添加环境变量，为环境变量设置好初始值和当前值，最后保存。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>关于环境变量的初始值和当前值，它俩的区别在于我们开启云端团队协作后，初始值会同步到 Postman 服务器与团队成员共享，当前值则只会存储在本地。默认情况下，你设置了初始值后，当前值会默认设置相同值。</p></div><p><img src="'+Q+'" alt="202103061727818"></p><p>依此类推，你可以再创建一些其他环境。如果用过 Spring Boot 配置文件的 profile 设置，那这应该很好理解的。</p><ul><li>application.yml</li><li>application-dev.yml</li><li>application-prod.yml</li></ul><p><img src="'+H+'" alt="202103061727919"></p>',72),Y=i('<p><img src="'+J+'" alt="202103061728199"></p><p><img src="'+U+'" alt="202103061728299"></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p>[1]Postman 官方下载地址：<a href="https://www.postman.com/downloads/" target="_blank" rel="noreferrer">https://www.postman.com/downloads/</a></p><p>[2]天行数据 天行机器人 API 介绍：<a href="https://www.tianapi.com/apiview/47" target="_blank" rel="noreferrer">https://www.tianapi.com/apiview/47</a></p><p>[3]GraphQL 官网介绍：<a href="https://graphql.cn/" target="_blank" rel="noreferrer">https://graphql.cn/</a></p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p><strong>C：</strong> 好了，关于 Postman 的介绍就到此结束了，笔者介绍的是基础操作，如果你还想了解更多，可以去看看官方文档，在 Postman 中还可以编写测试脚本，配置认证信息用于 OAuth 等协议请求，有需要的时候搜索一下。</p><p><img src="'+$+'" alt="202103061728399"></p><p>其实，除了 Postman 之外，还有一些同类型的工具，例如：ApiPost、Apifox 等，有兴趣和需要的同学也可以去了解一下。</p><p><img src="'+X+'" alt="202103061728599"></p><p><img src="'+j+'" alt="202103061728699"></p>',12);function F(t,K,tt,at,st,pt){const r=n,l=m("ClientOnly");return e(),_("div",null,[Z,d(l,null,{default:h(()=>{var p,o;return[(((p=t.$frontmatter)==null?void 0:p.aside)??!0)&&(((o=t.$frontmatter)==null?void 0:o.showArticleMetadata)??!0)?(e(),u(r,{key:0,article:t.$frontmatter},null,8,["article"])):P("",!0)]}),_:1}),z,a("p",null,[s("这环境定义好后，使用起来也很容易，先用双大括号 "),a("code",null,g(t.环境变量名),1),s(" 替换掉原来 URL 的一些固定值。以后，就可以根据当前的环境需求，点击右上角的 [环境切换] 按钮，来自如切换环境了。")]),Y])}const lt=c(W,[["render",F]]);export{rt as __pageData,lt as default};
