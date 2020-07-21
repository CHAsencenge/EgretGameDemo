
class KeySystem {
    public static keyPressedUp: boolean= false;
    public static keyPressedW: boolean= false;
    public static keyPressedDown: boolean= false;
    public static keyPressedS: boolean= false;
    public static keyPressedSpace: boolean= false;
    public static keyPressedLeft: boolean= false;
    public static keyPressedA: boolean= false;
    public static keyPressedRight: boolean= false;
    public static keyPressedD: boolean= false;
    private static initialized: boolean = false;
    private static _instance: KeySystem;
    private isListening: boolean = false;
    //
    public constructor() {
    }

    public static get instance(): KeySystem {
        if (KeySystem._instance == null) {
            KeySystem._instance = new KeySystem();
        }
        return KeySystem._instance;
    }

    private add(): void {
        if (this.isListening == false) {
            this.isListening = true;
            document.addEventListener("keydown", KeySystem.instance.onKeyDown);
            document.addEventListener("keyup", KeySystem.instance.onKeyUp);
        }
    }

    private onKeyDown(event: any): any {
        //console.log("evt.keyCode:" + event.keyCode);
        
            if (event.keyCode == 32)
            {
                KeySystem.keyPressedSpace = true;
            }
            if (event.keyCode == 38)
            {
                KeySystem.keyPressedUp = true;
            }
            if (event.keyCode == 37)
            {
                KeySystem.keyPressedLeft = true;
            }
            if (event.keyCode == 40)
            {
                KeySystem.keyPressedDown = true;
            }
            if (event.keyCode == 39)
            {
                KeySystem.keyPressedRight = true;
            }
            if (event.keyCode == 87)
            {
                KeySystem.keyPressedW = true;
            }
            if (event.keyCode == 65)
            {
                KeySystem.keyPressedA = true;
            }
            if (event.keyCode == 83)
            {
                KeySystem.keyPressedS = true;
            }
            if (event.keyCode == 68)
            {
                KeySystem.keyPressedD = true;
            }
    }
    private onKeyUp(event: any): any {
        //console.log("evt.keyCode:" + event.keyCode);
         if (event.keyCode == 32)
            {
                KeySystem.keyPressedSpace = false;
            }
            if (event.keyCode == 38)
            {
                KeySystem.keyPressedUp = false;
            }
            if (event.keyCode == 37)
            {
                KeySystem.keyPressedLeft = false;
            }
            if (event.keyCode == 34)
            {
                KeySystem.keyPressedDown = false;
            }
            if (event.keyCode == 39)
            {
                KeySystem.keyPressedRight = false;
            }
            if (event.keyCode == 87)
            {
                KeySystem.keyPressedW = false;
            }
            if (event.keyCode == 65)
            {
                KeySystem.keyPressedA = false;
            }
            if (event.keyCode == 83)
            {
                KeySystem.keyPressedS = false;
            }
            if (event.keyCode == 68)
            {
                KeySystem.keyPressedD = false;
            }
    }
    public addListener(): void {
        KeySystem._instance.add();
    }
 
    private checkCount(): void {
        document.removeEventListener("keydown",KeySystem.instance.onKeyDown);
        document.removeEventListener("keyup",KeySystem.instance.onKeyUp);
        this.isListening = false;
    }
    /**
     * 移出监听
     */
    public removeListener(): void {
        this.checkCount();
    }
}
