class CompositeControl{
    static _nCount:number;
    //创建提交组合控件
    public static CreateCommitControl(parentNode:any,x:number,y:number,listener:Function){
        //计时器
        CompositeControl._nCount = 0;
        //外部Box
        let _box:egret.Sprite = new egret.Sprite();
        _box.width = 480;
        _box.height = 250;
        _box.$setAnchorOffsetX(_box.width / 2);
        _box.$setAnchorOffsetY(_box.height / 2);
        _box.x = x;
        _box.y = y;
       
        parentNode.addChild(_box)
        //放入控件
        //文字
        var label: egret.TextField = new egret.TextField();
		_box.addChild(label);
		label.x = _box.width/2;
		label.y = _box.height/2-100;
		label.size = 24;
		label.textColor = 0x000000;
		label.text = CompositeControl._nCount + "";
		label.anchorOffsetX = label.width/2;
		label.anchorOffsetY = label.height/2;

        //减号
        let _minusSign:egret.Bitmap = UI.addBtn(_box,"eksi_png",_box.width/2 - 80,_box.height/2 - 100,true,() => { if(CompositeControl._nCount > 0)
            { 
                CompositeControl._nCount--;
                label.text = CompositeControl._nCount + "";  
             } 
        },0.75);
        _minusSign.scaleX = _minusSign.scaleY = 0.75;
        //加号
        let _plusSign:egret.Bitmap = UI.addBtn(_box,"arti_png",_box.width/2 + 80,_box.height/2 - 100,true,() => {
            if(CompositeControl._nCount < 9999){
                CompositeControl._nCount++;
                label.text = CompositeControl._nCount + "";
            }
        },0.75);
        _plusSign.scaleX = _plusSign.scaleY = 0.75;
        //提交
        let _commit:egret.Bitmap = UI.addBtn(_box,"coinbg_png",_box.width/2,_box.height/2 ,true,listener,1);
        
    }
}