var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    Util.createObject = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = 0; }
        param2.addChild(param1);
        param1.x = param3;
        param1.y = param4;
        return param1;
    }; // end 
    //
    Util.gotoLink = function (param1) {
        return;
    }; // end 
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map