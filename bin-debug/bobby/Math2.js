var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Math2 = (function () {
    function Math2() {
    }
    Math2.convertToRad = function (param1) {
        var _loc_2 = param1 - 90;
        _loc_2 = _loc_2 * (Math.PI / 180);
        return _loc_2;
    }; // end function
    Math2.isEven = function (param1) {
        if (param1 % 2 == 0) {
            return true;
        }
        return false;
    }; // end function
    Math2.randomArrayChoice = function (param1) {
        var _loc_2 = Math2.numberBetween(0, param1.length, true);
        return param1[_loc_2];
    }; // end function
    Math2.randomChoice = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Math2.randomArrayChoice(args);
    }; // end function
    Math2.numberBetween = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = false; }
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
    }; // end function
    Math2.distanceBetween = function (param1, param2, param3, param4) {
        var _loc_5 = param3 - param1;
        var _loc_6 = param4 - param2;
        var _loc_7 = Math.sqrt(Math.pow(_loc_5, 2) + Math.pow(_loc_6, 2));
        return Math.sqrt(Math.pow(_loc_5, 2) + Math.pow(_loc_6, 2));
    }; // end function
    Math2.getInverseRatio = function (param1, param2) {
        var _loc_3 = -(param1 / param2 - 1);
        if (_loc_3 < 0) {
            _loc_3 = 0;
        }
        return _loc_3;
    }; // end function
    Math2.getRatio = function (param1, param2) {
        var _loc_3 = param1 / param2;
        if (_loc_3 < 0) {
            _loc_3 = 0;
        }
        return _loc_3;
    }; // end function
    Math2.howManyDigits = function (param1) {
        var _loc_2 = Math.floor(param1);
        var _loc_3 = String(param1);
        return _loc_3.length;
    }; // end function
    Math2.getZeroText = function (param1, param2) {
        var _loc_3 = param1.toString();
        var _loc_4 = param2 - _loc_3.length;
        while (_loc_4 > 0) {
            _loc_3 = "0" + _loc_3;
            _loc_4 = _loc_4 - 1;
        }
        return _loc_3;
    }; // end function
    Math2.removeFromArray = function (param1, param2) {
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
    }; // end function
    Math2.percentChance = function (param1) {
        if (Math.random() * 100 < param1) {
            return true;
        }
        return false;
    }; // end function
    Math2.randomPositiveNegative = function (param1) {
        if (Math.random() > 0.5) {
            return param1;
        }
        return -param1;
    }; // end function
    Math2.isPositive = function (param1) {
        if (param1 >= 0) {
            return 1;
        }
        return -1;
    }; // end function
    Math2.inverse = function (param1) {
        return 1 / param1;
    }; // end function
    Math2.getDirToCoordinate = function (param1, param2, param3, param4) {
        var _loc_5 = param3 - param1;
        var _loc_6 = -(param4 - param2);
        var _loc_7 = Math.atan2(_loc_5, _loc_6);
        var _loc_8 = Math.atan2(_loc_5, _loc_6) / Math.PI * 180 + 0;
        return Math.atan2(_loc_5, _loc_6) / Math.PI * 180 + 0;
    }; // end function
    return Math2;
}());
__reflect(Math2.prototype, "Math2");
//# sourceMappingURL=Math2.js.map