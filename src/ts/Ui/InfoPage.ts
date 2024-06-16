import * as Phaser from 'phaser';
import GameScene from "../../game";

export class InfoPage extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private emitter: Phaser.Events.EventEmitter;
    private infoBg: Phaser.GameObjects.Image;
    private alphaTween:Phaser.Tweens.Tween;
    constructor(scene: GameScene, emitter: Phaser.Events.EventEmitter) {
        super(scene,0,0);
        this.scene = scene;
        this.emitter = emitter;
    }

    private intitializeElements(): void {
        
    }


    private addButtonListner() :void{
      
    }

    private subscribeEvent() :void{
    }

    private showView() :void{
       
    }

    private onHideInfoView() :void{
        
    }
}