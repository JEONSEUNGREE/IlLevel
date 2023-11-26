import React from "react";
import styles from "../css/profile/Profile.module.css";

export default function ProfileInfo() {
    return (
        <div className={styles.info_wrapper}>
            <div className={styles.info_img}></div>
            <h2 className={styles.info_name}>펭귄</h2>
            <div className={styles.info_list_wrapper}>
                <ul className={styles.info_list_name}>
                    <li>포스팅</li>
                    <li>팔로워</li>
                    <li>팔로잉</li>
                </ul>
                <ul className={styles.info_list_count}>
                    <li>0</li>
                    <li>0</li>
                    <li>0</li>
                </ul>
            </div>
            <ul className={styles.info_menu_wrapper}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className={styles.info_modify}></div>
            <div className={styles.info_setting}></div>
        </div>
    );
}
