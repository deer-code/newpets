import{_ as l}from"./chunks/ArticleMetadata.EniEqKqn.js";import{_ as p,D as e,o as h,c as r,I as d,w as F,k,a as A,R as g,b as y,e as C}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const T=JSON.parse('{"title":"一条SQL查询今年每月统计信息","description":"","frontmatter":{"title":"一条SQL查询今年每月统计信息","author":"查尔斯","date":"2021/11/22 18:22","categories":["方案春秋志"],"tags":["SQL"]},"headers":[],"relativePath":"categories/solutions/2021/11/22/一条SQL查询今年每月统计信息.md","filePath":"categories/solutions/2021/11/22/一条SQL查询今年每月统计信息.md","lastUpdated":1722413097000}'),D={name:"categories/solutions/2021/11/22/一条SQL查询今年每月统计信息.md"},E=k("h1",{id:"一条sql查询今年每月统计信息",tabindex:"-1"},[A("一条SQL查询今年每月统计信息 "),k("a",{class:"header-anchor",href:"#一条sql查询今年每月统计信息","aria-label":'Permalink to "一条SQL查询今年每月统计信息"'},"​")],-1),o=g('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 前不久，笔者介绍过一种统计近 N 天记录数的需求解决方案。今天，笔者再介绍一种也很常见的统计需求。</p><div class="info custom-block"><p class="custom-block-title">示例需求： 统计今年每月的注册用户数。</p><p>你可以基于这个示例需求，去完成各种类似的月统计需求。而且啊，笔者今天这个需求解决方案的重点是在 SQL 上，这类需求问题在 SQL 语句笔试上也挺常见，所以下回再见到类似的需求，你可以好好回想下本篇实现。</p></div><h2 id="涉及技术栈" tabindex="-1">涉及技术栈 <a class="header-anchor" href="#涉及技术栈" aria-label="Permalink to &quot;涉及技术栈&quot;">​</a></h2><ul><li>Spring Boot 2.3.1.RELEASE</li><li>MyBatis Plus 3.1.0（使用了 MyBatis Plus 的代码生成器）</li><li>MySQL 5.6</li></ul><h2 id="controller层" tabindex="-1">Controller层 <a class="header-anchor" href="#controller层" aria-label="Permalink to &quot;Controller层&quot;">​</a></h2><p>略</p><h2 id="service层" tabindex="-1">Service层 <a class="header-anchor" href="#service层" aria-label="Permalink to &quot;Service层&quot;">​</a></h2><p>略</p><h2 id="dao层" tabindex="-1">DAO层 <a class="header-anchor" href="#dao层" aria-label="Permalink to &quot;DAO层&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>记得要采用 LinkedHashMap，这样可以保证结果集的有序，即：1月、2月、......。</p></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Select</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    &quot;SELECT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;1&#39; THEN 1 ELSE 0 END) AS `1月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;2&#39; THEN 1 ELSE 0 END) AS `2月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;3&#39; THEN 1 ELSE 0 END) AS `3月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;4&#39; THEN 1 ELSE 0 END) AS `4月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;5&#39; THEN 1 ELSE 0 END) AS `5月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;6&#39; THEN 1 ELSE 0 END) AS `6月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;7&#39; THEN 1 ELSE 0 END) AS `7月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;8&#39; THEN 1 ELSE 0 END) AS `8月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;9&#39; THEN 1 ELSE 0 END) AS `9月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;10&#39; THEN 1 ELSE 0 END) AS `10月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    	&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;11&#39; THEN 1 ELSE 0 END) AS `11月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   		&quot;SUM(CASE MONTH(`create_time`) WHEN &#39;12&#39; THEN 1 ELSE 0 END) AS `12月`,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    &quot;FROM `t_user`&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    &quot;WHERE YEAR(`create_time`)= YEAR(NOW())&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">LinkedHashMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">String, Integer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> countRegisterByMonth</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span></code></pre></div><h2 id="sql语句" tabindex="-1">SQL语句 <a class="header-anchor" href="#sql语句" aria-label="Permalink to &quot;SQL语句&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>这条 SQL 的思路就是将每条记录的 create_time（创建时间）求一下月份信息，求出的月份如果是对应的月份，那么就记为 1，否则记为 0，这样每月最后再做个 SUM 求和，就可以快速得到对应月份的记录数量了，不用 COUNT 依然可以计数。</p><p>SQL语句单独放在下面，方便各位同学复制。😄</p></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"># 统计今年每月的注册用户数</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">SELECT</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;1&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `1月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;2&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `2月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;3&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `3月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;4&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `4月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;5&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `5月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;6&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `6月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;7&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `7月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;8&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `8月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;9&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `9月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;10&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `10月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;11&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `11月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	SUM</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CASE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> MONTH</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHEN</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;12&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> THEN</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ELSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> END</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `12月`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> `t_user`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> # 根据自身需要确定实际业务表</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> YEAR</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`create_time`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> YEAR</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span></code></pre></div>',15);function c(s,B,S,N,u,H){const t=l,n=e("ClientOnly");return h(),r("div",null,[E,d(n,null,{default:F(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(h(),y(t,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),o])}const q=p(D,[["render",c]]);export{T as __pageData,q as default};
