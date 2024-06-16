import { ParserModel } from './ParserModel';

export class ServerConnection {
    private connection!: any;
    private model !: ParserModel;
    private eventEmitters: Phaser.Events.EventEmitter;
  
    constructor(model: ParserModel, emitter: Phaser.Events.EventEmitter) {
        
    }


}