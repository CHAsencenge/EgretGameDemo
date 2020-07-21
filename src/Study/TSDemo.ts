//enum的使用要定义在class外面
enum Style {
      None =0,
      Bold =1,	//粗体
      Italic =2	//斜体 
    };

class TSDemo extends egret.DisplayObjectContainer implements egret.DisplayObject{
	public static instance: TSDemo;
	public constructor() {
		super();
		TSDemo.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onEnter,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onExit,this);
	}
	protected onEnter() {
		this.varLetDemo();
	}
	//基本数据类型
	public dataDemo(){
		let a1 :number = 1;
		let a2 :number = 1.01;
		let b1 : boolean = false;
		let c1 : string = "hello egret";
		let d1 : Array<Number> = [1, 1, 11, 1, ];
		let d2 : Array<string> = ["dfd", "dfd"];
		let d3 : Array<UIDemo> = [];
	
		//遍列数组
		console.log("d1 length = "  + d1.length);
		for (let key in d1){
			console.log(d1[key]);
		}
		for (let i = 0; i < d1.length; i ++){
			console.log(d1[i]);
		}

		//尽可能不要使用any
		//
		//Object
		let result = { r: -1, g: -1, b: -1 };
		result.b = 1 ;
		result.g = 2 ;
		result.r = 3 ;
	}
	//如无必要，不使用var
	public varLetDemo(){
		var varTest = 'test var OK.';
		let letTest = 'test let OK.';
		//
		{
			var varTest = 'varTest changed.';
			let letTest = 'letTest changed.';
		}
		console.log(varTest);
		console.log(letTest);
	}

	//定义一个struct
	public structDemo(){
		interface Husband {
			sex: string
			interest: string
			maiBaoBao?: Boolean
		}
		let myhusband: Husband = { sex: '男', interest: '看书、作家务', maiBaoBao: true }
		console.log(myhusband.sex)
	}


	protected onExit() {
		//必须要加入
	}

}