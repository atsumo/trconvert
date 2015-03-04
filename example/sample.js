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
p.nominalBounds = new cjs.Rectangle(0,0,612,612);


(lib.image1304923245342 = function() {
	this.initialize(img.image1304923245342);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,612);


(lib.image2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image1304923101206();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,612,612);


(lib.image1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.image1304923245342();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,612,612);


// stage content:
(lib.sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bigimage
	this.instance = new lib.image1();
	this.instance.setTransform(319,429,1,1,0,0,0,306,306);
	this.instance.cache(-2,-2,616,616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({rotation:-90,x:969,compositeOperation:NaN},13).to({_off:true},50).wait(19));

	// text
	this.text = new cjs.Text("sample", "bold 60px 'Times'");
	this.text.textAlign = "right";
	this.text.lineHeight = 62;
	this.text.lineWidth = 267;
	this.text.setTransform(626,755);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},82).wait(19));

	// image1
	this.instance_1 = new lib.image1();
	this.instance_1.setTransform(-318.5,420,0.261,0.261,0,0,0,305.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:237.1},19,cjs.Ease.get(1)).to({x:399,y:579.9},8,cjs.Ease.get(1)).to({x:399.1,y:262.2},7,cjs.Ease.get(1)).to({guide:{path:[399.1,262.1,389.7,266.5,377.8,274.5,354.1,290.4,341.8,308.3,324.7,333.3,333,358.6,343.4,390.2,392.9,420.4]}},7).to({x:399,y:420},4,cjs.Ease.get(1)).wait(25).to({x:1063.4},11).wait(1));

	// image2
	this.instance_2 = new lib.image2();
	this.instance_2.setTransform(-318.5,739.7,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:558.6},19,cjs.Ease.get(1)).wait(51).to({x:1063.4},11).wait(1));

	// image1
	this.instance_3 = new lib.image1();
	this.instance_3.setTransform(-318.5,164.9,0.261,0.261,0,0,0,305.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({x:399,y:739.4},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:164.9},11).wait(1));

	// image2
	this.instance_4 = new lib.image2();
	this.instance_4.setTransform(-318.5,297.5,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:239.5,y:739.4},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:297.5},11).wait(1));

	// image1
	this.instance_5 = new lib.image1();
	this.instance_5.setTransform(-318.5,-151.8,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({x:79.9,y:739.4},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:-151.8},11).wait(1));

	// image1
	this.instance_6 = new lib.image1();
	this.instance_6.setTransform(-318.5,864,0.261,0.261,0,0,0,305.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({x:558.6,y:579.9},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:864},11).wait(1));

	// image2
	this.instance_7 = new lib.image2();
	this.instance_7.setTransform(-318.5,927.4,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({x:399,y:579.9},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:927.4},11).wait(1));

	// image1
	this.instance_8 = new lib.image1();
	this.instance_8.setTransform(-318.5,164.9,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({x:239.4,y:579.9},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:164.9},11).wait(1));

	// image2
	this.instance_9 = new lib.image2();
	this.instance_9.setTransform(-318.5,633.9,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({x:79.8,y:579.9},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:633.9},11).wait(1));

	// image2
	this.instance_10 = new lib.image2();
	this.instance_10.setTransform(-318.5,-113,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({x:558.6,y:420.3},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:-113},11).wait(1));

	// image2
	this.instance_11 = new lib.image2();
	this.instance_11.setTransform(-318.5,679.7,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({x:239.5,y:420},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:679.7},11).wait(1));

	// image1
	this.instance_12 = new lib.image1();
	this.instance_12.setTransform(-318.5,-45.5,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({x:79.9,y:420},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:-45.5},11).wait(1));

	// image1
	this.instance_13 = new lib.image1();
	this.instance_13.setTransform(-318.5,-113,0.261,0.261,0,0,0,305.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({x:558.6,y:260.5},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:-113},11).wait(1));

	// image2
	this.instance_14 = new lib.image2();
	this.instance_14.setTransform(-318.5,-59.2,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({x:399,y:260.5},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:-59.2},11).wait(1));

	// image1
	this.instance_15 = new lib.image1();
	this.instance_15.setTransform(-318.5,-113,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({x:239.4,y:260.5},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:-113},11).wait(1));

	// image2
	this.instance_16 = new lib.image2();
	this.instance_16.setTransform(-318.5,354.5,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({x:79.8,y:260.5},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:354.5},11).wait(1));

	// image2
	this.instance_17 = new lib.image2();
	this.instance_17.setTransform(-318.5,619.8,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({x:560.2,y:100.6},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:619.8},11).wait(1));

	// image1
	this.instance_18 = new lib.image1();
	this.instance_18.setTransform(-318.5,940.8,0.261,0.261,0,0,0,305.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({x:400.6,y:100.3},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:940.8},11).wait(1));

	// image2
	this.instance_19 = new lib.image2();
	this.instance_19.setTransform(-318.5,100.3,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(19).to({x:241.1},19,cjs.Ease.get(1)).wait(51).to({x:1063.4},11).wait(1));

	// image1
	this.instance_20 = new lib.image1();
	this.instance_20.setTransform(-318.5,474.4,0.261,0.261,0,0,0,306.1,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({x:81.5,y:100.3},19,cjs.Ease.get(1)).wait(51).to({x:1063.4,y:474.4},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,185.4,1028.3,1252.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;