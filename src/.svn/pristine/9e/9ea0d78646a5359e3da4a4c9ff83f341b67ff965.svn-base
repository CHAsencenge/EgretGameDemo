class Level20 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level20;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	public _tag: boolean = false;
	public _movetag: boolean = false;
	public _begindex: Array<number> = [];
	//


	public constructor() {
		super();
		Level20.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理


		//----------------------------------------------------------------------------游戏素材
		this._img["level20_1"] = UI.addPic(this, "level20_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["level20_1"].scaleX = 0.6; this._img["level20_1"].scaleY = 0.6;
		this._img["level20_2"] = UI.addPic(this, "level20_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["level20_2"].scaleX = 0.6; this._img["level20_2"].scaleY = 0.6;



		//--------------------------------------------------------------------------定义mask
		let myMask: egret.Shape = new egret.Shape;
		myMask.graphics.beginFill(0x336699);
		myMask.graphics.drawRect(0, 0, UI.WINSIZE_W / 2, UI.WINSIZE_H);
		myMask.x = UI.WINSIZE_W / 2; myMask.y = 0;
		myMask.graphics.endFill();

		//-------------------------------------------------------------------------事件处理
		this._img["level20_2"].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e: egret.TouchEvent) {
			this._begindex["x"] = e.stageX;
			this._begindex["y"] = e.stageY;
		}, this);

		this._img["level20_2"].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) { this.MOVE(myMask, event) }, this);

		this._img["level20_2"].addEventListener(egret.TouchEvent.TOUCH_END, function (e: egret.TouchEvent) {
			if (this._begindex["x"] == e.stageX && this._begindex["y"] == e.stageY) {
				this._wrong();
			}
		}, this);
		this._img["level20_2"].$setTouchEnabled(true);
	}



	//-----------------------------------------------------------------------------------------------------------监听函数
	private MOVE(myMask: egret.Shape, e: egret.TouchEvent): void {
		if (e.stageX <= UI.WINSIZE_W / 2 && this._movetag == false) {	//点击的是左边
			this.addChild(myMask)
			this._img["level20_2"].mask = myMask;
			this._movetag = true;
			this._ok();
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
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
	}

}








