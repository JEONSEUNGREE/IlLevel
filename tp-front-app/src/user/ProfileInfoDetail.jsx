import React from "react";
import styles from "../css/user/User.module.css";

export default function ProfileInfoDetail() {
    return (
        <div className={styles.info_detail_body}>
            <div className={styles.info_detail_wrapper}>
                <div className={styles.info_detail_introduce}>소개</div>
                <div className={styles.info_detail}>프로필</div>
            </div>
        </div>
    );
}
