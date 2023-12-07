import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Profile.module.css";

const SettingForm = ({ item }) => {
    return <li className={styles.setting_modal_li}>{item.name}</li>;
};

SettingForm.propTypes = {
    item: PropTypes.object,
    name: PropTypes.node,
};

export default SettingForm;
