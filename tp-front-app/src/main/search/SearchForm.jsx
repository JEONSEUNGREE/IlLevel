import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/main/Main.module.css";

const SearchForm = ({ item }) => {
    return (
        <li className={styles.search_menu}>
            <img
                src={`./img/search${item.id + 1}.png`}
                className={styles.search_menu_img}
            />
            {item.searchName}
        </li>
    );
};

SearchForm.propTypes = {
    item: PropTypes.object,
    searchName: PropTypes.node,
};

export default SearchForm;
