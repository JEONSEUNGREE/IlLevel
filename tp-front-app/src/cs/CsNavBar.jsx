import React from "react";
import styles from "../css/cs/Cs.module.css";

export default function CsNavBar() {
    return (
        <div className={styles.nav_wrapper}>
            <ul>
                <li className={styles.nav_list}>
                    <span>문의내역</span>
                </li>
                <li className={styles.nav_contact}>
                    <span>문의하기</span>
                </li>
            </ul>
        </div>
    );
}
