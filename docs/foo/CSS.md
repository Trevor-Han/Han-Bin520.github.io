# css
## 文本溢出处理
```css
/*文本一行溢出处理*/
{
    overflow: hidden;
    text-overflow:ellipsis;
     white-space: nowrap;
}
/*文本多行溢出处理*/
{
display:inline-block;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
}     
```
## 边框问题
```css
/*虚线*/
{
border:1px dashed #000; //黑色虚线边框
}
/*0.5px问题*/
{
transform: scale(.5);
}
/*水平翻转*/
{
 -moz-transform:scaleX(-1);
            -webkit-transform:scaleX(-1);
            -o-transform:scaleX(-1);
            transform:scaleX(-1);
}
```
## 图片文件按钮
```css
.link_button{
     width: 212px;
     height: 47px;
     border-radius: 50px;
     background: #434343;
     margin: 16px auto;
     position: relative;
 }
 .link_button>a{
     position: absolute;
     font-size: 16px;
     line-height: 47px;
     color: white;
     margin-left: 16%;
 }
 .link_button>a>i{
     float: left;
     display: table;
     width: 40px;
     height: 40px;
     margin-top: 5px;
     margin-right: 8px;
     background: #999999; //或图片
     background-size: 70%;
 
 }
```
## 滚动条隐藏并能滚动
```css
/*ie浏览器*/
html{
	-ms-scroll-chaining: chained;
	-ms-overflow-style: none;
	-ms-content-zooming: zoom;
	-ms-scroll-rails: none;
	-ms-content-zoom-limit-min: 100%;
	-ms-content-zoom-limit-max: 500%;
	-ms-scroll-snap-type: proximity;
	-ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
	-ms-overflow-style: none;
	overflow: auto;
}
/*谷歌浏览器*/
html::-webkit-scrollbar {display:none}
```
## 响应式布局
注意,一般我们提到的响应式,都和手机离不开 那说到手机 你就离不开下面的代码；  
user-scalable=no表示解决ipad切换横屏之后触摸才能回到具体尺寸的问题。  
响应式用不同的css样式表来单独编写web、平板和手机的样式，
- 通用：common.css
- web：desktop.css
- 平板：iPad.css
- 手机：mobile.css
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes" />    
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="format-detection" content="telephone=yes"/>
<meta name="msapplication-tap-highlight" content="no" />
```
## 字体响应式
```css

html{font-size:100%;}
/*完成后，你可以定义响应式字体：*/
@media (min-width:640px){body{font-size:1rem;}}
@media (min-width:960px){body{font-size:1.2rem;}}
@media (min-width:1200px){body{font-size:1.5rem;}}
```