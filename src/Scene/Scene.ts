import { AnimatedSprite, Container, Loader, Spritesheet, Ticker } from 'pixi.js'
import { Keyboard } from "./Controls/Keyboard"

export class Scene extends Container{
    public readonly screenWidth: number
    public readonly screenHeight: number
    private static player: AnimatedSprite
    private loader: Loader
    private ticker: Ticker

    constructor(screenWidth: number, screenHeight: number){
        super()
        this.loader = new Loader()
        this.ticker = new Ticker()
        this.ticker.autoStart = true
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight

        //inputs
        Keyboard.initialize()
        this.loader.add('player','sprites/player/been_static.json')
        this.loader.add('player_run','sprites/player/been_run.json')
        this.loader.load(this.start)
        this.ticker.add(this.playerMovement)

        
    }

    private start = () =>{
        let sheet: Spritesheet = this.loader.resources.player.spritesheet as Spritesheet
        Scene.player = new AnimatedSprite(sheet.animations['been_static'])
        Scene.player.anchor.set(0.5)
        Scene.player.x = this.screenWidth / 2
        Scene.player.y = this.screenHeight / 2
        Scene.player.animationSpeed = 0.3
        Scene.player.play()
        this.addChild(Scene.player)
    }

    private playerMovement = () =>{
        if(Keyboard.state.get('KeyW')){
            let sheet: Spritesheet = this.loader.resources.player_run.spritesheet as Spritesheet
            Scene.player.y -=1
            Scene.player.textures = sheet.animations['been_run']
        }
        if(Keyboard.state.get('KeyS')){
            let sheet: Spritesheet = this.loader.resources.player_run.spritesheet as Spritesheet
            Scene.player.y +=1
            Scene.player.textures = sheet.animations['been_run']
        }
        if(Keyboard.state.get('KeyA')){
            let sheet: Spritesheet = this.loader.resources.player_run.spritesheet as Spritesheet
            Scene.player.x -=1
            Scene.player.textures = sheet.animations['been_run']
        }
        if(Keyboard.state.get('KeyD')){
            let sheet: Spritesheet = this.loader.resources.player_run.spritesheet as Spritesheet
            Scene.player.x +=1
            Scene.player.textures = sheet.animations['been_run']
        }
        
        
    }
}