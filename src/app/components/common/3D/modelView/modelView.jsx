import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Brain from "../brain";
import Bulb from "../bulb";
import Orbit from "../orbit";

import {
    Canvas
} from "react-three-fiber";

const ModelView = () => {
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
                    />
                </Suspense>
                <Orbit/>
            </Canvas>
        </div>
    );
};

export default ModelView;
