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
var Level10 = (function (_super) {
    __extends(Level10, _super);
    function Level10() {
        var _this = _super.call(this) || this;
        _this._set = new egret.DisplayObjectContainer();
        _this._shape1 = new egret.Shape();
        _this._shape2 = new egret.Shape();
        _this._shape3 = new egret.Shape();
        Level10.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level10.prototype.onEnter = function () {
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
    };
    Level10.prototype.eventMask = function (e) {
        console.log("e.target:", e.target);
        if (e.stageX > 180 && e.stageX < 300 && e.stageY > UI.WINSIZE_H / 3 && e.stageY < UI.WINSIZE_H / 3 + 100) {
            console.log("e.stageX:", e.stageX);
            console.log("e.stageY:", e.stageY);
            this._set.removeChild(this._shape1);
            this._pic1.mask = this._set;
        }
        else if (e.stageX > 120 && e.stageX < 270 && e.stageY > UI.WINSIZE_H / 2 && e.stageY < UI.WINSIZE_H / 2 + 150) {
            console.log("e.stageX:", e.stageX);
            console.log("e.stageY:", e.stageY);
            this._set.removeChild(this._shape2);
            this._pic1.mask = this._set;
        }
        else if (e.stageX > 20 && e.stageX < 100 && e.stageY > UI.WINSIZE_H / 2 - 50 && e.stageY < UI.WINSIZE_H / 2 + 100) {
            console.log("e.stageX:", e.stageX);
            console.log("e.stageY:", e.stageY);
            this._set.removeChild(this._shape3);
            this._pic1.mask = this._set;
        }
        if (this._set.numChildren == 0) {
            console.log("ok");
            this.ok();
        }
        ;
    };
    ;
    Level10.prototype.ok = function () {
        var shape = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();
    };
    Level10.prototype.onExit = function () {
        this._pic1.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level10.instance.eventMask, this);
    };
    return Level10;
}(egret.DisplayObjectContainer));
__reflect(Level10.prototype, "Level10", ["egret.DisplayObject"]);
//# sourceMappingURL=Level10.js.map