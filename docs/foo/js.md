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
## 跨域问题
- JSONP

原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把
我们需要的json数据作为参数传入。  
由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨
域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。优点是兼容性好，简单易用，支持浏览器与服务器双
向通信。缺点是只支持GET请求。

```javascript
functioncreateJs(sUrl) {
var oScript =document.createElement('script');
oScript.type = 'text/javascript';
oScript.src= sUrl;
document.getElementsByTagName('head')[0].appendChild(oScript);
}
createJs('jsonp.js');
box({
'name': 'test'
});
functionbox(json){
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
