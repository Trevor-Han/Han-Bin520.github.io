# markdown基本语法
## 什么是 Markdown
>Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。
它允许人们「使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档 」
—— 维基百科Markdown具有一系列衍生版本，用于扩展Markdown的功能（如表格、脚注、内嵌
HTML等等），这些功能原初的Markdown尚不具备，它们能让Markdown转换成更多的格式，例如La
TeX，Docbook。Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。
这些衍生版本要么基于工具，如Pandoc；要么基于网站，如GitHub和Wikipedia，在语法上基本
兼容，但在一些语法和渲染效果上有改动。如果你看不懂以上对 Markdown 的定义，那也无所谓。约翰·格鲁伯自己对Markdown的描述的重点也在于
## 标题
- 第一种： 前面带 # h几即前面写几个 #
```markdown
# 一级标签          >     <h1>一级标签</h1>
```
- 第二种： 只能表示一级和二级标题，=和-的数量不限制，大于一个即可
```markdown
 一级标签           >     <h1>一级标签</h1>
=========
```
- 第三种： 和第一种方式不同之处是 添加了结束标签
```markdown
# 一级标题 #                  >      <h1>一级标签</h1>
  ## 二级标题 ##              >      <h2>二级标签</h2>
  ### 三级标题 ###          >      <h3>三级标签</h3>
  ...
```
## 列表
```markdown
### 无序列表
* 1                             · 1       
+ 1            > 预览            · 1
- 1                             · 1  
```
```markdown
<ul>
  <li>1</li>
  <li>1</li>
  <li>1</li>
</ul>
```
```markdown
### 有序列表
1. 列表                            1. 列表     
2. 列表            > 预览          2. 列表
3. 列表                            3. 列表

！数字后面的点只能是英文点
！！有序列表的序号是根据第一行列表的数字顺序来的
```
## 引用
```markdup
加入代码片段 >'这里添加代码片段'
添加分割线 *** | ---
```
## 链接
```markdup
 ### 行内式
 [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)
 <p><a href="https://www.zybuluo.com/cmd/">Windows/Mac/Linux 全平台客户端</a></p>
 ###参数式
 [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/ 'title属性')
 <p><a href="https://www.zybuluo.com/cmd/" title="title属性">Windows/Mac/Linux 全平台客户端</a></p>
```
## 图片
```markdup
![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)
<p><img src="https://www.zybuluo.com/static/img/logo.png" alt="cmd-markdown-logo" title="" /></p>
```
## 代码段
- 单行使用 `` [ 反引号，键盘中esc下面那个键/英文状态下 ]
```markdup
`我是单行文本`
```
- 多行使用 `````` 注意：这里是是前后三个 ```
## 文本样式
```markdup
*字体倾斜*                >        <em>字体倾斜</em>
  _字体倾斜_
  **字体加粗**              >        <strong>字体加粗</strong>
  __字体加粗__
  ~~字体删除~~              >        <del>字体删除</del>

  ! 符号与字体之间不要有空格
```
## 加强代码块
支持四十一种编程语言的语法高亮的显示，行号显示。