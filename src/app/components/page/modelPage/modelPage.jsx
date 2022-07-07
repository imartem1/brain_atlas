import React, { useState } from "react";
import "./modelPage.css";
import PropTypes from "prop-types";
import ModelView from "../../common/3D/modelView/modelView";
import EditView from "../../common/3D/editView/editView";

const ModelPage = ({ history }) => {
    const [meshes, setMeshes] = useState({});
    console.log(meshes);
    return (
        <div className="modelpage">
            <EditView
                meshes={meshes}
                setMeshes={setMeshes}
                history={history}
            />
            <ModelView
                setMeshes={setMeshes}
            />
        </div>
    );
};

ModelPage.propTypes = {
    history: PropTypes.object
};

export default ModelPage;
