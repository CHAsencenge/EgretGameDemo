var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI = (function () {
    function UI() {
    }
    /*
    image, 需要变颜色的图片
    R, G, B 颜色的定义值，例如255, 0, 0 红色
    */
    UI.setImageColor = function (image, R, G, B) {
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = R / 255;
        colorMatrix[6] = G / 255;
        colorMatrix[12] = B / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
    /*
    添加按钮，
    parentNode : 父节点
    picPath ： 图片名称
    x, y ,位置
    anchorCenterFlag: 锚点是不是居图片中心
    listener：点击监听函数
    oriScale: 图片需要进行的原始缩放值
    */
    UI.addBtn = function (parentNode, picPath, x, y, anchorCenterFlag, listener, oriScale, label) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (oriScale === void 0) { oriScale = 1; }
        if (label === void 0) { label = null; }
        var btn = new egret.Bitmap;
        btn.texture = RES.getRes(picPath);
        parentNode.addChild(btn);
        if (anchorCenterFlag) {
            btn.anchorOffsetX = btn.width / 2;
            btn.anchorOffsetY = btn.height / 2;
        }
        btn.x = x;
        btn.y = y;
        btn.scaleX = oriScale;
        btn.scaleY = oriScale;
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            btn.scaleX = 1.05 * oriScale;
            btn.scaleY = 1.05 * oriScale;
            if (label) {
                label.scaleX = 1.05;
                label.scaleY = 1.05;
            }
        }, parentNode);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1 * oriScale;
            btn.scaleY = 1 * oriScale;
            if (label) {
                label.scaleX = 1;
                label.scaleY = 1;
            }
        }, parentNode);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1 * oriScale;
            btn.scaleY = 1 * oriScale;
            if (label) {
                label.scaleX = 1;
                label.scaleY = 1;
            }
            if (listener != null)
                listener.apply(0);
        }, parentNode);
        btn.$setTouchEnabled(true);
        return btn;
    };
    UI.addBtnTxt = function (parentNode, picPath, txt, x, y, anchorCenterFlag, listener, oriScale) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (oriScale === void 0) { oriScale = 1; }
        var label = UI.addText(parentNode, txt, x, y);
        var img = UI.addBtn(parentNode, picPath, x, y, anchorCenterFlag, listener, oriScale, label);
        var index = parentNode.getChildIndex(img);
        parentNode.setChildIndex(label, index + 1);
        if (anchorCenterFlag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
        else {
            label.x = label.x + (img.width - label.width) / 2;
            label.y = label.y + (img.height - label.height) / 2;
        }
    };
    UI.addFText = function (parentNode, txt, x, y, scale) {
        var _bitmapText = new egret.BitmapText();
        _bitmapText.font = RES.getRes("Onet_fnt");
        _bitmapText.x = x;
        _bitmapText.y = y;
        _bitmapText.text = txt;
        _bitmapText.scaleX = scale;
        _bitmapText.scaleY = scale;
        parentNode.addChild(_bitmapText);
        return _bitmapText;
    };
    //增加图片
    UI.addPic = function (parentNode, path, x, y, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        parentNode.addChild(image);
        image.x = x;
        image.y = y;
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    };
    UI.addClickAction = function (node, bb, listenerTouch) {
        var scaleX = bb.scaleX;
        var scaleY = bb.scaleY;
        bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            bb.scaleX = scaleX * 1;
            bb.scaleX = scaleY * 1;
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(0);
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(0);
        }, node);
        bb.$setTouchEnabled(true);
    };
    //增加文本
    UI.addText = function (node, desc, x, y, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var label = new egret.TextField();
        label.text = desc;
        label.textColor = 0x000000;
        node.addChild(label);
        label.x = x;
        label.y = y;
        if (anchorCenterFlag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
        return label;
    };
    UI.removeSelf = function (node) {
        node.parent.removeChild(node);
    };
    //屏幕的高和宽
    UI.WINSIZE_H = 0;
    UI.WINSIZE_W = 0;
    return UI;
}());
__reflect(UI.prototype, "UI");
//# sourceMappingURL=UI.js.map