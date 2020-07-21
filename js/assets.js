(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"img/hot_1.jpg", id:"_9b148b0303b789a4186bb71e8c5e8442"}
	]
};



// symbols:



(lib._9b148b0303b789a4186bb71e8c5e8442 = function() {
	this.initialize(img._9b148b0303b789a4186bb71e8c5e8442);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1200);


(lib.r = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ApbJcIAAy3IS3AAIAAS3g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


(lib.c = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmVGWQipioAAjuQAAjtCpioQCoipDtAAQDuAACoCpQCpCoAADtQAADuipCoQioCpjuAAQjtAAioipg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.5,-57.5,115.1,115.1);


(lib.back = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.c();
	this.instance.setTransform(1720,635.7);

	this.instance_1 = new lib.r();
	this.instance_1.setTransform(230.6,632.7);

	// 图层 1
	this.txt = new cjs.Text("", "69px 'SimSun'", "#FF0000");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 82;
	this.txt.lineWidth = 1120;
	this.txt.setTransform(926.3,204.7);

	this.instance_2 = new lib._9b148b0303b789a4186bb71e8c5e8442();

	this.addChild(this.instance_2,this.txt,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1200);


// stage content:
(lib.assets = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;