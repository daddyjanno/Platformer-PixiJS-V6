import * as PIXI from 'pixi.js'
import { Scene } from '../system/Scene'
import { Background } from './Background'
import { Hero } from './Hero'
import { Platforms } from './Platforms'
import Matter from 'matter-js'
import { App } from '../system/App'
import { LabelScore } from './LabelScore'

export class GameScene extends Scene {
    create() {
        this.createBackground()
        this.createHero()
        this.createPlatforms()
        this.setEvents()
        this.createUI()
    }
    createUI() {
        this.labelScore = new LabelScore()
        this.container.addChild(this.labelScore)
        this.hero.sprite.on('score', () => {
            this.labelScore.renderScore(this.hero.score)
        })
    }
    createBackground() {
        this.bg = new Background()
        this.container.addChild(this.bg.container)
    }

    createHero() {
        this.hero = new Hero()
        this.container.addChild(this.hero.sprite)

        this.container.interactive = true
        this.container.on('pointerdown', () => {
            this.hero.startJump()
        })
        this.hero.sprite.once('die', () => {
            App.scenes.start('Game')
        })
    }
    createPlatforms() {
        this.platforms = new Platforms()
        this.container.addChild(this.platforms.container)
    }

    update(dt) {
        this.bg.update(dt)
        this.platforms.update(dt)
    }
    setEvents() {
        Matter.Events.on(
            App.physics,
            'collisionStart',
            this.onCollisionStart.bind(this)
        )
    }
    onCollisionStart(event) {
        const colliders = [event.pairs[0].bodyA, event.pairs[0].bodyB]
        const hero = colliders.find((body) => body.gameHero)
        const platform = colliders.find((body) => body.gamePlatform)

        if (hero && platform) {
            this.hero.stayOnPlatform(platform.gamePlatform)
        }

        const diamond = colliders.find((body) => body.gameDiamond)

        if (hero && diamond) {
            this.hero.collectDiamond(diamond.gameDiamond)
        }
    }
    destroy() {
        Matter.Events.off(
            App.physics,
            'collisionStart',
            this.onCollisionStart.bind(this)
        )
        App.app.ticker.remove(this.update, this)
        this.bg.destroy()
        this.hero.destroy()
        this.platforms.destroy()
        this.labelScore.destroy()
    }
}
