/*let stageWidth,stageHeight,stageScale;
let video = document.getElementById("video");

resize();
window.onresize = function(){
    resize();
};

function resize()
{
    if(stageWidth!=document.documentElement.clientWidth||stageHeight!= document.documentElement.clientHeight)
    {
        stageWidth =  document.documentElement.clientWidth;
        stageHeight = document.documentElement.clientHeight;
        stageScale = stageWidth/1920;

        video.style.left = 0 + 'px';
        video.style.top = 0 + 'px';
        stageScale = stageHeight/1000;
        video.width = stageScale * 1920;
        video.height = stageScale * 1000;
        video.style.left = stageWidth/2 - video.width/2+ 'px';
        if(stageWidth > video.width)
        {
            video.width = 1920;
            video.height = 1000;
            video.style.left = 0 + 'px';
            video.style.top = 0 + 'px';
            stageScale = stageWidth/1920;
            video.width = stageScale * 1920;
            video.height = stageScale * 1000;
            video.y = 0;
        }


    }
}*/
$(function () {
    let $button = $("<button class=\"move\">拖动</button>\n" +
        "<button class=\"del\">移除</button>");
    $("body").append($button);
});

