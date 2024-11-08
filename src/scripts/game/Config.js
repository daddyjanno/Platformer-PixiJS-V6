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
}
