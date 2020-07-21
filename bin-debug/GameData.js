var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.initData = function () {
        if (GameData.isFirstEntry()) {
            GameData.saveData();
        }
        GameData.readData();
    };
    GameData.saveData = function () {
        GameData.saveItem("_gLevel", GameData._gLevel);
        GameData.saveItem("_gGold", GameData._gGold);
        GameData.saveItem("_gIsVibrate", GameData._gIsVibrate);
        GameData.saveItem("_gSeleBall", GameData._gSeleBall);
        GameData.saveItem("_gGiftRate", GameData._gGiftRate);
        for (var i = 0; i < 12; i++) {
            var str = "_gMallBalls" + i;
            GameData.saveItem(str, GameData._gMallBalls[i]);
        }
        //
    };
    GameData.readData = function () {
        GameData._gLevel = GameData.getItem("_gLevel");
        GameData._gGold = GameData.getItem("_gGold");
        GameData._gIsVibrate = GameData.getItem("_gIsVibrate");
        GameData._gSeleBall = GameData.getItem("_gSeleBall");
        GameData._gGiftRate = GameData.getItem("_gGiftRate");
        for (var i = 0; i < 12; i++) {
            var str = "_gMallBalls" + i;
            GameData._gMallBalls[i] = GameData.getItem(str);
        }
    };
    //关卡掉落金币
    GameData.getDropGold = function () {
        return Flash.random(8) + 10;
    };
    //关卡掉落百分比
    GameData.getDropRate = function () {
        return Flash.random(8) + 10;
    };
    //宝箱到达100后掉落的金币
    GameData.getDropBoxGold = function () {
        return Flash.random(200) + 500;
    };
    //完成
    GameData.finishLevel = function () {
    };
    GameData.unlockBall = function (pos) {
        GameData._gMallBalls[pos] = 1;
        for (var i = 0; i < 12; i++) {
            var str = "_gMallBalls" + i;
            GameData.saveItem(str, GameData._gMallBalls[i]);
        }
    };
    GameData.addGiftRate = function (pNum) {
        GameData._gGiftRate = GameData._gGiftRate + pNum;
        if (GameData._gGiftRate > 100) {
            GameData._gGiftRate = 0;
        }
        GameData.saveItem("_gGiftRate", GameData._gGiftRate);
    };
    GameData.selectBall = function (pNum) {
        GameData._gSeleBall = pNum;
        GameData.saveItem("_gSeleBall", GameData._gSeleBall);
    };
    GameData.addGold = function (pNum) {
        GameData._gGold = GameData._gGold + pNum;
        GameData._gRefreshGoldFlag = true;
        GameData.saveItem("_gGold", GameData._gGold);
    };
    GameData.cutGold = function (pNum) {
        GameData._gGold = GameData._gGold - pNum;
        if (GameData._gGold < 0) {
            GameData._gGold = 0;
        }
        GameData._gRefreshGoldFlag = true;
        GameData.saveItem("_gGold", GameData._gGold);
    };
    //
    GameData.saveItem = function (key, value) {
        egret.localStorage.setItem(key, value.toString());
    };
    GameData.getItem = function (key) {
        var score = egret.localStorage.getItem(key);
        return Number(score);
    };
    GameData.isFirstEntry = function () {
        var firstFlag = GameData.GAME_FIRST_FLAG;
        var score = egret.localStorage.getItem(firstFlag);
        GameData.saveItem(firstFlag, 1);
        var first = Number(score);
        if (first == 0)
            return true;
        else
            return false;
    };
    GameData.DEBUG = false;
    GameData.GAME_FIRST_FLAG = "qiuqiu_9";
    GameData._gLevel = 1;
    GameData._gGold = 0;
    GameData._gIsVibrate = 1;
    GameData._gSeleBall = 1;
    GameData._gGiftRate = 0;
    GameData._gMallBalls = [1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0];
    GameData._gRefreshGoldFlag = false;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map