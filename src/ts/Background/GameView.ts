import * as Phaser from 'phaser';
import GameScene from '../../game';
import * as Tone from 'tone'
import { GAME_FONT_CONFIGURATION, GAME_VIEW_CONSTANT, MARKET_POSITIONS, TWEEN_EASING } from '../constants/game-constant';
import { global_events } from '../constants/events-constant';
import { ParserModel } from '../Parser/ParserModel';
import { StaticBgContainer } from './StaticBgContainer';
import { Player } from '../Player/Player';

export class GameView extends Phaser.GameObjects.Container {
    private background!: Phaser.GameObjects.Image;
    override scene: GameScene;
    private tween: Phaser.Tweens.Tween | null = null;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private bgContainer !:Phaser.GameObjects.Container;
    private StaticBgContainer!: Phaser.GameObjects.Container;
    private cloud !:Phaser.GameObjects.Image;



    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        this.StaticBgContainer = new StaticBgContainer(this.scene,this.eventEmitters,this.model);
        this.cloud = this.scene.add.image(720, 150, 'cloud').setScale(0.5);
        this.scene.children.add(this.StaticBgContainer);
    }

    override update(...args: any[]): void {
        this.StaticBgContainer.update();
    }

}