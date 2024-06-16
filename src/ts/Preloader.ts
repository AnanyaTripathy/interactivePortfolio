// import * as Phaser from 'phaser';
// import '../node_modules/phaser/plugins/spine/dist/SpinePlugin';
// export class Preloader {
//     private load :Phaser.Loader.LoaderPlugin;
//     constructor(load :Phaser.Loader.LoaderPlugin) {
//          this.load = load;
//          this.loadImages();
//     }

//     private loadImages() :void{
//         this.load.image('headerBackground', 'assets/Bg/header_bg.png');
//         this.load.image('background', 'assets/Bg/background_bg.png');
//         this.load.image('girls', 'assets/7up7down_slice/girls.png');
//         this.load.image('table', 'assets/7up7down_slice/table.png');
//         this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
//         this.load.glsl('stars', 'assets/starfields.glsl.js');
//         this.load.image("bet_bg", "assets/7up7down_slice/bet_bg.png");
//         this.load.image("min_max_bg", "assets/7up7down_slice/min_max_bg.png");
//         this.load.image("player_bg", "assets/7up7down_slice/player_bg.png");
//         this.load.image("odds_box1", "assets/7up7down_slice/odds_box1.png");
//         this.load.image("odds_box2", "assets/7up7down_slice/odds_box2.png");
//         this.load.image("color", "assets/7up7down_slice/color.png");
//         this.load.image("red_box", "assets/7up7down_slice/red_box.png");
//         this.load.image("black_box", "assets/7up7down_slice/black_box.png");
//         this.load.image("suit", "assets/7up7down_slice/suit.png");
//         this.load.image("header_tp", "assets/7up7down_slice/header_tp.png");
//         this.load.image("suit_box1", "assets/7up7down_slice/suit_box1.png");
//         this.load.image("suit_box2", "assets/7up7down_slice/suit_box2.png");
//         this.load.image("shade", "assets/7up7down_slice/shade.png");
//         this.load.image("heart", "assets/7up7down_slice/heart.png");
//         this.load.image("diamond", "assets/7up7down_slice/diamond.png");
//         this.load.image("club", "assets/7up7down_slice/club.png");
//         this.load.image("even_odds_card", "assets/7up7down_slice/even_odds_card.png");
//         this.load.image("even_odds_card_box", "assets/7up7down_slice/even_odds_card_box.png");
//         this.load.image("al_games", "assets/7up7down_slice/al_games.png");
//         this.load.image("back_btn", "assets/7up7down_slice/back_btn.png");
//         this.load.image("menu_icon", "assets/7up7down_slice/menu_icon.png");
//         this.load.image("info", "assets/7up7down_slice/info.png");
//         this.load.image("bigwinners","assets/UI/bigwinners.png");
//         this.load.image("playerIcon","assets/UI/playerIcon.png");
//         this.load.image("richest","assets/UI/richest.png")
//         for(let i :number = 1;i<14;i++){
//            const name : number = 1000 + i;
//            const path:string = `assets/cards/${name}.png`;
//            this.load.image(name.toString(),path);
//         }
//         for(let i :number = 1;i<14;i++){
//             const name : number = 2000 + i;
//             const path:string = `assets/cards/${name}.png`;
//             this.load.image(name.toString(),path);
//         }
//         for(let i :number = 1;i<14;i++){
//             const name : number = 3000 + i;
//             const path:string = `assets/cards/${name}.png`;
//             this.load.image(name.toString(),path);
//         }
//         for(let i :number = 1;i<14;i++){
//             const name : number = 4000 + i;
//             const path:string = `assets/cards/${name}.png`;
//             this.load.image(name.toString(),path);
//         }
//         this.load.setPath('assets/GirlAnimation')
//         // (this.load as any).spine("Girl_01", "Girl_01.json","Girl_01.atlas");
//         this.load.spine('Girl_01', 'Girl_01.json', 'Girl_01.atlas');

//     }
// }