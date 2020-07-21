class SplashScene extends Scene {
	public static shareWaitSecond : number = 120;			//自动调起分享的时间
	public static autoTipShareFlag : boolean = true;		//是不是需要自动调起分享
	//
	public static version:string = "0";
	public static channel:string="windows";//不同的渠道tt, qq, wx, 4399
	public static gameName:string="ad_homie";
	public static gameChannel:string="windows";
	public static gameShareFlag:boolean = false;
	//
	public static showAd: boolean = false;
	public static isVideo: boolean = false;
	public static isShare : boolean = false;
	public static entryalready:boolean = false;
	public static loginAlready: boolean = false;
	public secondFlag : number = 0;
	public static runningSeconds = 0;	//运行的时间
	public static instance: SplashScene;
	public static soundflag : boolean = true;
	public static  soundChannel:egret.SoundChannel;
	public static defStr : string  = "";
	public logo: egret.Bitmap;

	public constructor() {
		super();
	}
	public static entryNext()
	{
		if (!SplashScene.entryalready)
		{
			SplashScene.entryalready = true;
			//let s1:GameScene =  new GameScene(GameData._gLevel);
			let s1:UIScene =  new UIScene();
        	SceneManager.Instance.changeScene(s1);
		}
	}

	
	public init()
	{
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		//设置为 POST 请求
		if (SplashScene.channel != "android") {
			let url: string = "https://www.xxxx.com/tt.php?ad=0&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
			request.open(url, egret.HttpMethod.GET);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send();
			request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
			request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
			request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
		}
		//
		if (SplashScene.channel == "android")
		{
			egret.setTimeout(function (arg) {
					SplashScene.entryNext();
			}, this, 2500);
		}else
		{
			let x1 = 500;
			let x2 = 1000;
			if (GameData.DEBUG){
				x1 = 10;
				x2 = 10;
			}
			egret.setTimeout(function (arg) {
				ShakeTool.getInstance().shakeObj(SplashScene.instance.logo, 0.5, 10, 10);
				egret.setTimeout(function (arg) {
					SplashScene.entryNext();
				}, this, x2);
			}, this, x1);
		}

		this.addEventListener(egret.Event.ENTER_FRAME,this.update2,this);
	}
	//横版1, 竖版2
	public replaceShowBg()
	{
		UI.addPic(this, "splash2_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		this.logo = UI.addPic(this, "logo_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2-60, true);
		
		let testBtn = UI.addBtn(this, "hand2_png", 100, 100, true, function()
		{
			 //震动目标obj，1秒内震动20次，震动最大距离20
			 
		});
		testBtn.visible = false;
	}
	protected onEnter() {
		var helloData : number = 1111;
		SplashScene.instance = this;
		GameData.initData();
		this.replaceShowBg();
		egret.setTimeout(function (arg) {
			SplashScene.instance.init();
		}, this, 800);

	}
	
	private update2()
	{
		

	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////

	public static closeBtn : any;
	public static closeBtnParent : any;
	public static showCloseBtn(node:any)
	{	
		if (node == null)
			return;
		if (SplashScene.channel != "wx" && SplashScene.channel != "qq")
			return;
		
		if (SplashScene.showAd == false)
			return;
		//
		SplashScene.closeBtnParent = node;
		let xx1 = UI.WINSIZE_W/2+135+33;
		let yy1 =  UI.WINSIZE_H-100-10;
		if (SplashScene.channel == "wx") {
			xx1 = UI.WINSIZE_W / 2 + 135 + 33 + 30;
			yy1 = UI.WINSIZE_H - 150+6;
		}else 
		{
			xx1 = UI.WINSIZE_W/2+135+33;
			yy1 = UI.WINSIZE_H-100-10;
		}
		SplashScene.closeBtn = UI.addBtn(node, "ad_close_png", xx1, yy1, true, function(arg)
		{
			platform.hideBanner();

			try {
				SplashScene.closeBtnParent.removeChild(SplashScene.closeBtn);
			}
       		catch (e) {
            	
        	}
		});
	}

	public static showBanner(node:any) {
		if (SplashScene.channel == "android")
		{
			egret.ExternalInterface.call("showInsert", "message from js");
			return;
		}
		if (SplashScene.showAd== true)
		{
			SplashScene.visitAdSum(1);
			SplashScene.showBannerControl(node);
		}
	}
	public static showBannerControl(node:any)
	{
		if (SplashScene.channel != "tt")
		{
			platform.startRecord();
			SplashScene.showCloseBtn(node);
		}else
		{
			platform.showBanner();
		}
	}
	public static showBannerForce(node:any) {
		if (SplashScene.channel == "android")
		{
			egret.ExternalInterface.call("showInsertForce", "message from js");
			return;
		}
		
		SplashScene.visitAdSum(1);
		if ((SplashScene.channel != "tt")
			&& SplashScene.showAd == true)
		{
			platform.startRecord();
			SplashScene.showCloseBtn(node);
		}else
		{
			platform.showBanner();
		}
	}
	public static hideBanner() {
		if (SplashScene.showAd== false)
			platform.hideBanner();
	}

	public static showVideoForce() {
		if (SplashScene.isVideo== true)
		{
			SplashScene.visitAdSum(2);
			platform.playAdVideo();
		}
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////
	public static loginTT()
	{
		if (SplashScene.loginAlready == false)
			{
				SplashScene.loginAlready = true;
				platform.login();
				platform.getUserInfo();
			}
	}
	//
	public static addRecordBtn(node:  any, paramX:number, paramY : number) {
		if (SplashScene.channel == "tt")
		{
		
		}
	}

	private onPostComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("post data : ", request.response);
		let content = request.response.substring(0, 50);
		SplashScene.defStr = content.substr(0, 1);
		if (content.substr(0, 1) == "2" || content.substr(0, 1) == "3" || content.substr(0, 1) == "4")
		{
			SplashScene.showAd = true;
		}
		if (content.substr(0, 1) == "3" || content.substr(0, 1) == "4")
		{
			SplashScene.isVideo = true;
		}
		if (content.substr(0, 1) == "4")
		{
			SplashScene.isShare = true;
		}
	}

	private onPostIOError(event: egret.IOErrorEvent): void {
		console.log("post error : " + event);
	}

	private onPostProgress(event: egret.ProgressEvent): void {
		console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	}
	protected onExit() {
	}
	public static addVersion(node:any) {
		let txt:any = UI.addText(node, SplashScene.gameChannel+":"+SplashScene.channel+"_"+SplashScene.version+"_"+SplashScene.defStr, UI.WINSIZE_W-100, UI.WINSIZE_H-40);
		txt.size = 14;
	}

	public static visitAdSum(param:number) {
		let url:string = "https://www.yiruituo.com/tt.php?ad="+ param+ "&file="+ SplashScene.gameName+ "&channel="+ SplashScene.gameChannel+ "&version="+SplashScene.version;
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.open(url, egret.HttpMethod.GET);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send();
	}

	//
	public static clickMusicBtn()
	{
		if (SplashScene.soundflag)
		{
			SplashScene.soundflag = false;
			SplashScene.soundChannel.stop();
		}else
		{
			SplashScene.soundflag = true;
				var sd: egret.Sound = new egret.Sound();
				sd.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
					SplashScene.soundChannel = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
				}, this);
				sd.load("resource/assets/sound/bgmusic.mp3");
		}
	}
	public static playMusic()
	{
				var sd: egret.Sound = new egret.Sound();
				sd.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
					SplashScene.soundChannel = sd.play(0, 0);  //0, 1播放一次， 0， 0背景音乐 
				}, this);
				sd.load("resource/assets/sound/bgmusic.mp3");
	}
	public static playSound(name:string="click")
	{
		if (SplashScene.soundflag) {
			var sound: egret.Sound = new egret.Sound();
			sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
				sound.play(0, 1);  //播放一次， 0， 0背景音乐 
			}, this);
			sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
				console.log("loaded error!");
			}, this);
			sound.load("resource/assets/sound/" + name + ".mp3");
		}
	}
}