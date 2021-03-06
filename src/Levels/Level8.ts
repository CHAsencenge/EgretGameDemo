class Level8 extends egret.DisplayObjectContainer implements egret.DisplayObject {
    //初始五个雪人，可拖动，未到足够小的锚点距离不合并，到足够小的距离触发合并，合并时将静止图（相对于拖动图）放大
    //然后删除拖动图，放大规则考虑用scale加和；每个静止图包含点击触发事件，均为error，屏幕中仅剩一张图时的触发事件为ok
    //ok事件考虑用if(scale == x)判断
    public static instance: Level8;
    public _txt: egret.TextField;
    public _snow1: egret.Bitmap;
    public _snow2: egret.Bitmap;
    public _snow3: egret.Bitmap;
    public _snow4: egret.Bitmap;
    public _snow5: egret.Bitmap;
    public _touchStatus: boolean = false;
    public _distance: egret.Point = new egret.Point();
    //public _timerBegin:number;
    //public _timerEnd:number;
    public _ok: egret.Bitmap;
    public _error: egret.Bitmap;
    public _prevX: number;
    public _prevY: number;
    public _label1:number = 0;
    public _label2:number = 0;
    public _label3:number = 0;
    public _label4:number = 0;
    public _label5:number = 0;
    public _flag: number = 0;


    public constructor() {
        super();
        Level8.instance = this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }

    public touchDown(e: egret.TouchEvent) {
        //e.target  //触碰目标
        Level8.instance.setChildIndex(e.target, 100);
        //this._timerBegin = egret.getTimer();
        this._prevX = e.target.x;
        this._prevY = e.target.y;
        Level8.instance._distance.x = e.stageX - e.target.x;
        Level8.instance._distance.y = e.stageY - e.target.y;
        Level8.instance._touchStatus = true;
        Level8.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level8.instance.touchMove, this);
    }

    //拖动
    public touchMove(e: egret.TouchEvent) {
        if (Level8.instance._touchStatus) {
            e.target.x = e.stageX - Level8.instance._distance.x;
            e.target.y = e.stageY - Level8.instance._distance.y;   
        }
    }

    //手指抬起,雪人大小没到最大时的触碰均显示error，最大时点击显示ok
    private touchUp(e: egret.TouchEvent) {
        //console.log("touch leave!")
        //this._timerEnd = egret.getTimer();
        //if(this._timerEnd - this._timerBegin < 200){
            //console.log("Timer:", this._timerEnd - this._timerBegin);
            //console.log("e.target.scaleX:", e.target.scaleX);
        //判断为点击而不是拖动
        if(this._prevX == e.target.x && this._prevY == e.target.y){
            console.log("e.target.scaleX", e.target.scaleX);
            if(e.target.scaleX == 0.4){
                //console.log("e.target.scaleX", e.target.scaleX);
                this.ok(e);
            }else{
                this.error(e);
            }
        //console.log(e.target);
        }
        
        //碰撞检测，碰撞则移除掉正在拖动的雪人，并且此雪人图片不再能触发碰撞的检测
        if(this._label1 == 0 && (e.target.hitTestPoint(this._snow1.x, this._snow1.y, true) || e.target.hitTestPoint(this._snow1.x+0.04*this._snow1.width, this._snow1.y+0.04*this._snow1.height, true) || e.target.hitTestPoint(this._snow1.x+0.04*this._snow1.width, this._snow1.y-0.04*this._snow1.height, true) || e.target.hitTestPoint(this._snow1.x-0.04*this._snow1.width, this._snow1.y+0.04*this._snow1.height, true) || e.target.hitTestPoint(this._snow1.x-0.04*this._snow1.width, this._snow1.y-0.04*this._snow1.height, true)) && (e.target.x != this._snow1.x && e.target.y != this._snow1.y)){
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow1.x:", this._snow1.x);
            // console.log("this._snow1.y:", this._snow1.y);
            console.log("this._snow1.width:", this._snow1.width);
            console.log("this._snow1.height:", this._snow1.height);
            switch(this._flag){
                case 0 :
                    console.log("1 the case is 0!")
                    this._snow1.scaleX = 0.2;
                    this._snow1.scaleY = 0.2;
                    break;
                case 1:
                    console.log("1 the case is 1!")
                    this._snow1.scaleX = 0.25;
                    this._snow1.scaleY = 0.25;
                    break;
                case 2 :
                    console.log("1 the case is 2!")
                    this._snow1.scaleX = 0.33;
                    this._snow1.scaleY = 0.33;
                    break;
                case 3:
                    console.log("1 the case is 3!")
                    this._snow1.scaleX = 0.4;
                    this._snow1.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            //this._snow1.scaleX += e.target.scaleX;
            //this._snow1.scaleY += e.target.scaleY;
            if(e.target.x == this._snow2.x && e.target.y == this._snow2.y){
                this._label2 = 1;
            }
            if(e.target.x == this._snow3.x && e.target.y == this._snow3.y){
                this._label3 = 1;
            }
            if(e.target.x == this._snow4.x && e.target.y == this._snow4.y){
                this._label4 = 1;
            }
            if(e.target.x == this._snow5.x && e.target.y == this._snow5.y){
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if(this._label2 == 0 && (e.target.hitTestPoint(this._snow2.x, this._snow2.y, true) || e.target.hitTestPoint(this._snow2.x+0.04*this._snow2.width, this._snow2.y+0.04*this._snow2.height, true) || e.target.hitTestPoint(this._snow2.x+0.04*this._snow2.width, this._snow2.y-0.04*this._snow2.height, true) || e.target.hitTestPoint(this._snow2.x-0.04*this._snow2.width, this._snow2.y+0.04*this._snow2.height, true) || e.target.hitTestPoint(this._snow2.x-0.04*this._snow2.width, this._snow2.y-0.04*this._snow2.height, true)) && (e.target.x != this._snow2.x && e.target.y != this._snow2.y)){
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow2.x:", this._snow2.x);
            // console.log("this._snow2.y:", this._snow2.y);
            //this._snow2.scaleX += e.target.scaleX;
            //this._snow2.scaleY += e.target.scaleY;
            switch(this._flag){
                case 0:
                    console.log("2 the case is 0!")
                    this._snow2.scaleX = 0.2;
                    this._snow2.scaleY = 0.2;
                    break;
                case 1:
                    console.log("2 the case is 1!")
                    this._snow2.scaleX = 0.25;
                    this._snow2.scaleY = 0.25;
                    break;
                case 2:
                    console.log("2 the case is 2!")
                    this._snow2.scaleX = 0.33;
                    this._snow2.scaleY = 0.33;
                    break;
                case 3:
                    console.log("2 the case is 3!")
                    this._snow2.scaleX = 0.4;
                    this._snow2.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if(e.target.x == this._snow1.x && e.target.y == this._snow1.y){
                this._label1 = 1;
            }
            if(e.target.x == this._snow3.x && e.target.y == this._snow3.y){
                this._label3 = 1;
            }
            if(e.target.x == this._snow4.x && e.target.y == this._snow4.y){
                this._label4 = 1;
            }
            if(e.target.x == this._snow5.x && e.target.y == this._snow5.y){
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if(this._label3 == 0 && (e.target.hitTestPoint(this._snow3.x, this._snow3.y, true) || e.target.hitTestPoint(this._snow3.x+0.04*this._snow3.width, this._snow3.y+0.04*this._snow3.height, true) || e.target.hitTestPoint(this._snow3.x+0.04*this._snow3.width, this._snow3.y-0.04*this._snow3.height, true) || e.target.hitTestPoint(this._snow3.x-0.04*this._snow3.width, this._snow3.y+0.04*this._snow3.height, true) || e.target.hitTestPoint(this._snow3.x-0.04*this._snow3.width, this._snow3.y-0.04*this._snow3.height, true)) && (e.target.x != this._snow3.x && e.target.y != this._snow3.y)){
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow3.x:", this._snow3.x);
            // console.log("this._snow3.y:", this._snow3.y);
            //this._snow3.scaleX += e.target.scaleX;
            //this._snow3.scaleY += e.target.scaleY;
            switch(this._flag){
                case 0:
                    this._snow3.scaleX = 0.2;
                    this._snow3.scaleY = 0.2;
                    break;
                case 1:
                    console.log("3 the case is 1!")
                    this._snow3.scaleX = 0.25;
                    this._snow3.scaleY = 0.25;
                    break;
                case 2:
                    console.log("3 the case is 2!")
                    this._snow3.scaleX = 0.33;
                    this._snow3.scaleY = 0.33;
                    break;
                case 3:
                    console.log("3 the case is 3!")
                    this._snow3.scaleX = 0.4;
                    this._snow3.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if(e.target.x == this._snow2.x && e.target.y == this._snow2.y){
                this._label2 = 1;
            }
            if(e.target.x == this._snow1.x && e.target.y == this._snow1.y){
                this._label1 = 1;
            }
            if(e.target.x == this._snow4.x && e.target.y == this._snow4.y){
                this._label4 = 1;
            }
            if(e.target.x == this._snow5.x && e.target.y == this._snow5.y){
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if(this._label4 == 0 && (e.target.hitTestPoint(this._snow4.x, this._snow4.y, true) || e.target.hitTestPoint(this._snow4.x+0.04*this._snow4.width, this._snow4.y+0.04*this._snow4.height, true) || e.target.hitTestPoint(this._snow4.x+0.04*this._snow4.width, this._snow4.y-0.04*this._snow4.height, true) || e.target.hitTestPoint(this._snow4.x-0.04*this._snow4.width, this._snow4.y+0.04*this._snow4.height, true) || e.target.hitTestPoint(this._snow4.x-0.04*this._snow4.width, this._snow4.y-0.04*this._snow4.height, true)) && (e.target.x != this._snow4.x && e.target.y != this._snow4.y)){
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow4.x:", this._snow4.x);
            // console.log("this._snow4.y:", this._snow4.y);
            //this._snow4.scaleX += e.target.scaleX;
            //this._snow4.scaleY += e.target.scaleY;
            switch(this._flag){
                case 0:
                    console.log("4 the case is 0!")
                    this._snow4.scaleX = 0.2;
                    this._snow4.scaleY = 0.2;
                    break;
                case 1:
                    console.log("4 the case is 1!")
                    this._snow4.scaleX = 0.25;
                    this._snow4.scaleY = 0.25;
                    break;
                case 2:
                    console.log("4 the case is 2!")
                    this._snow4.scaleX = 0.33;
                    this._snow4.scaleY = 0.33;
                    break;
                case 3:
                    console.log("4 the case is 3!")
                    this._snow4.scaleX = 0.4;
                    this._snow4.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if(e.target.x == this._snow2.x && e.target.y == this._snow2.y){
                this._label2 = 1;
            }
            if(e.target.x == this._snow3.x && e.target.y == this._snow3.y){
                this._label3 = 1;
            }
            if(e.target.x == this._snow1.x && e.target.y == this._snow1.y){
                this._label1 = 1;
            }
            if(e.target.x == this._snow5.x && e.target.y == this._snow5.y){
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if(this._label5 == 0 && (e.target.hitTestPoint(this._snow5.x, this._snow5.y, true) || e.target.hitTestPoint(this._snow5.x+0.04*this._snow5.width, this._snow5.y+0.04*this._snow5.height, true) || e.target.hitTestPoint(this._snow5.x+0.04*this._snow5.width, this._snow5.y-0.04*this._snow5.height, true) || e.target.hitTestPoint(this._snow5.x-0.04*this._snow5.width, this._snow5.y+0.04*this._snow5.height, true) || e.target.hitTestPoint(this._snow5.x-0.04*this._snow5.width, this._snow5.y-0.04*this._snow5.height, true)) && (e.target.x != this._snow5.x && e.target.y != this._snow5.y)){
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow5.x:", this._snow5.x);
            // console.log("this._snow5.y:", this._snow5.y);
            //this._snow5.scaleX += e.target.scaleX;
            //this._snow5.scaleY += e.target.scaleY;
            switch(this._flag){
                case 0:
                    console.log("5 the case is 0!")
                    this._snow5.scaleX = 0.2;
                    this._snow5.scaleY = 0.2;
                    break;
                case 1 :
                    console.log("5 the case is 1!")
                    this._snow5.scaleX = 0.25;
                    this._snow5.scaleY = 0.25;
                    break;
                case 2:
                    console.log("5 the case is 2!")
                    this._snow5.scaleX = 0.33;
                    this._snow5.scaleY = 0.33;
                    break;
                case 3 :
                    console.log("5 the case is 3!")
                    this._snow5.scaleX = 0.4;
                    this._snow5.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if(e.target.x == this._snow2.x && e.target.y == this._snow2.y){
                this._label2 = 1;
            }
            if(e.target.x == this._snow3.x && e.target.y == this._snow3.y){
                this._label3 = 1;
            }
            if(e.target.x == this._snow4.x && e.target.y == this._snow4.y){
                this._label4 = 1;
            }
            if(e.target.x == this._snow1.x && e.target.y == this._snow1.y){
                this._label1 = 1;
            }
            this.removeChild(e.target);
        }

        Level8.instance._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        //console.log("e.target.x:", e.target.x);
        //console.log("e.target.scaleX:", e.target.scaleX);
        //if(e.target == this._snow1){}
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

    protected onEnter() {
        this._txt = UI.addText(this, "选择最大的雪人", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
		this._txt.size = 28;
		this._txt.textColor = 0x000000;
        this._snow1 = UI.addPic(this, "lvl8_1_png", 240, UI.WINSIZE_H / 2, true);
        this._snow1.scaleX = 0.08;
        this._snow1.scaleY = 0.08;
        this._snow2 = UI.addPic(this, "lvl8_1_png", 100, UI.WINSIZE_H /4, true);
        this._snow2.scaleX = 0.1;
        this._snow2.scaleY = 0.1;
        this._snow3 = UI.addPic(this, "lvl8_1_png", 320, UI.WINSIZE_H / 4, true);
        this._snow3.scaleX = 0.12;
        this._snow3.scaleY = 0.12;
        this._snow4 = UI.addPic(this, "lvl8_1_png", 130, UI.WINSIZE_H / 4 * 3, true);
        this._snow4.scaleX = 0.14;
        this._snow4.scaleY = 0.14;
        this._snow5 = UI.addPic(this, "lvl8_1_png", 370, UI.WINSIZE_H / 4 * 3, true);
        this._snow5.scaleX = 0.16;
        this._snow5.scaleY = 0.16;
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._error = UI.addPic(this, "error_png", 240, UI.WINSIZE_H / 2, true);
        this._error.scaleX = 0;
        this._error.scaleY = 0;
        this._error.alpha = 0;

        this._snow1.touchEnabled = true;
        this._snow1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._snow1.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._snow1.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);

        this._snow2.touchEnabled = true;
        this._snow2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._snow2.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._snow2.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);

        this._snow3.touchEnabled = true;
        this._snow3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._snow3.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._snow3.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);

        this._snow4.touchEnabled = true;
        this._snow4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._snow4.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._snow4.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);

        this._snow5.touchEnabled = true;
        this._snow5.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._snow5.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._snow5.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        
    }

    protected onExit() {


    }


}