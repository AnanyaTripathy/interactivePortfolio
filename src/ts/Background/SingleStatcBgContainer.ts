import * as Phaser from 'phaser';
import GameScene from '../../game';
import { GAME_FONT_CONFIGURATION, GAME_VIEW_CONSTANT, MARKET_POSITIONS, TWEEN_EASING } from '../constants/game-constant';
import { global_events } from '../constants/events-constant';
import { ParserModel } from '../Parser/ParserModel';

export class SingleStatcBgContainer extends Phaser.GameObjects.Container {
    private background!: Phaser.GameObjects.Image;
    override scene: GameScene;
    private tween: Phaser.Tweens.Tween | null = null;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private bgContainer !:Phaser.GameObjects.Container;
    private staticBg !: Phaser.GameObjects.Image;
    private width_ : any = undefined;
    private height_ : any = undefined;
    private bgKey : string = "";
    // private cloud_loop_tween !: Phaser.GameObjects.Tw





    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel,bgKey:string) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        this.bgKey = bgKey;
        this.width_ = this.scene.scale.width;
        this.height_ = this.scene.scale.height;
        this.initializeBg();
        this.add([this.staticBg]);
        // this.cloudTween();
        // this.add([this.staticBg_04]);

    }

    private initializeBg() :void{
        this.staticBg = this.scene.add.image(this.width_*0.5, this.height_*0.5, this.bgKey).setName('staticBg');
    }

    

    // private cloudTween() :void{
    //      this.scene.tweens.add({
    //         targets: this.cloud,
    //         x: [2200,-200,], // Start at ball.y
    //         duration: 10000, // Duration of the tween (in milliseconds)
    //         yoyo: false, // Yoyo makes the tween loop back and forth
    //         repeat: -1, // -1 means infinite looping
    //         ease: 'Linear', // Linear easing for constant speed
    //     });
    // }

}