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
var Level18 = (function (_super) {
    __extends(Level18, _super);
    //
    function Level18() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        _this._tag = false;
        Level18.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level18.prototype.onExit = function () {
        //必须要加入
    };
    Level18.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        var container1 = new egret.DisplayObjectContainer;
        container1.width = UI.WINSIZE_W * 2;
        container1.height = UI.WINSIZE_H;
        //----------------------------------------------------------------------------游戏背景
        var background = new egret.Shape;
        background.graphics.beginFill(0xff0000);
        background.graphics.drawRect(0, 0, container1.width, container1.height);
        background.graphics.endFill();
        background.alpha = 0;
        container1.addChild(background);
        //----------------------------------------------------------------------------游戏素材
        this._img["car"] = UI.addPic(container1, "car_png", container1.width / 8, container1.height / 3, true);
        this._img["car"].scaleX = 0.8;
        this._img["car"].scaleY = 0.8;
        this._img["car2"] = UI.addPic(container1, "car2_png", container1.width / 8 + 30, container1.height * 2 / 3, true);
        this._img["car2"].scaleX = 0.8;
        this._img["car2"].scaleY = 0.8;
        this._img["baby"] = UI.addPic(container1, "baby_png", container1.width * 3 / 4, container1.height / 3, true);
        this._img["baby"].scaleX = 0.8;
        this._img["baby"].scaleY = 0.8;
        this._img["line18"] = UI.addPic(container1, "line18_png", container1.width / 2, container1.height / 2, true);
        this._img["line18"].scaleX = 0.8;
        this._img["line18"].scaleY = 0.8;
        //----------------------------------------------------------------------------------创建ScrollView
        var myscrollView = new egret.ScrollView();
        myscrollView.width = UI.WINSIZE_W;
        myscrollView.height = UI.WINSIZE_H;
        myscrollView.setContent(container1);
        myscrollView.bounces = false;
        this.addChild(myscrollView);
        //--------------------------------------------------------------------------------------------------移动baby
        this._img["baby"].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { myscrollView.horizontalScrollPolicy = "off"; }, this);
        this._img["baby"].$setTouchEnabled(true);
        myscrollView.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) { this.MoveBaby(event, myscrollView); }, this);
        myscrollView.addEventListener(egret.TouchEvent.TOUCH_END, function (event) { this.onComplete(event, myscrollView); }, this);
        //--------------------------------------------------------------------------------------------------btn处理
        this._txt["开始"] = UI.addText(this, "开始", container1.width / 4, container1.height * 7 / 8, true);
        var shp = Level13.layTxBg(this._txt["开始"], this);
        this.setChildIndex(this._txt["开始"], 1000);
        shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { shp.alpha = 1; }, this);
        shp.addEventListener(egret.TouchEvent.TOUCH_END, function () { this.btnEnd(shp); }, this);
        shp.$setTouchEnabled(true);
    };
    //-----------------------------------------------------------------------------------------------------------监听函数
    //拖动baby
    Level18.prototype.MoveBaby = function (e, myscrollView) {
        if (myscrollView.horizontalScrollPolicy == "off") {
            if (e.stageX + myscrollView.scrollLeft >= this._img["car"].x + this._img["car"].width / 2) {
                this._img["baby"].x = e.stageX + myscrollView.scrollLeft;
            }
            else {
                this._img["baby"].x = this._img["car"].x + this._img["car"].width / 2;
            }
        }
    };
    Level18.prototype.onComplete = function (e, myscrollView) {
        myscrollView.horizontalScrollPolicy = "on";
        if (this._img["baby"].x + this._img["baby"].width / 2 < this._img["line18"].x) {
            this._tag = true;
        }
        else {
            this._tag = false;
        }
    };
    Level18.prototype.btnEnd = function (shp) {
        shp.alpha = 0.5;
        var tw1 = egret.Tween.get(this._img["car"]);
        var tw2 = egret.Tween.get(this._img["car2"]);
        tw1.to({ x: this._img["baby"].x - this._img["car"].width / 2 }, 400);
        tw2.to({ x: this._img["line18"].x }, 2400);
        if (this._tag == true) {
            tw2.call(this._ok, this);
        }
        else {
            tw2.call(this._wrong, this);
        }
    };
    Level18.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn);
    };
    Level18.prototype._wrong = function () {
        this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn);
    };
    return Level18;
}(egret.DisplayObjectContainer));
__reflect(Level18.prototype, "Level18", ["egret.DisplayObject"]);
//# sourceMappingURL=Level18.js.map