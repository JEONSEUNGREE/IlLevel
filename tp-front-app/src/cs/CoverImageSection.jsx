import React from "react";
import styles from "../css/cs/Cs.module.css";

export default function CoverImageSection() {
    return (
        <div className={styles.cover_wrapper}>
            <div className={styles.cover_widthLimit}>
                <div className={styles.cover_text}>고객센터</div>
            </div>
        </div>
    );
}
