var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sound = (function () {
    function Sound() {
    }
    Sound.playSound = function (name) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/assets/sound/" + name + ".mp3");
    };
    Sound.playMusic = function (name) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 0); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/assets/sound/" + name + ".mp3");
    };
    return Sound;
}());
__reflect(Sound.prototype, "Sound");
//# sourceMappingURL=Sound.js.map