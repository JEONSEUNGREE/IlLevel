import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmPlayListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";

export default function RcmPlaySection() {
    const rcmPlayList = useRecoilValue(rcmPlayListState);

    return (
        <div className={styles.rcm_wrap}>
            <h2 className={styles.rcm_h2}>추천 즐길거리 : 유머 강아지</h2>
            <span className={styles.rcm_span}>이번 달, 재밌는 멍멍이.</span>
            <button className={styles.rcm_more_button}>더 보기</button>
            <ul className={styles.rcm_list_wrap}>
                {rcmPlayList.map((item) => (
                    <RcmCard props={item} key={item.imageUrl} />
                ))}
            </ul>
            <span className={styles.rcm_carousel_left}>←</span>
            <span className={styles.rcm_carousel_right}>→</span>
        </div>
    );
}
