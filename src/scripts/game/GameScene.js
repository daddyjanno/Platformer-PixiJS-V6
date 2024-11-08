import * as PIXI from 'pixi.js'
import { Scene } from '../system/Scene'
import { Background } from './Background'
import { Platform } from './Platform'

export class GameScene extends Scene {
    constructor() {
        super()
        this.container = new PIXI.Container()
        this.create()
    }
    create() {
        this.createBackground()
        this.createPlatform({
            rows: 4,
            cols: 6,
            x: 200,
        })
    }
    createBackground() {
        this.bg = new Background()
        this.container.addChild(this.bg.container)
    }
    createPlatform(data) {
        const platform = new Platform(data.rows, data.cols, data.x)
        this.container.addChild(platform.container)
    }

    update(dt) {
        this.bg.update(dt)
    }
}
