var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FunctionBase = (function () {
    function FunctionBase() {
    }
    FunctionBase.hitTest = function (pObj1, pObj2) {
        var rect1 = pObj1.getBounds();
        var rect2 = pObj2.getBounds();
        rect1.x = pObj1.x - pObj1.width / 2;
        rect1.y = pObj1.y - pObj1.height / 2;
        rect2.x = pObj2.x - pObj2.width / 2;
        rect2.y = pObj2.y - pObj2.height / 2;
        return rect1.intersects(rect2);
    };
    //绘制延迟消除
    FunctionBase.drawDelay = function (pSrc, pStage, pX, pY, pAnchorCenterFlag, pTime) {
        var _img = UI.addPic(pStage, pSrc, pX, pY, pAnchorCenterFlag);
        setTimeout(function () { pStage.removeChild(_img); }, pTime);
        return _img;
    };
    FunctionBase.prototype.createShape = function () {
        var magicNum = 1 - 0.55228475;
        var radius = 100;
        var shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xff0000);
        shape.graphics.lineTo(radius, 0);
        shape.graphics.cubicCurveTo(magicNum * radius, 0, 0, magicNum * radius, 0, radius);
        //shape.graphics.lineTo(0, 0);
        shape.graphics.endFill();
        return shape;
    };
    return FunctionBase;
}());
__reflect(FunctionBase.prototype, "FunctionBase");
//# sourceMappingURL=FunctionBase.js.map