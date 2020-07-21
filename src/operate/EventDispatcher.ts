class EventDispatcherExample extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        var dispatcher:CustomDispatcher = new CustomDispatcher();
        dispatcher.addEventListener(CustomDispatcher.ACTION, this.onAction, this);
        dispatcher.doAction();
    }

    private onAction(event:egret.Event):void {
        egret.log("onAction");
    }
}

class CustomDispatcher extends egret.EventDispatcher {
    public static ACTION:string = "action";

    public doAction():void {
        this.dispatchEventWith(CustomDispatcher.ACTION);
    }
}