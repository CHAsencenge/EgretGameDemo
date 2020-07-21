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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    //pLevel需要进入的关数
    function GameScene(pLevel) {
        if (pLevel === void 0) { pLevel = 1; }
        var _this = _super.call(this) || this;
        _this._level = pLevel;
        return _this;
    }
    //
    GameScene.prototype.onEnter = function () {
        GameScene.instance = this;
        UI.addPic(this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // UI.addBtn(this, "slide_jpg", 100, 100, true, function(arg){
        // let tc: LayerDemo = new LayerDemo();
        // SceneManager.Instance.pushScene(tc);
        // });
        var lvl = new Level2();
        this.addChild(lvl);
    };
    GameScene.prototype.onExit = function () {
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map