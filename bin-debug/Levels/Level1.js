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
var Level1 = (function (_super) {
    __extends(Level1, _super);
    //
    function Level1() {
        var _this = _super.call(this) || this;
        Level1.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level1.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        //this._pic = UI.addPic(this, "lvl1_1_png", 182, UI.WINSIZE_H/2, true);
        //console.log(UI.WINSIZE_W);
        //console.log(UI.WINSIZE_H);
        this._txt = UI.addText(this, "哪个水果更重？", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
        this._txt.size = 28;
        this._txt.textColor = 0x000000;
        this._pic0 = UI.addPic(this, "lvl1_1_png", 123, 375, true);
        this._pic0.scaleX = 0.25;
        this._pic0.scaleY = 0.25;
        this._pic1 = UI.addPic(this, "lvl1_2_png", 178, 384, true);
        this._pic1.scaleX = 0.23;
        this._pic1.scaleY = 0.23;
        this._pic2 = UI.addPic(this, "lvl1_3_png", 150, 364, true);
        this._pic2.scaleX = 0.3;
        this._pic2.scaleY = 0.3;
        this._pic3 = UI.addPic(this, "lvl1_5_png", 332, 483, true);
        this._pic3.scaleX = 0.23;
        this._pic3.scaleY = 0.23;
        this._pic4 = UI.addPic(this, "lvl1_6_png", 151, 477, true);
        this._pic4.scaleX = 0.30;
        this._pic4.scaleY = 0.30;
        this._pic5 = UI.addPic(this, "lvl1_8_png", 242, 540, true);
        this._pic5.scaleX = 0.32;
        this._pic5.scaleY = 0.32;
        this._pic6 = UI.addPic(this, "lvl1_4_png", 330, 520, true);
        this._pic6.scaleX = 0.28;
        this._pic6.scaleY = 0.28;
        this._pic7 = UI.addPic(this, "lvl1_4_png", 150, 520, true);
        this._pic7.scaleX = 0.28;
        this._pic7.scaleY = 0.28;
        this._pic8 = UI.addPic(this, "lvl1_7_png", 241, 550, true);
        this._pic8.scaleX = 0.28;
        this._pic8.scaleY = 0.28;
        this._pic9 = UI.addPic(this, "lvl1_9_png", 151, 442, true);
        this._pic9.scaleX = 0.31;
        this._pic9.scaleY = 0.31;
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        console.log(Level1.label);
        this._pic0.once(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            //移除方法
            // Level1.instance.removeChild(Level1.instance._pic0);
            // Level1.instance.removeChild(Level1.instance._pic1);
            // Level1.instance.removeChild(Level1.instance._pic2);
            // Level1.instance.removeChild(Level1.instance._pic9);
            this.ballonTween();
            Level1.instance.ok();
            Level1.label = true;
            console.log(Level1.label);
            var timer = new egret.Timer(1000, 1);
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, Level1.instance.nxt, this);
            timer.start();
        }, this);
        this._pic0.$setTouchEnabled(true);
        this._pic1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            this.ballonTween();
            Level1.instance.ok();
            Level1.label = true;
            console.log(Level1.label);
        }, this);
        this._pic1.$setTouchEnabled(true);
        this._pic2.once(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            this.ballonTween();
            Level1.instance.ok();
            Level1.label = true;
            console.log(Level1.label);
            var timer = new egret.Timer(1000, 1);
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, Level1.instance.nxt, this);
            timer.start();
        }, this);
        this._pic2.$setTouchEnabled(true);
        this._pic9.once(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            this.ballonTween();
            Level1.instance.ok();
            Level1.label = true;
            console.log(Level1.label);
            var timer = new egret.Timer(1000, 1);
            timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, Level1.instance.nxt, this);
            timer.start();
        }, this);
        this._pic9.$setTouchEnabled(true);
        console.log(Level1.label);
        this._pic3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level1.instance.rm, this);
        this._pic3.$setTouchEnabled(true);
        this._pic3.removeEventListener(egret.TouchEvent.TOUCH_END, Level1.instance.rm, this);
    };
    //点击气球后延迟触发的下一步（天平倾斜）
    Level1.prototype.nxt = function () {
        Level1.instance._angle = 0; //轴心转动角度
        Level1.instance.addEventListener(egret.Event.ENTER_FRAME, Level1.instance.moveObj, this);
    };
    //点击苹果后移除苹果
    Level1.prototype.rm = function () {
        if (Level1.label == true) {
            Level1.instance.removeChild(Level1.instance._pic3);
            Level1.instance.ok();
        }
    };
    //每一步正确操作弹出的绿色对号效果
    Level1.prototype.ok = function () {
        var shape = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.3, scaleY: 0.3, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();
    };
    //气球消失效果
    Level1.prototype.ballonTween = function () {
        var ballY = this._pic0;
        var ballB = this._pic2;
        var ballR = this._pic1;
        var tie = this._pic9;
        var twY = egret.Tween.get(ballY);
        var twB = egret.Tween.get(ballB);
        var twR = egret.Tween.get(ballR);
        var twT = egret.Tween.get(tie);
        twY.to({ alpha: 0 }, 300);
        twB.to({ alpha: 0 }, 300);
        twR.to({ alpha: 0 }, 300);
        twT.to({ alpha: 0 }, 300);
    };
    //天平倾斜包含的动作
    Level1.prototype.moveObj = function () {
        //let angle = 0; //轴心转动角度
        if (Level1.instance._angle > -30) {
            Level1.instance._angle = Level1.instance._angle - 2;
            Level1.instance._pic5.rotation = Level1.instance._angle;
            Level1.instance._pic6.x = 242 + 90 * Math.cos(-Level1.instance._angle * 2 * 3.14 / 360); //右天平移动规则
            Level1.instance._pic6.y = 520 - 90 * Math.sin(-Level1.instance._angle * 2 * 3.14 / 360);
            Level1.instance._pic3.x = 242 + 90 * Math.cos(-Level1.instance._angle * 2 * 3.14 / 360); //苹果移动规则
            Level1.instance._pic3.y = 483 - 90 * Math.sin(-Level1.instance._angle * 2 * 3.14 / 360);
            Level1.instance._pic7.x = 242 - 95 * Math.cos(-Level1.instance._angle * 2 * 3.14 / 360); //左天平移动规则
            Level1.instance._pic7.y = 520 + 95 * Math.sin(-Level1.instance._angle * 2 * 3.14 / 360);
            Level1.instance._pic4.x = 242 - 95 * Math.cos(-Level1.instance._angle * 2 * 3.14 / 360); //西瓜移动规则
            Level1.instance._pic4.y = 477 + 95 * Math.sin(-Level1.instance._angle * 2 * 3.14 / 360);
        }
        else {
            Level1.instance.removeEventListener(egret.Event.ENTER_FRAME, Level1.instance.moveObj, this);
            //Level1.instance.ok();
        }
    };
    Level1.prototype.onExit = function () {
        //必须要加入
    };
    //public _txt: egret.TextField;
    //public _btn: egret.Bitmap;
    //public _secondFlag: number = 0;
    Level1.label = false;
    return Level1;
}(egret.DisplayObjectContainer));
__reflect(Level1.prototype, "Level1", ["egret.DisplayObject"]);
//# sourceMappingURL=Level1.js.map