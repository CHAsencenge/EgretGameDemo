
class Level17 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level17;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	public point1: egret.Point = new egret.Point(240, 455 / 820 * UI.WINSIZE_H);	//文字正确位置坐标点
	public _tag: boolean = false;

	//


	public constructor() {
		super();
		Level17.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理

		this._img["lvl17_1"] = UI.addPic(this, "lvl17_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["lvl17_1"].scaleX = 0.5; this._img["lvl17_1"].scaleY = 0.5;
		this._img["lvl17_2"] = UI.addPic(this, "lvl17_2_png", UI.WINSIZE_W * 0.455, UI.WINSIZE_H * 0.4, true);
		this._img["lvl17_2"].scaleX = 0.6; this._img["lvl17_2"].scaleY = 0.6;

		//-----------------------------------------------------------------------------------------------监听事件
		this._img["lvl17_2"].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Move_glass, this);
		this._img["lvl17_2"].addEventListener(egret.TouchEvent.TOUCH_END, this.End_isok, this);
		this._img["lvl17_2"].$setTouchEnabled(true);


	}

	//----------------------------------------------------------------------------------------------监听函数


	protected Move_glass(e: egret.TouchEvent): void {
		this._img["lvl17_2"].x = e.stageX;
		this._img["lvl17_2"].y = e.stageY;
	}

	private End_isok(e: egret.TouchEvent): void {
		if (!this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.4146, UI.WINSIZE_H * 0.4178, true)
			&& !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.4166, UI.WINSIZE_H * 0.429, true)
			&& !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.3979, UI.WINSIZE_H * 0.4269, true)
			&& !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.5125, UI.WINSIZE_H * 0.4108, true)
			&& !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.5104, UI.WINSIZE_H * 0.426, true)
			&& !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.5333, UI.WINSIZE_H * 0.4178, true)) {	//ok
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

}








