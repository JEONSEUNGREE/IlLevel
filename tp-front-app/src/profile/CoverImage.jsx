import React from "react";
import styles from "../css/profile/Profile.module.css";

export default function CoverImage() {
    return (
        <div>
            <img className={styles.cover_img} />
            <span className={styles.cover_message}>커버 사진 추가하기</span>
        </div>
    );
}
