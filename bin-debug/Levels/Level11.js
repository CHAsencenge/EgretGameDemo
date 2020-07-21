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
var Level11 = (function (_super) {
    __extends(Level11, _super);
    //
    function Level11() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._secondFlag = 0;
        _this._lag = false;
        _this._tag = 0;
        Level11.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level11.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        var imgName;
        (function (imgName) {
            imgName[imgName["cloud_lev003_1"] = 0] = "cloud_lev003_1";
            imgName[imgName["cloud_lev003_2"] = 1] = "cloud_lev003_2";
            imgName[imgName["cloud2_lev003_1"] = 2] = "cloud2_lev003_1";
            imgName[imgName["cloud2_lev003_2"] = 3] = "cloud2_lev003_2";
            imgName[imgName["sun_lev003"] = 4] = "sun_lev003";
            imgName[imgName["flower-pot_lev003"] = 5] = "flower-pot_lev003";
            imgName[imgName["flower_lev003"] = 6] = "flower_lev003";
        })(imgName || (imgName = {}));
        this._img[imgName["sun_lev003"]] = UI.addPic(this, "sun_lev003_png", 245, UI.WINSIZE_H / 2 - 107 / 820 * UI.WINSIZE_H, true);
        this._img[imgName["sun_lev003"]].scaleX = 0.48;
        this._img[imgName["sun_lev003"]].scaleY = 0.48;
        this._img[imgName["flower-pot_lev003"]] = UI.addPic(this, "flower-pot_lev003_png", 245, 245 / 820 * UI.WINSIZE_H + UI.WINSIZE_H / 2, true);
        this._img[imgName["flower-pot_lev003"]].scaleX = 0.52;
        this._img[imgName["flower-pot_lev003"]].scaleY = 0.52;
        this._img[imgName["cloud_lev003_1"]] = UI.addPic(this, "cloud_lev003_png", 335, UI.WINSIZE_H / 2 - 156 / 820 * UI.WINSIZE_H, true);
        this._img[imgName["cloud_lev003_1"]].scaleX = 0.45;
        this._img[imgName["cloud_lev003_1"]].scaleY = 0.45;
        this._img[imgName["cloud_lev003_2"]] = UI.addPic(this, "cloud_lev003_png", 161, UI.WINSIZE_H / 2 - 176 / 820 * UI.WINSIZE_H, true);
        this._img[imgName["cloud_lev003_2"]].scaleX = 0.4;
        this._img[imgName["cloud_lev003_2"]].scaleY = 0.4;
        this._img[imgName["cloud2_lev003_1"]] = UI.addPic(this, "cloud2_lev003_png", 317, UI.WINSIZE_H / 2 - 52 / 820 * UI.WINSIZE_H, true);
        this._img[imgName["cloud2_lev003_1"]].scaleX = 0.54;
        this._img[imgName["cloud2_lev003_1"]].scaleY = 0.54;
        this._img[imgName["cloud2_lev003_2"]] = UI.addPic(this, "cloud2_lev003_png", 139, UI.WINSIZE_H / 2 - 88 / 820 * UI.WINSIZE_H, true);
        this._img[imgName["cloud2_lev003_2"]].scaleX = 0.47;
        this._img[imgName["cloud2_lev003_2"]].scaleY = 0.47;
        var _loop_1 = function (i) {
            this_1._img[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                this.setChildIndex(this._img[i], 1000);
            }, this_1);
            this_1._img[i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                this._img[i].x = e.stageX;
                this._img[i].y = e.stageY;
                this.iscrash();
            }, this_1);
            this_1._img[i].$setTouchEnabled(true);
        };
        var this_1 = this;
        //---------------------------------------------------------------------------------------------碰撞点选取
        // let shape1:egret.Shape = new egret.Shape();
        // shape1.graphics.beginFill(0x336699)
        // shape1.graphics.drawRect(213, 232/820*UI.WINSIZE_H,5,5)
        // shape1.graphics.endFill()
        // this.addChild(shape1)
        //----------------------------------------------------------------------------------------移动云彩以及检测
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
    };
    Level11.prototype.testHit = function (b) {
        return !b.hitTestPoint(213, 232 / 820 * UI.WINSIZE_H, true) && !b.hitTestPoint(179, 266 / 820 * UI.WINSIZE_H, true)
            && !b.hitTestPoint(168, 310 / 820 * UI.WINSIZE_H, true) && !b.hitTestPoint(184, 358 / 820 * UI.WINSIZE_H, true)
            && !b.hitTestPoint(223, 384 / 820 * UI.WINSIZE_H, true) && !b.hitTestPoint(277, 382 / 820 * UI.WINSIZE_H, true)
            && !b.hitTestPoint(311, 348 / 820 * UI.WINSIZE_H, true) && !b.hitTestPoint(324, 298 / 820 * UI.WINSIZE_H, true)
            && !b.hitTestPoint(305, 252 / 820 * UI.WINSIZE_H, true) && !b.hitTestPoint(265, 234 / 820 * UI.WINSIZE_H, true);
    };
    Level11.prototype.iscrash = function () {
        if (this.testHit(this._img[0]) == true && this.testHit(this._img[1]) == true
            && this.testHit(this._img[2]) == true && this.testHit(this._img[3]) == true) {
            this._pic = UI.addPic(this, "flower_lev003_png", 256, UI.WINSIZE_H / 2 + 154, true);
            this._pic.scaleX = 0.6;
            this._pic.scaleY = 0.6;
            this._ok();
        }
    };
    Level11.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
    };
    Level11.prototype.onExit = function () {
        //必须要加入
    };
    return Level11;
}(egret.DisplayObjectContainer));
__reflect(Level11.prototype, "Level11", ["egret.DisplayObject"]);
//# sourceMappingURL=Level11.js.map