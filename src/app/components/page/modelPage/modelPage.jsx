import React from "react";
import "./modelPage.css";
import ModelView from "../../common/3D/modelView/modelView";

const ModelPage = () => {
    return (
        <div className="modelpage">
            <div>
                <h2>Model editor</h2>
            </div>
            <ModelView/>
        </div>
    );
};

export default ModelPage;
