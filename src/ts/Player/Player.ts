import GameScene from "../../game";
import { global_events } from "../constants/events-constant";
import { Platform } from "./Platform";

export class Player extends Phaser.GameObjects.Container {
    // playerImage: Phaser.GameObjects.Arc;
    playerImage: Phaser.GameObjects.Image;

    private isRunning: boolean;
    private jumpVelocity: number;
    private moveSpeed: number;
    override scene: GameScene;
    private onPlatform: boolean;
    private eventEmitters!: Phaser.Events.EventEmitter;


    constructor(scene: GameScene, x: number, y: number,eventEmitters:Phaser.Events.EventEmitter) {
        super(scene, x, y);

        this.scene = scene;
        this.eventEmitters = eventEmitters;
        this.x = x;
        this.y = y;
        this.setPosition(x,y);

        // Add player image (dot)
        // this.playerImage = scene.add.circle(0, 0, 10, 0xff0000) as Phaser.GameObjects.Arc;

        this.playerImage = this.scene.add.image(0,0,'Player').setScale(1);

        this.add(this.playerImage);

        this.bindEvent();


        // Player properties
        this.isRunning = false; // Flag to track if player is running
        this.jumpVelocity = -50; // Velocity when jumping
        this.moveSpeed = 50; // Horizontal movement speed
        this.onPlatform = false; // Flag to track if player is on a platform

        // Add player to the scene
        this.scene.add.existing(this);

        // Collide with platform
        this.scene.physics.add.collider(this, scene.platforms, this.onPlatformCollision.bind(this), undefined, this);
    }

    private bindEvent() :void{
        // // Enable input
        // this.scene.input.mouse.disableContextMenu();

        // Left mouse button event
        // var keys = this.scene.input.keyboard.addKeys({
        //     up: 'up',
        //     down: 'down',
        //     left: 'left',
        //     right: 'right'
        // }); 
        var keyObj = this.scene.input.keyboard.addKey('LEFT');
        keyObj.on('up', (event: KeyboardEvent) => {
            // console.log("LEFT MOVE")
            this.moveLeft();
        });

        var keyObj2 = this.scene.input.keyboard.addKey('RIGHT');
        keyObj2.on('up', (event: KeyboardEvent) => {
            // console.log("LEFT MOVE")
            this.moveRight();
        });

        var keyObj3 = this.scene.input.keyboard.addKey('UP');
        keyObj3.on('up', (event: KeyboardEvent) => {
            // console.log("LEFT MOVE")
            this.jump();
        });

        // var keyObj4 = this.scene.input.keyboard.addKey('LEFT');
        // keyObj.on('up', (event: KeyboardEvent) => {
        //     console.log("LEFT MOVE")
        //     this.moveLeft();
        // });

        // // Right mouse button event
        // this.scene.input.on('keyup', (pointer: Phaser.Input.Pointer) => {
        //     this.moveRight();
        // });

        // // Middle mouse button event
        // this.scene.input.on('keyup', (pointer: Phaser.Input.Pointer) => {
        //     if (pointer.middleButtonDown()) {
        //         console.log('Middle mouse button clicked');
        //         this.jump();
        //         // Add your logic for middle mouse button click here
        //     }
        // });

    }

    override update() {
        // // Movement
        // if (this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT).isDown) {
        //     this.moveLeft();
        // } else if (this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT).isDown) {
        //     this.moveRight();
        // }

        // // Jumping
        // if (this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP).isDown ) {
        //     this.jump();
        // }

        // // Running
        // if (this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT).isDown) {
        //     this.isRunning = true;
        // } else {
        //     this.isRunning = false;
        // }

        // this.movePlayer();

		// // fix player position

		// this.x = Math.floor(this.x);

		// // fix camera position

		// const cam = this.cameras.main;

		// // camera X follows the player
		// cam.scrollX = Math.floor(this.player.x - cam.width / 2);

		// // cameras Y moves to a sector of the world
		// const row = Math.floor(this.player.y / cam.height);
		// cam.scrollY = row * cam.height;
    }

    private moveLeft() {
        // const moveAmount = this.isRunning ? this.moveSpeed * 2 : this.moveSpeed;
        if(this.x >= 100){
            this.x -= 50;
        }
        this.setPosition(this.x,this.y);
        this.eventEmitters.emit(global_events.PLAYER_POSITION,this.x);
    }

    private moveRight() {
        // const moveAmount = this.isRunning ? this.moveSpeed * 2 : this.moveSpeed;
        if(this.x <= 1650){
            this.x += 50;
        }
        this.setPosition(this.x,this.y);
        this.eventEmitters.emit(global_events.PLAYER_POSITION,this.x);
    }

    private jump() {
        const currentY = this.y;
        const targetY = currentY + this.jumpVelocity;
        this.scene.tweens.add({
            targets: this,
            y: targetY,
            duration: 200,
            ease: 'Power2',
            yoyo: true,
        });
    }

    // private onPlatformCollision(player: Player, platform: Platform) {
    //     if (!this.onPlatform) {
    //         this.onPlatform = true;
    //         const playerWidth = this.playerImage.width; // Adjust this based on the player's image width
    //         this.y = platform.y - platform.height / 2 - playerWidth / 2; // Position player on top of platform
    //     }
    // }

    private onPlatformCollision() {
        const playerBounds = this.getBounds();
        for (const platform of this.scene.platforms) {
            const platformBounds = platform.getBounds();
            if (Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, platformBounds)) {
                // Player collided with platform
                if (!this.onPlatform) {
                    this.onPlatform = true;
                    const playerWidth = this.playerImage.width; // Adjust this based on the player's image width
                    this.y = platform.y - platform.height / 2 - playerWidth / 2; // Position player on top of platform
                }
                return;
            }
        }
        // Player not on any platform
        this.onPlatform = false;
    }
    
    
}
