 class Math2 {

    public static convertToRad(param1: number): number {
        let _loc_2 = param1 - 90;
        _loc_2 = _loc_2 * (Math.PI / 180);
        return _loc_2;
    }// end function

    public static isEven(param1: number): boolean {
        if (param1 % 2 == 0) {
            return true;
        }
        return false;
    }// end function

    public static randomArrayChoice(param1: Array<any>) {
        let _loc_2 = Math2.numberBetween(0, param1.length, true);
        return param1[_loc_2];
    }// end function

    public static randomChoice(...args) {
        return Math2.randomArrayChoice(args);
    }// end function

    public static numberBetween(param1: number, param2: number, param3: boolean = false): number {
        var _loc_4;
        if (!param3) {
            _loc_4 = param1 + Math.random() * (param2 - param1);
        }
        else {
            if (param2 >= param1) {
                _loc_4 = param1 + Math.random() * ((param2 + 1) - param1);
            }
            else {
                _loc_4 = param2 + Math.random() * ((param1 + 1) - param2);
            }
            _loc_4 = Math.floor(_loc_4);
        }
        return _loc_4;
    }// end function

    public static distanceBetween(param1: number, param2: number, param3: number, param4: number): number {
        var _loc_5 = param3 - param1;
        var _loc_6 = param4 - param2;
        var _loc_7 = Math.sqrt(Math.pow(_loc_5, 2) + Math.pow(_loc_6, 2));
        return Math.sqrt(Math.pow(_loc_5, 2) + Math.pow(_loc_6, 2));
    }// end function

    public static getInverseRatio(param1: number, param2: number): number {
        var _loc_3 = -(param1 / param2 - 1);
        if (_loc_3 < 0) {
            _loc_3 = 0;
        }
        return _loc_3;
    }// end function

    public static getRatio(param1: number, param2: number): number {
        var _loc_3 = param1 / param2;
        if (_loc_3 < 0) {
            _loc_3 = 0;
        }
        return _loc_3;
    }// end function

    public static howManyDigits(param1: number): number {
        let _loc_2 = Math.floor(param1);
        var _loc_3 = String(param1);
        return _loc_3.length;
    }// end function

    public static getZeroText(param1: number, param2: number): String {
        var _loc_3 = param1.toString();
        var _loc_4 = param2 - _loc_3.length;
        while (_loc_4 > 0) {

            _loc_3 = "0" + _loc_3;
            _loc_4 = _loc_4 - 1;
        }
        return _loc_3;
    }// end function




    public static removeFromArray(param1: Array<any>, param2: Object): boolean {
        var _loc_3 = 0;
        var _loc_4 = false;
        while (_loc_3 < param1.length) {

            if (param1[_loc_3] == param2) {
                param1.splice(_loc_3, 1);
                _loc_4 = true;
                continue;
            }
            _loc_3++;
        }
        return _loc_4;
    }// end function

    public static percentChance(param1: number): boolean {
        if (Math.random() * 100 < param1) {
            return true;
        }
        return false;
    }// end function

    public static randomPositiveNegative(param1: number): number {
        if (Math.random() > 0.5) {
            return param1;
        }
        return -param1;
    }// end function

    public static isPositive(param1: number): number {
        if (param1 >= 0) {
            return 1;
        }
        return -1;
    }// end function

    public static inverse(param1: number): number {
        return 1 / param1;
    }// end function



    public static getDirToCoordinate(param1: number, param2: number, param3: number, param4: number): number {
        var _loc_5 = param3 - param1;
        var _loc_6 = -(param4 - param2);
        var _loc_7 = Math.atan2(_loc_5, _loc_6);
        var _loc_8 = Math.atan2(_loc_5, _loc_6) / Math.PI * 180 + 0;
        return Math.atan2(_loc_5, _loc_6) / Math.PI * 180 + 0;
    }// end function

}
