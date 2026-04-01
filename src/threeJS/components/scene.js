import {Scene, Color} from '../utils/utils.js'

function createScene() {
    const scene = new Scene();
	scene.background = new Color('black')

    return scene
}

export {createScene}