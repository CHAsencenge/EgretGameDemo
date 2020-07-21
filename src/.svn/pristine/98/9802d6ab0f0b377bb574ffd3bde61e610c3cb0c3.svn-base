class UI {
	//屏幕的高和宽
	public static WINSIZE_H: number = 0;
	public static WINSIZE_W: number = 0;

	/*
	image, 需要变颜色的图片
	R, G, B 颜色的定义值，例如255, 0, 0 红色
	*/
	public static setImageColor(image: egret.Bitmap, R: number, G: number, B: number) {
		let colorMatrix = [
			 1, 0, 0, 0, 0,
			 0, 1, 0, 0, 0,
			 0, 0, 1, 0, 0,
			 0, 0, 0, 1, 0
		 ];
		 colorMatrix[0] = R / 255;
		 colorMatrix[6] = G / 255;
		 colorMatrix[12] = B / 255;
		 let colorFilter = new egret.ColorMatrixFilter(colorMatrix);

		 image.filters = [colorFilter];
	 }

	/*
	添加按钮， 
	parentNode : 父节点
	picPath ： 图片名称
	x, y ,位置
	anchorCenterFlag: 锚点是不是居图片中心
	listener：点击监听函数
	oriScale: 图片需要进行的原始缩放值
	*/
	public static addBtn(parentNode: any, picPath: any, x: number, y: number,
	 anchorCenterFlag: boolean = false, listener: Function, oriScale: number = 1,
	 label : egret.TextField = null): any {
		let btn = new egret.Bitmap;
		btn.texture = RES.getRes(picPath);
		parentNode.addChild(btn);
		if (anchorCenterFlag) {
			btn.anchorOffsetX = btn.width / 2;
			btn.anchorOffsetY = btn.height / 2;
		}
		btn.x = x;
		btn.y = y;
		btn.scaleX = oriScale;
		btn.scaleY = oriScale;
		btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			btn.scaleX = 1.05 * oriScale;
			btn.scaleY = 1.05 * oriScale;
			if (label){
				label.scaleX = 1.05 ;
				label.scaleY = 1.05 ;
			}
		}, parentNode);
		btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			btn.scaleX = 1 * oriScale;
			btn.scaleY = 1 * oriScale;
			if (label){
				label.scaleX = 1 ;
				label.scaleY = 1 ;
			}
		}, parentNode);
		btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			btn.scaleX = 1 * oriScale;
			btn.scaleY = 1 * oriScale;
			if (label){
				label.scaleX = 1 ;
				label.scaleY = 1 ;
			}
			if (listener != null)
				listener.apply(0);
		}, parentNode);
		btn.$setTouchEnabled(true);
		return btn;
	}

	public static addBtnTxt(parentNode: any, picPath: any, txt: string,  x: number, y: number, anchorCenterFlag: boolean = false, listener: Function, oriScale: number = 1): any {
		let label :egret.TextField = UI.addText(parentNode, txt, x, y);
		
		let img: egret.Bitmap = UI.addBtn(parentNode, picPath, x, y, anchorCenterFlag, listener, oriScale, label);
		let index:number = parentNode.getChildIndex(img);
		parentNode.setChildIndex(label, index+1);
		if (anchorCenterFlag){
			label.anchorOffsetX = label.width/2;
			label.anchorOffsetY = label.height/2;
		}else{
			label.x = label.x + (img.width - label.width)/2;
			label.y = label.y +  (img.height - label.height)/2;
		}
		
		
		
	}
	public static addFText(parentNode: any, txt: string, x: number, y: number, scale: number): egret.BitmapText {
		let _bitmapText: egret.BitmapText = new egret.BitmapText();
		_bitmapText.font = RES.getRes("Onet_fnt");
		_bitmapText.x = x;
		_bitmapText.y = y;
		_bitmapText.text = txt;
		_bitmapText.scaleX = scale;
		_bitmapText.scaleY = scale;
		parentNode.addChild(_bitmapText);
		return _bitmapText;
	}
	//增加图片
	public static addPic(parentNode: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false): any {
		let image = new egret.Bitmap;
		image.texture = RES.getRes(path);
		parentNode.addChild(image);
		image.x = x;
		image.y = y;
		if (anchorCenterFlag) {
			image.anchorOffsetX = image.width / 2;
			image.anchorOffsetY = image.height / 2;
		}
		return image;
	}

	public static addClickAction(node: any, bb: any, listenerTouch: Function) {
		let scaleX = bb.scaleX;
		let scaleY = bb.scaleY;
		bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			bb.scaleX = scaleX * 1;
			bb.scaleX = scaleY * 1;
		}, node);

		bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			bb.scaleX = scaleX;
			bb.scaleY = scaleY;
			listenerTouch.apply(0);
		}, node);
		bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			bb.scaleX = scaleX;
			bb.scaleY = scaleY;
			listenerTouch.apply(0);
		}, node);
		bb.$setTouchEnabled(true);
	}
	//增加文本
	public static addText(node: any, desc: any, x: number, y: number, anchorCenterFlag: boolean = false): any {
		let label: egret.TextField = new egret.TextField();
		label.text = desc;
		label.textColor = 0x000000;
		node.addChild(label);
		label.x = x;
		label.y = y;
		if (anchorCenterFlag) {
			label.anchorOffsetX = label.width / 2;
			label.anchorOffsetY = label.height / 2;
		}
		return label;
	}

	public static removeSelf(node: any) {
		node.parent.removeChild(node);
	}

}