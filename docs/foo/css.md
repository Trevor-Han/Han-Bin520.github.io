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