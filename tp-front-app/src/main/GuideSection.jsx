import React from "react";
import styles from "../css/main/Main.module.css";

export default function GuideSection() {
    return (
        <div className={styles.guide_wrap}>
            <h1 className={styles.guide_h1}>
                올해 최강의 고양이를 같이 보아요
            </h1>
            <span className={styles.guide_span}>
                연말연시 최고의 추천 냥이를 확인하세요
            </span>
            <button className={styles.guide_button}>가이드 보기</button>
        </div>
    );
}
