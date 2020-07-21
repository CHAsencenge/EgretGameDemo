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
var Level7 = (function (_super) {
    __extends(Level7, _super);
    function Level7() {
        var _this = _super.call(this) || this;
        _this._touchStatus = false;
        _this._distance = new egret.Point();
        Level7.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level7.prototype.setoff = function (e) {
    };
    Level7.prototype.onEnter = function () {
        this._txt = UI.addText(this, "这个形状有多少个面？", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        this._dim1 = UI.addPic(this, "lvl7_2_png", 240, UI.WINSIZE_H / 2, true);
        this._dim1.scaleX = 0.4;
        this._dim1.scaleY = 0.4;
        this._dim2 = UI.addPic(this, "lvl7_1_png", 240, UI.WINSIZE_H / 2, true);
        this._dim2.scaleX = 0.4;
        this._dim2.scaleY = 0.4;
        this._dim2.alpha = 0;
        this._p7 = UI.addPic(this, "button_png", 180, UI.WINSIZE_H / 5 * 4, true);
        this._p7.scaleX = 0.25;
        this._p7.scaleY = 0.6;
        this._txt7 = UI.addText(this, "7", 180, UI.WINSIZE_H / 5 * 4, true);
        this._txt7.size = 28;
        this._txt7.textColor = 0x000000;
        this._p14 = UI.addPic(this, "button_png", 300, UI.WINSIZE_H / 5 * 4, true);
        this._p14.scaleX = 0.25;
        this._p14.scaleY = 0.6;
        this._txt14 = UI.addText(this, "14", 300, UI.WINSIZE_H / 5 * 4, true);
        this._txt14.size = 28;
        this._txt14.textColor = 0x000000;
        this._p13 = UI.addPic(this, "button_png", 150, UI.WINSIZE_H / 5 * 4, true);
        this._p13.scaleX = 0.25;
        this._p13.scaleY = 0.6;
        this._p13.alpha = 0;
        this._txt13 = UI.addText(this, "13", 180, UI.WINSIZE_H / 5 * 4, true);
        this._txt13.size = 28;
        this._txt13.textColor = 0x000000;
        this._txt13.alpha = 0;
        this._p7.touchEnabled = true;
        this._p14.touchEnabled = true;
        this._p7.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.error, this);
        this._p14.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.error, this);
        this._dim1.touchEnabled = true;
        this._dim1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._error = UI.addPic(this, "error_png", 240, UI.WINSIZE_H / 2, true);
        this._error.scaleX = 0;
        this._error.scaleY = 0;
        this._error.alpha = 0;
        //this._dim1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        // this._pic2.touchEnabled = true;
        // this._pic2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        // this._pic3.touchEnabled = true;
        // this._pic3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        // this._pic4.touchEnabled = true;
        // this._pic4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
    };
    Level7.prototype.touchDown = function (e) {
        if (e.target == this._dim1) {
            this._tag = 1;
            this._prevX = e.target.x;
            this._prevY = e.target.y;
            this._distance.x = e.stageX - e.target.x;
            this._distance.y = e.stageY - e.target.y;
            this._touchStatus = true;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level7.instance.touchMove, this);
        }
    };
    Level7.prototype.touchMove = function (e) {
        if (Level7.instance._touchStatus) {
            if (this._tag == 1) {
                this._setoff = e.stageX - this._prevX - this._distance.x;
                if (this._setoff < -120) {
                    this._dim1.alpha = 0;
                    this._dim2.alpha = 1;
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Level7.instance.touchMove, this);
                    this._dim1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
                    this._dim1.touchEnabled = false;
                    this._p7.x = 120;
                    this._p14.x = 240;
                    this._p13.x = 360;
                    this._p13.alpha = 1;
                    this._txt7.x = 120;
                    this._txt14.x = 240;
                    this._txt13.x = 360;
                    this._txt13.alpha = 1;
                    this._p13.touchEnabled = true;
                    this._p13.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ok, this);
                }
            }
        }
    };
    Level7.prototype.ok = function (e) {
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
    Level7.prototype.error = function (e) {
        var shape = this._error;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._error, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
    };
    Level7.prototype.onExit = function () {
    };
    return Level7;
}(egret.DisplayObjectContainer));
__reflect(Level7.prototype, "Level7", ["egret.DisplayObject"]);
//# sourceMappingURL=Level7.js.map