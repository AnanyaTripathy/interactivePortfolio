import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { GAME_FONT_CONFIGURATION, NOTE_TEXT } from "../constants/game-constant";


export class Cave extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private caveGate !: Phaser.GameObjects.Image;
    private cave !: Phaser.GameObjects.Image;
    private mainContainer !: Phaser.GameObjects.Container;

    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        this.mainContainer = new Phaser.GameObjects.Container(this.scene, 200, 740);
        this.initializeElements();
        this.mainContainer.add([this.cave,this.caveGate]);
        // this.add(this.mainContainer);
    }

    private initializeElements(): void {
        const { fontData } = GAME_FONT_CONFIGURATION;
        this.caveGate = this.scene.add.image(0, 0, 'cave_gate').setScale(0.6);
        this.cave = this.scene.add.image(160, -50, 'cave_road').setScale(1);        
    }
}