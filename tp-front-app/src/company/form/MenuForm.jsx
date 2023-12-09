import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/company/Company.module.css";

const MenuForm = ({ item, onClick, selected }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <li
            className={`${styles.info_menu_li} ${
                selected ? styles.clicked : ""
            }`}
            onClick={handleClick}
        >
            {item.name}
        </li>
    );
};

MenuForm.propTypes = {
    item: PropTypes.object,
    name: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
};

export default MenuForm;
