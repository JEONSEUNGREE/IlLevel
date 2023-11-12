import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmFoodListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";

export default function RcmFoodSection() {
    const rcmFoodList = useRecoilValue(rcmFoodListState);

    return (
        <div className={styles.rcm_food_wrap}>
            <h2 className={styles.rcm_food_h2}>오늘의 인기 멍멍이</h2>
            <span className={styles.rcm_food_span}>
                다른 유저가 좋아한 멍멍이입니다.
            </span>
            <button className={styles.rcm_food_more_button}>더 보기</button>
            <ul className={styles.rcm_food_list_wrap}>
                {rcmFoodList.map((item) => (
                    <RcmCard props={item} key={item.imageUrl} />
                ))}
            </ul>
        </div>
    );
}
