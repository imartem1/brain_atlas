import React, { useState } from "react";
import "./modelsListPage.css";

const ModelsListPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [models] = useState({
        T01: {
            name: "T1",
            id: "T1.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: true,
            inferior_longitudinal_fasciculus: false,
            uncinate_fasciculus: false,
            frontal_aslant_tract: false
        },
        T02: {
            name: "T2",
            id: "T2.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: true,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: true,
            frontal_aslant_tract: true
        },
        T03: {
            name: "T3",
            id: "T3.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: false,
            uncinate_fasciculus: false,
            frontal_aslant_tract: false
        },
        T04: {
            name: "T4",
            id: "T4.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: false,
            uncinate_fasciculus: true,
            frontal_aslant_tract: true
        },
        T05: {
            name: "Tum2_St79_fc",
            id: "Tum2_St79_fc.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: false,
            frontal_aslant_tract: false
        },
        T06: {
            name: "Br1_AF_St5-6",
            id: "Br1_AF_St5-6.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: false,
            frontal_aslant_tract: true
        },
        T07: {
            name: "B1r1_AF_St5-6",
            id: "B1r1_AF_St5-6.glb",
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: false,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: false,
            frontal_aslant_tract: true
        }
    });

    const handleSearch = ({ target }) => {
        console.log(target.value);
        setSearchQuery(target.value);
    };

    const filteredModels = Object.values(models).filter(
        (model) =>
            model.name
                .toLowerCase()
                .indexOf(searchQuery.toLowerCase()) !== -1
    );

    return (
    <div className="modelslist">
        <div className="search">
            <input
                type="text"
                id="search"
                placeholder="Поиск модели"
                onChange={handleSearch}
                value={searchQuery}
            />
        </div>
        <div className="models">
            {filteredModels.map((model) => (
                <div className="model" key={model.id}>
                    <p className="modelname">
                        {model.name}
                    </p>
                    <div className="tracks">
                        <p>{model.anterior_segment ? ("anterior_segment") : ("-") }</p>
                        <p>{model.posterior_segment ? ("posterior_segment") : ("-") }</p>
                        <p>{model.long_segment ? ("long_segment") : ("-")}</p>
                        <p>{model.fronto_occipital_fasciculus ? ("fronto_occipital_fasciculus") : ("-") }</p>
                        <p>{model.inferior_longitudinal_fasciculus ? ("inferior_longitudinal_fasciculus") : ("-") }</p>
                        <p>{model.uncinate_fasciculus ? ("uncinate_fasciculus") : ("-")}</p>
                        <p>{model.frontal_aslant_tract ? ("frontal_aslant_tract") : ("-")}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default ModelsListPage;
