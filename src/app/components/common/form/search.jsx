import React from "react";
import PropTypes from "prop-types";
import "./search.css";

const Search = ({ onChange, data }) => {
    return (
    <div className="search">
        <input
            type="text"
            id="search"
            placeholder="Поиск модели"
            onChange={onChange}
            value={data}
        />
    </div>
    );
};

Search.propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.string
};

export default Search;
