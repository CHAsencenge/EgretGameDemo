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
var UIDemo = (function (_super) {
    __extends(UIDemo, _super);
    //
    function UIDemo() {
        var _this = _super.call(this) || this;
        _this._secondFlag = 0;
        UIDemo.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    UIDemo.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        this._pic = UI.addPic(this, "AppIcon_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this._pic.rotation = 100; //旋转
        //UI.setImageColor(this._pic, 255, 0, 0);//颜色
        this._pic.scaleX = 0.8; //缩放
        this._pic.scaleY = 0.8;
        this._pic.alpha = 0.6;
        this._btn = UI.addBtn(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 200, true, function (arg) {
            //this.btnAction();//这样就悲剧了, 回调里面找不到this,  如何判断能不能用this?  this.XXX没有
            UIDemo.instance.btnAction();
        }, 0.5);
        //]
        //
        //-----------------------------------------------------------------------------------------------文字处理
        this._txt = UI.addText(this, "Hello Egret", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 200, true);
        this._txt.size = 33;
        this._txt.textColor = 0x129329;
        //
        //-----------------------------------------------------------------------------------------------按钮处理
        //-----------------------------------------------------------------------------------------------帧事件
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
        //-----------------------------------------------------------------------------------------------延迟事件
        egret.setTimeout(function (arg) {
            this._txt.text = "I Will Kill Me";
        }, this, 2000);
        //-----------------------------------------------------------------------------------------------缓动事件tween
        this._btn = UI.addBtn(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 100, true, function (arg) {
            //this.btnAction();//这样就悲剧了, 回调里面找不到this,  如何判断能不能用this?  this.XXX没有
            UIDemo.instance.picMove();
        }, 0.5);
        var _loop_1 = function (i) {
            var aa = i;
            UI.addBtn(this_1, "error_png", 50 + 80 * i, 100, true, function (arg) {
                UIDemo.instance.test(i);
            }, 0.5);
        };
        var this_1 = this;
        ////
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
    };
    UIDemo.prototype.test = function (pNum) {
    };
    UIDemo.prototype.picMove = function () {
        var tw = egret.Tween.get(this._pic);
        tw.to({
            x: Math.random() * 480,
            y: Math.random() * 800,
            rotation: Math.random() * 760 * 2 - 360 * 2
        }, //移动到随机的位置
        (Math.random() * 3 + 2) * 1000, //时间
        egret.Ease.backIn //参加效果，还有EaseIn 等参考baidu
        ).call(function () {
            //动作完毕后的回调
        });
    };
    //页面刷新调用，大概刷33次是一秒钟
    UIDemo.prototype.update = function () {
        console.log("hello update");
        if (this._secondFlag++ % 2 == 0) {
            this._secondFlag = 1;
            this._pic.rotation = this._pic.rotation + 10;
            if (this._pic.rotation >= 360) {
                this._pic.rotation = 0;
            }
        }
    };
    UIDemo.prototype.btnAction = function () {
        this._txt.text = "I Kill You!";
    };
    UIDemo.prototype.onExit = function () {
        //必须要加入
        this.removeEventListener(egret.Event.ENTER_FRAME, this.update, this);
    };
    return UIDemo;
}(egret.DisplayObjectContainer));
__reflect(UIDemo.prototype, "UIDemo", ["egret.DisplayObject"]);
//# sourceMappingURL=UIDemo.js.map