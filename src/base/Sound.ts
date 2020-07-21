class Sound {
	

	public static playSound(name: string) {
		var sound: egret.Sound = new egret.Sound();
		sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
			sound.play(0, 1);  //播放一次， 0， 0背景音乐 
		}, this);
		sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
			console.log("loaded error!");
		}, this);
		sound.load("resource/assets/sound/" + name + ".mp3");
	}
	public static playMusic(name: string) {
		var sound: egret.Sound = new egret.Sound();
		sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
			sound.play(0, 0);  //播放一次， 0， 0背景音乐 
		}, this);
		sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
			console.log("loaded error!");
		}, this);
		sound.load("resource/assets/sound/" + name + ".mp3");
	}

}