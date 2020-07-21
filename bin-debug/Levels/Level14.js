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
var Level14 = (function (_super) {
    __extends(Level14, _super);
    //
    function Level14() {
        var _this = _super.call(this) || this;
        _this._img = [];
        _this._txt = [];
        _this._angle = [];
        Level14.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    Level14.prototype.onExit = function () {
        //必须要加入
    };
    Level14.prototype.onEnter = function () {
        //-----------------------------------------------------------------------------------------------图片处理
        this._img["lvl14_1"] = UI.addPic(this, "lvl14_1_png", 105, 534 / 820 * UI.WINSIZE_H, true);
        this._img["lvl14_2"] = UI.addPic(this, "lvl14_2_png", 185, 537 / 820 * UI.WINSIZE_H, true);
        this._img["lvl14_3"] = UI.addPic(this, "lvl14_3_png", 241, 550 / 820 * UI.WINSIZE_H, true);
        this._img["lvl14_4"] = UI.addPic(this, "lvl14_4_png", 370, 530 / 820 * UI.WINSIZE_H, true);
        this._img["lvl14_6"] = UI.addPic(this, "lvl14_6_png", 300, 530 / 820 * UI.WINSIZE_H, true);
        this._img["lvl14_5"] = UI.addPic(this, "lvl14_5_png", UI.WINSIZE_W / 2, 598 / 820 * UI.WINSIZE_H, true);
        var _loop_1 = function (i) {
            this_1._angle[i] = new egret.Rectangle(this_1._img["lvl14_" + i].x - this_1._img["lvl14_" + i].width / 2, this_1._img["lvl14_" + i].y - this_1._img["lvl14_" + i].height / 2, this_1._img["lvl14_" + i].width, this_1._img["lvl14_" + i].height);
            if (i != 5) {
                this_1._img["lvl14_" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) { this.MovePIC(i, event); }, this_1);
                this_1._img["lvl14_" + i].addEventListener(egret.TouchEvent.TOUCH_END, this_1.Check, this_1);
                this_1._img["lvl14_" + i].$setTouchEnabled(true);
            }
        };
        var this_1 = this;
        for (var i = 1; i < 7; i++) {
            _loop_1(i);
        }
        //------------------------------------------------------------------------------------------------SHAPE检测
        // let shape:egret.Shape = new egret.Shape;
        // shape.graphics.beginFill(0x336699);
        // shape.graphics.drawRect(this._angle[i].x,this._angle[i].y,this._angle[i].width,this._angle[i].height);
        // shape.graphics.endFill();
        // shape.alpha = 0.1;
        // this.addChild(shape)
    };
    //-----------------------------------------------------------------------------------------------------监听函数
    Level14.prototype.MovePIC = function (i, e) {
        this._img["lvl14_" + i].x = e.stageX;
        this._img["lvl14_" + i].y = e.stageY;
        this._angle[i].x = this._img["lvl14_" + i].x - this._img["lvl14_" + i].width / 2;
        this._angle[i].y = this._img["lvl14_" + i].y - this._img["lvl14_" + i].height / 2;
    };
    Level14.prototype.Check = function () {
        var tag = true;
        for (var i = 1; i < 7; i++) {
            if (i != 5) {
                if (this._angle[5].intersects(this._angle[i])) {
                    tag = false;
                    break;
                }
            }
        }
        if (tag == true) {
            egret.setTimeout(this.isOK, this, 500);
        }
    };
    Level14.prototype.isOK = function () {
        this._img["lvl14_1"].alpha = 0;
        this._img["lvl14_7"] = UI.addPic(this, "lvl14_7_png", this._img["lvl14_1"].x, this._img["lvl14_1"].y, true);
        this.removeChild(this._img["lvl14_1"]);
        //	随机选取图片
        // let i:number = Math.round(Math.random() * 5) +1;		//1,2,3,4,5,6
        // let j :number;
        // if(i==5){
        // 	i++;
        // 	j=i+5
        // }
        // this._img["lvl14_"+'i'].alpha = 0;
        // this._img["lvl14_"+"j"] = UI.addPic(this, "lvl14_"+"j"+"_png",this._img["lvl14_"+"i"].x, this._img["lvl14_"+'i'].y, true);
        // this.removeChild(this._img["lvl14_"+"i"]);
    };
    return Level14;
}(egret.DisplayObjectContainer));
__reflect(Level14.prototype, "Level14", ["egret.DisplayObject"]);
//# sourceMappingURL=Level14.js.map