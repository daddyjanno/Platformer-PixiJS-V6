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
        position: {
            x: 350,
            y: 595,
        },
    },
    platforms: {
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
        moveSpeed: -1.5,
    },
}
