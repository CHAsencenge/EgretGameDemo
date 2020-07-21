class Level10 extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public static instance: Level10;
    public _txt: egret.TextField;
    public _pic1: egret.Bitmap;
    public _pic2: egret.Bitmap;
    //public _touchStatus: boolean = false;
    //public _distance: egret.Point = new egret.Point();
    public _ok: egret.Bitmap;
    public _error: egret.Bitmap;
    public _set: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    public _shape1: egret.Shape = new egret.Shape();
    public _shape2: egret.Shape = new egret.Shape();
    public _shape3: egret.Shape = new egret.Shape();

    public constructor() {
        super();
        Level10.instance = this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }

    protected onEnter() {
        this._txt = UI.addText(this, "纠正司机的三个错误。", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
		this._txt.size = 28;
		this._txt.textColor = 0x000000;
        this._pic2 = UI.addPic(this, "lvl10_2_png", 240, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 1;
        this._pic2.scaleY = 1;
        this._pic1 = UI.addPic(this, "lvl10_1_png", 240, UI.WINSIZE_H / 2, true);
        this._pic1.scaleX = 1;
        this._pic1.scaleY = 1;
        //this._pic1.mask = this._pic2;
        //var shape1: egret.Shape = new egret.Shape();
        this._shape1.graphics.beginFill(0xff0000);
        this._shape1.graphics.drawRect(180, UI.WINSIZE_H / 3, 120, 100);
        this._shape1.graphics.endFill();
        //var shape2: egret.Shape = new egret.Shape();
        this._shape2.graphics.beginFill(0xff0000);
        this._shape2.graphics.drawRect(120, UI.WINSIZE_H / 2, 150, 150);
        this._shape2.graphics.endFill();
        //var shape3: egret.Shape = new egret.Shape();
        this._shape3.graphics.beginFill(0xff0000);
        this._shape3.graphics.drawRect(20, UI.WINSIZE_H / 2 - 50, 80, 150);
        this._shape3.graphics.endFill();
        //var set: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._set.addChild(this._shape1);
        this._set.addChild(this._shape2);
        this._set.addChild(this._shape3);
        this.addChild(this._set);
        this._pic1.mask = this._set;
        this._pic1.touchEnabled = true;
        //this._pic2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level10.instance.eventMask, this);
        this._pic1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level10.instance.eventMask, this);
        //this._set.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level10.instance.eventMask, this);
    }

    public eventMask(e: egret.TouchEvent) {
        console.log("e.target:", e.target);
        if (e.stageX > 180 && e.stageX < 300 && e.stageY > UI.WINSIZE_H / 3 && e.stageY < UI.WINSIZE_H / 3 + 100) {
            console.log("e.stageX:", e.stageX);
            console.log("e.stageY:", e.stageY);
            this._set.removeChild(this._shape1);
            this._pic1.mask = this._set;
        }else if(e.stageX > 120 && e.stageX < 270 && e.stageY > UI.WINSIZE_H / 2 && e.stageY < UI.WINSIZE_H / 2 + 150){
            console.log("e.stageX:", e.stageX);
            console.log("e.stageY:", e.stageY);
            this._set.removeChild(this._shape2);
            this._pic1.mask = this._set;
        }else if(e.stageX > 20 && e.stageX < 100 && e.stageY > UI.WINSIZE_H / 2 - 50 && e.stageY < UI.WINSIZE_H / 2 + 100){
            console.log("e.stageX:", e.stageX);
            console.log("e.stageY:", e.stageY);
            this._set.removeChild(this._shape3);
            this._pic1.mask = this._set;
        }
        if(this._set.numChildren == 0){
            console.log("ok");
            this.ok();
        };
    };

    public ok() {
        var shape: egret.Bitmap = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();

    }

    protected onExit() {
        this._pic1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level10.instance.eventMask, this);
    }
}