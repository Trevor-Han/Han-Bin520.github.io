window.onload = function () {
    // 1.拿到需要操作的元素
    let oVideo = document.querySelector("video");
    let oFigure = document.querySelector("figure");
    let oTotalTime = document.querySelector(".total-time");
    let oPlay = document.querySelector("#play");
    let oCurrentTime = document.querySelector(".current-time");
    let oLine = document.querySelector(".line");
    let oProgress = document.querySelector(".progress");
    let oFullBtn = document.querySelector("#full");

    // 2.通过事件监听视频是否加载完毕了
    oVideo.oncanplay = function () {
        // 2.1隐藏加载动画
        oFigure.style.backgroundImage = "none";
        // 2.2显示视频
        oVideo.style.display = "block";
        // 2.3获取视频的总时长
        let obj = formatDate(oVideo.duration);
        // 2.4格式化获取到的时间 00:00:00
        oTotalTime.innerHTML = `${obj.hour}:${obj.minute}:${obj.second}`;
    }
    // 3.监听播放按钮的点击
    let flag = false;
    oPlay.onclick = function () {
        if(flag){
            flag = false;
            // 正在播放
            oPlay.className = "iconfont icon-bofang";
            // 切换图标
            // 暂停播放
            oVideo.pause();
        }else{
            flag = true;
            // 没有播放
            oPlay.className = "iconfont icon-zanting";
            // 切换图标
            // 播放视频
            oVideo.play();
        }
    }
    // 4.监听视频播放的进度
    oVideo.ontimeupdate = function () {
        // console.log("正在播放");
        // 4.1同步文本时间
        let obj = formatDate(oVideo.currentTime);
        oCurrentTime.innerHTML = `${obj.hour}:${obj.minute}:${obj.second}`;
        // 4.2同步进度条
        let res = oVideo.currentTime / oVideo.duration * 100;
        oLine.style.width = res + "%";
    }
    // 5.监听进度条的点击事件
    oProgress.onclick = function (event) {
        event = event || window.event;
        // 鼠标点击的位置 / 进度条的宽度 = 当前播放的时间 / 总时长
        // 鼠标点击的位置 / 进度条的宽度 * 总时长 = 当前播放的时间
        // 5.1获取鼠标当前点击的位置
        let currentTime = event.offsetX / oProgress.offsetWidth * oVideo.duration;
        // console.log(oVideo.duration);
        // console.log(currentTime);
        oVideo.currentTime = currentTime;
    }
    // 6.监听视频是否已经播放完毕了
    oVideo.onended = function () {
        // 6.0恢复播放时间
        oVideo.currentTime = 0;
        // 6.1恢复图标
        oPlay.className = "iconfont icon-bofang";
        // 6.2恢复时间
        oCurrentTime.innerHTML = "00:00:00";
        // 6.3恢复进度条
        oLine.style.width = "0%";
        // 6.4恢复标记
        flag = false;
    }
    // 7.监听全屏按钮的点击
    oFullBtn.onclick = function () {
        // oVideo.requestFullscreen();
        toFullVideo(oVideo);
    }
}
function toFullVideo(videoDom){
    if(videoDom.requestFullscreen){
        return videoDom.requestFullscreen();
    }else if(videoDom.webkitRequestFullScreen){
        return videoDom.webkitRequestFullScreen();
    }else if(videoDom.mozRequestFullScreen){
        return videoDom.mozRequestFullScreen();
    }else{
        return videoDom.msRequestFullscreen();
    }
}
function formatDate(time) {
    // 4.利用相差的总秒数 / 小时 % 24;
    let hour = Math.floor(time / (60 * 60) % 24);
    hour = hour >= 10 ? hour : "0" + hour;
    // 5.利用相差的总秒数 / 分钟 % 60;
    let minute = Math.floor(time / 60 % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    // 6.利用相差的总秒数 % 秒数
    let second = Math.floor(time % 60);
    second = second >= 10 ? second : "0" + second;
    return {
        hour: hour,
        minute: minute,
        second: second,
    }
}