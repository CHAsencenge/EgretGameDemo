class Level14 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level14;
	public _pic: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	private _angle: Array<egret.Rectangle> = [];

	//


	public constructor() {
		super();
		Level14.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理

		this._img["lvl14_1"] = UI.addPic(this, "lvl14_1_png", 105, 534 / 820 * UI.WINSIZE_H, true);
		this._img["lvl14_2"] = UI.addPic(this, "lvl14_2_png", 185, 537 / 820 * UI.WINSIZE_H, true);
		this._img["lvl14_3"] = UI.addPic(this, "lvl14_3_png", 241, 550 / 820 * UI.WINSIZE_H, true);
		this._img["lvl14_4"] = UI.addPic(this, "lvl14_4_png", 370, 530 / 820 * UI.WINSIZE_H, true);
		this._img["lvl14_6"] = UI.addPic(this, "lvl14_6_png", 300, 530 / 820 * UI.WINSIZE_H, true);
		this._img["lvl14_5"] = UI.addPic(this, "lvl14_5_png", UI.WINSIZE_W / 2, 598 / 820 * UI.WINSIZE_H, true);




		for (let i = 1; i < 7; i++) {
			this._angle[i] = new egret.Rectangle(this._img["lvl14_" + i].x - this._img["lvl14_" + i].width / 2,
				this._img["lvl14_" + i].y - this._img["lvl14_" + i].height / 2,
				this._img["lvl14_" + i].width, this._img["lvl14_" + i].height);
			if (i != 5) {
				this._img["lvl14_" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, function (event) { this.MovePIC(i, event) }, this);
				this._img["lvl14_" + i].addEventListener(egret.TouchEvent.TOUCH_END, this.Check, this);
				this._img["lvl14_" + i].$setTouchEnabled(true);
			}
		}


		//------------------------------------------------------------------------------------------------SHAPE检测
		// let shape:egret.Shape = new egret.Shape;
		// shape.graphics.beginFill(0x336699);
		// shape.graphics.drawRect(this._angle[i].x,this._angle[i].y,this._angle[i].width,this._angle[i].height);
		// shape.graphics.endFill();
		// shape.alpha = 0.1;
		// this.addChild(shape)
	}






	//-----------------------------------------------------------------------------------------------------监听函数


	private MovePIC(i: number, e: egret.TouchEvent): void {
		this._img["lvl14_" + i].x = e.stageX;
		this._img["lvl14_" + i].y = e.stageY;
		this._angle[i].x = this._img["lvl14_" + i].x - this._img["lvl14_" + i].width / 2;
		this._angle[i].y = this._img["lvl14_" + i].y - this._img["lvl14_" + i].height / 2;

	}

	private Check(): void {
		let tag: boolean = true;
		for (let i = 1; i < 7; i++) {
			if (i != 5) {
				if (this._angle[5].intersects(this._angle[i])) {		//如果两个矩形相交，返回true，否则返回false
					tag = false;
					break;
				}
			}
		}
		if (tag == true) {
			egret.setTimeout(this.isOK, this, 500);
		}

	}


	private isOK(): void {
		this._img["lvl14_1"].alpha = 0;
		this._img["lvl14_7"] = UI.addPic(this, "lvl14_7_png", this._img["lvl14_1"].x, this._img["lvl14_1"].y, true);
		this.removeChild(this._img["lvl14_1"]);

		//	随机选取图片
		// let i:number = Math.round(Math.random() * 5) +1;		//1,2,3,4,5,6
		// let j :number;
		// if(i==5){
		// 	i++;
		// 	j=i+5
		// }
		// this._img["lvl14_"+'i'].alpha = 0;
		// this._img["lvl14_"+"j"] = UI.addPic(this, "lvl14_"+"j"+"_png",this._img["lvl14_"+"i"].x, this._img["lvl14_"+'i'].y, true);
		// this.removeChild(this._img["lvl14_"+"i"]);
	}

}








