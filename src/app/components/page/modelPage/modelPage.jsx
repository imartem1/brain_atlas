import React, { Suspense } from "react";
import PropTypes from "prop-types";
import "./modelPage.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
    extend,
    useThree,
    Canvas,
    useLoader
} from "react-three-fiber";
import { useParams } from "react-router-dom";
extend({ OrbitControls });

const Orbit = () => {
    const { camera, gl } = useThree();
    return (
        <orbitControls
            args={[camera, gl.domElement]}
            attach='orbitControls'
        />
    );
};

const Bulb = props => {
    return (
        <mesh {...props}>
            <pointLight/>
        </mesh>
    );
};

const Brain = ({ path, scale, position }) => {
    const model = useLoader(
        GLTFLoader,
        path
    );

    console.log(model);
    return (
        <primitive
            object={model.scene}
            {...path + scale + position}
        />
    );
};

Brain.propTypes = {
    path: PropTypes.string,
    scale: PropTypes.array,
    position: PropTypes.array
};

const ModelPage = () => {
    const params = useParams();
    const id = params.modelId;

    return (
        <div className="modelpage">
            <div>
                <h2>Model editor</h2>
            </div>
            <div className="modelview">
                <Canvas
                    className="canvas"
                    camera={{ position: [100, 100, 100] }}
                >
                    <Bulb position={[0, 150, 0]}/>
                    <ambientLight intensity={0.2}/>
                    <Suspense fallback={null}>
                        <Brain
                            scale={new Array(3).fill(1)}
                            path={`/models/${id}`}
                            position={[0, 0, 0]}
                        />
                    </Suspense>
                    <Orbit/>
                </Canvas>
            </div>
        </div>
    );
};

export default ModelPage;
