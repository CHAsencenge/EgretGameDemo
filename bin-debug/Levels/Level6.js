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
var Level6 = (function (_super) {
    __extends(Level6, _super);
    function Level6() {
        var _this = _super.call(this) || this;
        //public _distance: egret.Point = new egret.Point();
        _this._touchStatus = false;
        _this.touchPoints = { names: [] }; //{touchid:touch local,names:[ID1,ID2]};
        _this.distance = 0;
        _this.defAngle = 0;
        _this.touchCon = 0;
        Level6.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level6.prototype.getTouchDistance = function () {
        var _distance = 0;
        var names = this.touchPoints["names"];
        _distance = egret.Point.distance(this.touchPoints[names[names.length - 1]], this.touchPoints[names[names.length - 2]]);
        return _distance;
    };
    Level6.prototype.mouseDown = function (evt) {
        egret.log("touch begin:" + evt.touchPointID);
        if (this.touchPoints[evt.touchPointID] == null) {
            this.touchPoints[evt.touchPointID] = new egret.Point(evt.stageX, evt.stageY);
            this.touchPoints["names"].push(evt.touchPointID);
        }
        this.touchCon++;
        if (this.touchCon == 2) {
            this.distance = this.getTouchDistance();
            egret.log("distance:" + this.distance);
        }
    };
    Level6.prototype.mouseMove = function (evt) {
        //egret.log("touch move:"+evt.touchPointID);
        this.touchPoints[evt.touchPointID].x = evt.stageX;
        this.touchPoints[evt.touchPointID].y = evt.stageY;
        if (this.touchCon == 2) {
            var newdistance = this.getTouchDistance();
            this._varvar1.scaleX = newdistance / this.distance;
            this._varvar1.scaleY = this._varvar1.scaleX;
        }
    };
    Level6.prototype.mouseUp = function (evt) {
        egret.log("touch end:" + evt.touchPointID);
        delete this.touchPoints[evt.touchPointID];
        this.touchCon--;
        //
        this._varvar1.width *= this._varvar1.scaleX;
        this._varvar1.height *= this._varvar1.scaleY;
        this._varvar1.scaleX = 1;
        this._varvar1.scaleY = 1;
        this._varvar1.anchorOffsetX = this._varvar1.width / 2;
        this._varvar1.anchorOffsetY = this._varvar1.height / 2;
        if (this._varvar1.scaleX < 0.15) {
            this._varvar1.alpha = 0;
            this._varvar2.alpha = 1;
            this._men1.alpha = 0;
            this._men2.alpha = 1;
            this.ok();
        }
    };
    Level6.prototype.ok = function () {
        var shape = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();
    };
    Level6.prototype.onEnter = function () {
        this._txt = UI.addText(this, "救救约翰。", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._men1 = UI.addPic(this, "men1_png", 150, UI.WINSIZE_H / 2, true);
        this._men1.scaleX = 0.3;
        this._men1.scaleY = 0.3;
        this._men2 = UI.addPic(this, "men2_png", 150, UI.WINSIZE_H / 2, true);
        this._men2.scaleX = 0.3;
        this._men2.scaleY = 0.3;
        this._men2.alpha = 0;
        this._varvar1 = UI.addPic(this, "varvar1_png", 330, UI.WINSIZE_H / 2.2, true);
        this._varvar1.scaleX = 0.3;
        this._varvar1.scaleY = 0.3;
        this._varvar1.touchEnabled = true;
        this._varvar2 = UI.addPic(this, "varvar1_png", 330, UI.WINSIZE_H / 3 * 2, true);
        this._varvar2.scaleX = 0.15;
        this._varvar2.scaleY = 0.15;
        this._varvar2.alpha = 0;
        this._varvar1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level6.instance.mouseDown, this);
        this._varvar1.addEventListener(egret.TouchEvent.TOUCH_END, Level6.instance.mouseUp, this);
        this._varvar1.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Level6.prototype.onExit = function () {
    };
    return Level6;
}(egret.DisplayObjectContainer));
__reflect(Level6.prototype, "Level6", ["egret.DisplayObject"]);
//# sourceMappingURL=Level6.js.map