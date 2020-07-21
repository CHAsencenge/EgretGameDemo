var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var KeySystem = (function () {
    //
    function KeySystem() {
        this.isListening = false;
    }
    Object.defineProperty(KeySystem, "instance", {
        get: function () {
            if (KeySystem._instance == null) {
                KeySystem._instance = new KeySystem();
            }
            return KeySystem._instance;
        },
        enumerable: true,
        configurable: true
    });
    KeySystem.prototype.add = function () {
        if (this.isListening == false) {
            this.isListening = true;
            document.addEventListener("keydown", KeySystem.instance.onKeyDown);
            document.addEventListener("keyup", KeySystem.instance.onKeyUp);
        }
    };
    KeySystem.prototype.onKeyDown = function (event) {
        //console.log("evt.keyCode:" + event.keyCode);
        if (event.keyCode == 32) {
            KeySystem.keyPressedSpace = true;
        }
        if (event.keyCode == 38) {
            KeySystem.keyPressedUp = true;
        }
        if (event.keyCode == 37) {
            KeySystem.keyPressedLeft = true;
        }
        if (event.keyCode == 40) {
            KeySystem.keyPressedDown = true;
        }
        if (event.keyCode == 39) {
            KeySystem.keyPressedRight = true;
        }
        if (event.keyCode == 87) {
            KeySystem.keyPressedW = true;
        }
        if (event.keyCode == 65) {
            KeySystem.keyPressedA = true;
        }
        if (event.keyCode == 83) {
            KeySystem.keyPressedS = true;
        }
        if (event.keyCode == 68) {
            KeySystem.keyPressedD = true;
        }
    };
    KeySystem.prototype.onKeyUp = function (event) {
        //console.log("evt.keyCode:" + event.keyCode);
        if (event.keyCode == 32) {
            KeySystem.keyPressedSpace = false;
        }
        if (event.keyCode == 38) {
            KeySystem.keyPressedUp = false;
        }
        if (event.keyCode == 37) {
            KeySystem.keyPressedLeft = false;
        }
        if (event.keyCode == 34) {
            KeySystem.keyPressedDown = false;
        }
        if (event.keyCode == 39) {
            KeySystem.keyPressedRight = false;
        }
        if (event.keyCode == 87) {
            KeySystem.keyPressedW = false;
        }
        if (event.keyCode == 65) {
            KeySystem.keyPressedA = false;
        }
        if (event.keyCode == 83) {
            KeySystem.keyPressedS = false;
        }
        if (event.keyCode == 68) {
            KeySystem.keyPressedD = false;
        }
    };
    KeySystem.prototype.addListener = function () {
        KeySystem._instance.add();
    };
    KeySystem.prototype.checkCount = function () {
        document.removeEventListener("keydown", KeySystem.instance.onKeyDown);
        document.removeEventListener("keyup", KeySystem.instance.onKeyUp);
        this.isListening = false;
    };
    /**
     * 移出监听
     */
    KeySystem.prototype.removeListener = function () {
        this.checkCount();
    };
    KeySystem.keyPressedUp = false;
    KeySystem.keyPressedW = false;
    KeySystem.keyPressedDown = false;
    KeySystem.keyPressedS = false;
    KeySystem.keyPressedSpace = false;
    KeySystem.keyPressedLeft = false;
    KeySystem.keyPressedA = false;
    KeySystem.keyPressedRight = false;
    KeySystem.keyPressedD = false;
    KeySystem.initialized = false;
    return KeySystem;
}());
__reflect(KeySystem.prototype, "KeySystem");
//# sourceMappingURL=KeySystem.js.map