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
var Level19 = (function (_super) {
    __extends(Level19, _super);
    //
    function Level19() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        _this._tag = false; //波浪是否移动标志
        _this._time = 0;
        _this._estagey = 0;
        _this._isright = false; //波浪是否移动至正确位置
        Level19.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level19.prototype.onExit = function () {
        //必须要加入
    };
    Level19.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        //----------------------------------------------------------------------------游戏素材
        this._img["girl"] = UI.addPic(this, "girl_png", UI.WINSIZE_W / 2, UI.WINSIZE_H * 4 / 9, true);
        this._img["girl"].scaleX = 0.6;
        this._img["girl"].scaleY = 0.6;
        this._img["level19"] = UI.addPic(this, "level19_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 50, true);
        this._img["level19"].anchorOffsetY = this._img["level19"].height;
        this._img["level19"].scaleX = 0.6;
        this._img["level19"].scaleY = 0.6;
        //---------------------------------------------------------------------------边界检测
        // let shp1 : egret.Shape = new egret.Shape;
        // shp1.graphics.lineStyle( 2, 0x336699  );
        // shp1.graphics.moveTo(UI.WINSIZE_W*2/3,0);
        // shp1.graphics.lineTo(UI.WINSIZE_W*2/3,this.height);
        // shp1.graphics.endFill();
        // this.addChild( shp1 );
        //--------------------------------------------------------------------------------------------------btn处理
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.Touchbegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Touchmove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.Touchend, this);
        this._img["girl"].addEventListener(egret.TouchEvent.TOUCH_TAP, this.Girltouch, this);
        this._img["level19"].$setTouchEnabled(true);
        this._img["girl"].$setTouchEnabled(true);
    };
    //-----------------------------------------------------------------------------------------------------------监听函数
    Level19.prototype.Touchbegin = function (e) {
        if (e.target == this._img["level19"] || e.target == this._img["girl"]) {
            if (e.stageY >= this._img["level19"].y - this._img["level19"].height * 0.6
                && e.stageY <= this._img["level19"].y - this._img["level19"].height * 0.6 + 20) {
                this._estagey = e.stageY;
                this._tag = true;
            }
            else {
                this._wrong();
            }
        }
    };
    Level19.prototype.Touchmove = function (e) {
        if (this._tag == true) {
            var _scale = 0.6 - (e.stageY - this._estagey) / (this._img["level19"].height * 0.6);
            if (_scale < 0.1) {
                _scale = 0.1;
            }
            else if (_scale > 0.6) {
                _scale = 0.6;
            }
            this._img["level19"].scaleY = _scale;
            if (this._img["level19"].y - this._img["level19"].height * this._img["level19"].scaleY > this._img["girl"].y + this._img["girl"].height / 6) {
                this._isright = true;
            }
            else {
                this._isright = false;
            }
        }
    };
    Level19.prototype.Touchend = function (e) {
        egret.Tween.get(this._img["level19"]).to({ scaleY: 0.6 }, 700 * (0.6 - this._img["level19"].scaleY) / 0.6); //恢复动画以及标志
        this._tag = false;
        this._isright = false;
    };
    Level19.prototype.Girltouch = function (e) {
        if (this._isright == true && e.stageX >= UI.WINSIZE_W * 2 / 3) {
            this._ok();
        }
    };
    Level19.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 700, egret.Ease.sineIn);
    };
    Level19.prototype._wrong = function () {
        this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 1000, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 1000, egret.Ease.sineIn);
    };
    return Level19;
}(egret.DisplayObjectContainer));
__reflect(Level19.prototype, "Level19", ["egret.DisplayObject"]);
//# sourceMappingURL=Level19.js.map