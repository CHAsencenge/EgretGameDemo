
class UIScene extends Scene {
	public _level: number;
	public static instance : UIScene;
	private inputTxt: egret.TextField;
	private outputTxt: egret.TextField;
	public _img : Array<egret.Bitmap> =[];
	public _lst : Array<string> =[];
	public _scale :number  = 1.0;
	public _rotation :number  = 0;
	public _redBmp : egret.Bitmap;
	//pLevel需要进入的关数
	public constructor() {
		super();
	}
	 private layTxBg( tx: egret.TextField ): void {
        var shp: egret.Shape = new egret.Shape;
        shp.graphics.beginFill( 0x000000 );
        shp.graphics.drawRect( tx.x, tx.y, tx.width, tx.height );
        shp.graphics.endFill();
        this.addChild( shp );
    }
	protected onEnter() {
		UIScene.instance = this;
		UI.addPic(this, "bg_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);

		this.inputTxt = new egret.TextField();
        this.inputTxt.width= 200;
        this.inputTxt.x = 30;
        this.inputTxt.y = 5;
        this.inputTxt.type = egret.TextFieldType.INPUT;
        this.inputTxt.text ="";
        this.addChild(this.inputTxt);
		this.layTxBg(this.inputTxt);
		this.setChildIndex(this.inputTxt, 2);

		this.outputTxt = new egret.TextField();
        this.outputTxt.width= 480;
        this.outputTxt.x = 5;
        this.outputTxt.y = UI.WINSIZE_H-30;
        this.outputTxt.type = egret.TextFieldType.INPUT;
        this.outputTxt.text ="";
        this.addChild(this.outputTxt);
		this.layTxBg(this.outputTxt);
		this.outputTxt.multiline = true;
		this.setChildIndex(this.outputTxt, 8);

		
		
		UI.addBtnTxt(this, "btnbg_jpg", "添加", UI.WINSIZE_W/2+100, 5, false, function(arg){
			if (UIScene.instance.inputTxt.text == ""){
				return;
			}
			//
			UIScene.instance.addNewImg();
		});
		//
		let heightY = 70;
		{
		let touchBar : egret.Bitmap = UI.addPic(this, "line_png", 0, heightY, false);
		let touchBtn : egret.Bitmap = UI.addPic(this, "slide_jpg", 240, heightY, false);
		touchBar.addEventListener(egret.TouchEvent.TOUCH_END, function (e: egret.TouchEvent) {
				touchBtn.x = e.stageX;
				console.log("e.stageX = " + e.stageX);
				UIScene.instance._scale = touchBtn.x/ 240;
				UIScene.instance.showImg();
				
		}, this);
		touchBar.$setTouchEnabled(true);
		}
		heightY = heightY + 40;
		{
		let touchBar : egret.Bitmap = UI.addPic(this, "line2_png", 0, heightY, false);
		let touchBtn : egret.Bitmap = UI.addPic(this, "slide_jpg", 240, heightY, false);
		touchBar.addEventListener(egret.TouchEvent.TOUCH_END, function (e: egret.TouchEvent) {
				touchBtn.x = e.stageX;
				console.log("e.stageX = " + e.stageX);
				UIScene.instance._rotation = touchBtn.x/ 240 * 180 - 180;
				UIScene.instance.showImg();
				
		}, this);
		touchBar.$setTouchEnabled(true);
		}
		//
		this._redBmp = UI.addPic(this, "red_jpg", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
		//red.scaleX = 5;
	//	red.scaleY = 5;
		//
	}

	public addNewImg(){
		let name: string = this.inputTxt.text;
		let  len :number =  this._img.length;
		this._lst[len] = name;
			this._img[len] = UI.addPic(this, name+"_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
			this._img[len].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e: egret.TouchEvent) {
			}, this);
			this._img[len].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e: egret.TouchEvent) {
				UIScene.instance._img[len].x = e.stageX;
				UIScene.instance._img[len].y =  e.stageY;
				UIScene.instance.showTxt();
			}, this);
			this._img[len].$setTouchEnabled(true);
	}
	public showTxt()
	{
		this.outputTxt.text = "";
		for (let i = 0; i < this._img.length; i ++){
			let str:string = "";
			str = str + "" + this._lst[i];
			str = str + " ," + this._img[i].x;
			str = str + " ," + (this._img[i].y - this._redBmp.y);
			str = str + " ," + this._img[i].scaleX.toFixed(2);
			str = str + " ," + this._img[i].rotation.toFixed(2);

			this.outputTxt.text = this.outputTxt.text + str  +"         ";

		}
	}
	public showImg()
	{
		if (this._img.length == 0){
			return;
		}
		let  len :number =  this._img.length-1;
		this._img[len].scaleX = this._scale;
		this._img[len].scaleY = this._scale;
		this._img[len].rotation = this._rotation;

		//
		this.showTxt();
		//
	}
	protected onExit() {
	
	}

}