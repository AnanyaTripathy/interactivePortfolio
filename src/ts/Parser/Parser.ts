import * as Phaser from 'phaser';
import { ParserModel } from './ParserModel';


export class Parser {
    private eventEmitters!: Phaser.Events.EventEmitter;
    private model: ParserModel;
    constructor(model: ParserModel, emitter: Phaser.Events.EventEmitter) {
        this.model = model;
        this.eventEmitters = emitter;
        this.subscribeEvent();
    }


    private subscribeEvent(): void {
    }


  
}