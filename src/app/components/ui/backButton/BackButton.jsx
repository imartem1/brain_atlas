import React from "react";
import PropTypes from "prop-types";

const BackButton = ({ history }) => {
    const handleBack = () => {
        history.push("/models");
    };
    return (
        <button
            className="btn btn-edit"
            onClick={ () => { handleBack(); } }
            >
                Вернуться к списку моделей
        </button>
    );
};

BackButton.propTypes = {
    history: PropTypes.object
};

export default BackButton;
