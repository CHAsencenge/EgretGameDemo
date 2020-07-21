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
var Level9 = (function (_super) {
    __extends(Level9, _super);
    function Level9() {
        var _this = _super.call(this) || this;
        _this._distance = new egret.Point();
        _this._touchStatus = false;
        Level9.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    // protected createChildren(): void {
    //     //super.createChildren();
    //     this.viewStack = new eui.ViewStack();
    //     this.viewStack.addChild(this._picT);
    // }
    //手指按在屏幕时
    Level9.prototype.touchDown = function (e) {
        Level9.instance._distance.x = e.stageX - this._river.x;
        Level9.instance._distance.y = e.stageY - this._river.y;
        Level9.instance._touchStatus = true;
        Level9.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Level9.instance.touchMove, this);
    };
    //拖动
    Level9.prototype.touchMove = function (e) {
        if (Level9.instance._touchStatus) {
            Level9.instance._river.x = e.stageX - Level9.instance._distance.x;
            Level9.instance._river.y = e.stageY - Level9.instance._distance.y;
            //背景图的图像中心x到达-120时，图片左侧到达屏幕左侧，此时使图像无法再继续左移
            if (Level9.instance._river.x < -32 || Level9.instance._river.x > 512) {
                if (this._river.x < -32) {
                    this._river.x = -32;
                    this.ok();
                    this._man.alpha = 0;
                    this._manOk.alpha = 1;
                }
                else {
                    this._river.x = 512;
                }
            }
            if (this._river.y < UI.WINSIZE_H / 3 || this._river.y > UI.WINSIZE_H / 3) {
                this._river.y = UI.WINSIZE_H / 3;
            }
        }
    };
    //手指抬起
    Level9.prototype.touchUp = function () {
        //console.log("touch leave!")
        Level9.instance._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
    };
    Level9.prototype.clickDown = function (e) {
        this._distance.x = e.stageX - e.target.x;
        this._distance.y = e.stageY - e.target.y;
        this._touchStatus = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.clickMove, this);
    };
    Level9.prototype.clickMove = function (e) {
        if (Level9.instance._touchStatus) {
            e.target.x = e.stageX - Level9.instance._distance.x;
            e.target.y = e.stageY - Level9.instance._distance.y;
            this.error(e);
        }
    };
    Level9.prototype.clickUp = function (e) {
    };
    Level9.prototype.onEnter = function () {
        this._txt = UI.addText(this, "过河。", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        //var a : number = Math.round(Math.random()*5);
        this._river = UI.addPic(this, "river_014_png", 512, UI.WINSIZE_H / 3, true);
        this._river.scaleX = 1;
        this._river.scaleY = 1;
        this._river.touchEnabled = true;
        this._river.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level9.instance.touchDown, this);
        this._river.addEventListener(egret.TouchEvent.TOUCH_END, Level9.instance.touchUp, this);
        this._hammer = UI.addPic(this, "hammer_lev014_png", 180, UI.WINSIZE_H / 4 * 3, true);
        this._hammer.scaleX = 0.4;
        this._hammer.scaleY = 0.4;
        this._hammer.touchEnabled = true;
        this._hammer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level9.instance.clickDown, this);
        this._hammer.addEventListener(egret.TouchEvent.TOUCH_END, Level9.instance.clickUp, this);
        this._rubber = UI.addPic(this, "rubberlev014_png", 300, UI.WINSIZE_H / 4 * 3 + 20, true);
        this._rubber.scaleX = 0.3;
        this._rubber.scaleY = 0.3;
        this._rubber.touchEnabled = true;
        this._rubber.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level9.instance.clickDown, this);
        this._rubber.addEventListener(egret.TouchEvent.TOUCH_END, Level9.instance.clickUp, this);
        this._man = UI.addPic(this, "man_lev014_png", 70, UI.WINSIZE_H / 3 * 2, true);
        this._man.scaleX = 0.4;
        this._man.scaleY = 0.4;
        this._manOk = UI.addPic(this, "man3_lev014_png", 70, UI.WINSIZE_H / 3 * 2, true);
        this._manOk.scaleX = 0.4;
        this._manOk.scaleY = 0.4;
        this._manOk.alpha = 0;
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._error = UI.addPic(this, "error_png", 240, UI.WINSIZE_H / 2, true);
        this._error.scaleX = 0;
        this._error.scaleY = 0;
        this._error.alpha = 0;
    };
    Level9.prototype.ok = function () {
        var shape = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();
    };
    Level9.prototype.error = function (e) {
        var shape = this._error;
        shape.x = e.target.x;
        shape.y = e.target.y;
        this.setChildIndex(this._error, 100);
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 200);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 200);
    };
    Level9.prototype.onExit = function () {
        //必须要加入
        // this._picK.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.ok, this);
        // this._picA.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        // this._picJ.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        // this._picQ.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        // this._picT.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.error, this);
        //this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        //this._btn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, Level5.instance.judge, this);
    };
    return Level9;
}(egret.DisplayObjectContainer));
__reflect(Level9.prototype, "Level9", ["egret.DisplayObject"]);
//# sourceMappingURL=Level9.js.map