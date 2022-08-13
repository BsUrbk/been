import { Container, Sprite } from 'pixi.js'

export class Scene extends Container{
    private readonly screenWidth: number;
    private readonly screenHeight: number;
    private player: Sprite;

    constructor(screenWidth: number, screenHeight: number){
        super()
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight

        this.player = Sprite.from('been.png')

        this.player.anchor.set(0.5)
        this.player.x = this.screenWidth / 2
        this.player.y = this.screenHeight / 2
        this.addChild(this.player)
    }
}