import GameScene from "../../game";

export class ComponentImg extends Phaser.GameObjects.Image {
    override scene : GameScene;
    constructor(scene: GameScene, x: number, y: number, texture: string){
        super(scene,x,y,texture);
    }
}