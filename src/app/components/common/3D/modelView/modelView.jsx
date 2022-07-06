import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Brain from "../brain";
import Bulb from "../bulb";
import Orbit from "../orbit";
import "./modelView.css";
import PropTypes from "prop-types";

import {
    Canvas
} from "react-three-fiber";

const ModelView = ({ setMeshes }) => {
    const id = (useParams()).modelId;
    return (
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
                        path={`/models/${id}.gltf`}
                        position={[0, 0, 0]}
                        setMeshes={setMeshes}
                    />
                </Suspense>
                <Orbit/>
            </Canvas>
        </div>
    );
};

ModelView.propTypes = {
    setMeshes: PropTypes.func
};

export default ModelView;
