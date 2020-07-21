class Level5 extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public static instance: Level5;
    public _txt: egret.TextField;
    public _picA: egret.Bitmap;
    public _picT: egret.Bitmap;
    public _picJ: egret.Bitmap;
    public _picQ: egret.Bitmap;
    public _picK: egret.Bitmap;
    public _ok: egret.Bitmap;
    public _error: egret.Bitmap;
    public _buttonNext: egret.Bitmap;
    public _buttonPrev: egret.Bitmap;
    public _comb: egret.Bitmap;
    public _distance: egret.Point = new egret.Point();
    public _touchStatus: boolean = false;
    public _btn: egret.Bitmap;
    public a: number;

    //public viewStack: eui.ViewStack;  //装几张卡牌


    public constructor() {
        super();
        Level5.instance = this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }

    // protected createChildren(): void {
    //     //super.createChildren();
    //     this.viewStack = new eui.ViewStack();
    //     this.viewStack.addChild(this._picT);
    // }

    //手指按在屏幕时
    public touchDown(e: egret.TouchEvent) {
        Level5.instance._distance.x = e.stageX - Level5.instance._comb.x;
        Level5.instance._distance.y = e.stageY - Level5.instance._comb.y;
        Level5.instance._touchStatus = true;
        Level5.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level5.instance.touchMove, this);
    }

    //拖动
    public touchMove(e: egret.TouchEvent) {
        if (Level5.instance._touchStatus) {
            Level5.instance._comb.x = e.stageX - Level5.instance._distance.x;
            Level5.instance._comb.y = e.stageY - Level5.instance._distance.y;
            //背景图的图像中心x到达-120时，图片左侧到达屏幕左侧，此时使图像无法再继续左移
            if (Level5.instance._comb.x < -120 || Level5.instance._comb.x > 600) {
                if (Level5.instance._comb.x < -120) {
                    Level5.instance._comb.x = -120;
                } else {
                    Level5.instance._comb.x = 600;
                }
            }
            if (Level5.instance._comb.y < 414 || Level5.instance._comb.y > 417) {
                Level5.instance._comb.y = 414;
            }
        }
    }

    //手指抬起
    private touchUp() {
        //console.log("touch leave!")
        Level5.instance._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
    }

    ////点击右移按钮，最右侧图片移至最左端，其余依次右移
    public turnNext(e: egret.TouchEvent) {
        //console.log("Next card.");
        Level5.instance.setChildIndex(Level5.instance.getChildAt(7), 3);
        console.log("Index:");
        console.log(this.getChildIndex(this._picT));
        console.log(this.getChildIndex(this._picJ));
        console.log(this.getChildIndex(this._picQ));
        console.log(this.getChildIndex(this._picK));
        console.log(this.getChildIndex(this._picA));

    }

    //点击左移按钮，最左侧图片移至最右端，其余依次左移
    public turnPrev(e: egret.TouchEvent) {
        console.log("Prev card.")
        //var bottom : egret.DisplayObject = this.getChildAt(0);
        Level5.instance.setChildIndex(Level5.instance.getChildAt(3), 7);
        console.log(UI.WINSIZE_H);
    }

    protected onEnter() {
        //var a : number = Math.round(Math.random()*5);
        this.a = Math.round(Math.random() * 5);
        console.log("a:", this.a);
        this._comb = UI.addPic(this, "lvl5_comb" + this.a + "_png", -55, 414, true);
        this._comb.scaleX = 1;
        this._comb.scaleY = 1;
        this._comb.touchEnabled = true;
        this._comb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.touchDown, this);
        this._comb.addEventListener(egret.TouchEvent.TOUCH_END, Level5.instance.touchUp, this);

        this._buttonNext = UI.addPic(this, "buttonNext_png", 350, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._buttonNext.scaleX = 0.4;
        this._buttonNext.scaleY = 0.4;
        this._buttonPrev = UI.addPic(this, "buttonPrev_png", 130, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._buttonPrev.scaleX = 0.4;
        this._buttonPrev.scaleY = 0.4;

        this._picT = UI.addPic(this, "lvl5_2_png", 240, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._picT.scaleX = 0.4;
        this._picT.scaleY = 0.4;
        this._picJ = UI.addPic(this, "lvl5_3_png", 240, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._picJ.scaleX = 0.4;
        this._picJ.scaleY = 0.4;
        this._picQ = UI.addPic(this, "lvl5_7_png", 240, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._picQ.scaleX = 0.4;
        this._picQ.scaleY = 0.4;
        this._picK = UI.addPic(this, "lvl5_4_png", 240, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._picK.scaleX = 0.4;
        this._picK.scaleY = 0.4;
        this._picA = UI.addPic(this, "lvl5_1_png", 240, UI.WINSIZE_H / 4 * 3 + 50, true);
        this._picA.scaleX = 0.4;
        this._picA.scaleY = 0.4;

        this._btn = UI.addPic(this, "button_png", 240, UI.WINSIZE_H / 4 * 3 + 130, true);
        this._btn.scaleX = 0.3;
        this._btn.scaleY = 0.3;
        this._btn.touchEnabled = true;
        this._btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.judge, this);

        var label: egret.TextField = new egret.TextField();
        label.textColor = 0xFF0000;
        label.fontFamily = "Arial";
        label.size = 24;
        label.text = "确定";
        label.x = 215;
        label.y = UI.WINSIZE_H / 4 * 3 + 115;
        this.addChild(label);

        this._txt = UI.addText(this, "猜一猜是哪张牌？", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
		this._txt.size = 28;
		this._txt.textColor = 0x000000;

        this._buttonNext.touchEnabled = true;
        this._buttonPrev.touchEnabled = true;
        // this._picA.touchEnabled = true;
        // this._picJ.touchEnabled = true;
        // this._picQ.touchEnabled = true;
        // this._picK.touchEnabled = true;
        // this._picT.touchEnabled = true;

        //0,1,2层是_comb,_buttonNext,_buttonPrev
        this.addChildAt(this._picT, 7);
        this.addChildAt(this._picJ, 6);
        this.addChildAt(this._picQ, 5);
        this.addChildAt(this._picK, 4);
        this.addChildAt(this._picA, 3);
        this._buttonNext.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.turnNext, this);
        this._buttonPrev.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.turnPrev, this);

        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._error = UI.addPic(this, "error_png", 240, UI.WINSIZE_H / 2, true);
        this._error.scaleX = 0;
        this._error.scaleY = 0;
        this._error.alpha = 0;
    }

    //点击确定按钮时判断是否正确
    public judge() {
        //var top: egret.DisplayObject = Level5.instance.getChildAt(7);
        var indexT: number = Level5.instance.getChildIndex(Level5.instance._picT);
        var indexJ: number = Level5.instance.getChildIndex(Level5.instance._picJ);
        var indexQ: number = Level5.instance.getChildIndex(Level5.instance._picQ);
        var indexK: number = Level5.instance.getChildIndex(Level5.instance._picK);
        var indexA: number = Level5.instance.getChildIndex(Level5.instance._picA);
        if ((this.a == 1 && indexT == 7) || (this.a == 2 && indexJ == 7) || (this.a == 3 && indexQ == 7) || (this.a == 4 && indexK == 7) || (this.a == 5 && indexA == 7)) {
            this.ok();
        } else {
            this.error();
        }
    }

    public ok() {
        var shape: egret.Bitmap = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();

    }

    public error() {
        var shape: egret.Bitmap = this._error;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);

    }

    protected onExit() {
        //必须要加入
        // this._picK.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.ok, this);
        // this._picA.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        // this._picJ.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        // this._picQ.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        // this._picT.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);

        this._buttonNext.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.turnNext, this);
        this._buttonPrev.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.turnPrev, this);

        this._comb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.touchDown, this);
        this._comb.removeEventListener(egret.TouchEvent.TOUCH_END, Level5.instance.touchUp, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);

        this._btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.judge, this);
    }

}