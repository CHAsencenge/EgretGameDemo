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
var EventDispatcherExample = (function (_super) {
    __extends(EventDispatcherExample, _super);
    function EventDispatcherExample() {
        var _this = _super.call(this) || this;
        var dispatcher = new CustomDispatcher();
        dispatcher.addEventListener(CustomDispatcher.ACTION, _this.onAction, _this);
        dispatcher.doAction();
        return _this;
    }
    EventDispatcherExample.prototype.onAction = function (event) {
        egret.log("onAction");
    };
    return EventDispatcherExample;
}(egret.DisplayObjectContainer));
__reflect(EventDispatcherExample.prototype, "EventDispatcherExample");
var CustomDispatcher = (function (_super) {
    __extends(CustomDispatcher, _super);
    function CustomDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDispatcher.prototype.doAction = function () {
        this.dispatchEventWith(CustomDispatcher.ACTION);
    };
    CustomDispatcher.ACTION = "action";
    return CustomDispatcher;
}(egret.EventDispatcher));
__reflect(CustomDispatcher.prototype, "CustomDispatcher");
//# sourceMappingURL=EventDispatcher.js.map