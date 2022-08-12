import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

const been: Sprite = Sprite.from("been.png");

been.anchor.set(0.5);

been.x = app.screen.width / 2;
been.y = app.screen.height / 2;

app.stage.addChild(been);