import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { GAME_FONT_CONFIGURATION, GAME_FONT_CONFIGURATION2, NOTE_TEXT } from "../constants/game-constant";
import { Cave } from "./Cave";
import { College } from "./College";
import { ComponentBase } from "./ComponentBase";
import { School } from "./School";

export class ComponentScene2 extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private earthImage !: Phaser.GameObjects.Image;
    private component !: Phaser.GameObjects.Container;
    private notePad !: Phaser.GameObjects.Image;
    private firstSchoolNote !: Phaser.GameObjects.Image;
    private firstSchoolNoteText !: Phaser.GameObjects.Text;
    private bornNoteText !: Phaser.GameObjects.Text;
    private schoolBuilding !: Phaser.GameObjects.Image;
    private schoolVan !: Phaser.GameObjects.Image;
    private pole !: Phaser.GameObjects.Image;
    private books !: Phaser.GameObjects.Image;
    private booksY : number;
    private controller !: Phaser.GameObjects.Image;
    private school_logo !: Phaser.GameObjects.Image;
    private saraswati_maa!: Phaser.GameObjects.Image;
    private schoolBaseRect !: Phaser.GameObjects.Rectangle;
    private davBaseRect !: Phaser.GameObjects.Rectangle;
    private davSchoolNoteText !: Phaser.GameObjects.Text;
    private dav_school !: Phaser.GameObjects.Image;
    private schoolPlatform !: Phaser.GameObjects.Image;
    private schoolPlatformBG !: Phaser.GameObjects.Image;
    private ComponentBase !: ComponentBase;
    private jnvSchool !: School;
    private abitCollege !: College;

   private jnvRectBase !: Phaser.GameObjects.Rectangle;
   private jnvReactText !: Phaser.GameObjects.Text;

   private clgRectBase !: Phaser.GameObjects.Rectangle;
   private collegeReactangelText !: Phaser.GameObjects.Text;
   private cave !: Cave;

    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        this.component = new Phaser.GameObjects.Container(this.scene);
        // this.component.x = 720;
        this.ComponentBase = new ComponentBase(this.scene, this.eventEmitters, this.model);
        // this.abitCollege = new College(this.scene, this.eventEmitters, this.model);
        // this.cave = new Cave(this.scene, this.eventEmitters, this.model);
        // this.abitCollege.setPosition(500,0);
        // this.cave.setPosition(800,-200);
        this.initialiseImage();
        // this.jnvRectBase = this.jnvSchool.getBaseRect();

        // this.clgRectBase = this.abitCollege.getBaseRect();
        // this.collegeReactangelText = this.abitCollege.getSchoolNoteText();

        // this.component.add([this.earthImage,this.notePad,this.bornNoteText,this.schoolBuilding,this.saraswati_maa,this.school_logo,this.controller,this.books,
        //     this.dav_school,this.jnvSchool,this.abitCollege,this.cave,this.ComponentBase,this.schoolBaseRect,this.firstSchoolNoteText,this.davBaseRect,this.davSchoolNoteText,
        //     this.jnvRectBase, this.jnvReactText,this.clgRectBase,this.collegeReactangelText]);

        // this.component.add([this.earthImage,this.saraswati_maa,this.jnvSchool,this.ComponentBase,this.dav_school,this.schoolPlatform,this.schoolBuilding,
        //     this.firstSchoolNoteText,this.school_logo,this.davSchoolNoteText,this.jnvReactText]);

        this.component.add([this.ComponentBase]);
        this.scene.children.add(this.component);
        // this.pole this.firstSchoolNote ,this.firstSchoolNoteText
    }

    private initialiseImage() :void{
        const { fontData } = GAME_FONT_CONFIGURATION2;
        // this.notePad = this.scene.add.image(345,630,'notePad').setScale(0.1).setAngle(-15);
    }

    override update(): void {
    }
}