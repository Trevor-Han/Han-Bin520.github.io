/*$(function () {
    divMove ();
    function divMove (){
        let drag = function(obj){
            obj.on("mousedown",start);
            function start(event){
                if(event.button==0){//判断是否点击鼠标左键
                    /!*
                     * clientX和clientY代表鼠标当前的横纵坐标
                     * offset()该方法返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。
                     * bind()绑定事件，同样unbind解绑定，此效果的实现最后必须要解绑定，否则鼠标松开后拖拽效果依然存在
                     * getX获取当前鼠标横坐标和对象离屏幕左侧距离之差（也就是left）值，
                     * getY和getX同样道理，这两个差值就是鼠标相对于对象的定位，因为拖拽后鼠标和拖拽对象的相对位置是不变的
                     *!/
                    getX = event.clientX-obj.offset().left;
                    getY = event.clientY-obj.offset().top;
                    //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
                    $(document).on("mousemove",move);
                    //此处的$(document)可以改为obj
                    $(document).on("mouseup",stop);

                }
                return false;//阻止默认事件或冒泡
            }
            function move(event){
                let newX=event.clientX-getX;
                let newY=event.clientY-getX;
                //防止移出屏幕
                0 > newX?newX=0:newX=newX;
                0 > newY?newY=0:newY=newY;
                newX>$(window).width()-80?newX=$(window).width()-80:newX=newX;
                newY>$(window).height()-80?newY=$(window).height()-80:newY=newY;
                //这个80是滑块的宽高

                obj.css({
                    "left":(newX)+"px",
                    "top":(newY)+"px"
                });
                return false;//阻止默认事件或冒泡
                /!*   obj.css({
                       "left":(event.clientX-gapX)+"px",
                       "top":(event.clientY-gapY)+"px"
                   });*!/
            }
            function stop(){
                //解绑定，这一步很必要，前面有解释
                /!*$(document).off("mousemove",move);
                $(document).off("mouseup",stop);*!/
                $(document).off();

            }
        };
        obj = $("#LRfloater2");
        console.log(obj);
        drag(obj);//传入的必须是jQuery对象，否则不能调用jQuery的自定义函数
    }
});*/
$(function () {
    $(".move").on("click",function () {
        divMove();
        $(".box1").css("display","block");
    });
    $(".del").on("click",function () {
        $(".box1").css("display","none");
    });
  /*  function divMove (){
        let drag = function(){
            obj = $(".box1");
            obj.on("mousedown",start);
            function start(event){
                if(event.button==0){//判断是否点击鼠标左键
                    /!*
                     * clientX和clientY代表鼠标当前的横纵坐标
                     * offset()该方法返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。
                     * bind()绑定事件，同样unbind解绑定，此效果的实现最后必须要解绑定，否则鼠标松开后拖拽效果依然存在
                     * getX获取当前鼠标横坐标和对象离屏幕左侧距离之差（也就是left）值，
                     * getY和getX同样道理，这两个差值就是鼠标相对于对象的定位，因为拖拽后鼠标和拖拽对象的相对位置是不变的
                     *!/
                    getX = event.clientX-obj.offset().left;
                    getY = event.clientY-obj.offset().top;
                    //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
                    $(document).on("mousemove",move);
                    //此处的$(document)可以改为obj
                    $(document).on("mouseup",stop);

                }
                return false;//阻止默认事件或冒泡
            }
            function move(event){
                let newX=event.clientX-getX;
                let newY=event.clientY-getX;
                //防止移出屏幕
                0 > newX?newX=0:newX=newX;
                0 > newY?newY=0:newY=newY;
                newX>$(window).width()-80?newX=$(window).width()-80:newX=newX;
                newY>$(window).height()-80?newY=$(window).height()-80:newY=newY;
                //这个80是滑块的宽高

                obj.css({
                    "left":(newX)+"px",
                    "top":(newY)+"px"
                });
                return false;//阻止默认事件或冒泡
                /!*   obj.css({
                       "left":(event.clientX-gapX)+"px",
                       "top":(event.clientY-gapY)+"px"
                   });*!/
                return false;//阻止默认事件或冒泡
            }
            function stop(){
                //解绑定，这一步很必要，前面有解释
                $(document).off();
                // $(document).off("mouseup",stop);

            }
        };
        drag();//传入的必须是jQuery对象，否则不能调用jQuery的自定义函数
    }*/
    window.onload=function()
    {
        let oDiv2 =document.getElementById("div2");
        let zhezhao =document.getElementById("zhezhao");
        let h2 =oDiv2.getElementsByTagName("h2")[0];
        let mouseStart={};
        let divStart={};

        //h2完美拖拽
        h2.onmousedown=function(ev)
        {
            let oEvent=ev||event;
            mouseStart.x=oEvent.clientX;
            mouseStart.y=oEvent.clientY;
            divStart.x=oDiv2.offsetLeft;
            divStart.y=oDiv2.offsetTop;

            if(h2.setCapture)
            {
                h2.onmousemove=doDrag3;
                h2.onmouseup=stopDrag3;
                h2.setCapture();
            }
            else
            {
                document.addEventListener("mousemove",doDrag3,true);
                document.addEventListener("mouseup",stopDrag3,true);
            }

            zhezhao.style.display='block';
        };
        function doDrag3(ev)
        {
            let oEvent=ev||event;
            let l=oEvent.clientX-mouseStart.x+divStart.x;
            let t=oEvent.clientY-mouseStart.y+divStart.y;
            if(l<0)
            {
                l=0;
            }
            else if(l>document.documentElement.clientWidth-oDiv2.offsetWidth)
            {
                l=document.documentElement.clientWidth-oDiv2.offsetWidth;
            }
            if(t<0)
            {
                t=0;
            }
            else if(t>document.documentElement.clientHeight-oDiv2.offsetHeight)
            {
                t=document.documentElement.clientHeight-oDiv2.offsetHeight;
            }
            oDiv2.style.left=l+"px";
            oDiv2.style.top=t+"px";
        };
        function stopDrag3()
        {
            if(h2.releaseCapture)
            {
                h2.onmousemove=null;
                h2.onmouseup=null;
                h2.releaseCapture();
            }
            else
            {
                document.removeEventListener("mousemove",doDrag3,true);
                document.removeEventListener("mouseup",stopDrag3,true);
            }

            zhezhao.style.display='none';
        }

    };
});
