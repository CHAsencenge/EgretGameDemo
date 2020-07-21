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
var Level17 = (function (_super) {
    __extends(Level17, _super);
    //
    function Level17() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        _this.point1 = new egret.Point(240, 455 / 820 * UI.WINSIZE_H); //文字正确位置坐标点
        _this._tag = false;
        Level17.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level17.prototype.onExit = function () {
        //必须要加入
    };
    Level17.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        this._img["lvl17_1"] = UI.addPic(this, "lvl17_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["lvl17_1"].scaleX = 0.5;
        this._img["lvl17_1"].scaleY = 0.5;
        this._img["lvl17_2"] = UI.addPic(this, "lvl17_2_png", UI.WINSIZE_W * 0.455, UI.WINSIZE_H * 0.4, true);
        this._img["lvl17_2"].scaleX = 0.6;
        this._img["lvl17_2"].scaleY = 0.6;
        //-----------------------------------------------------------------------------------------------监听事件
        this._img["lvl17_2"].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Move_glass, this);
        this._img["lvl17_2"].addEventListener(egret.TouchEvent.TOUCH_END, this.End_isok, this);
        this._img["lvl17_2"].$setTouchEnabled(true);
    };
    //----------------------------------------------------------------------------------------------监听函数
    Level17.prototype.Move_glass = function (e) {
        this._img["lvl17_2"].x = e.stageX;
        this._img["lvl17_2"].y = e.stageY;
    };
    Level17.prototype.End_isok = function (e) {
        if (!this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.4146, UI.WINSIZE_H * 0.4178, true)
            && !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.4166, UI.WINSIZE_H * 0.429, true)
            && !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.3979, UI.WINSIZE_H * 0.4269, true)
            && !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.5125, UI.WINSIZE_H * 0.4108, true)
            && !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.5104, UI.WINSIZE_H * 0.426, true)
            && !this._img["lvl17_2"].hitTestPoint(UI.WINSIZE_W * 0.5333, UI.WINSIZE_H * 0.4178, true)) {
            this._ok();
        }
    };
    Level17.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
    };
    return Level17;
}(egret.DisplayObjectContainer));
__reflect(Level17.prototype, "Level17", ["egret.DisplayObject"]);
//# sourceMappingURL=Level17.js.map