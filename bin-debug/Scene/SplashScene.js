var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SplashScene = (function (_super) {
    __extends(SplashScene, _super);
    function SplashScene() {
        var _this = _super.call(this) || this;
        _this.secondFlag = 0;
        return _this;
    }
    SplashScene.entryNext = function () {
        if (!SplashScene.entryalready) {
            SplashScene.entryalready = true;
            //let s1:GameScene =  new GameScene(GameData._gLevel);
            var s1 = new UIScene();
            SceneManager.Instance.changeScene(s1);
        }
    };
    SplashScene.prototype.init = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //设置为 POST 请求
        if (SplashScene.channel != "android") {
            var url = "https://www.xxxx.com/tt.php?ad=0&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
            request.open(url, egret.HttpMethod.GET);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send();
            request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
            request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
        }
        //
        if (SplashScene.channel == "android") {
            egret.setTimeout(function (arg) {
                SplashScene.entryNext();
            }, this, 2500);
        }
        else {
            var x1 = 500;
            var x2_1 = 1000;
            if (GameData.DEBUG) {
                x1 = 10;
                x2_1 = 10;
            }
            egret.setTimeout(function (arg) {
                ShakeTool.getInstance().shakeObj(SplashScene.instance.logo, 0.5, 10, 10);
                egret.setTimeout(function (arg) {
                    SplashScene.entryNext();
                }, this, x2_1);
            }, this, x1);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.update2, this);
    };
    //横版1, 竖版2
    SplashScene.prototype.replaceShowBg = function () {
        UI.addPic(this, "splash2_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this.logo = UI.addPic(this, "logo_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 60, true);
        var testBtn = UI.addBtn(this, "hand2_png", 100, 100, true, function () {
            //震动目标obj，1秒内震动20次，震动最大距离20
        });
        testBtn.visible = false;
    };
    SplashScene.prototype.onEnter = function () {
        var helloData = 1111;
        SplashScene.instance = this;
        GameData.initData();
        this.replaceShowBg();
        egret.setTimeout(function (arg) {
            SplashScene.instance.init();
        }, this, 800);
    };
    SplashScene.prototype.update2 = function () {
    };
    SplashScene.showCloseBtn = function (node) {
        if (node == null)
            return;
        if (SplashScene.channel != "wx" && SplashScene.channel != "qq")
            return;
        if (SplashScene.showAd == false)
            return;
        //
        SplashScene.closeBtnParent = node;
        var xx1 = UI.WINSIZE_W / 2 + 135 + 33;
        var yy1 = UI.WINSIZE_H - 100 - 10;
        if (SplashScene.channel == "wx") {
            xx1 = UI.WINSIZE_W / 2 + 135 + 33 + 30;
            yy1 = UI.WINSIZE_H - 150 + 6;
        }
        else {
            xx1 = UI.WINSIZE_W / 2 + 135 + 33;
            yy1 = UI.WINSIZE_H - 100 - 10;
        }
        SplashScene.closeBtn = UI.addBtn(node, "ad_close_png", xx1, yy1, true, function (arg) {
            platform.hideBanner();
            try {
                SplashScene.closeBtnParent.removeChild(SplashScene.closeBtn);
            }
            catch (e) {
            }
        });
    };
    SplashScene.showBanner = function (node) {
        if (SplashScene.channel == "android") {
            egret.ExternalInterface.call("showInsert", "message from js");
            return;
        }
        if (SplashScene.showAd == true) {
            SplashScene.visitAdSum(1);
            SplashScene.showBannerControl(node);
        }
    };
    SplashScene.showBannerControl = function (node) {
        if (SplashScene.channel != "tt") {
            platform.startRecord();
            SplashScene.showCloseBtn(node);
        }
        else {
            platform.showBanner();
        }
    };
    SplashScene.showBannerForce = function (node) {
        if (SplashScene.channel == "android") {
            egret.ExternalInterface.call("showInsertForce", "message from js");
            return;
        }
        SplashScene.visitAdSum(1);
        if ((SplashScene.channel != "tt")
            && SplashScene.showAd == true) {
            platform.startRecord();
            SplashScene.showCloseBtn(node);
        }
        else {
            platform.showBanner();
        }
    };
    SplashScene.hideBanner = function () {
        if (SplashScene.showAd == false)
            platform.hideBanner();
    };
    SplashScene.showVideoForce = function () {
        if (SplashScene.isVideo == true) {
            SplashScene.visitAdSum(2);
            platform.playAdVideo();
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    SplashScene.loginTT = function () {
        if (SplashScene.loginAlready == false) {
            SplashScene.loginAlready = true;
            platform.login();
            platform.getUserInfo();
        }
    };
    //
    SplashScene.addRecordBtn = function (node, paramX, paramY) {
        if (SplashScene.channel == "tt") {
        }
    };
    SplashScene.prototype.onPostComplete = function (event) {
        var request = event.currentTarget;
        console.log("post data : ", request.response);
        var content = request.response.substring(0, 50);
        SplashScene.defStr = content.substr(0, 1);
        if (content.substr(0, 1) == "2" || content.substr(0, 1) == "3" || content.substr(0, 1) == "4") {
            SplashScene.showAd = true;
        }
        if (content.substr(0, 1) == "3" || content.substr(0, 1) == "4") {
            SplashScene.isVideo = true;
        }
        if (content.substr(0, 1) == "4") {
            SplashScene.isShare = true;
        }
    };
    SplashScene.prototype.onPostIOError = function (event) {
        console.log("post error : " + event);
    };
    SplashScene.prototype.onPostProgress = function (event) {
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    SplashScene.prototype.onExit = function () {
    };
    SplashScene.addVersion = function (node) {
        var txt = UI.addText(node, SplashScene.gameChannel + ":" + SplashScene.channel + "_" + SplashScene.version + "_" + SplashScene.defStr, UI.WINSIZE_W - 100, UI.WINSIZE_H - 40);
        txt.size = 14;
    };
    SplashScene.visitAdSum = function (param) {
        var url = "https://www.yiruituo.com/tt.php?ad=" + param + "&file=" + SplashScene.gameName + "&channel=" + SplashScene.gameChannel + "&version=" + SplashScene.version;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
    };
    //
    SplashScene.clickMusicBtn = function () {
        if (SplashScene.soundflag) {
            SplashScene.soundflag = false;
            SplashScene.soundChannel.stop();
        }
        else {
            SplashScene.soundflag = true;
            var sd = new egret.Sound();
            sd.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
                SplashScene.soundChannel = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
            }, this);
            sd.load("resource/assets/sound/bgmusic.mp3");
        }
    };
    SplashScene.playMusic = function () {
        var sd = new egret.Sound();
        sd.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            SplashScene.soundChannel = sd.play(0, 0); //0, 1播放一次， 0， 0背景音乐 
        }, this);
        sd.load("resource/assets/sound/bgmusic.mp3");
    };
    SplashScene.playSound = function (name) {
        if (name === void 0) { name = "click"; }
        if (SplashScene.soundflag) {
            var sound = new egret.Sound();
            sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
                sound.play(0, 1); //播放一次， 0， 0背景音乐 
            }, this);
            sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
                console.log("loaded error!");
            }, this);
            sound.load("resource/assets/sound/" + name + ".mp3");
        }
    };
    SplashScene.shareWaitSecond = 120; //自动调起分享的时间
    SplashScene.autoTipShareFlag = true; //是不是需要自动调起分享
    //
    SplashScene.version = "0";
    SplashScene.channel = "windows"; //不同的渠道tt, qq, wx, 4399
    SplashScene.gameName = "ad_homie";
    SplashScene.gameChannel = "windows";
    SplashScene.gameShareFlag = false;
    //
    SplashScene.showAd = false;
    SplashScene.isVideo = false;
    SplashScene.isShare = false;
    SplashScene.entryalready = false;
    SplashScene.loginAlready = false;
    SplashScene.runningSeconds = 0; //运行的时间
    SplashScene.soundflag = true;
    SplashScene.defStr = "";
    return SplashScene;
}(Scene));
__reflect(SplashScene.prototype, "SplashScene");
//# sourceMappingURL=SplashScene.js.map