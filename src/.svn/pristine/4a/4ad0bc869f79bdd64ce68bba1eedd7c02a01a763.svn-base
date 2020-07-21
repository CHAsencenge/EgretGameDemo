/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    login(): Promise<any>
    
    showBanner(): Promise<any>

    hideBanner(): Promise<any>

    startRecord(): Promise<any>

    stopRecord(): Promise<any>

    shareRecord(): Promise<any>

    playAdVideo(): Promise<any>

    returnVideoStatus(): Promise<any>

    vibrate(): Promise<any>

    getChannelName(): Promise<any>

    getChannel(): Promise<any>

    getChannelFile(): Promise<any>

    getVersion(): Promise<any>

    getShareFlag(): Promise<any>

}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }
    async login() {
         
    }

    async showBanner() {
         
    }
    async hideBanner() {
         
    }

    async startRecord() {
         
    }
    async stopRecord() {
         
    }

    async shareRecord() {
         
    }

    async vibrate() {
         
    }

    async playAdVideo() {
         
    }
    async returnVideoStatus() {
         return { testid: "001" }
    }

    async getChannelName() {
         return { testid: "001" }
    }

    async getChannel() {
         return { testid: "001" }
    }

    async getChannelFile() {
         return { testid: "001" }
    }

    async getVersion() {
         return { testid: "001" }
    }

    async getShareFlag() {
         return { testid: "001" }
    }
    
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





