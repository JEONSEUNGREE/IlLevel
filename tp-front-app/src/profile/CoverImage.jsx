import React from "react";
import styles from "../css/profile/Profile.module.css";
import default_background from "../img/profile/defaultBackground.png";

export default function CoverImage() {
    return (
        <div className={styles.cover_wrapper}>
            <img className={styles.cover_img} src={default_background} />
            <span className={styles.cover_message}>커버 사진 추가하기</span>
        </div>
    );
}
