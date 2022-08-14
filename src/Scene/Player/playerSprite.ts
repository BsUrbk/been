import { Container, Sprite, Loader, Ticker } from 'pixi.js'
import { Keyboard } from '../Controls/Keyboard';

export class Scene extends Container{
    private readonly screenWidth: number
    private readonly screenHeight: number
    private player: Sprite
    private loader: Loader
    

    constructor(screenWidth: number, screenHeight: number){
        super()
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight
        this.loader = new Loader
        this.loader.add('been', 'sprites/been_static.png')

        this.player = Sprite.from('/sprites/been.png')

        this.player.anchor.set(0.5)
        this.player.x = this.screenWidth / 2
        this.player.y = this.screenHeight / 2

        this.player.interactive = true
        Keyboard.initialize()

        Ticker.shared.add(this.playerMovement)

        this.addChild(this.player)
    }

    private playerMovement = () =>{
        if(Keyboard.state.get('KeyW')){
            this.player.y -=5
        }
        if(Keyboard.state.get('KeyS')){
            this.player.y +=5
        }
        if(Keyboard.state.get('KeyA')){
            this.player.x -=5
        }
        if(Keyboard.state.get('KeyD')){
            this.player.x +=5
        }
    }
}