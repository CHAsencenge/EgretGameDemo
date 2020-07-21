class Level18 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level18;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	public _tag: boolean = false;

	//


	public constructor() {
		super();
		Level18.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理

		var container1: egret.DisplayObjectContainer = new egret.DisplayObjectContainer;
		container1.width = UI.WINSIZE_W * 2; container1.height = UI.WINSIZE_H;

		//----------------------------------------------------------------------------游戏背景
		var background: egret.Shape = new egret.Shape;
		background.graphics.beginFill(0xff0000);
		background.graphics.drawRect(0, 0, container1.width, container1.height);
		background.graphics.endFill();
		background.alpha = 0;
		container1.addChild(background)

		//----------------------------------------------------------------------------游戏素材
		this._img["car"] = UI.addPic(container1, "car_png", container1.width / 8, container1.height / 3, true);
		this._img["car"].scaleX = 0.8; this._img["car"].scaleY = 0.8;
		this._img["car2"] = UI.addPic(container1, "car2_png", container1.width / 8 + 30, container1.height * 2 / 3, true);
		this._img["car2"].scaleX = 0.8; this._img["car2"].scaleY = 0.8;
		this._img["baby"] = UI.addPic(container1, "baby_png", container1.width * 3 / 4, container1.height / 3, true);
		this._img["baby"].scaleX = 0.8; this._img["baby"].scaleY = 0.8;
		this._img["line18"] = UI.addPic(container1, "line18_png", container1.width / 2, container1.height / 2, true);
		this._img["line18"].scaleX = 0.8; this._img["line18"].scaleY = 0.8;



		//----------------------------------------------------------------------------------创建ScrollView
		var myscrollView: egret.ScrollView = new egret.ScrollView();
		myscrollView.width = UI.WINSIZE_W; myscrollView.height = UI.WINSIZE_H;
		myscrollView.setContent(container1);
		myscrollView.bounces = false;
		this.addChild(myscrollView);


		//--------------------------------------------------------------------------------------------------移动baby
		this._img["baby"].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { myscrollView.horizontalScrollPolicy = "off" }, this);
		this._img["baby"].$setTouchEnabled(true);
		myscrollView.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) { this.MoveBaby(event, myscrollView) }, this);
		myscrollView.addEventListener(egret.TouchEvent.TOUCH_END, function (event) { this.onComplete(event, myscrollView) }, this);


		//--------------------------------------------------------------------------------------------------btn处理
		this._txt["开始"] = UI.addText(this, "开始", container1.width / 4, container1.height * 7 / 8, true);
		let shp = Level13.layTxBg(this._txt["开始"], this);
		this.setChildIndex(this._txt["开始"], 1000);
		shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { shp.alpha = 1 }, this);
		shp.addEventListener(egret.TouchEvent.TOUCH_END, function () { this.btnEnd(shp) }, this);
		shp.$setTouchEnabled(true);

	}



	//-----------------------------------------------------------------------------------------------------------监听函数
	//拖动baby
	protected MoveBaby(e: egret.TouchEvent, myscrollView: egret.ScrollView): void {
		if (myscrollView.horizontalScrollPolicy == "off") {			//是则为拖动baby，否则为滑动视图
			if (e.stageX + myscrollView.scrollLeft >= this._img["car"].x + this._img["car"].width / 2) {
				this._img["baby"].x = e.stageX + myscrollView.scrollLeft;
			} else {
				this._img["baby"].x = this._img["car"].x + this._img["car"].width / 2;
			}
		}
	}

	
	private onComplete(e: egret.TouchEvent, myscrollView: egret.ScrollView): void {	//移去触碰点后判断baby位置
		myscrollView.horizontalScrollPolicy = "on";
		if (this._img["baby"].x + this._img["baby"].width / 2 < this._img["line18"].x) {
			this._tag = true;
		} else {
			this._tag = false;
		}
	}


	private btnEnd(shp: egret.Shape): void {
		shp.alpha = 0.5;
		let tw1 = egret.Tween.get(this._img["car"]);
		let tw2 = egret.Tween.get(this._img["car2"]);
		tw1.to({ x:this._img["baby"].x-this._img["car"].width/2}, 400);
		tw2.to({ x:this._img["line18"].x}, 2400);
		if(this._tag == true){
			tw2.call(this._ok,this);
		}else{
			tw2.call(this._wrong,this);
		}
	}


	protected _ok(): void {
		this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic2.scaleX = 0; this._pic2.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
		egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
	}

	protected _wrong(): void {
		this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
	}

}








