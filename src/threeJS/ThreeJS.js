import { createCamera } from './components/camera.js'
import { createScene } from './components/scene.js'
import { createCube } from './components/cube.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'

let camera
let renderer
let scene

class ThreeJS {
    constructor(container) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        container.append(renderer.domElement)
    
        const cube = createCube()

        scene.add(cube)

        const resizer = new Resizer(container, camera, renderer)

        function animateCube() {
            requestAnimationFrame(animateCube);
            
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            
            renderer.render(scene, camera); //renders the scene into the canvas
        }

        animateCube()
    }

    render() {
        renderer.render(scene, camera)
    }
}

export { ThreeJS }