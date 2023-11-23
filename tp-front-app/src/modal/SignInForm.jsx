import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";

const SearchForm = ({ item }) => {
    return (
        <li>
            <img
                className={styles.sign_modal_img}
                src={`./img/modal/sign${item.id + 1}.png`}
            />
            {item.signInName}
        </li>
    );
};

SearchForm.propTypes = {
    item: PropTypes.object,
};

export default SearchForm;
