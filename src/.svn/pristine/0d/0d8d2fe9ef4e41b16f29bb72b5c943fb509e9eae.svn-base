
class GameData {
    public static DEBUG: boolean = false;
    public static GAME_FIRST_FLAG = "qiuqiu_9"
    public static _gLevel: number = 1;
    public static _gGold: number = 0;
    public static _gIsVibrate: number = 1;
    public static _gSeleBall: number = 1;
    public static _gGiftRate: number = 0;
    public static _gMallBalls: Array<number> = [1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0];
    public static _gRefreshGoldFlag: boolean = false;
    public static initData() {
        if (GameData.isFirstEntry()) {
            GameData.saveData();
        }
        GameData.readData();
    }

    public static saveData() {
        GameData.saveItem("_gLevel", GameData._gLevel);
        GameData.saveItem("_gGold", GameData._gGold);
        GameData.saveItem("_gIsVibrate", GameData._gIsVibrate);
        GameData.saveItem("_gSeleBall", GameData._gSeleBall);
        GameData.saveItem("_gGiftRate", GameData._gGiftRate);
        for (let i = 0; i < 12; i++) {
            let str: string = "_gMallBalls" + i;
            GameData.saveItem(str, GameData._gMallBalls[i]);
        }
        //
    }
    public static readData() {
        GameData._gLevel = GameData.getItem("_gLevel");
        GameData._gGold = GameData.getItem("_gGold");
        GameData._gIsVibrate = GameData.getItem("_gIsVibrate");
        GameData._gSeleBall = GameData.getItem("_gSeleBall");
        GameData._gGiftRate = GameData.getItem("_gGiftRate");
        for (let i = 0; i < 12; i++) {
            let str: string = "_gMallBalls" + i;
            GameData._gMallBalls[i] = GameData.getItem(str);
        }
    }
    //关卡掉落金币
    public static getDropGold(): number {
        return Flash.random(8) + 10;
    }
    //关卡掉落百分比
    public static getDropRate(): number {
        return Flash.random(8) + 10;
    }
    //宝箱到达100后掉落的金币
    public static getDropBoxGold(): number {
        return Flash.random(200) + 500;
    }
    //完成
    public static finishLevel() {
        
    }

    public static unlockBall(pos:number){
        GameData._gMallBalls[pos] = 1;
		for (let i = 0; i < 12; i++) {
            let str: string = "_gMallBalls" + i;
            GameData.saveItem(str, GameData._gMallBalls[i]);
        }
    }

    public static addGiftRate(pNum: number) {
        GameData._gGiftRate = GameData._gGiftRate + pNum;
        if (GameData._gGiftRate > 100) {
            GameData._gGiftRate = 0;
        }
        GameData.saveItem("_gGiftRate", GameData._gGiftRate);
    }
    public static selectBall(pNum: number) {
        GameData._gSeleBall = pNum;
		GameData.saveItem("_gSeleBall", GameData._gSeleBall);
    }
    public static addGold(pNum: number) {
        GameData._gGold = GameData._gGold + pNum;
        GameData._gRefreshGoldFlag = true;
        GameData.saveItem("_gGold", GameData._gGold);
    }
    public static cutGold(pNum: number) {
        GameData._gGold = GameData._gGold - pNum;
        if (GameData._gGold < 0) {
            GameData._gGold = 0;
        }
        GameData._gRefreshGoldFlag = true;
        GameData.saveItem("_gGold", GameData._gGold);
    }
    //
    public static saveItem(key: string, value: number) {
        egret.localStorage.setItem(key, value.toString());
    }
    public static getItem(key: string): number {
        var score: string = egret.localStorage.getItem(key);
        return Number(score);
    }
    public static isFirstEntry(): boolean {
        let firstFlag: string = GameData.GAME_FIRST_FLAG;
        var score: string = egret.localStorage.getItem(firstFlag);
        GameData.saveItem(firstFlag, 1);
        let first: number = Number(score);
        if (first == 0)
            return true;
        else
            return false;
    }
}

