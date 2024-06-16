export class Platform extends Phaser.GameObjects.Rectangle {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 200, 50, 0xff0000); // Create a red platform
        scene.add.existing(this);
    }
}