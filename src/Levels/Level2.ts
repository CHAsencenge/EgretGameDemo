class Level2 extends egret.DisplayObjectContainer implements egret.DisplayObject {
    //每个拼图被拖到对应的位置后将取消掉它的拖动功能
    public static instance: Level2;
    public _puzzleBase: egret.Bitmap;
    public _puzzle1: egret.Bitmap;
    public _puzzle2: egret.Bitmap;
    public _puzzle3: egret.Bitmap;
    public _puzzle4: egret.Bitmap;
    public _puzzle5: egret.Bitmap;
    public _puzzle6: egret.Bitmap;
    public _puzzle7: egret.Bitmap;
    public _touchStatus: boolean = false;
    public _distance: egret.Point = new egret.Point();
    //public _timerBegin:number;
    //public _timerEnd:number;
    public _ok: egret.Bitmap;
    public _error: egret.Bitmap;
    public _prevX: number;
    public _prevY: number;
   

    public constructor() {
        super();
        Level2.instance = this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }

    public touchDown(e: egret.TouchEvent) {
        //e.target  //触碰目标
        Level2.instance.setChildIndex(e.target, 100);
        //this._timerBegin = egret.getTimer();
        this._prevX = e.target.x;
        this._prevY = e.target.y;
        Level2.instance._distance.x = e.stageX - e.target.x;
        Level2.instance._distance.y = e.stageY - e.target.y;
        Level2.instance._touchStatus = true;
        Level2.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
    }

    //拖动
    public touchMove(e: egret.TouchEvent) {
        if (Level2.instance._touchStatus) {
            e.target.x = e.stageX - Level2.instance._distance.x;
            e.target.y = e.stageY - Level2.instance._distance.y;   
        }
    }

    public touchUp(e: egret.TouchEvent) {
        //碰撞检测
        console.log("x:", e.target.x);
        console.log("y:", e.target.y);
        if(e.target == this._puzzle1 && e.target.hitTestPoint(180, 274.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 180, y: 274.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle1.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle1.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle1.touchEnabled = false;
        }
        if(e.target == this._puzzle2 && e.target.hitTestPoint(148, 243.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 148, y: 243.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle2.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle2.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle2.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle2.touchEnabled = false;
        }
        if(e.target == this._puzzle3 && e.target.hitTestPoint(283, 162.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 283, y: 162.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle3.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle3.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle3.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle3.touchEnabled = false;
        }
        if(e.target == this._puzzle4 && e.target.hitTestPoint(295, 150.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 295, y: 150.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle4.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle4.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle4.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle4.touchEnabled = false;
        }
        if(e.target == this._puzzle5 && e.target.hitTestPoint(281, 247.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 281, y: 242.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle5.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle5.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle5.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle5.touchEnabled = false;
        }
        if(e.target == this._puzzle6 && e.target.hitTestPoint(220, 247.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 220, y: 247.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle6.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle6.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle6.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle6.touchEnabled = false;
        }
        if(e.target == this._puzzle7 && e.target.hitTestPoint(332, 141.33, true)){
            var tw = egret.Tween.get(e.target);
            tw.to({ x: 332, y: 141.33 }, 200);
            Level2.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level2.instance.touchMove, this);
            this._puzzle7.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._puzzle7.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this._puzzle7.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
            this._puzzle7.touchEnabled = false;
        }
        //后做ok判断，if所有的图片都在该有的位置上，ok
        // if(this._puzzle1.x == 180 && this._puzzle1.y == 274.33 && 
        //    this._puzzle2.x == 148 && this._puzzle2.y == 243.33 &&
        //    this._puzzle3.x == 283 && this._puzzle3.y == 162.33 &&
        //    this._puzzle4.x == 295 && this._puzzle4.y == 150.33 &&
        //    this._puzzle5.x == 281 && this._puzzle5.y == 242.33 &&
        //    this._puzzle6.x == 220 && this._puzzle6.y == 247.33 &&
        //    this._puzzle7.x == 332 && this._puzzle7.y == 141.33 ){
        //        this.ok();
        // }
        
        // if(this._puzzle1.x == 180 && this._puzzle2.x == 148 && this._puzzle3.x == 283 && this._puzzle4.x == 295 && this._puzzle6.x == 220 && this._puzzle7.x == 332){
        //     this.ok();
        // }

        if(this._puzzle1.touchEnabled == false && this._puzzle2.touchEnabled == false && this._puzzle3.touchEnabled == false && this._puzzle4.touchEnabled == false && this._puzzle5.touchEnabled == false && this._puzzle5.touchEnabled == false && this._puzzle7.touchEnabled == false){
            this.ok();
        }
    }

    public ok(){
        var shape: egret.Bitmap = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();
    }

    public onEnter(){
        this._puzzleBase = UI.addPic(this, "lvl2_1_png", 240, UI.WINSIZE_H / 3 - 65, true);
        this._puzzleBase.scaleX = 0.4;
        this._puzzleBase.scaleY = 0.4;
        this._puzzle1 = UI.addPic(this, "lvl2_2_png", 60, UI.WINSIZE_H / 3 * 2, true);
        this._puzzle1.scaleX = 0.4;
        this._puzzle1.scaleY = 0.4;
        this._puzzle2 = UI.addPic(this, "lvl2_3_png", 180, UI.WINSIZE_H / 3 * 2, true);
        this._puzzle2.scaleX = 0.4;
        this._puzzle2.scaleY = 0.4;
        this._puzzle3 = UI.addPic(this, "lvl2_4_png", 300, UI.WINSIZE_H / 3 * 2, true);
        this._puzzle3.scaleX = 0.4;
        this._puzzle3.scaleY = 0.4;
        this._puzzle4 = UI.addPic(this, "lvl2_5_png", 420, UI.WINSIZE_H / 3 * 2, true);
        this._puzzle4.scaleX = 0.4;
        this._puzzle4.scaleY = 0.4;
        this._puzzle5 = UI.addPic(this, "lvl2_6_png", 120, UI.WINSIZE_H / 3 * 2 + 100, true);
        this._puzzle5.scaleX = 0.4;
        this._puzzle5.scaleY = 0.4;
        this._puzzle6 = UI.addPic(this, "lvl2_7_png", 240, UI.WINSIZE_H / 3 * 2 + 100, true);
        this._puzzle6.scaleX = 0.4;
        this._puzzle6.scaleY = 0.4;
        this._puzzle7 = UI.addPic(this, "lvl2_8_png", 360, UI.WINSIZE_H / 3 * 2 + 100, true);
        this._puzzle7.scaleX = 0.4;
        this._puzzle7.scaleY = 0.4;

        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;

        this._puzzle1.touchEnabled = true;
        this._puzzle1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle1.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle1.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._puzzle2.touchEnabled = true;
        this._puzzle2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle2.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle2.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._puzzle3.touchEnabled = true;
        this._puzzle3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle3.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle3.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._puzzle4.touchEnabled = true;
        this._puzzle4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle4.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle4.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._puzzle5.touchEnabled = true;
        this._puzzle5.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle5.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle5.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._puzzle6.touchEnabled = true;
        this._puzzle6.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle6.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle6.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._puzzle7.touchEnabled = true;
        this._puzzle7.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._puzzle7.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._puzzle7.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
    }

    public onExit(){

    }
}