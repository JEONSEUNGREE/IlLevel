import React from "react";
import PropTypes from "prop-types";

const StatusForm = ({ item }) => {
    return <li>{item.statusName}</li>;
};

StatusForm.propTypes = {
    item: PropTypes.object,
    statusName: PropTypes.node,
};

export default StatusForm;
