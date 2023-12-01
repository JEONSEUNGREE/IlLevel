import React from "react";
import PropTypes from "prop-types";

const InfoForm = ({ item, distinction }) => {
    return <li>{distinction === "name" ? item.infoName : item.infoCount}</li>;
};

InfoForm.propTypes = {
    item: PropTypes.object,
    distinction: PropTypes.oneOf(["name", "count"]).isRequired,
};

export default InfoForm;
