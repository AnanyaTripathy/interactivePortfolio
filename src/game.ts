import * as Phaser from 'phaser';
import { GameView } from './ts/Background/GameView';
import '../node_modules/phaser/plugins/spine/dist/SpinePlugin';
import { ServerConnection } from './ts/Parser/ServerConnection';
import { Player } from './ts/Player/Player';
import { ParserModel } from './ts/Parser/ParserModel';

import { Parser } from './ts/Parser/Parser';
import { Platform } from './ts/Player/Platform';
import { Component } from './ts/Component/Component';
import { ComponentPages } from './ts/Component/ComponentPages';



export default class GameScene extends Phaser.Scene
{
    private parserModel!: ParserModel;
    public  globalEvents: Phaser.Events.EventEmitter;
    private loadingText: Phaser.GameObjects.Text | undefined;
    private player : Player;
    private component !: ComponentPages;
    public platforms: Platform[];
    private gameView !: GameView;






    constructor ()
    {
        super('GameScene');
        this.platforms = [];

    }

    preload ()
    {
        this.load.image('staticBg_04', 'Bg/4_game_background.png');
        this.load.image('settingBg', 'Bg/settingBg.png');
        this.load.image('earthImogi', 'Component/earth.png');
        this.load.image('notePad', 'Component/keepNote.png');
        this.load.image('schoolBuilding', 'Component/schoolBuilding.png');
        this.load.image('cloud', 'Component/cloud.png');
        this.load.image('schoolPlatform', 'Component/schoolPlatform.png');
        this.load.image('schoolPlatformBG', 'Component/schoolPlatformBG.png');
        this.load.image('Player', 'Component/character_02.png');
        this.load.image('schoolVan', 'Component/schoolVan.png');
        this.load.image('pole', 'Component/pole.png');
        this.load.image('books', 'Component/books.png');
        this.load.image('controller', 'Component/controller.png');
        this.load.image('heart', 'Component/heart.png');
        this.load.image('school_logo', 'Component/school_logo.png');
        this.load.image('saraswati_maa', 'Component/saraswati_maa.png');
        this.load.image('dav_school', 'Component/DAV.png');
        this.load.image('platform', 'Bg/platform.png');
        this.load.image('jnv_building', 'Component/jnv.png');
        this.load.image('jnv_logo', 'Component/jnv_logo.png');
        this.load.image('college_logo', 'Component/collegeLogo.png');
        this.load.image('college_pic', 'Component/college_img.png');
        this.load.image('cave_gate', 'Component/cave_gate.png');
        this.load.image('cave_road', 'Component/cave_road.png');
        this.load.image('star', 'Component/star.png');
    }

    create ()
    {
        this.globalEvents = new Phaser.Events.EventEmitter();
        this.parserModel = new ParserModel(); 
        new ServerConnection(this.parserModel,this.globalEvents);
        this.gameView = new GameView(this, this.globalEvents, this.parserModel);
        this.platforms.push(new Platform(this, 600, 400));
        this.component= new ComponentPages(this, this.globalEvents, this.parserModel);
        this.player = new Player(this, 100, 900,this.globalEvents);

        const cam = this.cameras.main;
        // cam.x = -900;

		// // camera X follows the player
		// cam.scrollX = Math.floor(this.player.x - cam.width / 2);

		// // cameras Y moves to a sector of the world
		// const row = Math.floor(this.player.y / cam.height);
		// cam.scrollY = row * cam.height;
        // this.cameras.getCamera()
        // this.add.text(100, 100, 'Hello PhaserTTTT!', { fontFamily: 'Grechen Fuemen', fontSize: '64px', color: '#ffffff' });

        // this.physics.add.collider(this.player, this.platforms, this.player.onPlatformCollision.bind(this), undefined, this.player);


     }

     override update() {
        // Update player
        // const cam = this.cameras.main;
        // cam.x --;
        this.player.update();
        this.gameView.update();
        // this.component.update();
        // this.player.y = 0;
    }

    updateLoadingText(progress: string) {
        // Update loading text with progress percentage
        this.loadingText.text = 'Loading: ' + progress + '%';
    }

    // resizeGame(gameSize: Phaser.Structs.Size) {
    //     if (!gameSize) {
    //         return;
    //     }
    //     const width = gameSize.width;
    //     const height = gameSize.height;
        
    //     this.cameras.resize(width, height);
    //     // Other resize logic...
    //     // Example: Update player positions, background positions, etc.
    // }
}




const config = {
    scale: {
        mode: Phaser.Scale.MAX_ZOOM,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920, //1920
        height: 1080, //1080
    },
    width: 1920, //1920
    height: 1080, //1080
    parent: 'phaser-example',
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    dom: {
        createContainer: true
    },
    scene: GameScene
};
// const globalEvents = new Phaser.Events.EventEmitter();
const game = new Phaser.Game(config);
// (game.scene.scenes as unknown as GameScene).globalEvents = globalEvents;
(globalThis as any).__PHASER_GAME__ = game;
// game.add.plugin(PhaserSpine.SpinePlugin);
