class Level3 extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public static instance: Level3;
    public _pic1: egret.Bitmap;
    public _pic2: egret.Bitmap;
    public _pic3: egret.Bitmap;
    public _pic4: egret.Bitmap;
    public _ok: egret.Bitmap;
    public _error: egret.Bitmap;
    public _txt: egret.TextField;


    public constructor() {
        super();
        Level3.instance = this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }

    protected onEnter() {
        this._txt = UI.addText(this, "哪个行星最大？", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
		this._txt.size = 28;
		this._txt.textColor = 0x000000;
        this._pic1 = UI.addPic(this, "lvl3_1_png", 330, UI.WINSIZE_H/7*5, true);
        this._pic1.scaleX = 0.25;
		this._pic1.scaleY = 0.25;
        this._pic2 = UI.addPic(this, "lvl3_2_png", 330, UI.WINSIZE_H/7*3, true);
        this._pic2.scaleX = 0.25;
		this._pic2.scaleY = 0.25;
        this._pic3 = UI.addPic(this, "lvl3_3_png", 150, UI.WINSIZE_H/7*4, true);
        this._pic3.scaleX = 0.25;
		this._pic3.scaleY = 0.25;
        this._pic4 = UI.addPic(this, "lvl3_4_png", 150, UI.WINSIZE_H/7*2, true);
        this._pic4.scaleX = 0.25;
		this._pic4.scaleY = 0.25;

        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
		this._ok.scaleX = 0;
		this._ok.scaleY = 0;
		this._ok.alpha = 0;
        this._error = UI.addPic(this, "error_png", 240, UI.WINSIZE_H / 2, true);
		this._error.scaleX = 0;
		this._error.scaleY = 0;
		this._error.alpha = 0;

        this._pic1.touchEnabled = true;
        this._pic1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._pic2.touchEnabled = true;
        this._pic2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._pic3.touchEnabled = true;
        this._pic3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._pic4.touchEnabled = true;
        this._pic4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);

    }

    public touchDown(e: egret.TouchEvent){
        if(e.target == this._pic1){
            this.ok(e);
            this._pic1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._pic2.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._pic3.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._pic4.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        }
        if(e.target == this._pic2){
            this.error(e);
        }
        if(e.target == this._pic3){
            this.error(e);
        }
        if(e.target == this._pic4){
            this.error(e);
        }
    }

    public ok(e: egret.TouchEvent) {
        var shape: egret.Bitmap = this._ok;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._ok, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
        GameData.finishLevel();

    }

    public error(e: egret.TouchEvent) {
        var shape: egret.Bitmap = this._error;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._error, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
    }

    protected onExit() {

    }
}