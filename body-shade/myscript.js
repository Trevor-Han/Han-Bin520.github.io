$(function () {
    let count = 0;
    $(".han-all").click(function () {
        let myScroll = new IScroll('.han-info');
            count++;
            if(count%2 == 1){
                $(".han-all-div").css("overflow","hidden");
                $(this).siblings().animate({opacity:"0"},200);
                let heightDiv =  -($(this).offset().top)+"px";
                let transForm = $(this).css("transform","translate(0px,"+heightDiv+")");
                $(this).animate({
                    width:"100%",
                    borderRadius:"0%",
                    height: "100%",
                    transition: transForm,
                    zIndex:"999"
                },500,'easeInOutBack',function () {
                    $(this).children(".han-info").css({
                        overflow: "scroll",
                    });
                });
            }
            else {
                $(".han-all-div").css("overflow","scroll");
                $(this).siblings().animate({opacity:"1"},200);
                $(this).animate({
                    width:"80%",
                    borderRadius:"3%",
                    height: "40%",
                    transform:"translate(0px,0px)"
                },500,'easeInOutBack',function () {
                    $(this).children(".han-info").css({
                        overflow: "unset",
                    });
                });
            }
        });

    //动画扩展
   jQuery.easing['jswing'] = jQuery.easing['swing'];
   jQuery.extend(jQuery.easing,{
       easeInOutBack: function (x, t, b, c, d, s) {
           if (s == undefined) s = 1.70158;
           if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
           return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
       },
   });
});