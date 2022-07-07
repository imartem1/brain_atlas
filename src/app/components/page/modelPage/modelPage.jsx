import React, { useState } from "react";
import "./modelPage.css";
import PropTypes from "prop-types";
import ModelView from "../../common/3D/modelView/modelView";
import Spinner from "../../ui/Spinner/spinner";

const ModelPage = ({ history }) => {
    const handleBack = () => {
        history.push("/models");
    };
    const [meshes, setMeshes] = useState({});
    console.log(meshes);
    const count = Object.values(meshes).length;
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
    const changeOpacity = (event, name) => {
        setMeshes(Object.values(meshes).map((element) => {
            if (element.name === name) {
                element.material.opacity = event.target.value;
                return element;
            } else {
                return element;
            }
        }));
        console.log(event.target.value, name);
    };
    return (
        <div className="modelpage">
            <div className="editview p-1">
                <button
                className="btn btn-edit"
                onClick={ () => { handleBack(); } }
                >
                    Вернуться к списку моделей
                </button>
                {count === 0 ? (
                    <Spinner/>
                ) : Object.values(meshes).map((mesh) =>
                    <div key={mesh.uuid} className="edit-mesh">
                        {mesh.name.length === 6 ? (
                            <>
                                <div>
                                    <input
                                        className=""
                                        type="checkbox"
                                        value=""
                                        onChange={() => changeVisible(mesh.name)}
                                        checked={mesh.visible}
                                    />
                                    <label className="" htmlFor={mesh.name}>
                                        {mesh.name + " видимость"}
                                    </label>
                                </div>
                                <hr color="#e8e9ec"/>
                                <div>
                                    <label htmlFor="customRange3" className="">
                                        {"прозрачность"}
                                    </label>
                                    <input
                                        type="range"
                                        className=""
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        id="customRange3"
                                        defaultValue={0.5}
                                        onChange={(event) => changeOpacity(event, mesh.name)}
                                    />
                                </div>
                            </>
                        ) : (
                        <></>
                        )}
                    </div>
                )
            }
            </div>
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
