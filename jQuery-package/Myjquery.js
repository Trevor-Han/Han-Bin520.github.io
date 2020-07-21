(function (window,undefined) {
    function Myjquery() {
        return new Myjquery.prototype.init();
    }
    Myjquery.prototype = {
        constructor:Myjquery,
        init:function init() {},
        //lazyload
        Lazyload:function Lazyload(odiv) {
            let box    = document.querySelector(odiv);
            let images = box.getElementsByTagName("img");
            let len    = images.length;
            let n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历
            return function() {
                let seeHeight = document.documentElement.clientHeight;
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                for(let i = n; i < len; i++) {
                    if(images[i].offsetTop < seeHeight + scrollTop) {
                        if(images[i].getAttribute('src') === 'images/loading.gif') {
                            if(images[i].style.opacity!= undefined){
                                images[i].src = images[i].getAttribute('data-src');
                                images[i].style.opacity = 1;
                            }
                            if(images[i].getAttribute('data-src').complete === false){
                                images[i].src = "images/loading.gif";
                            }

                        }
                        n = n + 1;
                    }
                }
            }
        },
        //函数防抖
        Throttle:function Throttle(fn,delay ,last) {
            let timeout = null,//进行去抖处理
                startTime = new Date();
            return function() {
                let curTime = new Date();
                clearTimeout(timeout);
                if(curTime - startTime >= last) {
                    fn();
                    startTime = curTime;
                }else {
                    timeout = setTimeout( fn,delay);
                }
            }
        },
        //key形式传参
        myText:function myText(res) {
            let id = res.id,
                name = res.name,
                age = res.age;

            this.id = id;
            this.name = name;
            this.age = age;
            console.log(this.id, this.name, this.age);
        },

    };
    Myjquery.prototype.init.prototype = Myjquery.prototype;
    window.Myjquery = window.$ = Myjquery;
})(window);