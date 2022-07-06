import React from "react";
import PropTypes from "prop-types";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
    useLoader
} from "react-three-fiber";

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

export default Brain;
