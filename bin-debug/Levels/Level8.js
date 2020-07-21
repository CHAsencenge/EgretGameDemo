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
var Level8 = (function (_super) {
    __extends(Level8, _super);
    function Level8() {
        var _this = _super.call(this) || this;
        _this._touchStatus = false;
        _this._distance = new egret.Point();
        _this._label1 = 0;
        _this._label2 = 0;
        _this._label3 = 0;
        _this._label4 = 0;
        _this._label5 = 0;
        _this._flag = 0;
        Level8.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level8.prototype.touchDown = function (e) {
        //e.target  //触碰目标
        Level8.instance.setChildIndex(e.target, 100);
        //this._timerBegin = egret.getTimer();
        this._prevX = e.target.x;
        this._prevY = e.target.y;
        Level8.instance._distance.x = e.stageX - e.target.x;
        Level8.instance._distance.y = e.stageY - e.target.y;
        Level8.instance._touchStatus = true;
        Level8.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level8.instance.touchMove, this);
    };
    //拖动
    Level8.prototype.touchMove = function (e) {
        if (Level8.instance._touchStatus) {
            e.target.x = e.stageX - Level8.instance._distance.x;
            e.target.y = e.stageY - Level8.instance._distance.y;
        }
    };
    //手指抬起,雪人大小没到最大时的触碰均显示error，最大时点击显示ok
    Level8.prototype.touchUp = function (e) {
        //console.log("touch leave!")
        //this._timerEnd = egret.getTimer();
        //if(this._timerEnd - this._timerBegin < 200){
        //console.log("Timer:", this._timerEnd - this._timerBegin);
        //console.log("e.target.scaleX:", e.target.scaleX);
        //判断为点击而不是拖动
        if (this._prevX == e.target.x && this._prevY == e.target.y) {
            console.log("e.target.scaleX", e.target.scaleX);
            if (e.target.scaleX == 0.4) {
                //console.log("e.target.scaleX", e.target.scaleX);
                this.ok(e);
            }
            else {
                this.error(e);
            }
            //console.log(e.target);
        }
        //碰撞检测，碰撞则移除掉正在拖动的雪人，并且此雪人图片不再能触发碰撞的检测
        if (this._label1 == 0 && (e.target.hitTestPoint(this._snow1.x, this._snow1.y, true) || e.target.hitTestPoint(this._snow1.x + 0.04 * this._snow1.width, this._snow1.y + 0.04 * this._snow1.height, true) || e.target.hitTestPoint(this._snow1.x + 0.04 * this._snow1.width, this._snow1.y - 0.04 * this._snow1.height, true) || e.target.hitTestPoint(this._snow1.x - 0.04 * this._snow1.width, this._snow1.y + 0.04 * this._snow1.height, true) || e.target.hitTestPoint(this._snow1.x - 0.04 * this._snow1.width, this._snow1.y - 0.04 * this._snow1.height, true)) && (e.target.x != this._snow1.x && e.target.y != this._snow1.y)) {
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow1.x:", this._snow1.x);
            // console.log("this._snow1.y:", this._snow1.y);
            console.log("this._snow1.width:", this._snow1.width);
            console.log("this._snow1.height:", this._snow1.height);
            switch (this._flag) {
                case 0:
                    console.log("1 the case is 0!");
                    this._snow1.scaleX = 0.2;
                    this._snow1.scaleY = 0.2;
                    break;
                case 1:
                    console.log("1 the case is 1!");
                    this._snow1.scaleX = 0.25;
                    this._snow1.scaleY = 0.25;
                    break;
                case 2:
                    console.log("1 the case is 2!");
                    this._snow1.scaleX = 0.33;
                    this._snow1.scaleY = 0.33;
                    break;
                case 3:
                    console.log("1 the case is 3!");
                    this._snow1.scaleX = 0.4;
                    this._snow1.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            //this._snow1.scaleX += e.target.scaleX;
            //this._snow1.scaleY += e.target.scaleY;
            if (e.target.x == this._snow2.x && e.target.y == this._snow2.y) {
                this._label2 = 1;
            }
            if (e.target.x == this._snow3.x && e.target.y == this._snow3.y) {
                this._label3 = 1;
            }
            if (e.target.x == this._snow4.x && e.target.y == this._snow4.y) {
                this._label4 = 1;
            }
            if (e.target.x == this._snow5.x && e.target.y == this._snow5.y) {
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if (this._label2 == 0 && (e.target.hitTestPoint(this._snow2.x, this._snow2.y, true) || e.target.hitTestPoint(this._snow2.x + 0.04 * this._snow2.width, this._snow2.y + 0.04 * this._snow2.height, true) || e.target.hitTestPoint(this._snow2.x + 0.04 * this._snow2.width, this._snow2.y - 0.04 * this._snow2.height, true) || e.target.hitTestPoint(this._snow2.x - 0.04 * this._snow2.width, this._snow2.y + 0.04 * this._snow2.height, true) || e.target.hitTestPoint(this._snow2.x - 0.04 * this._snow2.width, this._snow2.y - 0.04 * this._snow2.height, true)) && (e.target.x != this._snow2.x && e.target.y != this._snow2.y)) {
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow2.x:", this._snow2.x);
            // console.log("this._snow2.y:", this._snow2.y);
            //this._snow2.scaleX += e.target.scaleX;
            //this._snow2.scaleY += e.target.scaleY;
            switch (this._flag) {
                case 0:
                    console.log("2 the case is 0!");
                    this._snow2.scaleX = 0.2;
                    this._snow2.scaleY = 0.2;
                    break;
                case 1:
                    console.log("2 the case is 1!");
                    this._snow2.scaleX = 0.25;
                    this._snow2.scaleY = 0.25;
                    break;
                case 2:
                    console.log("2 the case is 2!");
                    this._snow2.scaleX = 0.33;
                    this._snow2.scaleY = 0.33;
                    break;
                case 3:
                    console.log("2 the case is 3!");
                    this._snow2.scaleX = 0.4;
                    this._snow2.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if (e.target.x == this._snow1.x && e.target.y == this._snow1.y) {
                this._label1 = 1;
            }
            if (e.target.x == this._snow3.x && e.target.y == this._snow3.y) {
                this._label3 = 1;
            }
            if (e.target.x == this._snow4.x && e.target.y == this._snow4.y) {
                this._label4 = 1;
            }
            if (e.target.x == this._snow5.x && e.target.y == this._snow5.y) {
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if (this._label3 == 0 && (e.target.hitTestPoint(this._snow3.x, this._snow3.y, true) || e.target.hitTestPoint(this._snow3.x + 0.04 * this._snow3.width, this._snow3.y + 0.04 * this._snow3.height, true) || e.target.hitTestPoint(this._snow3.x + 0.04 * this._snow3.width, this._snow3.y - 0.04 * this._snow3.height, true) || e.target.hitTestPoint(this._snow3.x - 0.04 * this._snow3.width, this._snow3.y + 0.04 * this._snow3.height, true) || e.target.hitTestPoint(this._snow3.x - 0.04 * this._snow3.width, this._snow3.y - 0.04 * this._snow3.height, true)) && (e.target.x != this._snow3.x && e.target.y != this._snow3.y)) {
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow3.x:", this._snow3.x);
            // console.log("this._snow3.y:", this._snow3.y);
            //this._snow3.scaleX += e.target.scaleX;
            //this._snow3.scaleY += e.target.scaleY;
            switch (this._flag) {
                case 0:
                    this._snow3.scaleX = 0.2;
                    this._snow3.scaleY = 0.2;
                    break;
                case 1:
                    console.log("3 the case is 1!");
                    this._snow3.scaleX = 0.25;
                    this._snow3.scaleY = 0.25;
                    break;
                case 2:
                    console.log("3 the case is 2!");
                    this._snow3.scaleX = 0.33;
                    this._snow3.scaleY = 0.33;
                    break;
                case 3:
                    console.log("3 the case is 3!");
                    this._snow3.scaleX = 0.4;
                    this._snow3.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if (e.target.x == this._snow2.x && e.target.y == this._snow2.y) {
                this._label2 = 1;
            }
            if (e.target.x == this._snow1.x && e.target.y == this._snow1.y) {
                this._label1 = 1;
            }
            if (e.target.x == this._snow4.x && e.target.y == this._snow4.y) {
                this._label4 = 1;
            }
            if (e.target.x == this._snow5.x && e.target.y == this._snow5.y) {
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if (this._label4 == 0 && (e.target.hitTestPoint(this._snow4.x, this._snow4.y, true) || e.target.hitTestPoint(this._snow4.x + 0.04 * this._snow4.width, this._snow4.y + 0.04 * this._snow4.height, true) || e.target.hitTestPoint(this._snow4.x + 0.04 * this._snow4.width, this._snow4.y - 0.04 * this._snow4.height, true) || e.target.hitTestPoint(this._snow4.x - 0.04 * this._snow4.width, this._snow4.y + 0.04 * this._snow4.height, true) || e.target.hitTestPoint(this._snow4.x - 0.04 * this._snow4.width, this._snow4.y - 0.04 * this._snow4.height, true)) && (e.target.x != this._snow4.x && e.target.y != this._snow4.y)) {
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow4.x:", this._snow4.x);
            // console.log("this._snow4.y:", this._snow4.y);
            //this._snow4.scaleX += e.target.scaleX;
            //this._snow4.scaleY += e.target.scaleY;
            switch (this._flag) {
                case 0:
                    console.log("4 the case is 0!");
                    this._snow4.scaleX = 0.2;
                    this._snow4.scaleY = 0.2;
                    break;
                case 1:
                    console.log("4 the case is 1!");
                    this._snow4.scaleX = 0.25;
                    this._snow4.scaleY = 0.25;
                    break;
                case 2:
                    console.log("4 the case is 2!");
                    this._snow4.scaleX = 0.33;
                    this._snow4.scaleY = 0.33;
                    break;
                case 3:
                    console.log("4 the case is 3!");
                    this._snow4.scaleX = 0.4;
                    this._snow4.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if (e.target.x == this._snow2.x && e.target.y == this._snow2.y) {
                this._label2 = 1;
            }
            if (e.target.x == this._snow3.x && e.target.y == this._snow3.y) {
                this._label3 = 1;
            }
            if (e.target.x == this._snow1.x && e.target.y == this._snow1.y) {
                this._label1 = 1;
            }
            if (e.target.x == this._snow5.x && e.target.y == this._snow5.y) {
                this._label5 = 1;
            }
            this.removeChild(e.target);
        }
        if (this._label5 == 0 && (e.target.hitTestPoint(this._snow5.x, this._snow5.y, true) || e.target.hitTestPoint(this._snow5.x + 0.04 * this._snow5.width, this._snow5.y + 0.04 * this._snow5.height, true) || e.target.hitTestPoint(this._snow5.x + 0.04 * this._snow5.width, this._snow5.y - 0.04 * this._snow5.height, true) || e.target.hitTestPoint(this._snow5.x - 0.04 * this._snow5.width, this._snow5.y + 0.04 * this._snow5.height, true) || e.target.hitTestPoint(this._snow5.x - 0.04 * this._snow5.width, this._snow5.y - 0.04 * this._snow5.height, true)) && (e.target.x != this._snow5.x && e.target.y != this._snow5.y)) {
            // console.log("e.target.x:", e.target.x);
            // console.log("e.target.y:", e.target.y);
            // console.log("this._snow5.x:", this._snow5.x);
            // console.log("this._snow5.y:", this._snow5.y);
            //this._snow5.scaleX += e.target.scaleX;
            //this._snow5.scaleY += e.target.scaleY;
            switch (this._flag) {
                case 0:
                    console.log("5 the case is 0!");
                    this._snow5.scaleX = 0.2;
                    this._snow5.scaleY = 0.2;
                    break;
                case 1:
                    console.log("5 the case is 1!");
                    this._snow5.scaleX = 0.25;
                    this._snow5.scaleY = 0.25;
                    break;
                case 2:
                    console.log("5 the case is 2!");
                    this._snow5.scaleX = 0.33;
                    this._snow5.scaleY = 0.33;
                    break;
                case 3:
                    console.log("5 the case is 3!");
                    this._snow5.scaleX = 0.4;
                    this._snow5.scaleY = 0.4;
                    break;
            }
            this._flag += 1;
            if (e.target.x == this._snow2.x && e.target.y == this._snow2.y) {
                this._label2 = 1;
            }
            if (e.target.x == this._snow3.x && e.target.y == this._snow3.y) {
                this._label3 = 1;
            }
            if (e.target.x == this._snow4.x && e.target.y == this._snow4.y) {
                this._label4 = 1;
            }
            if (e.target.x == this._snow1.x && e.target.y == this._snow1.y) {
                this._label1 = 1;
            }
            this.removeChild(e.target);
        }
        Level8.instance._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        //console.log("e.target.x:", e.target.x);
        //console.log("e.target.scaleX:", e.target.scaleX);
        //if(e.target == this._snow1){}
    };
    Level8.prototype.ok = function (e) {
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
    Level8.prototype.error = function (e) {
        var shape = this._error;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._error, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
    };
    Level8.prototype.onEnter = function () {
        this._txt = UI.addText(this, "选择最大的雪人", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        this._snow1 = UI.addPic(this, "lvl8_1_png", 240, UI.WINSIZE_H / 2, true);
        this._snow1.scaleX = 0.08;
        this._snow1.scaleY = 0.08;
        this._snow2 = UI.addPic(this, "lvl8_1_png", 100, UI.WINSIZE_H / 4, true);
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
    };
    Level8.prototype.onExit = function () {
    };
    return Level8;
}(egret.DisplayObjectContainer));
__reflect(Level8.prototype, "Level8", ["egret.DisplayObject"]);
//# sourceMappingURL=Level8.js.map