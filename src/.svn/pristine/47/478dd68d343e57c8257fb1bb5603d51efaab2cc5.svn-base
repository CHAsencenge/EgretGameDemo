abstract class Scene extends  egret.DisplayObjectContainer implements egret.DisplayObject{
	public constructor() {
		super();
		// 监听组件创建完毕 也就是场景的外观创建完毕
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onEnter,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onExit,this);
	}
	 protected abstract onEnter();
	 protected abstract onExit();
}