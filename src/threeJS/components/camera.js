import { PerspectiveCamera } from '../utils/utils.js'

function createCamera() {
    const fov = 75; //how wide the camera’s view is, in degrees.
	const aspect = 1; //set aspect ratio
	const near = 0.1; // the near clipping plane, anything closer to the camera than this will be invisible.
	const far = 1000; // the far clipping plane, anything further away from the camera than this will be invisible
	const camera = new PerspectiveCamera(fov, aspect, near, far); //Together, these four parameters are used to create a bounded region of space which we call a viewing frustum.

    const xAxis = 0
	const yAxis = 0
	const zAxis = 3
	camera.position.set(xAxis,yAxis,zAxis) // every object is initially created at ( 0, 0, 0 )

    return camera
}

export { createCamera }