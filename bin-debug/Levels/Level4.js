var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Level4 = (function (_super) {
    __extends(Level4, _super);
    function Level4() {
        var _this = _super.call(this) || this;
        _this._touchStatus = false;
        _this._distance = new egret.Point();
        _this._label1 = 0;
        _this._label2 = 0;
        _this._label3 = 0;
        _this._label4 = 0;
        _this._tag = 0;
        Level4.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level4.prototype.clickCup = function (e) {
        if (this._label1 == 1 && this._label2 == 1 && this._label3 == 1 && this._label4 == 1) {
            if (e.stageX > 145 && e.stageX < 215 && e.stageY > 400 && e.stageY < 510) {
                this.ok(e);
            }
        }
    };
    Level4.prototype.touchDown = function (e) {
        //e.target  //触碰目标
        //Level4.instance.setChildIndex(e.target, 100);
        //this._timerBegin = egret.getTimer();
        console.log(e.stageX, e.stageY);
        if (e.target == this._pin) {
            this._tag = 2;
        }
        else if (e.target == this._battery) {
            this._tag = 3;
        }
        else if (e.target == this._watch) {
            this._tag = 4;
        }
        else if (e.target == this._carrot) {
            this._tag = 1;
        }
        // if (e.target == this._cup2) {
        //     if (this._label1 == 1 && this._label2 == 1 && this._label3 == 1 && this._label4 == 1) {
        //         if (e.stageX > 145 && e.stageX < 215 && e.stageY > 400 && e.stageY < 510) {
        //             this.ok(e);
        //             this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        //         }
        //     }
        // }
        // else {
        this._prevX = e.target.x;
        this._prevY = e.target.y;
        Level4.instance._distance.x = e.stageX - e.target.x;
        Level4.instance._distance.y = e.stageY - e.target.y;
        Level4.instance._touchStatus = true;
        Level4.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level4.instance.touchMove, this);
        // }
    };
    //拖动
    Level4.prototype.touchMove = function (e) {
        if (Level4.instance._touchStatus) {
            if (this._tag == 1) {
                this._carrot.x = e.stageX - Level4.instance._distance.x;
                this._carrot.y = e.stageY - Level4.instance._distance.y;
            }
            if (this._tag == 2) {
                this._pin.x = e.stageX - Level4.instance._distance.x;
                this._pin.y = e.stageY - Level4.instance._distance.y;
            }
            if (this._tag == 3) {
                this._battery.x = e.stageX - Level4.instance._distance.x;
                this._battery.y = e.stageY - Level4.instance._distance.y;
            }
            if (this._tag == 4) {
                this._watch.x = e.stageX - Level4.instance._distance.x;
                this._watch.y = e.stageY - Level4.instance._distance.y;
            }
        }
        // if (this._label1 == 0 && e.target == this._carrot && (!e.target.hitTestPoint(this._cup1.x, this._cup1.y, true) && !e.target.hitTestPoint(this._cup1.x + 0.2 * this._cup1.width, this._cup1.y + 0.2 * this._cup1.height, true) && !e.target.hitTestPoint(this._cup1.x + 0.2 * this._cup1.width, this._cup1.y - 0.2 * this._cup1.height, true) && !e.target.hitTestPoint(this._cup1.x - 0.2 * this._cup1.width, this._cup1.y + 0.2 * this._cup1.height, true) && !e.target.hitTestPoint(this._cup1.x - 0.2 * this._cup1.width, this._cup1.y - 0.2 * this._cup1.height, true))) {
        //     this._water1 = UI.addPic(this, "lvl4_5_png", 60, UI.WINSIZE_H / 5 * 3 + 30, true);
        //     this._water1.scaleX = 0.4;
        //     this._water1.scaleY = 0.6;
        //     this._waterBase1.alpha = 0;
        //     this._label1 = 1;
        // }
        if (e.target == this._carrot) {
            this._shapeCarrot.x = e.target.x - this._carrot.width / 2 * this._carrot.scaleX;
            this._shapeCarrot.y = e.target.y - this._carrot.height / 2 * this._carrot.scaleY;
            if (this._label1 == 0 && !this._shapeCarrot.intersects(this._shapeCup1)) {
                this._label1 = 1;
                console.log("label1:", this._label1);
                this._water1 = UI.addPic(this, "lvl4_5_png", 60, UI.WINSIZE_H / 5 * 3 + 30, true);
                this._water1.scaleX = 0.4;
                this._water1.scaleY = 0.6;
                this._waterBase1.alpha = 0;
            }
        }
        if (e.target == this._pin) {
            this._shapePin.x = e.target.x - this._pin.width / 2 * this._pin.scaleX;
            this._shapePin.y = e.target.y - this._pin.height / 2 * this._pin.scaleY;
            if (this._label2 == 0 && !this._shapePin.intersects(this._shapeCup2)) {
                this._label2 = 1;
                console.log("label2:", this._label2);
            }
        }
        if (e.target == this._battery) {
            this._shapeBattery.x = e.target.x - this._battery.width / 2 * this._battery.scaleX;
            this._shapeBattery.y = e.target.y - this._battery.height / 2 * this._battery.scaleY;
            if (this._label3 == 0 && !this._shapeBattery.intersects(this._shapeCup3)) {
                this._label3 = 1;
                console.log("label3:", this._label3);
                this._water3 = UI.addPic(this, "lvl4_7_png", 300, UI.WINSIZE_H / 5 * 3 + 10, true);
                this._water3.scaleX = 0.4;
                this._water3.scaleY = 0.45;
                this._waterBase3.alpha = 0;
            }
        }
        if (e.target == this._watch) {
            this._shapeWatch.x = e.target.x - this._watch.width / 2 * this._watch.scaleX;
            this._shapeWatch.y = e.target.y - this._watch.height / 2 * this._watch.scaleY;
            if (this._label4 == 0 && !this._shapeWatch.intersects(this._shapeCup4)) {
                this._label4 = 1;
                console.log("label4:", this._label4);
                this._water4 = UI.addPic(this, "lvl4_8_png", 420, UI.WINSIZE_H / 5 * 3 + 20, true);
                this._water4.scaleX = 0.4;
                this._water4.scaleY = 0.45;
                this._waterBase4.alpha = 0;
            }
        }
        // else if (this._label2 == 0 && e.target == this._pin && (!e.target.hitTestPoint(this._cup2.x, this._cup2.y, true) && !e.target.hitTestPoint(this._cup2.x + 0.2 * this._cup2.width, this._cup2.y + 0.2 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x + 0.2 * this._cup2.width, this._cup2.y - 0.2 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x - 0.2 * this._cup2.width, this._cup2.y + 0.2 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x - 0.2 * this._cup2.width, this._cup2.y - 0.2 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x + 0.1 * this._cup2.width, this._cup2.y + 0.1 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x + 0.1 * this._cup2.width, this._cup2.y - 0.1 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x - 0.1 * this._cup2.width, this._cup2.y + 0.1 * this._cup2.height, true) && !e.target.hitTestPoint(this._cup2.x - 0.1 * this._cup2.width, this._cup2.y - 0.1 * this._cup2.height, true))) {
        //     this._label2 = 1;
        // }
        // else if (this._label3 == 0 && e.target == this._battery && (!e.target.hitTestPoint(this._cup3.x, this._cup3.y, true) && !e.target.hitTestPoint(this._cup3.x + 0.2 * this._cup3.width, this._cup3.y + 0.2 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x + 0.2 * this._cup3.width, this._cup3.y - 0.2 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x - 0.2 * this._cup3.width, this._cup3.y + 0.2 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x - 0.2 * this._cup3.width, this._cup3.y - 0.2 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x + 0.1 * this._cup3.width, this._cup3.y + 0.1 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x + 0.1 * this._cup3.width, this._cup3.y - 0.1 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x - 0.1 * this._cup3.width, this._cup3.y + 0.1 * this._cup3.height, true) && !e.target.hitTestPoint(this._cup3.x - 0.1 * this._cup3.width, this._cup3.y - 0.1 * this._cup3.height, true))) {
        //     this._water3 = UI.addPic(this, "lvl4_7_png", 300, UI.WINSIZE_H / 5 * 3 + 10, true);
        //     this._water3.scaleX = 0.4;
        //     this._water3.scaleY = 0.4;
        //     this._waterBase3.alpha = 0;
        //     this._label3 = 1;
        // }
    };
    Level4.prototype.touchUp = function (e) {
    };
    // public cupOk(e: egret.TouchEvent) {
    //     console.log(e.stageX, e.stageY);
    //     if (this._label1 == 1 && this._label2 == 1 && this._label3 == 1 && this._label4 == 1) {
    //         this._cup2.touchEnabled = true;
    //         if (e.stageX > 145 && e.stageX < 215 && e.stageY > 400 && e.stageY < 510) {
    //             this.ok(e);
    //             this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.cupOk, this);
    //         }
    //     }
    // }
    Level4.prototype.onEnter = function () {
        this._txt = UI.addText(this, "哪个杯子里的水最多？", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        this._cup1 = UI.addPic(this, "lvl4_2_png", 60, UI.WINSIZE_H / 5 * 3, true);
        this._cup1.scaleX = 0.4;
        this._cup1.scaleY = 0.4;
        this._cup2 = UI.addPic(this, "lvl4_2_png", 180, UI.WINSIZE_H / 5 * 3, true);
        this._cup2.scaleX = 0.4;
        this._cup2.scaleY = 0.4;
        this._cup3 = UI.addPic(this, "lvl4_2_png", 300, UI.WINSIZE_H / 5 * 3, true);
        this._cup3.scaleX = 0.4;
        this._cup3.scaleY = 0.4;
        this._cup4 = UI.addPic(this, "lvl4_2_png", 420, UI.WINSIZE_H / 5 * 3, true);
        this._cup4.scaleX = 0.4;
        this._cup4.scaleY = 0.4;
        this._waterBase1 = UI.addPic(this, "lvl4_6_png", 60, UI.WINSIZE_H / 5 * 3 + 10, true);
        this._waterBase1.scaleX = 0.4;
        this._waterBase1.scaleY = 0.45;
        this._waterBase2 = UI.addPic(this, "lvl4_6_png", 180, UI.WINSIZE_H / 5 * 3 + 10, true);
        this._waterBase2.scaleX = 0.4;
        this._waterBase2.scaleY = 0.45;
        this._waterBase3 = UI.addPic(this, "lvl4_6_png", 300, UI.WINSIZE_H / 5 * 3 + 10, true);
        this._waterBase3.scaleX = 0.4;
        this._waterBase3.scaleY = 0.45;
        this._waterBase4 = UI.addPic(this, "lvl4_6_png", 420, UI.WINSIZE_H / 5 * 3 + 10, true);
        this._waterBase4.scaleX = 0.4;
        this._waterBase4.scaleY = 0.45;
        this._carrot = UI.addPic(this, "lvl4_1_png", 70, UI.WINSIZE_H / 5 * 3 - 25, true);
        this._carrot.scaleX = 0.35;
        this._carrot.scaleY = 0.35;
        this._carrot.rotation = 15;
        this._pin = UI.addPic(this, "lvl4_3_png", 180, UI.WINSIZE_H / 5 * 3 + 50, true);
        this._pin.scaleX = 0.4;
        this._pin.scaleY = 0.4;
        this._pin.rotation = 90;
        this._battery = UI.addPic(this, "lvl4_9_png", 300, UI.WINSIZE_H / 5 * 3 + 40, true);
        this._battery.scaleX = 0.5;
        this._battery.scaleY = 0.5;
        this._watch = UI.addPic(this, "lvl4_4_png", 425, UI.WINSIZE_H / 5 * 3 + 15, true);
        this._watch.scaleX = 0.4;
        this._watch.scaleY = 0.4;
        this._watch.rotation = 15;
        this._shapeCup1 = new egret.Rectangle(25, 400, 70, 110);
        this._shapeCup2 = new egret.Rectangle(145, 400, 70, 110);
        this._shapeCup3 = new egret.Rectangle(260, 400, 70, 110);
        this._shapeCup4 = new egret.Rectangle(385, 400, 70, 110);
        this._shapeCarrot = new egret.Rectangle(35, 400, 50, 100);
        this._shapePin = new egret.Rectangle(160, 490, 40, 25);
        this._shapeBattery = new egret.Rectangle(270, 475, 60, 35);
        this._shapeWatch = new egret.Rectangle(400, 430, 50, 60);
        //this._cup2.touchEnabled = true;
        //this._cup2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.clickCup, this);
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            if (this._label1 == 1 && this._label2 == 1 && this._label3 == 1 && this._label4 == 1) {
                this._cup2.touchEnabled = true;
                this._cup2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                    this.ok(e);
                }, this);
            }
        }, this);
        this._carrot.touchEnabled = true;
        this._carrot.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._carrot.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._carrot.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._pin.touchEnabled = true;
        this._pin.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._pin.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._pin.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._battery.touchEnabled = true;
        this._battery.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._battery.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._battery.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        this._watch.touchEnabled = true;
        this._watch.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._watch.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this._watch.addEventListener(egret.TouchEvent.TOUCH_END, this.touchUp, this);
        //this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.clickCup, this);
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._error = UI.addPic(this, "error_png", 240, UI.WINSIZE_H / 2, true);
        this._error.scaleX = 0;
        this._error.scaleY = 0;
        this._error.alpha = 0;
        // this._pic1.touchEnabled = true;
        // this._pic1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        // this._pic2.touchEnabled = true;
        // this._pic2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        // this._pic3.touchEnabled = true;
        // this._pic3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        // this._pic4.touchEnabled = true;
        // this._pic4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
    };
    // public touchDown(e: egret.TouchEvent){
    //     if(e.target == this._pic1){
    //         this.ok(e);
    //         this._pic1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
    //         this._pic2.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
    //         this._pic3.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
    //         this._pic4.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
    //     }
    //     if(e.target == this._pic2){
    //         this.error(e);
    //     }
    //     if(e.target == this._pic3){
    //         this.error(e);
    //     }
    //     if(e.target == this._pic4){
    //         this.error(e);
    //     }
    // }
    Level4.prototype.ok = function (e) {
        var shape = this._ok;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._ok, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
        GameData.finishLevel();
    };
    Level4.prototype.error = function (e) {
        var shape = this._error;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._error, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
    };
    Level4.prototype.onExit = function () {
    };
    return Level4;
}(egret.DisplayObjectContainer));
__reflect(Level4.prototype, "Level4", ["egret.DisplayObject"]);
//# sourceMappingURL=Level4.js.map