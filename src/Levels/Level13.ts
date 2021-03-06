class Level13 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level13;
	public _pic: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	public point1: egret.Point = new egret.Point(240, 455 / 820 * UI.WINSIZE_H);	//文字正确位置坐标点
	public _tag: boolean = false;

	//


	public constructor() {
		super();
		Level13.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理

		this._img["lvl13_2"] = UI.addPic(this, "lvl13_2_png", 240, 471 / 820 * UI.WINSIZE_H, true);
		let container1: egret.DisplayObjectContainer = new egret.DisplayObjectContainer;	//构建容器以实现公转
		container1.x = 115; container1.y = 550 / 820 * UI.WINSIZE_H;
		this._img["lvl13_1"] = UI.addPic(container1, "lvl13_1_png", 125 - container1.x, 400 / 820 * UI.WINSIZE_H - container1.y, true);
		this.addChild(container1);


		//-----------------------------------------------------------------------------------------------文字处理

		this._txt["帮助司机"] = UI.addText(this, "帮助司机", 140, 30 / 820 * UI.WINSIZE_H, true);
		this._txt["帮助司机"].scaleX = 0.8; this._txt["帮助司机"].scaleY = 0.8;
		this._txt["越过深渊"] = UI.addText(this, "越过深渊", 240, 30 / 820 * UI.WINSIZE_H, true);
		this._txt["越过深渊"].scaleX = 0.8; this._txt["越过深渊"].scaleY = 0.8;
		this._txt["。"] = UI.addText(this, "。", 300, 30 / 820 * UI.WINSIZE_H, true);
		this._txt["。"].scaleX = 0.8; this._txt["。"].scaleY = 0.8;

		//-----------------------------------------------------------------------------------------------添加btn
		this._txt["驾驶"] = UI.addText(this, "驾驶", 230, 700 / 820 * UI.WINSIZE_H, true);
		let shp = Level13.layTxBg(this._txt["驾驶"],this);		// 增加圆角矩形文本框
		this.setChildIndex(this._txt["驾驶"], 1000);

		//------------------------------------------------------------------------------------------------btn处理

		//点击btn事件
		shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { shp.alpha = 1 }, this);
		shp.addEventListener(egret.TouchEvent.TOUCH_END, function () { this.ShpEnd(shp, container1) }, this);
		shp.$setTouchEnabled(true);

		//移动文字事件
		this._txt["越过深渊"].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Move_txt, this);
		this._txt["越过深渊"].$setTouchEnabled(true);

	}

	

	public  static layTxBg(tx: egret.TextField,node: any): egret.Shape {	
		var shp: egret.Shape = new egret.Shape;
		shp.graphics.beginFill(0x336699);
		shp.graphics.drawRoundRect(tx.x, tx.y, tx.width + 60, tx.height + 30, 50);
		shp.anchorOffsetX = shp.width / 2; shp.anchorOffsetY = shp.height / 2;
		shp.graphics.endFill();
		node.addChild(shp);
		shp.alpha = 0.5;
		return shp;
	}



	//-----------------------------------------------------------------------------------------------------监听函数

	private ShpEnd(shp: egret.Shape, container1: egret.DisplayObjectContainer): void {
		shp.alpha = 0.5;
		if (this._tag == true) {	//文字已移动至正确位置
			let tw = egret.Tween.get(this._img["lvl13_1"]);
			tw.to({ x: 270 }, 1000);
		} else {					//文字未在正确位置
			let tw = egret.Tween.get(container1);
			tw.to({ rotation: 90 }, 800);
		}
	}

	protected Move_txt(e: egret.TouchEvent): void {
		this._txt["越过深渊"].x = e.stageX; this._txt["越过深渊"].y = e.stageY;
		let point2: egret.Point = new egret.Point(e.stageX, e.stageY);	//判断位置是否正确
		if (egret.Point.distance(this.point1, point2) < 30) {
			this._txt["越过深渊"].x = 240; this._txt["越过深渊"].y = 455 / 820 * UI.WINSIZE_H;
			this._tag = true;
			this._txt["越过深渊"].removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.Move_txt, this);
		}
	}

}








