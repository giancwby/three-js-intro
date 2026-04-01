import { BoxGeometry, MeshBasicMaterial, Mesh } from '../utils/utils.js'

function createGeometry() {
    /* Geometry Setup
	Geometry defines the shape of a mesh
	*/
    const width = 2
	const height = 1
	const depth = 2
	const widthSegments = 2
	const heightSegments = 1
	const depthSegments = 1
	const geometry = new BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);

    return geometry
}

function createMaterial() {
    /* Material Setup
	Material defines how the surface of the mesh looks
	*/
    const material = new MeshBasicMaterial({ color: 0xf60404, wireframe: true }); //MeshBasicMaterial doesn’t require us to add any lights to the scene

    return material
}

function createCube() {
    const geometry = createGeometry()
    const material = createMaterial()
    const cube = new Mesh(geometry, material);

    return cube
}

export { createCube }