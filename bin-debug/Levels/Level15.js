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
var Level15 = (function (_super) {
    __extends(Level15, _super);
    //
    function Level15() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        Level15.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level15.prototype.onExit = function () {
        //必须要加入
    };
    Level15.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        //------------------------------------------------------------------------------------游戏素材
        this._img["lvl15_1"] = UI.addPic(this, "lvl15_1_png", UI.WINSIZE_W * .75, UI.WINSIZE_H / 4, true);
        this._img["lvl15_2"] = UI.addPic(this, "lvl15_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["lvl15_3"] = UI.addPic(this, "lvl15_3_png", UI.WINSIZE_W * .75, UI.WINSIZE_H * 3 / 4, true);
        this._img["lvl15_4"] = UI.addPic(this, "lvl15_4_png", UI.WINSIZE_W * .25, UI.WINSIZE_H / 4, true);
        this._img["lvl15_5"] = UI.addPic(this, "lvl15_5_png", UI.WINSIZE_W * .25, UI.WINSIZE_H * 3 / 4, true);
        this._img["lvl15_6"] = UI.addPic(this, "lvl15_6_png", UI.WINSIZE_W / 2, UI.WINSIZE_H * 3 / 4, true);
        var _loop_1 = function (i) {
            if (i != 2) {
                this_1._img["lvl15_" + i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
                    Level15.instance.setChildIndex(this._img["lvl15_" + i], 1000);
                }, this_1);
                this_1._img["lvl15_" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                    this._img["lvl15_" + i].x = e.stageX;
                    this._img["lvl15_" + i].y = e.stageY;
                }, this_1);
                this_1._img["lvl15_" + i].addEventListener(egret.TouchEvent.TOUCH_END, this_1.Check, this_1);
                this_1._img["lvl15_" + i].$setTouchEnabled(true);
            }
        };
        var this_1 = this;
        //-----------------------------------------------------------------------------------事件处理
        for (var i = 1; i < 7; i++) {
            _loop_1(i);
        }
    };
    //-----------------------------------------------------------------------------------------------------监听函数
    Level15.prototype.Check = function () {
        var point_right = [];
        point_right[1] = new egret.Point(200 / 480 * UI.WINSIZE_W, 460 / 828 * UI.WINSIZE_H);
        point_right[3] = new egret.Point(260 / 480 * UI.WINSIZE_W, 518 / 828 * UI.WINSIZE_H);
        point_right[4] = new egret.Point(260 / 480 * UI.WINSIZE_W, 450 / 828 * UI.WINSIZE_H);
        point_right[5] = new egret.Point(240 / 480 * UI.WINSIZE_W, 295 / 828 * UI.WINSIZE_H);
        point_right[6] = new egret.Point(240 / 480 * UI.WINSIZE_W, 380 / 828 * UI.WINSIZE_H);
        var point_now = [];
        var disc = [];
        for (var i = 1; i < 7; i++) {
            if (i != 2) {
                point_now[i] = new egret.Point(this._img["lvl15_" + i].x, this._img["lvl15_" + i].y);
                disc[i] = egret.Point.distance(point_right[i], point_now[i]);
            }
        }
        if (disc[1] < 15 && disc[3] < 15 && disc[4] < 15 && disc[5] < 15 && disc[6] < 15) {
            this._ok(); //退出游戏
        }
    };
    Level15.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
    };
    return Level15;
}(egret.DisplayObjectContainer));
__reflect(Level15.prototype, "Level15", ["egret.DisplayObject"]);
//# sourceMappingURL=Level15.js.map