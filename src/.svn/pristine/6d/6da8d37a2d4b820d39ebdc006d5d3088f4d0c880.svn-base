
class Level12 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level12;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _movelabel: boolean = false;
	public _clicktime: number = 0;		//计算点击持续时间
	public _begindex: Array<number> = [];
	public _isArea: boolean = false;
	//


	public constructor() {
		super();
		Level12.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
	}



	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理

		this._img["lvl12_1"] = UI.addPic(this, "lvl12_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["lvl12_2"] = UI.addPic(this, "lvl12_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);

		//--------------------------------------------------------------------------------------定义mask容器及对象
		let mask_left: egret.Shape = new egret.Shape();
		mask_left.graphics.beginFill(0xff0000);
		mask_left.graphics.drawRect(50, 380 / 820 * UI.WINSIZE_H, 200, 150 / 820 * UI.WINSIZE_H);
		mask_left.graphics.endFill();

		let mask_right: egret.Shape = new egret.Shape();
		mask_right.graphics.beginFill(0xff0000);
		mask_right.graphics.drawRect(280, 270 / 820 * UI.WINSIZE_H, 150, 260 / 820 * UI.WINSIZE_H);
		mask_right.graphics.endFill();

		let mymask: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
		mymask.addChild(mask_right);
		mymask.addChild(mask_left);
		this.addChild(mymask);
		this._img["lvl12_2"].mask = mymask;


		//--------------------------------------------------------------------------------------------定义监听事件

		for (let i = 1; i < 3; i++) {
			this._img["lvl12_" + i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.Touchbegin, this);
			this._img["lvl12_" + i].addEventListener(egret.TouchEvent.TOUCH_END, function () { this.Touchend(i) }, this);
			this._img["lvl12_" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e: egret.TouchEvent) {
				if (this._isArea && this._movelabel == false) 				//未移动过
					if (this._begindex["x"] > UI.WINSIZE_W / 2) {		//移动的是右边的猫
						if (i == 2) {
							mymask.removeChild(mask_right);
						} else {
							mymask.addChild(mask_right);
						}
					} else {
						if (i == 2) {
							mymask.removeChild(mask_left);
						} else {
							mymask.addChild(mask_left);
						}
					}
				this._movelabel = true;
			}, this);
			this._img["lvl12_" + i].$setTouchEnabled(true);
		}

	}


	//开始touch时判断点击位置，若在则计时并记录初始坐标
	protected Touchbegin(e: egret.TouchEvent): void {
		this._IsMaskArea(e);
		if (this._isArea) {
			this._clicktime = egret.getTimer();
			this._begindex["x"] = e.stageX;
			this._begindex["y"] = e.stageY;
		}
	}

	// 结束touch时判断是否移动、计算点击时间
	protected Touchend(i: number): void {
		if (this._isArea) {
			this._clicktime = egret.getTimer() - this._clicktime;
			if (this._movelabel == true) {		//移动过
				this._movelabel = false;
			} else {							//未移动时需判断点击持续时间
				if (this._clicktime < 400) { this.CheckClickTime(i, this._clicktime, this._begindex["x"] < UI.WINSIZE_W / 2); }
			}
		}
	}

	protected CheckClickTime(i: number, time: number, isleft: boolean): void {
		if (i == 1 && isleft == true) {		//灰猫背面
			this._ok();
		} else {
			this._wrong();
		}
	}

	//是否在点击位置maskarea中,是则返回true,不是则返回false
	public _IsMaskArea(e: egret.TouchEvent): void {
		if (e.stageX <= 250 && e.stageX >= 50 / 820 * UI.WINSIZE_H
			&& e.stageY >= 380 / 820 * UI.WINSIZE_H && e.stageY <= 530 / 820 * UI.WINSIZE_H) { //mask_left
			this._isArea = true;
		} else if (e.stageX <= 450 && e.stageX >= 270
			&& e.stageY >= 260 / 820 * UI.WINSIZE_H && e.stageY <= 530 / 820 * UI.WINSIZE_H) {	//mask_right
			this._isArea = true;
		} else {
			this._isArea = false;
		}
	}

	protected _ok(): void {
		this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic2.scaleX = 0; this._pic2.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 700, egret.Ease.sineIn);
		egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.sineIn);
	}

	protected _wrong(): void {
		this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 700, egret.Ease.sineIn)
			.to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
	}




	protected onExit() {
		//必须要加入
	}


}








