import{_ as a,c as e,o,V as l,a2 as r,a3 as i,a4 as t}from"./chunks/framework.ZLtfu4R2.js";const P=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"guide.md","filePath":"guide.md"}'),s={name:"guide.md"},n=l('<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p><img src="https://img.shields.io/github/v/release/naranyinyun/Apodidae?color=%23773bf9&amp;label=Apodidae&amp;style=flat-square" alt="GitHub release (latest by date)"><br> 本手册提供的任何信息都有在未来的某个时刻更改的可能</p><h1 id="重要信息" tabindex="-1">重要信息 <a class="header-anchor" href="#重要信息" aria-label="Permalink to &quot;重要信息&quot;">​</a></h1><p>Apodidae 不是 Uperf (YC) 的二改，也与 Uperf 没有任何关联，您无法使用 Scene 等可管理 Uperf 的应用管理 Apodidae，如果您不想使用模块，则应使用 Cutoolbox 来实现对 Apodidae 的调控</p><h1 id="兼容性指南" tabindex="-1">兼容性指南 <a class="header-anchor" href="#兼容性指南" aria-label="Permalink to &quot;兼容性指南&quot;">​</a></h1><h2 id="cutoolbox-version" tabindex="-1">Cutoolbox Version <a class="header-anchor" href="#cutoolbox-version" aria-label="Permalink to &quot;Cutoolbox Version&quot;">​</a></h2><p>您必须使用 Cutoolbox 的最新版本</p><p><img src="https://img.shields.io/github/v/release/chenzyyzd/CuprumTurbo-Scheduler?color=%23773bf9&amp;label=Cutoolbox&amp;style=flat-square" alt="GitHub release (latest by date)"></p><h2 id="cpu-controller" tabindex="-1">CPU Controller <a class="header-anchor" href="#cpu-controller" aria-label="Permalink to &quot;CPU Controller&quot;">​</a></h2><p>不兼容其他任何形式的 CPU 调控器，功能冲突<br> 清单：包括但不限于</p><ul><li>Scene 调度</li><li>Uperf</li></ul><h2 id="thread-scheduler" tabindex="-1">Thread Scheduler <a class="header-anchor" href="#thread-scheduler" aria-label="Permalink to &quot;Thread Scheduler&quot;">​</a></h2><p>不兼容任何形式的线程优化/调度，功能冲突<br> 清单：包括但不限于</p><ul><li>A-SOUL</li></ul><h2 id="gpu-controller" tabindex="-1">GPU Controller <a class="header-anchor" href="#gpu-controller" aria-label="Permalink to &quot;GPU Controller&quot;">​</a></h2><p>不兼容任何形式的 GPU 控制器，功能冲突<br> 清单：包括但不限于</p><ul><li>Scene MTK 专属功能内的 GPU 相关选项</li><li>带有 GPU 调控功能的 Uperf</li><li>天玑 GPU 调速器</li></ul><h2 id="voltage-optimization" tabindex="-1">Voltage Optimization <a class="header-anchor" href="#voltage-optimization" aria-label="Permalink to &quot;Voltage Optimization&quot;">​</a></h2><p>兼容 CPU/GPU 的降压应用<br> 清单：包括但不限于</p><ul><li>自由电子 e 天玑降压</li><li>嘟嘟 ski ＆ 秋秋 CPUhvfs</li></ul><p><strong>降压带来的风险和问题与 Apodidae 没有任何间接或直接关系</strong></p><h2 id="unofficial-kernel" tabindex="-1">Unofficial Kernel <a class="header-anchor" href="#unofficial-kernel" aria-label="Permalink to &quot;Unofficial Kernel&quot;">​</a></h2><p>可能不兼容部分第三方内核<br> 内核中无或修改了所需的调度器<br> 清单：包括但不限于</p><ul><li>Pandora Kernel</li></ul><h1 id="怎么用" tabindex="-1">怎么用？ <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用？&quot;">​</a></h1><p>Apodidae 提供了两种使用方式：</p><ul><li>Magisk 模块</li><li>Cutoolbox 配置文件</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Magisk 模块和 Cutoolbox 只能使用其中一种</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Magisk 模块切换模式需要在终端内输入 <code>CuDaemon -R [配置文件路径] [调度模式文件(cur_mode.txt)路径] [调度日志文件生成路径]</code><br> 如需获得更多信息, 请参照上游仓库用法</p></div><h2 id="判断是否生效" tabindex="-1">判断是否生效 <a class="header-anchor" href="#判断是否生效" aria-label="Permalink to &quot;判断是否生效&quot;">​</a></h2><p>导入与 SoC 型号匹配的配置文件后点击上方显示状态的部分即可重启调度<br><strong>除了本网站标注的测试机型，Apodidae 不保证其他同 SoC 机型的可用性</strong> 显示<code>调度正在运行中</code>即为生效</p><h2 id="为什么我的监测数据表示调度未生效" tabindex="-1">为什么我的监测数据表示调度未生效 <a class="header-anchor" href="#为什么我的监测数据表示调度未生效" aria-label="Permalink to &quot;为什么我的监测数据表示调度未生效&quot;">​</a></h2><p>按照兼容性指南排查所有不兼容的应用及其残留</p><h2 id="为什么我的监测数据相对于其他人来说不够优秀" tabindex="-1">为什么我的监测数据相对于其他人来说不够优秀 <a class="header-anchor" href="#为什么我的监测数据相对于其他人来说不够优秀" aria-label="Permalink to &quot;为什么我的监测数据相对于其他人来说不够优秀&quot;">​</a></h2><p>SoC 体质，系统版本等等一大堆东西都会影响监测数据</p><h2 id="免费动物园展出" tabindex="-1">免费动物园展出 <a class="header-anchor" href="#免费动物园展出" aria-label="Permalink to &quot;免费动物园展出&quot;">​</a></h2><p><img src="'+r+'" alt="This is DJ"><br><img src="'+i+'" alt="This is OP"><br><img src="'+t+'" alt="This is Monkey"></p>',37),d=[n];function h(c,u,p,b,m,f){return o(),e("div",null,d)}const q=a(s,[["render",h]]);export{P as __pageData,q as default};