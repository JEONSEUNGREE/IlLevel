import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";

const SearchForm = ({ item }) => {
    const handleRedirect = () => {
        window.location.href = item.path; // 클릭된 항목의 path로 페이지 이동
    };

    return (
        <li onClick={handleRedirect}>
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
