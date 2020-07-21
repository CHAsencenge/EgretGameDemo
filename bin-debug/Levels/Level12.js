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
var Level12 = (function (_super) {
    __extends(Level12, _super);
    //
    function Level12() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._movelabel = false;
        _this._clicktime = 0; //计算点击持续时间
        _this._begindex = [];
        _this._isArea = false;
        Level12.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level12.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        this._img["lvl12_1"] = UI.addPic(this, "lvl12_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["lvl12_2"] = UI.addPic(this, "lvl12_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //--------------------------------------------------------------------------------------定义mask容器及对象
        var mask_left = new egret.Shape();
        mask_left.graphics.beginFill(0xff0000);
        mask_left.graphics.drawRect(50, 380 / 820 * UI.WINSIZE_H, 200, 150 / 820 * UI.WINSIZE_H);
        mask_left.graphics.endFill();
        var mask_right = new egret.Shape();
        mask_right.graphics.beginFill(0xff0000);
        mask_right.graphics.drawRect(280, 270 / 820 * UI.WINSIZE_H, 150, 260 / 820 * UI.WINSIZE_H);
        mask_right.graphics.endFill();
        var mymask = new egret.DisplayObjectContainer();
        mymask.addChild(mask_right);
        mymask.addChild(mask_left);
        this.addChild(mymask);
        this._img["lvl12_2"].mask = mymask;
        var _loop_1 = function (i) {
            this_1._img["lvl12_" + i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this_1.Touchbegin, this_1);
            this_1._img["lvl12_" + i].addEventListener(egret.TouchEvent.TOUCH_END, function () { this.Touchend(i); }, this_1);
            this_1._img["lvl12_" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                if (this._isArea && this._movelabel == false)
                    if (this._begindex["x"] > UI.WINSIZE_W / 2) {
                        if (i == 2) {
                            mymask.removeChild(mask_right);
                        }
                        else {
                            mymask.addChild(mask_right);
                        }
                    }
                    else {
                        if (i == 2) {
                            mymask.removeChild(mask_left);
                        }
                        else {
                            mymask.addChild(mask_left);
                        }
                    }
                this._movelabel = true;
            }, this_1);
            this_1._img["lvl12_" + i].$setTouchEnabled(true);
        };
        var this_1 = this;
        //--------------------------------------------------------------------------------------------定义监听事件
        for (var i = 1; i < 3; i++) {
            _loop_1(i);
        }
    };
    //开始touch时判断点击位置，若在则计时并记录初始坐标
    Level12.prototype.Touchbegin = function (e) {
        this._IsMaskArea(e);
        if (this._isArea) {
            this._clicktime = egret.getTimer();
            this._begindex["x"] = e.stageX;
            this._begindex["y"] = e.stageY;
        }
    };
    // 结束touch时判断是否移动、计算点击时间
    Level12.prototype.Touchend = function (i) {
        if (this._isArea) {
            this._clicktime = egret.getTimer() - this._clicktime;
            if (this._movelabel == true) {
                this._movelabel = false;
            }
            else {
                if (this._clicktime < 400) {
                    this.CheckClickTime(i, this._clicktime, this._begindex["x"] < UI.WINSIZE_W / 2);
                }
            }
        }
    };
    Level12.prototype.CheckClickTime = function (i, time, isleft) {
        if (i == 1 && isleft == true) {
            this._ok();
        }
        else {
            this._wrong();
        }
    };
    //是否在点击位置maskarea中,是则返回true,不是则返回false
    Level12.prototype._IsMaskArea = function (e) {
        if (e.stageX <= 250 && e.stageX >= 50 / 820 * UI.WINSIZE_H
            && e.stageY >= 380 / 820 * UI.WINSIZE_H && e.stageY <= 530 / 820 * UI.WINSIZE_H) {
            this._isArea = true;
        }
        else if (e.stageX <= 450 && e.stageX >= 270
            && e.stageY >= 260 / 820 * UI.WINSIZE_H && e.stageY <= 530 / 820 * UI.WINSIZE_H) {
            this._isArea = true;
        }
        else {
            this._isArea = false;
        }
    };
    Level12.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 700, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.sineIn);
    };
    Level12.prototype._wrong = function () {
        this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 700, egret.Ease.sineIn)
            .to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
    };
    Level12.prototype.onExit = function () {
        //必须要加入
    };
    return Level12;
}(egret.DisplayObjectContainer));
__reflect(Level12.prototype, "Level12", ["egret.DisplayObject"]);
//# sourceMappingURL=Level12.js.map