class Flash {
	public static random(param1: number) {
		let num: number = Math2.numberBetween(0, param1 - 1, true);
		return num;
	}
	public static saveItem(key: string, value: string) {
		egret.localStorage.setItem(key, value);
	}
	public static getItem(key: string) {
		var score: string = egret.localStorage.getItem(key);
		return score;
	}

	public static setImageColor(image: egret.Bitmap, R: number, G: number, B: number) {
		let result = { r: -1, g: -1, b: -1 };
		result.b = B;
		result.g = G;
		result.r = R;
		let colorMatrix = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		];
		colorMatrix[0] = result.r / 255;
		colorMatrix[6] = result.g / 255;
		colorMatrix[12] = result.b / 255;
		let colorFilter = new egret.ColorMatrixFilter(colorMatrix);

		image.filters = [colorFilter];
	}

}