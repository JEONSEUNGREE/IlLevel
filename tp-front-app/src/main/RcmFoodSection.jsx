import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmFoodListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";

export default function RcmFoodSection() {
    const rcmFoodList = useRecoilValue(rcmFoodListState);

    return (
        <div className={styles.rcm_wrap}>
            <h2 className={styles.rcm_h2}>추천 음식점 : 사료 맛집</h2>
            <span className={styles.rcm_span}>멍멍이들의 최애 음식 모음</span>
            <button className={styles.rcm_more_button}>더 보기</button>
            <ul className={styles.rcm_list_wrap}>
                {rcmFoodList.map((item) => (
                    <RcmCard props={item} key={item.imageUrl} />
                ))}
            </ul>
            <span className={styles.rcm_carousel_left}>←</span>
            <span className={styles.rcm_carousel_right}>→</span>
        </div>
    );
}
