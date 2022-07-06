import React from "react";
import PropTypes from "prop-types";
import ModelCard from "../modelCard/modelCard";
import "./modelsList.css";

const ModelsList = ({ models }) => {
    return (
        <div className="models">
            {models.map((model) => (
                <ModelCard model={model} key={model.id}/>
            ))}
        </div>
    );
};
ModelsList.propTypes = {
    models: PropTypes.array,
    history: PropTypes.object
};

export default ModelsList;
