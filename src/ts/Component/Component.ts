import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { GAME_FONT_CONFIGURATION, GAME_FONT_CONFIGURATION2, NOTE_TEXT } from "../constants/game-constant";
import { Cave } from "./Cave";
import { College } from "./College";
import { ComponentBase } from "./ComponentBase";
import { School } from "./School";

export class Component extends Phaser.GameObjects.Container {
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
        // this.component.x = -800;
        this.ComponentBase = new ComponentBase(this.scene, this.eventEmitters, this.model);
        this.jnvSchool = new School(this.scene, this.eventEmitters, this.model,1700,800);
        // this.abitCollege = new College(this.scene, this.eventEmitters, this.model);
        // this.cave = new Cave(this.scene, this.eventEmitters, this.model);
        // this.abitCollege.setPosition(500,0);
        // this.cave.setPosition(800,-200);
        this.initialiseImage();
        // this.jnvRectBase = this.jnvSchool.getBaseRect();
        this.jnvReactText = this.jnvSchool.getSchoolNoteText();

        // this.clgRectBase = this.abitCollege.getBaseRect();
        // this.collegeReactangelText = this.abitCollege.getSchoolNoteText();

        // this.component.add([this.earthImage,this.notePad,this.bornNoteText,this.schoolBuilding,this.saraswati_maa,this.school_logo,this.controller,this.books,
        //     this.dav_school,this.jnvSchool,this.abitCollege,this.cave,this.ComponentBase,this.schoolBaseRect,this.firstSchoolNoteText,this.davBaseRect,this.davSchoolNoteText,
        //     this.jnvRectBase, this.jnvReactText,this.clgRectBase,this.collegeReactangelText]);

        this.component.add([this.earthImage,this.saraswati_maa,this.jnvSchool,this.ComponentBase,this.dav_school,this.schoolPlatform,this.schoolBuilding,
            this.firstSchoolNoteText,this.school_logo,this.davSchoolNoteText,this.jnvReactText]);

        // this.component.add([this.ComponentBase]);
        this.scene.children.add(this.component);
        // this.pole this.firstSchoolNote ,this.firstSchoolNoteText
    }

    private initialiseImage() :void{
        const { fontData } = GAME_FONT_CONFIGURATION2;
        this.earthImage = this.scene.add.image(500,830,'earthImogi').setScale(1);
        this.notePad = this.scene.add.image(345,630,'notePad').setScale(0.1).setAngle(-15);
        this.bornNoteText = this.scene.add.text(this.notePad.x - 70, this.notePad.y - 25,NOTE_TEXT.BORN_TEXT,fontData).setFontSize('28px').setAngle(-15);
        this.schoolBuilding = this.scene.add.image(1000,800,'schoolBuilding').setScale(1);
        this.school_logo = this.scene.add.image(this.schoolBuilding.x ,this.schoolBuilding.y, 'school_logo').setScale(0.35).setAngle(0);
        this.saraswati_maa = this.scene.add.image(1000,600,'saraswati_maa').setScale(0.3);
        // this.schoolBaseRect = this.scene.add.rectangle(this.schoolBuilding.x -7, this.schoolBuilding.y + 110,400,50,0x91deb6);
        this.firstSchoolNoteText = this.scene.add.text(this.schoolBuilding.x - 160, this.schoolBuilding.y + 140,
                         NOTE_TEXT.FIRST_SCHOL_NOTE,fontData).setFontSize('35px').setAlign('center').setFontFamily('Georgia').setShadow(0,2,'#000000',0.25);
        // this.books = this.scene.add.image(this.schoolBuilding.x + 200, this.schoolBuilding.y,'books').setScale(0.05);
        this.dav_school = this.scene.add.image(1380,800,'dav_school').setScale(1).setAngle(-4);
        this.schoolPlatform = this.scene.add.image(1380,810,'schoolPlatform').setScale(1);
        // this.schoolPlatformBG = this.scene.add.image(1560,780,'schoolPlatformBG').setScale(1);

        // this.booksY = this.books.y;
        // this.scene.tweens.add({
        //     targets: this.books,
        //     y: this.books.y + 50, // Start at ball.y
        //     duration: 10000, // Duration of the tween (in milliseconds)
        //     yoyo: true, // Yoyo makes the tween loop back and forth
        //     repeat: -1, // -1 means infinite looping
        //     ease: 'Linear', // Linear easing for constant speed
        // });

        // this.controller = this.scene.add.image(this.schoolBuilding.x - 200, this.schoolBuilding.y,'controller').setScale(0.125);
        // this.scene.tweens.add({
        //     targets: this.controller,
        //     y: this.controller.y + 50, // Start at ball.y
        //     duration: 10000, // Duration of the tween (in milliseconds)
        //     yoyo: true, // Yoyo makes the tween loop back and forth
        //     repeat: -1, // -1 means infinite looping
        //     ease: 'Linear', // Linear easing for constant speed
        // });

        this.davSchoolNoteText = this.scene.add.text(this.dav_school.x - 195, this.dav_school.y + 140,
            NOTE_TEXT.DAV_NOTE,fontData).setFontSize('35px').setAlign('center').setFontFamily('Georgia').setShadow(0,2,'#000000',0.25);

        // this.davBaseRect = this.scene.add.rectangle(this.dav_school.x + 10, this.dav_school.y + 140,400,50,0xEd5656);

      

        // this.notePad = this.scene.add.image(345,630,'notePad').setScale(0.1).setAngle(-15);
    }

    override update(): void {
        // console.log('booksY'+this.books.y);
        // if(this.books){
        //     this.books.y -= 1
        //     if(this.books.y < (this.booksY - 50)){
        //         this.books.y += 1
        //     }else if(this.books.y > (this.booksY + 50)){
        //         this.books.y -= 1
        //     }
        // }
        
    }
}