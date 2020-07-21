var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Flash = (function () {
    function Flash() {
    }
    Flash.random = function (param1) {
        var num = Math2.numberBetween(0, param1 - 1, true);
        return num;
    };
    Flash.saveItem = function (key, value) {
        egret.localStorage.setItem(key, value);
    };
    Flash.getItem = function (key) {
        var score = egret.localStorage.getItem(key);
        return score;
    };
    Flash.setImageColor = function (image, R, G, B) {
        var result = { r: -1, g: -1, b: -1 };
        result.b = B;
        result.g = G;
        result.r = R;
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = result.r / 255;
        colorMatrix[6] = result.g / 255;
        colorMatrix[12] = result.b / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
    return Flash;
}());
__reflect(Flash.prototype, "Flash");
//# sourceMappingURL=Flash.js.map