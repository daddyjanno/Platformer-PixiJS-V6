import { Tools } from '../system/Tools'
import { GameScene } from './GameScene'

export const Config = {
    loader: Tools.massiveRequire(
        require['context']('./../../sprites', true, /\.(mp3|png|jpe?g)$/)
    ),
    scenes: {
        Game: GameScene,
    },
    bgSpeed: 2,
    hero: {
        jumpSpeed: 15,
        maxJumps: 2,
        position: {
            x: 350,
            y: 300,
        },
    },
    platforms: {
        moveSpeed: -1.5,
        ranges: {
            rows: {
                min: 2,
                max: 6,
            },
            cols: {
                min: 3,
                max: 9,
            },
            offset: {
                min: 60,
                max: 200,
            },
        },
    },
}
