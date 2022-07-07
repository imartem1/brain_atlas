import React from "react";
import PropTypes from "prop-types";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const EditCard = ({ meshes, setMeshes }) => {
    const changeOpacity = (event, name) => {
        setMeshes(Object.values(meshes).map((element) => {
            if (element.name === name) {
                element.material.opacity = event.target.value;
                return element;
            } else {
                return element;
            }
        }));
    };
    const changeVisible = (name) => {
        setMeshes(Object.values(meshes).map((element) => {
            if (element.name === name) {
                element.visible = !element.visible;
                return element;
            } else {
                return element;
            }
        }));
    };
    return (
        Object.values(meshes).map((mesh) =>
            <div key={mesh.uuid} className="edit-mesh">
                {mesh.name.length === 6 ? (
                    <>
                        <FormControlLabel
                            control={<Checkbox
                                defaultChecked
                                onChange={() => changeVisible(mesh.name)}
                                />}
                            label={mesh.name + " видимость"}
                        />
                        <hr color="#e8e9ec"/>
                        <Typography gutterBottom>прозрачность</Typography>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0.5}
                            step={0.01}
                            min={0}
                            max={1}
                            valueLabelDisplay="auto"
                            onChange={(event) => changeOpacity(event, mesh.name)}
                        />
                    </>
                ) : (
                <></>
                )}
            </div>
        )
    );
};

EditCard.propTypes = {
    meshes: PropTypes.object,
    setmeshes: PropTypes.func
};

export default EditCard;
