import React from "react";
import PropTypes from "prop-types";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BackButton from "../../../ui/backButton/BackButton";
import EditCard from "../../../ui/editCard/editCard";

const EditView = ({ history, meshes, setMeshes }) => {
    const count = Object.values(meshes).length;
    return (
        <div className="editview p-1">
            <BackButton history={history}/>
            {count === 0 ? (
                <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                </Box>
                ) : <EditCard meshes={meshes} setMeshes={setMeshes}/>
            }
        </div>
    );
};

EditView.propTypes = {
    history: PropTypes.object,
    meshes: PropTypes.object,
    setMeshes: PropTypes.func
};

export default EditView;
