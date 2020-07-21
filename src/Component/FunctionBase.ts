class FunctionBase{
    public static hitTest(pObj1:egret.Bitmap,pObj2:egret.Bitmap){
        let rect1:egret.Rectangle = pObj1.getBounds();
        let rect2:egret.Rectangle = pObj2.getBounds();
        rect1.x = pObj1.x - pObj1.width/2;
        rect1.y = pObj1.y - pObj1.height/2;

        rect2.x = pObj2.x - pObj2.width/2;
        rect2.y = pObj2.y - pObj2.height/2;
        return rect1.intersects(rect2);
    }
    //绘制延迟消除
    public static drawDelay(pSrc:string,pStage:any,pX:number,pY:number,pAnchorCenterFlag:boolean,pTime:number){
        let _img = UI.addPic(pStage,pSrc,pX,pY,pAnchorCenterFlag);
        setTimeout(() => { pStage.removeChild(_img) },pTime);
        return _img;
    }
      public createShape():egret.Shape{
        let magicNum = 1 - 0.55228475;
        let radius = 100;
        let shape = new egret.Shape();
        shape.graphics.lineStyle(2,0xff0000);
        shape.graphics.lineTo(radius, 0);
        shape.graphics.cubicCurveTo(magicNum * radius, 0, 0, magicNum * radius, 0, radius);
        //shape.graphics.lineTo(0, 0);
        shape.graphics.endFill();
        return shape;
      }
    
}