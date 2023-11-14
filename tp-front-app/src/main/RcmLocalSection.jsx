import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmLocalListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";

export default function RcmLocalSection() {
    const rcmLocalList = useRecoilValue(rcmLocalListState);

    return (
        <div className={styles.rcm_wrap}>
            <h2 className={styles.rcm_h2}>추천 여행 : 말티즈</h2>
            <span className={styles.rcm_span}>
                귀여운 멍멍이들을 둘러보세요.
            </span>
            <button className={styles.rcm_more_button}>더 보기</button>
            <ul className={styles.rcm_list_wrap}>
                {rcmLocalList.map((item) => (
                    <RcmCard props={item} key={item.imageUrl} />
                ))}
            </ul>
            <span className={styles.rcm_carousel_left}>←</span>
            <span className={styles.rcm_carousel_right}>→</span>
        </div>
    );
}
