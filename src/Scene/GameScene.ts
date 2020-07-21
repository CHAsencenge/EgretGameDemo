
class GameScene extends Scene {
	public _level: number;
	public static instance : GameScene;
	//pLevel需要进入的关数
	public constructor(pLevel: number=1) {
		super();
		this._level = pLevel;
	}
	//
	protected onEnter() {
		GameScene.instance = this;
		UI.addPic(this, "bg_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
		
		// UI.addBtn(this, "slide_jpg", 100, 100, true, function(arg){
		// let tc: LayerDemo = new LayerDemo();
		// SceneManager.Instance.pushScene(tc);
		// });

		let lvl : Level4 = new Level4();
		this.addChild(lvl);

	}
	protected onExit() {
	
	}

}