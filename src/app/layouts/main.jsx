import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ModelPage from "../components/page/modelPage/modelPage";
import ModelsListPage from "../components/page/modelsListPage/modelsListPage";

const Main = ({ history }) => {
    const params = useParams();
    const { modelId } = params;
    return (
        <>
            {modelId ? (
                <ModelPage history={ history }/>
            ) : (
                <ModelsListPage/>
            )}
        </>
    );
};

Main.propTypes = {
    history: PropTypes.object
};

export default Main;
