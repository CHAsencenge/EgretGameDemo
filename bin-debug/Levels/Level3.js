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
var Level3 = (function (_super) {
    __extends(Level3, _super);
    function Level3() {
        var _this = _super.call(this) || this;
        Level3.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level3.prototype.onEnter = function () {
        this._txt = UI.addText(this, "哪个行星最大？", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        this._pic1 = UI.addPic(this, "lvl3_1_png", 330, UI.WINSIZE_H / 7 * 5, true);
        this._pic1.scaleX = 0.25;
        this._pic1.scaleY = 0.25;
        this._pic2 = UI.addPic(this, "lvl3_2_png", 330, UI.WINSIZE_H / 7 * 3, true);
        this._pic2.scaleX = 0.25;
        this._pic2.scaleY = 0.25;
        this._pic3 = UI.addPic(this, "lvl3_3_png", 150, UI.WINSIZE_H / 7 * 4, true);
        this._pic3.scaleX = 0.25;
        this._pic3.scaleY = 0.25;
        this._pic4 = UI.addPic(this, "lvl3_4_png", 150, UI.WINSIZE_H / 7 * 2, true);
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
    };
    Level3.prototype.touchDown = function (e) {
        if (e.target == this._pic1) {
            this.ok(e);
            this._pic1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._pic2.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._pic3.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
            this._pic4.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchDown, this);
        }
        if (e.target == this._pic2) {
            this.error(e);
        }
        if (e.target == this._pic3) {
            this.error(e);
        }
        if (e.target == this._pic4) {
            this.error(e);
        }
    };
    Level3.prototype.ok = function (e) {
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
    Level3.prototype.error = function (e) {
        var shape = this._error;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._error, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
    };
    Level3.prototype.onExit = function () {
    };
    return Level3;
}(egret.DisplayObjectContainer));
__reflect(Level3.prototype, "Level3", ["egret.DisplayObject"]);
//# sourceMappingURL=Level3.js.map