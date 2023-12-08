import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Profile.module.css";

const SettingForm = ({ item }) => {
    const handleRedirect = () => {
        window.location.href = item.path;
    };

    return <li className={styles.setting_modal_li}
            onClick={handleRedirect}>{item.name}</li>;
};

SettingForm.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        path: PropTypes.string,
    }),
};

export default SettingForm;
