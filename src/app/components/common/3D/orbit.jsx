import React from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
    extend,
    useThree
} from "react-three-fiber";
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

export default Orbit;
