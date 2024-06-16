import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";

export class ComponentBase extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private componentBase!: Phaser.GameObjects.Container;
    private componetBaseImg!: Phaser.GameObjects.Image;
    private componetBaseImg2!: Phaser.GameObjects.Image;
    private componetBaseImg3!: Phaser.GameObjects.Image;
    private componetBaseImg4!: Phaser.GameObjects.Image;
    private componetBaseImg5!: Phaser.GameObjects.Image;
    private componetBaseImg6!: Phaser.GameObjects.Image;

    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        this.componentBase = new Phaser.GameObjects.Container(this.scene, 0, 0);
        this.initializeElements();
        this.componentBase.add([this.componetBaseImg, this.componetBaseImg2, this.componetBaseImg3]);
        this.add(this.componentBase);
    }

    private initializeElements(): void {
        this.componetBaseImg = this.scene.add.image(0, 0, 'platform').setScale(1, 1);
        this.componetBaseImg.setPosition(this.componetBaseImg.width / 2 + 10, this.componetBaseImg.height / 2 + 840);
        this.componetBaseImg2 = this.scene.add.image(0, 0, 'platform').setScale(-1, 1);
        this.componetBaseImg2.setPosition(this.componetBaseImg.x + this.componetBaseImg2.width, this.componetBaseImg.y);
        this.componetBaseImg3 = this.scene.add.image(this.componetBaseImg2.x + this.componetBaseImg2.width, this.componetBaseImg.y, 'platform').setScale(1, 1);
    }
}