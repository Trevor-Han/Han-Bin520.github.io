window.onload = function () {
    let oMain = document.querySelector(".main");
    // 1.初始化图片
    let oItems = initImages(oMain);
    // 2.初始化容器宽度
    let cols = resetWidth(oMain,oItems);
    //实现瀑布流
    waterfall(oItems,cols);
    window.onresize = throttle(function () {
        //重新调整宽度
        let cols = resetWidth(oMain,oItems);
    },500);
};
function waterfall(oItems,cols) {
    //定义数组保存第一行所有元素高度
    let rowHeight = [];
    //遍历取出所有图片
    for (let i = 0; i < oItems.length;i++){
        let item = oItems[i];
        //判断是否第一行
        if (i < cols){

            rowHeight.push(item.offsetLeft);
        }
    }
}
function resetWidth(oMain,oItems) {
    //拿到可视区域的宽度
    let {width,height} = getScreen();
    //获取每一张图片宽度
    let imgWidth = oItems[0].offsetWidth;
    //计算一行可以放置多少张图片
    let cols = Math.floor(width/imgWidth);
    //计算容器宽度
    let mainWidth = cols*imgWidth;
    //设置容器宽度
    oMain.style.width = mainWidth + "px";
    oMain.style.margin = "0 auto";
    //返回当前列数
    return cols;

}
function initImages(oMain) {
    //创建图片
    for (let i = 1; i <= 40; i++){
        let oDiv = document.createElement("div");
        oDiv.className = "box";
        oMain.appendChild(oDiv);
        let oImg = document.createElement("img");
        let index = i < 10? "0"+ i: i;
        oImg.src = `images/img${index}.jpg`;
        oDiv.appendChild(oImg);
    }
    // 2.返回所有创建好的图片
    let oItems = document.querySelectorAll(".box");
    return oItems;
}