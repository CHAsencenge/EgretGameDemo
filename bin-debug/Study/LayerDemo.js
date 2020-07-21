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
var LayerDemo = (function (_super) {
    __extends(LayerDemo, _super);
    function LayerDemo() {
        var _this = _super.call(this) || this;
        _this.index = 10;
        LayerDemo.instance = _this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    LayerDemo.prototype.onEnter = function () {
        UI.addPic(this, "layerbg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.addBtn(this, "error_png", UI.WINSIZE_W / 2 + 180, UI.WINSIZE_H / 2 - 160, true, function (arg) {
            SceneManager.Instance.popScene();
        }, 0.3);
    };
    LayerDemo.prototype.onExit = function () {
        //必须要加入
    };
    return LayerDemo;
}(Scene));
__reflect(LayerDemo.prototype, "LayerDemo");
//# sourceMappingURL=LayerDemo.js.map