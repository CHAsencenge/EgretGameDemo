
class LayerDemo extends Scene {
	public static instance: LayerDemo;
	public index:number = 10;
	public constructor() {
		super();
		LayerDemo.instance = this;
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnter, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
	}
	protected onEnter() {
		UI.addPic(this, "layerbg_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
		UI.addBtn(this, "error_png", UI.WINSIZE_W/2 + 180, UI.WINSIZE_H/2-160, true, function(arg){
			SceneManager.Instance.popScene();
		}, 0.3);
	}

	protected onExit() {
		//必须要加入
	}

}