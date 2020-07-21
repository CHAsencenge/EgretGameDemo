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
//enum的使用要定义在class外面
var Style;
(function (Style) {
    Style[Style["None"] = 0] = "None";
    Style[Style["Bold"] = 1] = "Bold";
    Style[Style["Italic"] = 2] = "Italic"; //斜体 
})(Style || (Style = {}));
;
var TSDemo = (function (_super) {
    __extends(TSDemo, _super);
    function TSDemo() {
        var _this = _super.call(this) || this;
        TSDemo.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    TSDemo.prototype.onEnter = function () {
        this.varLetDemo();
    };
    //基本数据类型
    TSDemo.prototype.dataDemo = function () {
        var a1 = 1;
        var a2 = 1.01;
        var b1 = false;
        var c1 = "hello egret";
        var d1 = [1, 1, 11, 1,];
        var d2 = ["dfd", "dfd"];
        var d3 = [];
        //遍列数组
        console.log("d1 length = " + d1.length);
        for (var key in d1) {
            console.log(d1[key]);
        }
        for (var i = 0; i < d1.length; i++) {
            console.log(d1[i]);
        }
        //尽可能不要使用any
        //
        //Object
        var result = { r: -1, g: -1, b: -1 };
        result.b = 1;
        result.g = 2;
        result.r = 3;
    };
    //如无必要，不使用var
    TSDemo.prototype.varLetDemo = function () {
        var varTest = 'test var OK.';
        var letTest = 'test let OK.';
        //
        {
            var varTest = 'varTest changed.';
            var letTest_1 = 'letTest changed.';
        }
        console.log(varTest);
        console.log(letTest);
    };
    //定义一个struct
    TSDemo.prototype.structDemo = function () {
        var myhusband = { sex: '男', interest: '看书、作家务', maiBaoBao: true };
        console.log(myhusband.sex);
    };
    TSDemo.prototype.onExit = function () {
        //必须要加入
    };
    return TSDemo;
}(egret.DisplayObjectContainer));
__reflect(TSDemo.prototype, "TSDemo", ["egret.DisplayObject"]);
//# sourceMappingURL=TSDemo.js.map