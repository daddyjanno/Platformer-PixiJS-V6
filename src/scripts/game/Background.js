import * as PIXI from 'pixi.js'
import { App } from '../system/App'

export class Background {
    constructor() {
        this.speed = App.config.bgSpeed
        this.container = new PIXI.Container()
        this.createSprites()
    }
    createSprites() {
        this.sprites = []

        for (let i = 0; i < 3; i++) {
            this.createSprite(i)
        }
    }
    createSprite(index) {
        const sprite = App.sprite('bg')

        sprite.x = sprite.width * index
        sprite.y = 0
        this.container.addChild(sprite)
        this.sprites.push(sprite)
    }
    move(sprite, offset) {
        const spriteRightX = sprite.x + sprite.width
        const spriteLeftX = 0

        if (spriteRightX <= spriteLeftX) {
            sprite.x += sprite.width * this.sprites.length
        }

        sprite.x -= offset
    }
    update(dt) {
        const offset = this.speed * dt

        this.sprites.forEach((sprite) => {
            this.move(sprite, offset)
        })
    }
}
