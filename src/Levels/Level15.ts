class Level15 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level15;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];

	//


	public constructor() {
		super();
		Level15.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理


		//------------------------------------------------------------------------------------游戏素材
		this._img["lvl15_1"] = UI.addPic(this, "lvl15_1_png", UI.WINSIZE_W * .75, UI.WINSIZE_H / 4, true);
		this._img["lvl15_2"] = UI.addPic(this, "lvl15_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["lvl15_3"] = UI.addPic(this, "lvl15_3_png", UI.WINSIZE_W * .75, UI.WINSIZE_H * 3 / 4, true);
		this._img["lvl15_4"] = UI.addPic(this, "lvl15_4_png", UI.WINSIZE_W * .25, UI.WINSIZE_H / 4, true);
		this._img["lvl15_5"] = UI.addPic(this, "lvl15_5_png", UI.WINSIZE_W * .25, UI.WINSIZE_H * 3 / 4, true);
		this._img["lvl15_6"] = UI.addPic(this, "lvl15_6_png", UI.WINSIZE_W / 2, UI.WINSIZE_H * 3 / 4, true);


		//-----------------------------------------------------------------------------------事件处理
		for (let i = 1; i < 7; i++) {
			if (i != 2) {			//背景板不动
				this._img["lvl15_" + i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
					Level15.instance.setChildIndex(this._img["lvl15_" + i], 1000);
				}, this);
				this._img["lvl15_" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e: egret.TouchEvent) {
					this._img["lvl15_" + i].x = e.stageX;
					this._img["lvl15_" + i].y = e.stageY;
				}, this);
				this._img["lvl15_" + i].addEventListener(egret.TouchEvent.TOUCH_END, this.Check, this);
				this._img["lvl15_" + i].$setTouchEnabled(true);
			}
		}


	}



	//-----------------------------------------------------------------------------------------------------监听函数

	private Check() {
		let point_right: Array<egret.Point> = [];
		point_right[1] = new egret.Point(200 / 480 * UI.WINSIZE_W, 460 / 828 * UI.WINSIZE_H);
		point_right[3] = new egret.Point(260 / 480 * UI.WINSIZE_W, 518 / 828 * UI.WINSIZE_H);
		point_right[4] = new egret.Point(260 / 480 * UI.WINSIZE_W, 450 / 828 * UI.WINSIZE_H);
		point_right[5] = new egret.Point(240 / 480 * UI.WINSIZE_W, 295 / 828 * UI.WINSIZE_H);
		point_right[6] = new egret.Point(240 / 480 * UI.WINSIZE_W, 380 / 828 * UI.WINSIZE_H);
		let point_now: Array<egret.Point> = [];
		let disc: Array<Number> = [];
		for (let i = 1; i < 7; i++) {
			if (i != 2) {
				point_now[i] = new egret.Point(this._img["lvl15_" + i].x, this._img["lvl15_" + i].y);
				disc[i] = egret.Point.distance(point_right[i], point_now[i]);
			}
		}
		if (disc[1] < 15 && disc[3] < 15 && disc[4] < 15 && disc[5] < 15 && disc[6] < 15) {
			this._ok();					//退出游戏
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








