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
var ZOrderDemo = (function (_super) {
    __extends(ZOrderDemo, _super);
    function ZOrderDemo() {
        var _this = _super.call(this) || this;
        _this.index = 10;
        ZOrderDemo.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    ZOrderDemo.prototype.onEnter = function () {
        var _this = this;
        var girl1 = new egret.Bitmap;
        girl1.texture = RES.getRes("ball1_png");
        var girl2 = new egret.Bitmap;
        girl2.texture = RES.getRes("ball2_png");
        var girl3 = new egret.Bitmap;
        girl3.texture = RES.getRes("ball3_png");
        girl1.y = 200;
        girl2.y = 220;
        girl3.y = 200;
        girl1.x = 100;
        girl2.x = 120;
        girl3.x = 150;
        girl1.touchEnabled = true;
        girl2.touchEnabled = true;
        girl3.touchEnabled = true;
        this.addChildAt(girl1, this.index);
        this.addChildAt(girl2, this.index);
        this.addChildAt(girl3, this.index);
        console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
        console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
        console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
        girl1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ZOrderDemo.instance.setChildIndex(girl1, 1000000);
            _this.index++;
            console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
            console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
            console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
        }, this);
        girl2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ZOrderDemo.instance.setChildIndex(girl2, 1000000);
            _this.index++;
            console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
            console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
            console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
        }, this);
        girl3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ZOrderDemo.instance.setChildIndex(girl3, 1000000);
            _this.index++;
            console.log("girl1 index = " + ZOrderDemo.instance.getChildIndex(girl1));
            console.log("girl2 index = " + ZOrderDemo.instance.getChildIndex(girl2));
            console.log("girl3 index = " + ZOrderDemo.instance.getChildIndex(girl3));
        }, this);
    };
    ZOrderDemo.prototype.onExit = function () {
        //必须要加入
    };
    return ZOrderDemo;
}(egret.DisplayObjectContainer));
__reflect(ZOrderDemo.prototype, "ZOrderDemo", ["egret.DisplayObject"]);
//# sourceMappingURL=ZOrderDemo.js.map