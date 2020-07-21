
class Util {

    public static createObject(
        param1: egret.DisplayObject,
        param2: egret.DisplayObjectContainer,
        param3: number = 0,
        param4: number = 0) 
    {
        param2.addChild(param1);
        param1.x = param3;
        param1.y = param4;
        return param1;
    }// end 
//
    public static gotoLink(param1: String): void {
        return;
    }// end 
}
