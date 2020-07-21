var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CompositeControl = (function () {
    function CompositeControl() {
    }
    //创建提交组合控件
    CompositeControl.CreateCommitControl = function (parentNode, x, y, listener) {
        //计时器
        CompositeControl._nCount = 0;
        //外部Box
        var _box = new egret.Sprite();
        _box.width = 480;
        _box.height = 250;
        _box.$setAnchorOffsetX(_box.width / 2);
        _box.$setAnchorOffsetY(_box.height / 2);
        _box.x = x;
        _box.y = y;
        parentNode.addChild(_box);
        //放入控件
        //文字
        var label = new egret.TextField();
        _box.addChild(label);
        label.x = _box.width / 2;
        label.y = _box.height / 2 - 100;
        label.size = 24;
        label.textColor = 0x000000;
        label.text = CompositeControl._nCount + "";
        label.anchorOffsetX = label.width / 2;
        label.anchorOffsetY = label.height / 2;
        //减号
        var _minusSign = UI.addBtn(_box, "eksi_png", _box.width / 2 - 80, _box.height / 2 - 100, true, function () {
            if (CompositeControl._nCount > 0) {
                CompositeControl._nCount--;
                label.text = CompositeControl._nCount + "";
            }
        }, 0.75);
        _minusSign.scaleX = _minusSign.scaleY = 0.75;
        //加号
        var _plusSign = UI.addBtn(_box, "arti_png", _box.width / 2 + 80, _box.height / 2 - 100, true, function () {
            if (CompositeControl._nCount < 9999) {
                CompositeControl._nCount++;
                label.text = CompositeControl._nCount + "";
            }
        }, 0.75);
        _plusSign.scaleX = _plusSign.scaleY = 0.75;
        //提交
        var _commit = UI.addBtn(_box, "coinbg_png", _box.width / 2, _box.height / 2, true, listener, 1);
    };
    return CompositeControl;
}());
__reflect(CompositeControl.prototype, "CompositeControl");
//# sourceMappingURL=CompositeControl.js.map