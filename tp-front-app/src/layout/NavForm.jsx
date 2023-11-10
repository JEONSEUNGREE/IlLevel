import React from "react";
import PropTypes from "prop-types";

const NavForm = ({ item }) => {
    return <div className="main-nav-form">{item.navName}</div>;
};

NavForm.propTypes = {
    item: PropTypes.object,
    navName: PropTypes.node,
};

export default NavForm;
