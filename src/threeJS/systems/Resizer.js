class Resizer {
    constructor(container, camera, renderer) {
        camera.aspect = container.clientWidth / container.clientHeight
		camera.updateProjectionMatrix() // update the camera's frustum
        renderer.setSize(container.clientWidth, container.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio) //    // set the pixel ratio (for mobile devices)
    }
}

export { Resizer }