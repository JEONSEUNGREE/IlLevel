import React from "react";
import PropTypes from "prop-types";
import styles from "../css/cs/Cs.module.css";
import CsListContent from "./content/CsListContent";
import CsContactContent from "./content/CsContactContent";

export default function CsContentSection({ content }) {
    return (
        <div className={styles.content_wrapper}>
            <div className={styles.content_container}>
                {content === '문의 내역' ? <CsListContent /> : null}
                {content === '문의 등록' ? <CsContactContent /> : null}
            </div>
        </div>
    );
}

CsContentSection.propTypes = {
    content: PropTypes.object,
};
