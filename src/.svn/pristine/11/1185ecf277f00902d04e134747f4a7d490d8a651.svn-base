class Level19 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level19;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	public _tag: boolean = false;		//波浪是否移动标志
	public _time: number = 0;
	public _estagey: number = 0;
	public _isright: boolean = false;	//波浪是否移动至正确位置
	//


	public constructor() {
		super();
		Level19.instance = this;
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
		this._img["girl"] = UI.addPic(this, "girl_png", UI.WINSIZE_W / 2, UI.WINSIZE_H * 4 / 9, true);
		this._img["girl"].scaleX = 0.6; this._img["girl"].scaleY = 0.6;
		this._img["level19"] = UI.addPic(this, "level19_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 50, true);
		this._img["level19"].anchorOffsetY = this._img["level19"].height;
		this._img["level19"].scaleX = 0.6; this._img["level19"].scaleY = 0.6;



		//---------------------------------------------------------------------------边界检测
		// let shp1 : egret.Shape = new egret.Shape;
		// shp1.graphics.lineStyle( 2, 0x336699  );
		// shp1.graphics.moveTo(UI.WINSIZE_W*2/3,0);
		// shp1.graphics.lineTo(UI.WINSIZE_W*2/3,this.height);
		// shp1.graphics.endFill();
		// this.addChild( shp1 );
	

		//--------------------------------------------------------------------------------------------------btn处理
		this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.Touchbegin, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Touchmove, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.Touchend, this);
		this._img["girl"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.Girltouch, this);
		this._img["level19"].$setTouchEnabled(true);
		this._img["girl"].$setTouchEnabled(true);

	}



	//-----------------------------------------------------------------------------------------------------------监听函数


	private Touchbegin(e: egret.TouchEvent): void {
		if (e.target == this._img["level19"] || e.target == this._img["girl"]) {
			if (e.stageY >= this._img["level19"].y - this._img["level19"].height * 0.6
				&& e.stageY <= this._img["level19"].y - this._img["level19"].height * 0.6 + 20) {	//正确边界
				this._estagey = e.stageY;
				this._tag = true;
			} else {
				this._wrong();
			}
		}
	}


	private Touchmove(e: egret.TouchEvent): void {					//移动波浪
		if (this._tag == true) {
			let _scale = 0.6 - (e.stageY - this._estagey) / (this._img["level19"].height * 0.6);
			if (_scale < 0.1) {
				_scale = 0.1;
			} else if (_scale > 0.6) {
				_scale = 0.6;
			}
			this._img["level19"].scaleY = _scale;
			if (this._img["level19"].y - this._img["level19"].height * this._img["level19"].scaleY > this._img["girl"].y + this._img["girl"].height / 6) {
				this._isright = true;
			} else {
				this._isright = false;
			}
		}
	}


	private Touchend(e: egret.TouchEvent): void {						//恢复波浪
		egret.Tween.get(this._img["level19"]).to({ scaleY: 0.6 }, 700 * (0.6 - this._img["level19"].scaleY) / 0.6);	//恢复动画以及标志
		this._tag = false;
		this._isright = false;
	}



	private Girltouch(e: egret.TouchEvent) {									//选择女孩
		if (this._isright == true && e.stageX >= UI.WINSIZE_W * 2 / 3) {		//正确
			this._ok();
		} 
	}


	protected _ok(): void {
		this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic2.scaleX = 0; this._pic2.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
		egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
	}

	protected _wrong(): void {
		this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 1000, egret.Ease.sineIn);
	}

}







