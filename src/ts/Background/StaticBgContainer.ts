import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { Player } from "../Player/Player";
import { global_events } from "../constants/events-constant";
import { TWEEN_EASING } from "../constants/game-constant";
import { SingleStatcBgContainer } from "./SingleStatcBgContainer";

export class StaticBgContainer extends Phaser.GameObjects.Container {
    private staticBg_01: SingleStatcBgContainer;
    private staticBg_02: SingleStatcBgContainer;
    override scene : GameScene
    private eventEmitters !: Phaser.Events.EventEmitter;
    private screenWidth!:number ;
    private positions !:number[];
    private cloud !: Phaser.GameObjects.Image;


    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.staticBg_01 = new SingleStatcBgContainer(this.scene, eventEmitters, model, 'staticBg_04');
        this.staticBg_02 = new SingleStatcBgContainer(this.scene, eventEmitters, model, 'staticBg_04');
        // this.cloud = this.scene.add.image(720, 150, 'cloud').setScale(0.5);
        this.cloud = this.scene.physics.add.image(400, 300, 'cloud')
            .setScale(0.3)
            .setCircle(24, 0, 7.5)
            .setVelocity(-100, 0);
            
        this.staticBg_01.setPosition(0, 0);
        this.staticBg_02.setPosition(this.staticBg_01.x + this.scene.scale.width, 0);
        this.positions = [this.staticBg_01.x,this.staticBg_02.x];
        this.add([this.staticBg_01, this.staticBg_02,this.cloud]);
        this.screenWidth = this.scene.scale.width;

        // this.x = -900;
        this.eventEmitters = eventEmitters;
        this.eventEmitters.on(global_events.PLAYER_POSITION, this.onPlayerMove, this)
        // Add event listener to detect player movement
        // this.player.on('move', this.onPlayerMove, this);
    }

    override update(...args: any[]): void {
        if (!this.cloud) {
            return;
        }
        // this.cloud.x--;
        if (this.cloud.x < -200) {
            this.cloud.x = 2200;
        }
        // this/
        // this.scene.physics.velocityFromAngle(this.cloud.angle, 150);

        // this.scene.physics.world.wrap(this.cloud, 32);
    }


    private onPlayerMove(x:number) {
        const playerX = x;
        // console.log("Position"+x);

        // Check if player is out of screen on the left
        if (playerX < 100) {
            this.shiftBackgroundRight();
        }
        // Check if player is out of screen on the right
        else if (playerX > 1650) {
            this.shiftBackgroundLeft();
            // this.screenWidth += 200;
        }
    }

    private shiftBackgroundRight() {
        this.x += 200;
        this.setPosition(this.x,this.y);
       
        console.log(this.x);
        // const targetX = this.x + 200;
        // this.scene.tweens.add({
        //     targets: this,
        //     x: targetX,
        //     duration: 200,
        //     ease: TWEEN_EASING.LINEAR,
        //     yoyo: true,
        // });
    }

    private shiftBackgroundLeft() {
        this.x -= 200;
        this.setPosition(this.x,this.y);
        
        if(this.x <= -this.screenWidth){
           if(this.staticBg_01.x < this.staticBg_02.x){
              this.staticBg_01.x = this.staticBg_02.x + this.scene.scale.width;
              console.log(this.x);
           }else{
              this.staticBg_02.x = this.staticBg_01.x + this.scene.scale.width;
           }
        }
        // this.setPosition(this.x,this.y);
        // const targetX = this.x - 200;
        // this.scene.tweens.add({
        //     targets: this,
        //     x: targetX,
        //     duration: 200,
        //     ease: TWEEN_EASING.LINEAR,
        //     yoyo: true,
        // });
    }
}
