import React from "react";
import styles from "../css/user/User.module.css";
import follow from "../img/user/follow.png";

export default function ProfileFollowSection() {

    return (
        <>
            <img src={follow} alt="팔로우" className={styles.info_follow_img}/>
            <span>팔로우</span>
        </>
    );
}
