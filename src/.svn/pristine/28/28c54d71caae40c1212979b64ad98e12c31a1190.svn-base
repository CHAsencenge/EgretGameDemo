
class ZOrderDemo extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: ZOrderDemo;
	public index:number = 10;
	public constructor() {
		super();
		ZOrderDemo.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
	}
	protected onEnter() {

		let girl1 = new egret.Bitmap;
		girl1.texture = RES.getRes("ball1_png");
		let girl2 = new egret.Bitmap;
		girl2.texture = RES.getRes("ball2_png");
		let girl3 = new egret.Bitmap;
		girl3.texture = RES.getRes("ball3_png");
		girl1.y = 200;
		girl2.y = 220;
		girl3.y = 200;
		girl1.x = 100;
		girl2.x = 120;
		girl3.x = 150;
		girl1.touchEnabled = true;
		girl2.touchEnabled = true;
		girl3.touchEnabled = true;
		this.addChildAt(girl1, this.index);
		this.addChildAt(girl2, this.index);
		this.addChildAt(girl3, this.index);

		console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
		console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
		console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
		girl1.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			ZOrderDemo.instance.setChildIndex(girl1,1000000);
			this.index++;
			console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
			console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
			console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
		}, this);
		girl2.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			ZOrderDemo.instance.setChildIndex(girl2, 1000000);
			this.index++;
			console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
			console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
			console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
		}, this);
		girl3.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			ZOrderDemo.instance.setChildIndex(girl3, 1000000);
			this.index++;
			console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
			console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
			console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
		}, this);
	}

	protected onExit() {
		//必须要加入
	}

}