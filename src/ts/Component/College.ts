import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { GAME_FONT_CONFIGURATION, NOTE_TEXT } from "../constants/game-constant";

export class College extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private mainContainer!: Phaser.GameObjects.Container;
    private img!: Phaser.GameObjects.Image;
    private logo!: Phaser.GameObjects.Image;
    baseRect !: Phaser.GameObjects.Rectangle;
    schoolNoteText !: Phaser.GameObjects.Text;
    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        this.mainContainer = new Phaser.GameObjects.Container(this.scene, 200, 740);
        this.initializeElements();
        this.mainContainer.add([this.img,this.logo]);
        // this.add(this.mainContainer);
    }

    private initializeElements(): void {
        const { fontData } = GAME_FONT_CONFIGURATION;
        this.img = this.scene.add.image(0, 0, 'college_pic').setScale(0.35);
        this.logo = this.scene.add.image(130, -160, 'college_logo').setScale(0.3);
        this.schoolNoteText = this.scene.add.text(this.mainContainer.x - 150, this.mainContainer.y + 57,
            NOTE_TEXT.JNV_NOTE,fontData).setFontSize('35px').setAlign('center').setColor('#ffffff');

        this.baseRect = this.scene.add.rectangle(this.mainContainer.x + 10, this.mainContainer.y + 76,400,50,0xEd5656);
    }

    getSchoolNoteText() : Phaser.GameObjects.Text{
        return this.schoolNoteText;
    }

    getBaseRect() : Phaser.GameObjects.Rectangle{
        return this.baseRect;
    }
}