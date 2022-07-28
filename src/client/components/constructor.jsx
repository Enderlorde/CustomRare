const { useEffect, createRef, useState } = require('react');
const React = require('react');

const THREE = require('three');
const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader');
const Stats = require('three/examples/jsm/libs/stats.module');


const Constructor = () => {

    const GLElement = createRef();
    const [cameraState, setCameraState] = useState();
    const [sceneState, setSceneState] = useState();
    const [rendererState, setRendererState] = useState();
    const [modelState, setModelState] = useState();
    const stats = Stats.default();
    
    useEffect(() => {
        if(!cameraState && !sceneState && !rendererState){
            const [camera, scene] = createGLWindow();
            setCameraState(camera);
            setSceneState(scene);
            
        }else{
            if(!modelState){
                loadModel().then(model => {
                    setModelState(model);
                    sceneState.add(model);
                });  
            }else{
                animate();
            }
        }
    });

    console.log(cameraState,sceneState,rendererState);

    const loadModel = () => {
        //Loading model
        const loader = new GLTFLoader();
        return new Promise ((res, rej) => {
            loader.load('/models/GAMEBOY.glb', (gltf) => {
                res(gltf.scene);
            },(xhr) => {
                console.log(xhr.loaded);
            },(error) => {
                console.log(error);
                rej();
            });
        }
        )       
    }

    const createGLWindow = () => {
        //Create FPS countrer
        
        GLElement.current.appendChild(stats.dom);

        //Creating scene
        const scene = new THREE.Scene();
        scene.background = null;

        //Creating light source
        const spotlight = new THREE.SpotLight();
        spotlight.position.set(0,0,5);

        //Creating camera
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);

        setRendererState(renderer);

        GLElement.current.appendChild(renderer.domElement);
        
        scene.add(new THREE.AxesHelper(5));
        scene.add(spotlight);
        scene.add(camera);
        return [camera, scene];
    }

    const renderGL = () => {
        
        rendererState.render(sceneState, cameraState);
    }

    const animate = () => {
        if (sceneState instanceof THREE.Scene && cameraState instanceof THREE.PerspectiveCamera && rendererState instanceof THREE.WebGLRenderer){
            requestAnimationFrame(animate);

            stats.begin();

            modelState.rotation.y += 0.01;

            renderGL();
            
            stats.end();
        }
    }
    
    const disposeGLWindow = () => {
        if (rendererState && sceneState){
            console.log("disposing");
            setRendererState(undefined);
        }
    }

    return (
        <div className="constructor" id="constructor">
            <div ref={GLElement}>

            </div>
        </div>
    );
}

module.exports = Constructor;