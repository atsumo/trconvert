(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 834,
	fps: 24,
	color: "#CCCCCC",
	manifest: [
		{src:"images/image1304923101206.png", id:"image1304923101206"},
		{src:"images/image1304923245342.png", id:"image1304923245342"}
	]
};



// symbols:



(lib.image1304923101206 = function() {
	this.initialize(img.image1304923101206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,306);


(lib.image1304923245342 = function() {
	this.initialize(img.image1304923245342);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,306);


(lib.image2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image1304923101206();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,306,306);


(lib.image1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image1304923245342();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,306,306);


// stage content:
(lib.sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bigimage
	this.instance = new lib.image1();
	this.instance.setTransform(159.5,214.5,1,1,0,0,0,153,153);
	this.instance.cache(-1,-1,308,308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({compositeOperation:NaN},0).to({rotation:-90,x:484.5},13).to({_off:true},50).wait(19));

	// text
	this.text = new cjs.Text("sample","bold 30px 'Times'");
	this.text.textAlign = "right";
	this.text.lineHeight = 62;
	this.text.lineWidth = 267;
	this.text.setTransform(313,377.5);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},82).wait(19));

	// image1
	this.instance_1 = new lib.image1();
	this.instance_1.setTransform(-159.25,210,0.261,0.261,0,0,0,152.95,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:118.55},19,cjs.Ease.get(1)).to({x:199.5,y:289.95},8,cjs.Ease.get(1)).to({y:130.05},7,cjs.Ease.get(1)).to({y:213.1},7).to({y:210},4,cjs.Ease.get(1)).wait(25).to({x:531.7},11).wait(1));

	// image2
	this.instance_2 = new lib.image2();
	this.instance_2.setTransform(-159.25,369.85,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:279.3},19,cjs.Ease.get(1)).wait(51).to({x:531.7},11).wait(1));

	// image1
	this.instance_3 = new lib.image1();
	this.instance_3.setTransform(-159.25,82.45,0.261,0.261,0,0,0,152.95,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({x:199.5,y:369.7},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:82.45},11).wait(1));

	// image2
	this.instance_4 = new lib.image2();
	this.instance_4.setTransform(-159.25,148.75,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:119.75,y:369.7},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:148.75},11).wait(1));

	// image1
	this.instance_5 = new lib.image1();
	this.instance_5.setTransform(-159.25,-75.9,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({x:39.95,y:369.7},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:-75.9},11).wait(1));

	// image1
	this.instance_6 = new lib.image1();
	this.instance_6.setTransform(-159.25,432,0.261,0.261,0,0,0,152.95,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({x:279.3,y:289.95},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:432},11).wait(1));

	// image2
	this.instance_7 = new lib.image2();
	this.instance_7.setTransform(-159.25,463.7,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({x:199.5,y:289.95},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:463.7},11).wait(1));

	// image1
	this.instance_8 = new lib.image1();
	this.instance_8.setTransform(-159.25,82.45,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({x:119.7,y:289.95},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:82.45},11).wait(1));

	// image2
	this.instance_9 = new lib.image2();
	this.instance_9.setTransform(-159.25,316.95,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({x:39.9,y:289.95},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:316.95},11).wait(1));

	// image2
	this.instance_10 = new lib.image2();
	this.instance_10.setTransform(-159.25,-56.5,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({x:279.3,y:210.15},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:-56.5},11).wait(1));

	// image2
	this.instance_11 = new lib.image2();
	this.instance_11.setTransform(-159.25,339.85,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({x:119.75,y:210},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:339.85},11).wait(1));

	// image1
	this.instance_12 = new lib.image1();
	this.instance_12.setTransform(-159.25,-22.75,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({x:39.95,y:210},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:-22.75},11).wait(1));

	// image1
	this.instance_13 = new lib.image1();
	this.instance_13.setTransform(-159.25,-56.5,0.261,0.261,0,0,0,152.95,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({x:279.3,y:130.25},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:-56.5},11).wait(1));

	// image2
	this.instance_14 = new lib.image2();
	this.instance_14.setTransform(-159.25,-29.6,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({x:199.5,y:130.25},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:-29.6},11).wait(1));

	// image1
	this.instance_15 = new lib.image1();
	this.instance_15.setTransform(-159.25,-56.5,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({x:119.7,y:130.25},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:-56.5},11).wait(1));

	// image2
	this.instance_16 = new lib.image2();
	this.instance_16.setTransform(-159.25,177.25,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({x:39.9,y:130.25},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:177.25},11).wait(1));

	// image2
	this.instance_17 = new lib.image2();
	this.instance_17.setTransform(-159.25,309.9,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({x:280.1,y:50.3},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:309.9},11).wait(1));

	// image1
	this.instance_18 = new lib.image1();
	this.instance_18.setTransform(-159.25,470.4,0.261,0.261,0,0,0,152.95,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({x:200.3,y:50.15},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:470.4},11).wait(1));

	// image2
	this.instance_19 = new lib.image2();
	this.instance_19.setTransform(-159.25,50.15,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(19).to({x:120.55},19,cjs.Ease.get(1)).wait(51).to({x:531.7},11).wait(1));

	// image1
	this.instance_20 = new lib.image1();
	this.instance_20.setTransform(-159.25,237.2,0.261,0.261,0,0,0,153.05,153.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({x:40.75,y:50.15},19,cjs.Ease.get(1)).wait(51).to({x:531.7,y:237.2},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.15,92.7,514.15,626.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;