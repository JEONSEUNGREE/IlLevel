import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/main/Main.module.css";

const RcmCard = ({ roomNm, comName, thumbNail, ratingAvg, reviewCount }) => {
    return (
        <li className={styles.card_wrapper}>
            <img className={styles.card_img} src={thumbNail} alt="thumbNail" />
            <div className={styles.card_like}>
                <span>♡</span>
            </div>
            <div className={styles.card_title}>{comName}</div>
            <div>
                <span className={styles.card_star}>{ratingAvg}</span>
                <span className={styles.card_count}>{reviewCount}</span>
            </div>
            <div className={styles.card_inform}>{roomNm}</div>
        </li>
    );
};

RcmCard.propTypes = {
    roomNm: PropTypes.string,
    comName: PropTypes.string,
    thumbNail: PropTypes.string,
    ratingAvg: PropTypes.number,
    reviewCount: PropTypes.number,
};

export default RcmCard;
