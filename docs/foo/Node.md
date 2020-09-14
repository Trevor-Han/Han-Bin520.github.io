# Node.js
## Node.js的this为什么是一个空对象
```html
<!--
因为所有的NodeJS文件在执行的时候都会被包裹到一个函数中, this都被修改为了空的module.exports
(function (exports, require, module, __filename, __dirname) {
    // 我们编写的代码
    // 所以说在这里面拿到的this就是 空的module.exports
});
compiledWrapper.call(module.exports, args);
-->
```
 ## NodeJS中为什么可以直接使用exports, require, module, __filename, __dirname
 ```html
 <!--
因为所有的NodeJS文件在执行的时候都会被包裹到一个函数中, 这些属性都被通过参数的形式传递过来了
var args = [module.exports, require, module, filename, dirname];
compiledWrapper.call(this.exports, args);
 -->
 ```
## NodeJS中为什么不能直接exports赋值, 而可以给module.exports赋值
 ```html
 <!--
(function (exports, require, module, __filename, __dirname) {
    exports = "lnj";
});
jsScript.call(module.exports, module.exports);
return module.exports;

相当于
let exports = module.exports;
exports = "lnj";
return module.exports;
 -->
 ```
## 通过require导入包时候应该使用var/let还是const?
 ```html
 <!--
导入包的目的是使用包而不是修改包, 所以导入包时使用const接收
 -->
 ```
## HTTP模块 - 服务器
```js
let http = require("http");
// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
/*
request对象其实是http.IncomingMessage 类的实例
response对象其实是http.ServerResponse 类的实例
* */
server.on("request", function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    // console.log(req.url);
    if(req.url.startsWith("/index")){
        // 注意点: 如果通过end方法来返回数据, 那么只会返回一次
        // res.end("首页1");
        // res.end("首页2");
        // 注意点: 如果通过write方法来返回数据, 那么可以返回多次
        //         write方法不具备结束本次请求的功能, 所以还需要手动的调用end方法来结束本次请求
        res.write("首页1");
        res.write("首页2");
        res.end();
    }else if(req.url.startsWith("/login")){
        res.end("登录");
    }else{
        res.end("没有数据");
    }
});
// 3.指定监听的端口
server.listen(3000);
```

## HTTP模块 - 模板引擎返回动态网页
```js
let http = require("http");
let path = require("path");
let fs = require("fs");
let url = require("url");
let queryString = require("querystring");
let template = require("art-template");

let persons = {
    "lisi": {
        name: "lisi",
        gender: "male",
        age: "33"
    },
    "zhangsan": {
        name: "zhangsan",
        gender: "female",
        age: "18"
    }
};

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request", function (req, res) {
   if(req.url.startsWith("/index") && req.method.toLowerCase() === "get"){
       let obj = url.parse(req.url);
       let filePath = path.join(__dirname, obj.pathname);
       fs.readFile(filePath, "utf8", function (err, content) {
           if(err){
               res.writeHead(404, {
                   "Content-Type": "text/plain; charset=utf-8"
               });
               res.end("Page Not Found");
           }
           res.writeHead(200, {
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(content);
       });
   }
   else if(req.url.startsWith("/info") && req.method.toLowerCase() === "post"){
       let params = "";
       req.on("data", function (chunk) {
           params += chunk;
       });
       req.on("end", function () {
           let obj = queryString.parse(params);
           let per = persons[obj.userName];
           // console.log(per);
           let filePath = path.join(__dirname, req.url);
           /*
           fs.readFile(filePath, "utf8", function (err, content) {
               if(err){
                   res.writeHead(404, {
                       "Content-Type": "text/plain; charset=utf-8"
                   });
                   res.end("Page Not Found");
               }
               content = content.replace("!!!name!!!", per.name);
               content = content.replace("!!!gender!!!", per.gender);
               content = content.replace("!!!age!!!", per.age);
               res.end(content);
           });
            */
           let html = template(filePath, per);
           res.writeHead(200, {
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(html);
       });
   }
});
// 3.指定监听的端口
server.listen(3000);
```
## Node模块
- 在CommonJS规范中一个文件就是一个模块
- 在CommonJS规范中通过exports暴露数据
- 在CommonJS规范中通过require()导入模块
## Node模块原理分析
- 既然一个文件就是一个模块,
- 既然想要使用模块必须先通过require()导入模块
- 所以可以推断出require()的作用其实就是读取文件
- 所以要想了解Node是如何实现模块的, 必须先了解如何执行读取到的代码
## 执行从文件中读取代码
- 我们都知道通过fs模块可以读取文件,但是读取到的数据要么是二进制, 要么是字符串无论是二进制还是字符串都无法直接执行但是我们
知道如果是字符串, 在JS中是有办法让它执行的eval  或者 new Function;
- 通过eval执行代码
缺点: 存在依赖关系, 字符串可以访问外界数据,不安全
- 通过new Function执行代码
缺点: 存在依赖关系, 依然可以访问全局数据,不安全
## 通过NodeJS的vm虚拟机执行代码
- runInThisContext: 无权访问外部变量, 但是可以访问global
- runInNewContext:  无权访问外部变量, 也不能访问global

```js
 // let str = "console.log('www.it666.com');";
    // eval(str);

    // 存在依赖关系, 字符串可以访问外界数据,不安全
    // let name = "lnj";
    // let str = "console.log(name);";
    // eval(str);

    // let str = "console.log('www.it666.com');";
    // let fn = new Function(str);
    // console.log(fn);
    // fn();

    // 存在依赖关系, 字符串可以访问外界数据,不安全
    let name = "lnj";
    let str = "console.log(name);";
    let fn = new Function(str);
```
## Node模块加载流程分析
```html
<!--
1.内部实现了一个require方法
function require(path) {
  return self.require(path);
}

2.通过Module对象的静态__load方法加载模块文件
Module.prototype.require = function(path) {
  return Module._load(path, this, /* isMain */ false);
};

3.通过Module对象的静态_resolveFilename方法, 得到绝对路径并添加后缀名
var filename = Module._resolveFilename(request, parent, isMain);

4.根据路径判断是否有缓存, 如果没有就创建一个新的Module模块对象并缓存起来
var cachedModule = Module._cache[filename];
if (cachedModule) {
   return cachedModule.exports;
}
var module = new Module(filename, parent);
Module._cache[filename] = module;

function Module(id, parent) {
  this.id = id;
  this.exports = {};
}
5.利用tryModuleLoad方法加载模块
tryModuleLoad(module, filename);
    - 6.1取出模块后缀
    var extension = path.extname(filename);

    - 6.2根据不同后缀查找不同方法并执行对应的方法, 加载模块
    Module._extensions[extension](this, filename);

    - 6.3如果是JSON就转换成对象
    module.exports = JSON.parse(internalModule.stripBOM(content));

    - 6.4如果是JS就包裹一个函数
    var wrapper = Module.wrap(content);
    NativeModule.wrap = function(script) {
        return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
    };
    NativeModule.wrapper = [
        '(function (exports, require, module, __filename, __dirname) { ',
        '\n});'
    ];
    - 6.5执行包裹函数之后的代码, 拿到执行结果(String -- Function)
    var compiledWrapper = vm.runInThisContext(wrapper);

    - 6.6利用call执行fn函数, 修改module.exports的值
    var args = [this.exports, require, module, filename, dirname];
    var result = compiledWrapper.call(this.exports, args);

    - 6.7返回module.exports
    return module.exports;
-->
```
## Node模块系统基本实现方法
```js
let path = require("path");
let fs = require("fs");
let vm = require("vm");

class NJModule {
    constructor(id){
        this.id = id; // 保存当前模块的绝对路径
        this.exports = {};
    }
}
NJModule._cache = {};
NJModule._extensions = {
    ".js": function (module) {
        // 1.读取JS代码
        let script = fs.readFileSync(module.id);
        // 2.将JS代码包裹到函数中
        /*
        (function (exports, require, module, __filename, __dirname) {
            exports.name = "lnj";
        });
        * */
        let strScript = NJModule.wrapper[0] + script + NJModule.wrapper[1];
        // 3.将字符串转换成JS代码
        let jsScript = vm.runInThisContext(strScript);
        // 4.执行转换之后的JS代码
        // var args = [this.exports, require, module, filename, dirname];
        // var result = compiledWrapper.call(this.exports, args);
        jsScript.call(module.exports, module.exports);
    },
    ".json": function (module) {
        let json = fs.readFileSync(module.id);
        let obj = JSON.parse(json);
        module.exports = obj;
    }
};
NJModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

function njRequire(filePath) {
    // 1.将传入的相对路径转换成绝对路径
    let absPath = path.join(__dirname, filePath);
    // 2.尝试从缓存中获取当前的模块
    let cachedModule = NJModule._cache[absPath];
    if (cachedModule) {
        return cachedModule.exports;
    }
    // 3.如果没有缓存就自己创建一个NJModule对象, 并缓存起来
    let module = new NJModule(absPath);
    NJModule._cache[absPath] = module;
    // 4.利用tryModuleLoad方法加载模块
    tryModuleLoad(module);
    // 5.返回模块的exports
    return module.exports
}
function tryModuleLoad(module){
    // 1.取出模块后缀
    let extName = path.extname(module.id);
    NJModule._extensions[extName](module);
}

// let aModule = njRequire("./person.json");
let aModule = njRequire("./02-a.js");
console.log(aModule);

```