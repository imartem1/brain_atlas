import React from "react";
import { useParams } from "react-router-dom";
import ModelPage from "../components/page/modelPage/modelPage";
import ModelsListPage from "../components/page/modelsListPage/modelsListPage";

const Models = () => {
    const params = useParams();
    const { modelId } = params;
    return (
        <>
            {modelId ? (
                <ModelPage/>
            ) : (
                <ModelsListPage/>
            )}
        </>
    );
};

export default Models;
