class Level6 extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public static instance: Level6;
    public _txt: egret.TextField;
    public _men1: egret.Bitmap;
    public _men2: egret.Bitmap;
    public _varvar1: egret.Bitmap;
    public _varvar2: egret.Bitmap;
    public _ok: egret.Bitmap;
    public _buttonNext: egret.Bitmap;
    public _buttonPrev: egret.Bitmap;
    //public _distance: egret.Point = new egret.Point();
    public _touchStatus: boolean = false;

    private touchPoints:Object = {names:[]}; //{touchid:touch local,names:[ID1,ID2]};
    private distance:number = 0;
    private defAngle:number = 0;
    private touchCon:number = 0;

    public constructor() {
        super();
        Level6.instance = this;
        // 监听组件创建完毕 也就是场景的外观创建完毕
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }

    private getTouchDistance():number
    {
        var _distance:number = 0;
        var names = this.touchPoints["names"];
        _distance = egret.Point.distance( this.touchPoints[names[names.length-1]],
            this.touchPoints[names[names.length-2]]);
        return _distance;
    }

    private mouseDown(evt:egret.TouchEvent)
    {
        egret.log("touch begin:"+evt.touchPointID);
        if(this.touchPoints[evt.touchPointID]==null)
        {
            this.touchPoints[evt.touchPointID] = new egret.Point(evt.stageX,evt.stageY);
            this.touchPoints["names"].push(evt.touchPointID);
        }
        this.touchCon++;

        if(this.touchCon==2)
        {
            this.distance = this.getTouchDistance();
            egret.log("distance:"+this.distance);
        }

    }

    private mouseMove(evt:egret.TouchEvent)
    {
        //egret.log("touch move:"+evt.touchPointID);

        this.touchPoints[evt.touchPointID].x = evt.stageX;
        this.touchPoints[evt.touchPointID].y = evt.stageY;
        if(this.touchCon==2)
        {
            var newdistance = this.getTouchDistance();
            this._varvar1.scaleX = newdistance/this.distance;
            this._varvar1.scaleY = this._varvar1.scaleX;

        }
    }

    private mouseUp(evt:egret.TouchEvent)
    {
        egret.log("touch end:"+evt.touchPointID);
        delete  this.touchPoints[evt.touchPointID];
        this.touchCon--;
        //
        this._varvar1.width *= this._varvar1.scaleX;
        this._varvar1.height *= this._varvar1.scaleY;
        this._varvar1.scaleX = 1;
        this._varvar1.scaleY = 1;
        this._varvar1.anchorOffsetX = this._varvar1.width/2;
        this._varvar1.anchorOffsetY = this._varvar1.height/2;
        if(this._varvar1.scaleX < 0.15){
            this._varvar1.alpha = 0;
            this._varvar2.alpha = 1;
            this._men1.alpha = 0;
            this._men2.alpha = 1;
            this.ok();
        }
    }

    public ok() {
        var shape: egret.Bitmap = this._ok;
        var tw = egret.Tween.get(shape);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0.5, scaleY: 0.5, alpha: 1 }, 300);
        tw.to({ scaleX: 0, scaleY: 0, alpha: 0 }, 300);
        GameData.finishLevel();

    }

    public onEnter(){
        this._txt = UI.addText(this, "救救约翰。", UI.WINSIZE_W / 2, UI.WINSIZE_H / 7, true);
		this._txt.size = 28;
		this._txt.textColor = 0x000000;
        this._ok = UI.addPic(this, "ok_png", 240, UI.WINSIZE_H / 2, true);
        this._ok.scaleX = 0;
        this._ok.scaleY = 0;
        this._ok.alpha = 0;
        this._men1 = UI.addPic(this, "men1_png", 150, UI.WINSIZE_H / 2, true);
        this._men1.scaleX = 0.3;
        this._men1.scaleY = 0.3;
        this._men2 = UI.addPic(this, "men2_png", 150, UI.WINSIZE_H / 2, true);
        this._men2.scaleX = 0.3;
        this._men2.scaleY = 0.3;
        this._men2.alpha = 0;
        this._varvar1 = UI.addPic(this, "varvar1_png", 330, UI.WINSIZE_H / 2.2, true);
        this._varvar1.scaleX = 0.3;
        this._varvar1.scaleY = 0.3;
        this._varvar1.touchEnabled = true;
        this._varvar2 = UI.addPic(this, "varvar1_png", 330, UI.WINSIZE_H / 3 * 2, true);
        this._varvar2.scaleX = 0.15;
        this._varvar2.scaleY = 0.15;
        this._varvar2.alpha = 0;
        this._varvar1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Level6.instance.mouseDown, this);
        this._varvar1.addEventListener(egret.TouchEvent.TOUCH_END, Level6.instance.mouseUp, this);
        this._varvar1.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }


    public onExit(){

    }
}