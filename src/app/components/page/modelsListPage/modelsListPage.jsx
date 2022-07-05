import React, { useState } from "react";
import Search from "../../common/form/search";
import Models from "../../ui/models";

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
    <div>
        <Search onChange={handleSearch} data={searchQuery}/>
        <Models models={filteredModels}/>
    </div>
    );
};

export default ModelsListPage;
