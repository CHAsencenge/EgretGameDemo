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
var UIScene = (function (_super) {
    __extends(UIScene, _super);
    //pLevel需要进入的关数
    function UIScene() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._lst = [];
        _this._scale = 1.0;
        _this._rotation = 0;
        return _this;
    }
    UIScene.prototype.layTxBg = function (tx) {
        var shp = new egret.Shape;
        shp.graphics.beginFill(0x000000);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    UIScene.prototype.onEnter = function () {
        UIScene.instance = this;
        UI.addPic(this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this.inputTxt = new egret.TextField();
        this.inputTxt.width = 200;
        this.inputTxt.x = 30;
        this.inputTxt.y = 5;
        this.inputTxt.type = egret.TextFieldType.INPUT;
        this.inputTxt.text = "";
        this.addChild(this.inputTxt);
        this.layTxBg(this.inputTxt);
        this.setChildIndex(this.inputTxt, 2);
        this.outputTxt = new egret.TextField();
        this.outputTxt.width = 480;
        this.outputTxt.x = 5;
        this.outputTxt.y = UI.WINSIZE_H - 30;
        this.outputTxt.type = egret.TextFieldType.INPUT;
        this.outputTxt.text = "";
        this.addChild(this.outputTxt);
        this.layTxBg(this.outputTxt);
        this.outputTxt.multiline = true;
        this.setChildIndex(this.outputTxt, 8);
        UI.addBtnTxt(this, "btnbg_jpg", "添加", UI.WINSIZE_W / 2 + 100, 5, false, function (arg) {
            if (UIScene.instance.inputTxt.text == "") {
                return;
            }
            //
            UIScene.instance.addNewImg();
        });
        //
        var heightY = 70;
        {
            var touchBar = UI.addPic(this, "line_png", 0, heightY, false);
            var touchBtn_1 = UI.addPic(this, "slide_jpg", 240, heightY, false);
            touchBar.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
                touchBtn_1.x = e.stageX;
                console.log("e.stageX = " + e.stageX);
                UIScene.instance._scale = touchBtn_1.x / 240;
                UIScene.instance.showImg();
            }, this);
            touchBar.$setTouchEnabled(true);
        }
        heightY = heightY + 40;
        {
            var touchBar = UI.addPic(this, "line2_png", 0, heightY, false);
            var touchBtn_2 = UI.addPic(this, "slide_jpg", 240, heightY, false);
            touchBar.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
                touchBtn_2.x = e.stageX;
                console.log("e.stageX = " + e.stageX);
                UIScene.instance._rotation = touchBtn_2.x / 240 * 180 - 180;
                UIScene.instance.showImg();
            }, this);
            touchBar.$setTouchEnabled(true);
        }
        //
        this._redBmp = UI.addPic(this, "red_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //red.scaleX = 5;
        //	red.scaleY = 5;
        //
    };
    UIScene.prototype.addNewImg = function () {
        var name = this.inputTxt.text;
        var len = this._img.length;
        this._lst[len] = name;
        this._img[len] = UI.addPic(this, name + "_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._img[len].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
        }, this);
        this._img[len].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            UIScene.instance._img[len].x = e.stageX;
            UIScene.instance._img[len].y = e.stageY;
            UIScene.instance.showTxt();
        }, this);
        this._img[len].$setTouchEnabled(true);
    };
    UIScene.prototype.showTxt = function () {
        this.outputTxt.text = "";
        for (var i = 0; i < this._img.length; i++) {
            var str = "";
            str = str + "" + this._lst[i];
            str = str + " ," + this._img[i].x;
            str = str + " ," + (this._img[i].y - this._redBmp.y);
            str = str + " ," + this._img[i].scaleX.toFixed(2);
            str = str + " ," + this._img[i].rotation.toFixed(2);
            this.outputTxt.text = this.outputTxt.text + str + "         ";
        }
    };
    UIScene.prototype.showImg = function () {
        if (this._img.length == 0) {
            return;
        }
        var len = this._img.length - 1;
        this._img[len].scaleX = this._scale;
        this._img[len].scaleY = this._scale;
        this._img[len].rotation = this._rotation;
        //
        this.showTxt();
        //
    };
    UIScene.prototype.onExit = function () {
    };
    return UIScene;
}(Scene));
__reflect(UIScene.prototype, "UIScene");
//# sourceMappingURL=UIScene.js.map