import * as THREE from 'three'
import { AxesHelper } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene()
scene.background = null

const light = new THREE.SpotLight()
light.position.set(0, 0, 5)
light.power = 6;
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    alpha: true
})
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

let object = new THREE.Object3D();
let screen = new THREE.Object3D();
let shell = new THREE.Object3D();
let logo = new THREE.Object3D();
let dpad = new THREE.Object3D();
let start = new THREE.Object3D();
let select = new THREE.Object3D();
let aButton = new THREE.Object3D();
let bButton = new THREE.Object3D();



const loader = new GLTFLoader()
loader.load(
    'models/GAMEBOY.glb',
    function (gltf) {
        console.log(gltf.scene);
        object = gltf.scene;

        screen = object.children.find(child => child.name == 'screen');
        
        shell = object.children.find(child => child.name == 'shell');
        logo = object.children.find(child => child.name == "logo");

        dpad = object.children.find(child => child.name == 'dpad');

        start = object.children.find(child => child.name == 'start');

        select = object.children.find(child => child.name == 'select');
        
        aButton = object.children.find(child => child.name == 'a');

        bButton = object.children.find(child => child.name == 'b');



        //shell.children[1].material.color = new THREE.Color(0xff0000);

        console.log(screen, logo);
        var logoTexture = new THREE.TextureLoader().load('models/logo.png');
        logoTexture.flipY = false; // for glTF models.      
        logo.material.map = logoTexture;
        var screenTexture = new THREE.TextureLoader().load('models/screen.png');
        screenTexture.flipY = false; // for glTF models.      
        screen.material.map = screenTexture;
        var dpadTexture = new THREE.TextureLoader().load('models/dpad.png');
        dpadTexture.flipY = false; // for glTF models.      
        dpad.material.map = dpadTexture;

        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

function animate() {
    requestAnimationFrame(animate)

    object.rotation.y += 0.01;

    render()
}

const disassembly = () => {
    screen.position.z += 1;
}

function render() {
    renderer.render(scene, camera)
}

animate()

document.querySelector("#red").addEventListener('click', () => {
    shell.material.color = new THREE.Color(0xA41C14);
    bButton.material.color = new THREE.Color(0x000000);
    select.material.color = new THREE.Color(0x000000);
    start.material.color = new THREE.Color(0x000000);
})

document.querySelector("#green").addEventListener('click', () => {
    shell.material.color = new THREE.Color(0xA41C14);
    bButton.material.color = new THREE.Color(0x000000);
    select.material.color = new THREE.Color(0x000000);
    start.material.color = new THREE.Color(0x000000);
})

document.querySelector("#white").addEventListener('click', () => {
    shell.material.color = new THREE.Color(0xD6D4C7);
    bButton.material.color = new THREE.Color(0x990055);
    select.material.color = new THREE.Color(0x7B819B);
    start.material.color = new THREE.Color(0x7B819B);
})

document.querySelector("#disassembly").addEventListener('click', () => {
    disassembly();
})