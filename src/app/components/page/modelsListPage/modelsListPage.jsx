import React, { useState } from "react";
import "./modelsListPage.css";

const ModelsListPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = ({ target }) => {
        console.log(target.value);
        setSearchQuery(target.value);
    };
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
        <div>Модели</div>
    </div>
    );
};

export default ModelsListPage;
