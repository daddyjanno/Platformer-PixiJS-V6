import * as PIXI from 'pixi.js'
import { Scene } from '../system/Scene'
import { Background } from './Background'
import { Platform } from './Platform'
import { Hero } from './Hero'
import { Platforms } from './Platforms'

export class GameScene extends Scene {
    constructor() {
        super()
        this.container = new PIXI.Container()
        this.create()
    }
    create() {
        this.createBackground()
        this.createHero()
        this.createPlatforms()
    }
    createBackground() {
        this.bg = new Background()
        this.container.addChild(this.bg.container)
    }

    createHero() {
        this.hero = new Hero()
        this.container.addChild(this.hero.sprite)
    }
    createPlatforms() {
        this.platforms = new Platforms()
        this.container.addChild(this.platforms.container)
    }

    update(dt) {
        this.bg.update(dt)
        this.platforms.update(dt)
    }
}
