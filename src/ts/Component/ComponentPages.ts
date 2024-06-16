import GameScene from "../../game";
import { ParserModel } from "../Parser/ParserModel";
import { GAME_FONT_CONFIGURATION, GAME_FONT_CONFIGURATION2, NOTE_TEXT } from "../constants/game-constant";
import { Component } from "./Component";
import { ComponentScene2 } from "./ComponentScene2";

export class ComponentPages extends Phaser.GameObjects.Container {
    override scene: GameScene;
    private eventEmitters: Phaser.Events.EventEmitter;
    private model !: ParserModel;
    private componentScene2 !: ComponentScene2;
    constructor(scene: GameScene, eventEmitters: Phaser.Events.EventEmitter, model: ParserModel) {
        super(scene);
        this.scene = scene;
        this.model = model;
        this.eventEmitters = eventEmitters;
        new Component(this.scene, this.eventEmitters, this.model);
        // this.componentScene2 = new ComponentScene2(this.scene, this.eventEmitters, this.model);
    }

}