import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmFoodListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";
import carousel from "../js/main/Main";

export default function RcmFoodSection() {
    const rcmFoodList = useRecoilValue(rcmFoodListState);

    // 캐러셀
    const {
        visibleCards,
        showNextCards,
        showPrevCards,
        canShowPrev,
        canShowNext,
    } = carousel(rcmFoodList.length);

    return (
        <div className={styles.rcm_wrap}>
            <h2 className={styles.rcm_h2}>추천 음식점 : 사료 맛집</h2>
            <span className={styles.rcm_span}>멍멍이들의 최애 음식 모음</span>
            <button className={styles.rcm_more_button}>더 보기</button>
            <ul className={styles.rcm_list_wrap}>
                {rcmFoodList
                    .slice(visibleCards, visibleCards + 4)
                    .map((item, index) => (
                        <RcmCard props={item} key={index} />
                    ))}
            </ul>
            <span
                className={styles.rcm_carousel_left}
                onClick={showPrevCards}
                style={{ display: canShowPrev ? "block" : "none" }}
            >
                ←
            </span>
            <span
                className={styles.rcm_carousel_right}
                onClick={showNextCards}
                style={{ display: canShowNext ? "block" : "none" }}
            >
                →
            </span>
        </div>
    );
}
