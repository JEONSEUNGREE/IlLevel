import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/main/Main.module.css";

const RcmLocalCard = ({ props }) => {
    const { imageUrl, title, contents } = props;

    return (
        <li className={styles.card_wrapper}>
            <img className={styles.card_img} src={imageUrl} alt="image" />
            <div className={styles.card_like}>
                <span>♡</span>
            </div>
            <div className={styles.card_title}>{title}</div>
            <div>
                <span className={styles.card_star}>★★★★☆</span>
                <span className={styles.card_count}>231,114</span>
            </div>
            <div className={styles.card_inform}>{contents}</div>
        </li>
    );
};

RcmLocalCard.propTypes = {
    props: PropTypes.object,
    maxWidth: PropTypes.number,
    height: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    contents: PropTypes.string,
};

export default RcmLocalCard;
