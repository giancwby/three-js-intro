import { WebGLRenderer } from '../utils/utils.js'

function createRenderer() {
    const renderer = new WebGLRenderer()

    return renderer
}

export { createRenderer }