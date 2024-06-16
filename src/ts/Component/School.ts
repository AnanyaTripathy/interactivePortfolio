import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { GAME_FONT_CONFIGURATION, GAME_FONT_CONFIGURATION2, NOTE_TEXT } from "../constants/game-constant";

export class School extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private schoolContainer!: Phaser.GameObjects.Container;
    private schoolImg!: Phaser.GameObjects.Image;
    private schoolLogo!: Phaser.GameObjects.Image;
    baseRect !: Phaser.GameObjects.Rectangle;
    schoolNoteText !: Phaser.GameObjects.Text;
    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel,x:number,y:number) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.x = x;
        this.y = y;
        this.eventEmitters = eventEmitters;
        this.schoolContainer = new Phaser.GameObjects.Container(this.scene, 0, 0);
        this.initializeElements();
        this.schoolContainer.add([this.schoolImg,this.schoolLogo]);
        this.add(this.schoolContainer);
    }

    private initializeElements(): void {
        const { fontData } = GAME_FONT_CONFIGURATION2;
        this.schoolImg = this.scene.add.image(0, 0, 'jnv_building').setScale(1);
        this.schoolLogo = this.scene.add.image(-74, 46, 'jnv_logo').setScale(0.25);
        this.schoolNoteText = this.scene.add.text(this.x - 160, this.y + 140,
            NOTE_TEXT.JNV_NOTE,fontData).setFontSize('35px').setAlign('center').setFontFamily('Georgia').setShadow(0,2,'#000000',0.25);

        // this.baseRect = this.scene.add.rectangle(this.schoolContainer.x + 10, this.schoolContainer.y + 76,400,50,0xEd5656);
    }

    getSchoolNoteText() : Phaser.GameObjects.Text{
        return this.schoolNoteText;
    }

    getBaseRect() : Phaser.GameObjects.Rectangle{
        return this.baseRect;
    }
}