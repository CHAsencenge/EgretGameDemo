class Level16 extends egret.DisplayObjectContainer implements egret.DisplayObject {
	public static instance: Level16;
	public _pic: egret.Bitmap;
	public _pic2: egret.Bitmap;
	public _img: Array<egret.Bitmap> = [];
	public _error: egret.Bitmap;
	public _txt: Array<egret.TextField> = [];
	public _tag: Array<boolean> = [];
	public _Num: number = 0;

	//


	public constructor() {
		super();
		Level16.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

	}


	protected onExit() {
		//必须要加入
	}

	protected onEnter() {
		//-----------------------------------------------------------------------------------------------图片处理


		//----------------------------------------------------------------------------游戏素材
		this._img["lvl16_2"] = UI.addPic(this, "lvl16_2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["lvl16_2"].scaleX = 0.5; this._img["lvl16_2"].scaleY = 0.5;
		this._img["lvl16_1"] = UI.addPic(this, "lvl16_1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._img["lvl16_1"].scaleX = 0.5; this._img["lvl16_1"].scaleY = 0.5;

		//-------------------------------------------------------------------定义mask容器及对象
		let mask: Array<egret.Shape> = [];
		mask["card"] = new egret.Shape;
		mask["card"].graphics.beginFill(0xff0000);
		mask["card"].graphics.drawRect(0,0, 15, 8);
		mask["card"].x = 334;mask["card"].y = 442 / 820 * UI.WINSIZE_H;
		mask["card"].graphics.endFill();
		this._tag["card"] = false;

		// this._img[0] =  UI.addPic(this, "lvl16_card_png", 341, 450 / 820 * UI.WINSIZE_H, true);
		// this._img[0].scaleX = 0.1;this._img[0].scaleY =0.1;
		// this._img[0].addEventListener(egret.TouchEvent.TOUCH_MOVE,function(e:egret.TouchEvent){	
		// 	this._img[0].x = e.stageX;
		// 	this._img[0].y = e.stageY;
		// 	console.log(e.stageX,e.stageY);
		// },this);
		// this._img[0].$setTouchEnabled(true);


		mask["card_up"] = new egret.Shape;
		mask["card_up"].graphics.beginFill(0xff0000);
		mask["card_up"].graphics.drawRect(0,0, 80, 60);
		mask["card_up"].x = 217;mask["card_up"].y = 150 / 820 * UI.WINSIZE_H;
		mask["card_up"].graphics.endFill();

		mask["red"] = new egret.Shape;
		mask["red"].graphics.beginFill(0xff0000);
		mask["red"].graphics.drawRect(0,0, 32, 10);
		mask["red"].x = 425;mask["red"].y =  620 / 820 * UI.WINSIZE_H;
		mask["red"].graphics.endFill();
		this._tag["red"] = false;

		mask["red_up"] = new egret.Shape;
		mask["red_up"].graphics.beginFill(0xff0000);
		mask["red_up"].graphics.drawRect(0,0, 80, 60);
		mask["red_up"].x = 56;mask["red_up"].y = 222/ 820 * UI.WINSIZE_H;
		mask["red_up"].graphics.endFill();


		mask["bone"] = new egret.Shape;
		mask["bone"].graphics.beginFill(0xff0000);
		mask["bone"].graphics.drawRect(0,0, 32, 13);
		mask["bone"].x = 27;mask["bone"].y = 580 / 820 * UI.WINSIZE_H
		mask["bone"].graphics.endFill();
		this._tag["bone"] = false;

		mask["bone_up"] = new egret.Shape;
		mask["bone_up"].graphics.beginFill(0xff0000);
		mask["bone_up"].graphics.drawRect(0,0, 80, 60);
		mask["bone_up"].x = 287;mask["bone_up"].y = 214 / 820 * UI.WINSIZE_H;
		mask["bone_up"].graphics.endFill();


		mask["moon"] = new egret.Shape;
		mask["moon"].graphics.beginFill(0xff0000);
		mask["moon"].graphics.drawRect(0,0, 70, 16);
		mask["moon"].x = 173;mask["moon"].y = 625 / 820 * UI.WINSIZE_H;
		mask["moon"].graphics.endFill();
		this._tag["moon"] = false;

		mask["moon_up"] = new egret.Shape;
		mask["moon_up"].graphics.beginFill(0xff0000);
		mask["moon_up"].graphics.drawRect(0,0, 70, 80);
		mask["moon_up"].x = 340;mask["moon_up"].y = 140 / 820 * UI.WINSIZE_H;
		mask["moon_up"].graphics.endFill();


		mask["milk"] = new egret.Shape;
		mask["milk"].graphics.beginFill(0xff0000);
		mask["milk"].graphics.drawRect(0,0, 12, 13);
		mask["milk"].x = 186;mask["milk"].y = 425 / 820 * UI.WINSIZE_H;
		mask["milk"].graphics.endFill();
		this._tag["milk"] = false;


		mask["milk_up"] = new egret.Shape;
		mask["milk_up"].graphics.beginFill(0xff0000);
		mask["milk_up"].graphics.drawRect(0,0, 70, 60);
		mask["milk_up"].x = 175;mask["milk_up"].y = 207 / 820 * UI.WINSIZE_H;
		mask["milk_up"].graphics.endFill();


		mask["water"] = new egret.Shape;
		mask["water"].graphics.beginFill(0xff0000);
		mask["water"].graphics.drawRect(0,0, 22, 20);
		mask["water"].x = 399;mask["water"].y = 478 / 820 * UI.WINSIZE_H;
		mask["water"].graphics.endFill();
		this._tag["water"] = false;

		mask["water_up"] = new egret.Shape;
		mask["water_up"].graphics.beginFill(0xff0000);
		mask["water_up"].graphics.drawRect(0,0, 70, 60);
		mask["water_up"].x = 71;mask["water_up"].y = 150 / 820 * UI.WINSIZE_H;
		mask["water_up"].graphics.endFill();

		let mymask: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
		this.addChild(mymask);
		this._img["lvl16_1"].mask = mymask;





		//-------------------------------------------------------------------------------------------btn处理

		this._img["lvl16_2"].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e: egret.TouchEvent) {
			if (mask["card"].hitTestPoint(e.stageX, e.stageY)) {							//点击card
				this._Hitoper("card", mask["card"], mask["card_up"], mymask, e);
			} else if (mask["red"].hitTestPoint(e.stageX, e.stageY)) {						//点击red
				this._Hitoper("red", mask["red"], mask["red_up"], mymask, e);
			} else if (mask["bone"].hitTestPoint(e.stageX, e.stageY)) {						//点击bone
				this._Hitoper("bone", mask["bone"], mask["bone_up"], mymask, e);
			} else if (mask["milk"].hitTestPoint(e.stageX, e.stageY)) {						//点击milk
				this._Hitoper("milk", mask["milk"], mask["milk_up"], mymask, e);
			} else if (mask["water"].hitTestPoint(e.stageX, e.stageY)) {					//点击water
				this._Hitoper("water", mask["water"], mask["water_up"], mymask, e);
			} else if (mask["moon"].hitTestPoint(e.stageX, e.stageY)) {						//点击moon
				this._Hitoper("moon", mask["moon"], mask["moon_up"], mymask, e);
			} else {
				this._wrong();
			}
		}, this);
		this._img["lvl16_2"].$setTouchEnabled(true);
	}
	


	//-----------------------------------------------------------------------------------------------------------监听函数


	private _Hitoper(name: any, mask1: egret.Shape, mask2: egret.Shape, mymask: egret.DisplayObjectContainer, e: egret.TouchEvent): void {
		if (this._tag[name] == false) {					//首次点击
			this._tag[name] = true;
			this._Num++;
			mymask.addChild(mask1);
			let tw = this.Hitok(e.stageX,e.stageY);
			if(this._Num==6){
				tw.call(this._ok,this);
			}
			this._pic =  UI.addPic(this, "lvl16_"+name+"_png", mask1.x, mask1.y, true);
			this._pic.scaleX = 0.1;this._pic.scaleY =0.1;
			egret.Tween.get(this._pic).to({ x: mask2.x, y:mask2.y}, 500, egret.Ease.sineIn).call(function(){mymask.addChild(mask2),Level16.instance.removeChild(Level16.instance._pic)});
			
		} else {
			this._wrong();
		}

	}

	private Hitok(x:number,y:number):any{
		this._pic = UI.addPic(Level16.instance, "ok_png", x, y, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		let tw = egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 500, egret.Ease.sineIn).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn);
		return tw;
	}



	protected _ok(): void {
		this._pic = UI.addPic(this, "ok_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		this._pic2 = UI.addPic(this, "check2_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic2.scaleX = 0; this._pic2.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 500, egret.Ease.sineIn);
		egret.Tween.get(this._pic2).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn);
	}

	protected _wrong(): void {
		this._pic = UI.addPic(this, "error_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this._pic.scaleX = 0; this._pic.scaleY = 0;
		egret.Tween.get(this._pic).to({ scaleX: 0.4, scaleY: 0.4 }, 500, egret.Ease.sineIn)
			.to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.sineIn);
	}

}








