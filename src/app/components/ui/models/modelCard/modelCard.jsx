import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./modelCard.css";

const ModelCard = ({ model }) => {
    return (
    <div className="model" key={model.id}>
        <p className="modelname">
            {model.name}
        </p>
        <div className="tracks">
            <p>{model.anterior_segment ? ("anterior segment") : ("-") }</p>
            <p>{model.posterior_segment ? ("posterior segment") : ("-") }</p>
            <p>{model.long_segment ? ("long segment") : ("-")}</p>
            <p>{model.fronto_occipital_fasciculus ? ("fronto_occipital fasciculus") : ("-") }</p>
            <p>{model.inferior_longitudinal_fasciculus ? ("inferior longitudinal fasciculus") : ("-") }</p>
            <p>{model.uncinate_fasciculus ? ("uncinate fasciculus") : ("-")}</p>
            <p>{model.frontal_aslant_tract ? ("frontal aslant tract") : ("-")}</p>
        </div>
        <Link className="btn" to={`models/${model.id}`}>посмотреть модель</Link>
    </div>
    );
};

ModelCard.propTypes = {
    model: PropTypes.object
};

export default ModelCard;
