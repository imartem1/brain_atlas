import React from "react";

const Bulb = props => {
    return (
        <mesh {...props}>
            <pointLight/>
        </mesh>
    );
};

export default Bulb;
