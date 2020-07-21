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
var Level20 = (function (_super) {
    __extends(Level20, _super);
    //
    function Level20() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        _this._tag = false;
        _this._movetag = false;
        _this._begindex = [];
        Level20.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level20.prototype.onExit = function () {
        //必须要加入
    };
    Level20.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        //----------------------------------------------------------------------------游戏素材
        this._img["level20_1"] = UI.addPic(this, "level20_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["level20_1"].scaleX = 0.6;
        this._img["level20_1"].scaleY = 0.6;
        this._img["level20_2"] = UI.addPic(this, "level20_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["level20_2"].scaleX = 0.6;
        this._img["level20_2"].scaleY = 0.6;
        //--------------------------------------------------------------------------定义mask
        var myMask = new egret.Shape;
        myMask.graphics.beginFill(0x336699);
        myMask.graphics.drawRect(0, 0, UI.WINSIZE_W / 2, UI.WINSIZE_H);
        myMask.x = UI.WINSIZE_W / 2;
        myMask.y = 0;
        myMask.graphics.endFill();
        //-------------------------------------------------------------------------事件处理
        this._img["level20_2"].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            this._begindex["x"] = e.stageX;
            this._begindex["y"] = e.stageY;
        }, this);
        this._img["level20_2"].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) { this.MOVE(myMask, event); }, this);
        this._img["level20_2"].addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            if (this._begindex["x"] == e.stageX && this._begindex["y"] == e.stageY) {
                this._wrong();
            }
        }, this);
        this._img["level20_2"].$setTouchEnabled(true);
    };
    //-----------------------------------------------------------------------------------------------------------监听函数
    Level20.prototype.MOVE = function (myMask, e) {
        if (e.stageX <= UI.WINSIZE_W / 2 && this._movetag == false) {
            this.addChild(myMask);
            this._img["level20_2"].mask = myMask;
            this._movetag = true;
            this._ok();
        }
    };
    Level20.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
    };
    Level20.prototype._wrong = function () {
        this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
    };
    return Level20;
}(egret.DisplayObjectContainer));
__reflect(Level20.prototype, "Level20", ["egret.DisplayObject"]);
//# sourceMappingURL=Level20.js.map