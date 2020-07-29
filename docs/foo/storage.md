# 客户端存储
## cookie
在H5之前，cookie是主要的存储方式。cookie可以兼容到包括ie6以上的所有浏览器。  
Cookie数据会带到请求头的cookie字段里面，每次同主域名的请求中，都会传递数据，增加了网络请求的数据量，并且造成主域的污染。
同时，cookie在不同浏览器上数量和大小都有限制。  
Cookie的生命周期是根据设置值expire的时间来控制的。
## cookie操作函数 
```js
var cookie = {
        /**设置cookie 
         ** name 标识
         ** value 值
         ** options {
         **   'path': '访问路径',
         **   'domain' : '域名',
         **   'expire' : 过期时间
         }
         **/
        setCookie : function(name,value,options){
          var options = options ? options : {},
              path = options.path ? options.path : '/',
              domain = options.domain ? options.domain : document.domain,
              time = options.expire ? (new Date().getTime() + options.expire * 1000) : '',
              expire = new Date(time).toUTCString();
          document.cookie = encodeURIComponent(name) + "="+ encodeURIComponent(value) + ";expires=" + expire + 
                            ";domain=" + domain + ";path=" + path;
        },
        //获取cookie
        getCookie: function(name){
          var arr,
              reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
          if(arr=document.cookie.match(reg)){
             console.log(arr);
             return unescape(arr[2]);
          }
          return null;
          
        },
        //移除cookie
        removeCookie: function(name){
          var val = this.getCookie(name);
          if(val != null){
            this.setCookie(name,val, {
              expire : - 1
            })
          }
        }
      }
```
## 适用范围
- 需要前后端进行传递的数据（比如用户的登录状态）
- 低版本的浏览器兼容
## sessionStorage和localStorage
- localStorage是存储在用户本地的浏览器上，不像cookie一样携带在http请求头部的字段里面，这有效的节约了带宽。
localStorge同样也采用了同源策略对存储的容量进行了限制，一般限制为同一域名5M，并且不同域名的数据不能相互访问。
### 存储的生命周期
localStorage的存储周期为永久，只要开发者不手动删除，会一直存在。  
sessionStorage的存储周期为当前会话，数据会在浏览器会话（browsing session）结束时被清除，即浏览器关闭时。
### 操作方法
ocalstorage是以key-value的形式进行存储的，H5封装好了localstorage的操作方法

localstorage.length: 获取当前存储的键值对数量

localstorage.key(n):获取第n项的键值

localstorage.getItem(key):获取对应键值的数据

localstorage.setItem(key,value):设置对应的键值对

localstorage.remove(key):清除某个数据

localstorage.clear():清除存储的所有数据

需要注意的是：  
localstorage存储的值只能是字符串的形式，当我们存储数据为引用对象的时候，
会默认调用对象的toString方法，转化为字符串在存储。所以我们在存储数组时，
存储的数据会将数据项以,隔开，解析的时候需要我们分解成为数组再操作。
而对于对象，我们需要用JSON.stringify转化存储，获取数据后再用JSON.parse转化为对象
```js
var mylocalStorage = window.localStorage;

      mylocalStorage.clear();
      mylocalStorage.setItem('test-arry',[1,2,3,4])

      console.log('数组的值',mylocalStorage.getItem('test-arry'));

      //获取数组第一项
       console.log('数组的第一项值',mylocalStorage.getItem('test-arry').split(',')[0]);

      var data = {
        'a' : 1,
        'b' : 3
      }

      var dataStr = JSON.stringify(data);
      mylocalStorage.setItem('test-obj',data)
      console.log('直接存储对象',mylocalStorage.getItem('test-obj'));

      mylocalStorage.setItem('test-str',dataStr)
      console.log('转化后存储对象',mylocalStorage.getItem('test-str'));

      var data = JSON.parse(mylocalStorage.getItem('test-str'));
      console.log('重新解析对象',data);
```
### localStroage的适用范围
localStroage有5M的容量可以存储，所以可以存储一些不需要和服务器进行交互的一些数据。比如导航栏当前的状态，
一些普通的数据进行缓存。甚至我们可以存储html片段，js或者css文件段。由于现在手机端对于localstroage的支持
已经非常完善，有很多应用通过版本控制来存储一些不经常改动的js/css文件。减少用户请求带宽的同时优化整个页
面的加载速度。
## 离线缓存 application cache
应用程序缓存，是从浏览器的缓存中分出来的一块缓存区，要想在这个缓存中保存数据，可以使用一个描述文件（manifest file），
列出要下载和缓存的资源。  
application cache通过mainfest文件指定了缓存的资源，可以使我们的应用在断网的时候也能够使用。  
application cache的使用比较简单，只需要两步

1、服务器端需要维护一个manifest清单

2、Html标签用属性manifest引入文件即可
### Manifest文件
manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

manifest 文件可分为三个部分：

CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存

NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存

FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

## HTML 状态码
HTTP状态码表示客户端HTTP请求的返回结果、标记服务器端的处理是否正常或者是出现的错误，
能够根据返回的状态码判断请求是否得到正确的处理很重要。  
状态码由3位数字和原因短语组
## 状态码分类
1xx	Informational（信息性状态码）	接受的请求正在处理

2xx	Success（成功状态码）	请求正常处理完毕

3xx	Redirection（重定向）	需要进行附加操作以完成请求

4xx	Client error（客户端错误）	客户端请求出错，服务器无法处理请求

5xx	Server Error（服务器错误）	服务器处理请求出错
## 常见状态码
2xx （3种）

200 OK：表示从客户端发送给服务器的请求被正常处理并返回；

204 No Content：表示客户端发送给客户端的请求得到了成功处理，但在返回的响应报文中不含实体的主体部分（没有资源可以返回）；

206 Patial Content：表示客户端进行了范围请求，并且服务器成功执行了这部分的GET请求，响应报文中包含由Content-Range指定范围的实体内容。

3xx （5种）

301 Moved Permanently：永久性重定向，表示请求的资源被分配了新的URL，之后应使用更改的URL；

302 Found：临时性重定向，表示请求的资源被分配了新的URL，希望本次访问使用新的URL；

       301与302的区别：前者是永久移动，后者是临时移动（之后可能还会更改URL）

303 See Other：表示请求的资源被分配了新的URL，应使用GET方法定向获取请求的资源；

      302与303的区别：后者明确表示客户端应当采用GET方式获取资源

304 Not Modified：表示客户端发送附带条件（是指采用GET方法的请求报文中包含if-Match、If-Modified-Since、If-None-Match、If-Range、If-Unmodified-Since中任一首部）的请求时，服务器端允许访问资源，但是请求为满足条件的情况下返回改状态码；

307 Temporary Redirect：临时重定向，与303有着相同的含义，307会遵照浏览器标准不会从POST变成GET；（不同浏览器可能会出现不同的情况）；

4xx （4种）

400 Bad Request：表示请求报文中存在语法错误；

401 Unauthorized：未经许可，需要通过HTTP认证；

403 Forbidden：服务器拒绝该次访问（访问权限出现问题）

404 Not Found：表示服务器上无法找到请求的资源，除此之外，也可以在服务器拒绝请求但不想给拒绝原因时使用；

5xx （2种）

500 Inter Server Error：表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；

503 Server Unavailable：表示服务器暂时处于超负载或正在进行停机维护，无法处理请求；