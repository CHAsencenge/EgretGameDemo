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
var Level16 = (function (_super) {
    __extends(Level16, _super);
    //
    function Level16() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        _this._tag = [];
        _this._Num = 0;
        Level16.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level16.prototype.onExit = function () {
        //必须要加入
    };
    Level16.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        //----------------------------------------------------------------------------游戏素材
        this._img["lvl16_2"] = UI.addPic(this, "lvl16_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["lvl16_2"].scaleX = 0.5;
        this._img["lvl16_2"].scaleY = 0.5;
        this._img["lvl16_1"] = UI.addPic(this, "lvl16_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img["lvl16_1"].scaleX = 0.5;
        this._img["lvl16_1"].scaleY = 0.5;
        //-------------------------------------------------------------------定义mask容器及对象
        var mask = [];
        mask["card"] = new egret.Shape;
        mask["card"].graphics.beginFill(0xff0000);
        mask["card"].graphics.drawRect(0, 0, 15, 8);
        mask["card"].x = 334;
        mask["card"].y = 442 / 820 * UI.WINSIZE_H;
        mask["card"].graphics.endFill();
        this._tag["card"] = false;
        // this._img[0] =  UI.addPic(this, "lvl16_card_png", 341, 450 / 820 * UI.WINSIZE_H, true);
        // this._img[0].scaleX = 0.1;this._img[0].scaleY =0.1;
        // this._img[0].addEventListener(egret.TouchEvent.TOUCH_MOVE,function(e:egret.TouchEvent){	
        // 	this._img[0].x = e.stageX;
        // 	this._img[0].y = e.stageY;
        // 	console.log(e.stageX,e.stageY);
        // },this);
        // this._img[0].$setTouchEnabled(true);
        mask["card_up"] = new egret.Shape;
        mask["card_up"].graphics.beginFill(0xff0000);
        mask["card_up"].graphics.drawRect(0, 0, 80, 60);
        mask["card_up"].x = 217;
        mask["card_up"].y = 150 / 820 * UI.WINSIZE_H;
        mask["card_up"].graphics.endFill();
        mask["red"] = new egret.Shape;
        mask["red"].graphics.beginFill(0xff0000);
        mask["red"].graphics.drawRect(0, 0, 32, 10);
        mask["red"].x = 425;
        mask["red"].y = 620 / 820 * UI.WINSIZE_H;
        mask["red"].graphics.endFill();
        this._tag["red"] = false;
        mask["red_up"] = new egret.Shape;
        mask["red_up"].graphics.beginFill(0xff0000);
        mask["red_up"].graphics.drawRect(0, 0, 80, 60);
        mask["red_up"].x = 56;
        mask["red_up"].y = 222 / 820 * UI.WINSIZE_H;
        mask["red_up"].graphics.endFill();
        mask["bone"] = new egret.Shape;
        mask["bone"].graphics.beginFill(0xff0000);
        mask["bone"].graphics.drawRect(0, 0, 32, 13);
        mask["bone"].x = 27;
        mask["bone"].y = 580 / 820 * UI.WINSIZE_H;
        mask["bone"].graphics.endFill();
        this._tag["bone"] = false;
        mask["bone_up"] = new egret.Shape;
        mask["bone_up"].graphics.beginFill(0xff0000);
        mask["bone_up"].graphics.drawRect(0, 0, 80, 60);
        mask["bone_up"].x = 287;
        mask["bone_up"].y = 214 / 820 * UI.WINSIZE_H;
        mask["bone_up"].graphics.endFill();
        mask["moon"] = new egret.Shape;
        mask["moon"].graphics.beginFill(0xff0000);
        mask["moon"].graphics.drawRect(0, 0, 70, 16);
        mask["moon"].x = 173;
        mask["moon"].y = 625 / 820 * UI.WINSIZE_H;
        mask["moon"].graphics.endFill();
        this._tag["moon"] = false;
        mask["moon_up"] = new egret.Shape;
        mask["moon_up"].graphics.beginFill(0xff0000);
        mask["moon_up"].graphics.drawRect(0, 0, 70, 80);
        mask["moon_up"].x = 340;
        mask["moon_up"].y = 140 / 820 * UI.WINSIZE_H;
        mask["moon_up"].graphics.endFill();
        mask["milk"] = new egret.Shape;
        mask["milk"].graphics.beginFill(0xff0000);
        mask["milk"].graphics.drawRect(0, 0, 12, 13);
        mask["milk"].x = 186;
        mask["milk"].y = 425 / 820 * UI.WINSIZE_H;
        mask["milk"].graphics.endFill();
        this._tag["milk"] = false;
        mask["milk_up"] = new egret.Shape;
        mask["milk_up"].graphics.beginFill(0xff0000);
        mask["milk_up"].graphics.drawRect(0, 0, 70, 60);
        mask["milk_up"].x = 175;
        mask["milk_up"].y = 207 / 820 * UI.WINSIZE_H;
        mask["milk_up"].graphics.endFill();
        mask["water"] = new egret.Shape;
        mask["water"].graphics.beginFill(0xff0000);
        mask["water"].graphics.drawRect(0, 0, 22, 20);
        mask["water"].x = 399;
        mask["water"].y = 478 / 820 * UI.WINSIZE_H;
        mask["water"].graphics.endFill();
        this._tag["water"] = false;
        mask["water_up"] = new egret.Shape;
        mask["water_up"].graphics.beginFill(0xff0000);
        mask["water_up"].graphics.drawRect(0, 0, 70, 60);
        mask["water_up"].x = 71;
        mask["water_up"].y = 150 / 820 * UI.WINSIZE_H;
        mask["water_up"].graphics.endFill();
        var mymask = new egret.DisplayObjectContainer();
        this.addChild(mymask);
        this._img["lvl16_1"].mask = mymask;
        //-------------------------------------------------------------------------------------------btn处理
        this._img["lvl16_2"].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            if (mask["card"].hitTestPoint(e.stageX, e.stageY)) {
                this._Hitoper("card", mask["card"], mask["card_up"], mymask, e);
            }
            else if (mask["red"].hitTestPoint(e.stageX, e.stageY)) {
                this._Hitoper("red", mask["red"], mask["red_up"], mymask, e);
            }
            else if (mask["bone"].hitTestPoint(e.stageX, e.stageY)) {
                this._Hitoper("bone", mask["bone"], mask["bone_up"], mymask, e);
            }
            else if (mask["milk"].hitTestPoint(e.stageX, e.stageY)) {
                this._Hitoper("milk", mask["milk"], mask["milk_up"], mymask, e);
            }
            else if (mask["water"].hitTestPoint(e.stageX, e.stageY)) {
                this._Hitoper("water", mask["water"], mask["water_up"], mymask, e);
            }
            else if (mask["moon"].hitTestPoint(e.stageX, e.stageY)) {
                this._Hitoper("moon", mask["moon"], mask["moon_up"], mymask, e);
            }
            else {
                this._wrong();
            }
        }, this);
        this._img["lvl16_2"].$setTouchEnabled(true);
    };
    //-----------------------------------------------------------------------------------------------------------监听函数
    Level16.prototype._Hitoper = function (name, mask1, mask2, mymask, e) {
        if (this._tag[name] == false) {
            this._tag[name] = true;
            this._Num++;
            mymask.addChild(mask1);
            var tw = this.Hitok(e.stageX, e.stageY);
            if (this._Num == 6) {
                tw.call(this._ok, this);
            }
            this._pic = UI.addPic(this, "lvl16_" + name + "_png", mask1.x, mask1.y, true);
            this._pic.scaleX = 0.1;
            this._pic.scaleY = 0.1;
            egret.Tween.get(this._pic).to({ x: mask2.x, y: mask2.y }, 500, egret.Ease.sineIn).call(function () { mymask.addChild(mask2), Level16.instance.removeChild(Level16.instance._pic); });
        }
        else {
            this._wrong();
        }
    };
    Level16.prototype.Hitok = function (x, y) {
        this._pic = UI.addPic(Level16.instance, "ok_png", x, y, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        var tw = egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 500, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn);
        return tw;
    };
    Level16.prototype._ok = function () {
        this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic2.scaleX = 0;
        this._pic2.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 500, egret.Ease.sineIn);
        egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn);
    };
    Level16.prototype._wrong = function () {
        this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.scaleX = 0;
        this._pic.scaleY = 0;
        egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 500, egret.Ease.sineIn)
            .to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn);
    };
    return Level16;
}(egret.DisplayObjectContainer));
__reflect(Level16.prototype, "Level16", ["egret.DisplayObject"]);
//# sourceMappingURL=Level16.js.map