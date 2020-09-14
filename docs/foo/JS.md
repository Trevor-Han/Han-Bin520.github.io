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
## 获取滚动条的滚动距离
```js
//第一种方式：当body的overflow为auto或scroll时使用
 $('body,html').scroll(function () {
            let offsetY = $("body").scrollTop() + $("html").scrollTop();
});
//第二种方式：常规使用
 $(window).scroll(function () {
            let offsetY = $("body").scrollTop() + $("html").scrollTop();
});
//第二种方式：offsetY是window的偏移位
 $(window).scroll(function () {
            let offsetY = window.pageYOffset;
});
```
## 获取当前滚动高度，并保存当前高度
```js
  let top = 0;
  let $nav = $("body");
  function getPopup(){
        top = window.pageYOffset;
        $nav.css({
            position:"fixed",
            width:"100%",
            top:-top,
            overflow: "hidden"
        });
        return top;
    }
    function getPopDown(){
        $nav.attr('style',"");
        $nav.css("position","relative");
        window.scrollTo(0, top);
        console.log(window.scrollTo);
        top = 0;
        return false;
    }
```
## 瀑布流
```js
function waterfall(ibox,item) {
        let pos = [],
            $items = $(item),
            fontSize = getComputedStyle(window.document.documentElement)['font-size'].split('px')[0],
            _box_width = $(ibox).width() / fontSize,
            _owidth = $items.eq(0).width() / fontSize + .2,
            _num = Math.floor(_box_width / _owidth);
        let i = 0;
        for (; i < _num; i++) {
            pos.push([i * _owidth, 0]);
        }
        $items.each(function () {
            let _this = $(this),
                _temp = 0,
                _height = _this.height() / fontSize + .23;

            for (let j = 0; j < _num; j++) {
                if (pos[j][1] < pos[_temp][1]) {
                    _temp = j;
                }
            }
            this.style.cssText = 'left:' + (pos[_temp][0] + .20) + 'rem; top:' + pos[_temp][1] + 'rem;';
            pos[_temp][1] = pos[_temp][1] + _height;
            $(ibox).css("height",(pos[_temp][1]+3)+"rem");//动态获设置父类高度
        });
    }
```
## 侧边栏的fixed，不同高度的侧边栏
```js
function sideBerFixed(obj,all) {
    let articlesList = $(obj);
    //获取该div(侧边栏)距离顶部距离
    let sideOffset = articlesList.offset().top;
    //获取该div(侧边栏)所在的父类高度
    let allHeight = $(all).height();
    //获取该div(侧边栏)的高度
    let sideHeight = articlesList.height(); 
    //div(侧边栏)到达父类底部时距离该父类的顶部距离top
    let fixedHeight = allHeight - sideHeight;
    $(window).scroll(function () {
        let scroll = $("html,body").scrollTop();
        //定义一个变量h，判断div(侧边栏)是否到达父类底部
        let h = scroll - fixedHeight- (sideOffset-122) ;
        //滚动条到达div(侧边栏)的高度时，开始执行fixed
        if (scroll > sideOffset-122 && h < 0){
            articlesList.css({
                top:90,
                position:"fixed",
            });
        }
        //div(侧边栏)到达底部，即h>0时，固定div(侧边栏)的top
        else if (h >= 0) {
            articlesList.css({
                top: fixedHeight,
                position:"relative",
            });
        }
        else if (scroll < sideOffset-122) {
            articlesList.css({
                top: 0,
                position:"relative",
            });
        }
    })
}
```
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
## 移动端适配方案
```js
// 纯移动端
let scale = 1.0 / window.devicePixelRatio;
        let text = `<meta name="viewport" content="width=device-width,
                     initial-scale=${scale},
                     maximum-scale=${scale},
                     minimum-scale=${scale},
                     user-scalable=no">`;
        document.write(text);
        document.documentElement.style.fontSize = window.innerWidth / 7.5 + "px";
 ```
 ```js
 // 半移动端
    (function (doc, win) {
         let docEl = doc.documentElement,
             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
             recalc = function () {
                 let clientWidth = docEl.clientWidth;
                 if (!clientWidth) return;
                 if(clientWidth>=750){
                     docEl.style.fontSize = '100px';
                 }else{
                     docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                 }
             };
 
         if (!doc.addEventListener) return;
         win.addEventListener(resizeEvt, recalc, false);
         doc.addEventListener('DOMContentLoaded', recalc, false);
     })(document, window);
  ```
## 跨域问题
- JSONP

原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把
我们需要的json数据作为参数传入。  
由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨
域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。优点是兼容性好，简单易用，支持浏览器与服务器双
向通信。缺点是只支持GET请求。

```javascript
function createJs(sUrl) {
var oScript =document.createElement('script');
oScript.type = 'text/javascript';
oScript.src= sUrl;
document.getElementsByTagName('head')[0].appendChild(oScript);
}
createJs('jsonp.js');
box({
'name': 'test'
});
function box(json){
alert(json.name);
}
```
- CORS  
服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax
进行跨域的访问。

- 修改document.domain来跨子域  
将子域和主域的document.domain设为同一个主域.前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，
否则无法利用document.domain进行跨域,主域相同的使用document.domain。

- 使用window.name来进行跨域  
window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，
每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的。

- window.postMessage方法来跨域传送数据
- 还有flash、在服务器上设置代理页面等跨域方式。个人认为window.name的方法既不复杂，也能兼容到几乎所有浏览器，这真是极好
的一种跨域方法。
## XML和JSON的区别
- 数据体积方面  
JSON相对于XML来讲，数据的体积小，传递的速度更快些。
- 数据交互方面  
JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。
- 数据描述方面  
JSON对数据的描述性比XML较差
- 传输速度方面  
JSON的速度要远远快于XML
