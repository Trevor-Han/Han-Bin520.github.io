# 获取BOM属性
## 浏览器高度
document.documentElement.scrollHeight  浏览器所有内容高度；

document.documentElement.scrollTop 始终为0；

document.documentElement.clientHeight  浏览器可视部分高度；

document.body.scrollHeight  浏览器所有内容高度；

document.body.scrollTop  浏览器滚动部分高度；  

document.body.clientHeight  浏览器所有内容高度；
## 元素xxx-height
- clientHeight:元素可视区域的高度，滚动条、border、margin不算在内，padding算在内，
clientHeight = topPadding + bottomPadding + height - 水平滚动条高度。

- offsetHeight:offsetHeight = height + padding + border + 水平滚动条，
offsetHeight不包括伪元素（pseudo-elements， :after, :before ）的高度。

- scrollHeight:如果要不使用scroll，完整显示该元素所需要的高度（包括padding和伪元素，不包括border和margin），
如果元素可以不需要垂直滚动条就完全显示出来，则 scrollHeight = clientHeight。

## 距顶部距离
```js
    let clientHeight = document.documentElement.clientHeight;
   //获取div元素可视区域的高度
    let oDiv2 = document.querySelector(".d2");
    let oDiv2Height = oDiv2.clientHeight;
       window.onscroll = function () {
       let windowScroll = document.documentElement.scrollTop;
       let oHeight =  oDiv2Height - windowScroll;
       if (oHeight <= clientHeight / 2){
           oDiv2.style.background = "#16c196";
       }
       else {
           oDiv2.style.background = "red";
       }
   
       }
```