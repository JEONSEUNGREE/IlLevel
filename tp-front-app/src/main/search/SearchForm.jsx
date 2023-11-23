import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/main/Main.module.css";

const SearchForm = ({ item, handleSearch, selectedItem }) => {
    const isSelected = selectedItem && selectedItem.id === item.id;
    const isReqMain = item.id === 0;

    return (
        <li
            className={`${styles.search_menu} ${
                isSelected ? styles.clicked : ""
            } ${isReqMain && !selectedItem ? styles.clicked : ""}`}
            onClick={() => handleSearch(item)}
        >
            <img
                src={`./img/main/search${item.id + 1}.png`}
                className={styles.search_menu_img}
            />
            {item.searchName}
        </li>
    );
};

SearchForm.propTypes = {
    item: PropTypes.object,
    handleSearch: PropTypes.func,
    searchName: PropTypes.node,
    selectedItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
};

export default SearchForm;
