import React from "react";
import PropTypes from "prop-types";
import styles from "../css/main/Main.module.css";

const NavForm = ({ item }) => {
    return <li className={styles.navbar_menu}>{item.navName}</li>;
};

NavForm.propTypes = {
    item: PropTypes.object,
    navName: PropTypes.node,
};

export default NavForm;
