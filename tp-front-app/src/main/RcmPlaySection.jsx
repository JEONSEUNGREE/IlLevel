import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmLocalListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";

export default function RcmPlaySection() {
    const rcmLocalList = useRecoilValue(rcmLocalListState);

    return (
        <div className={styles.rcm_local_wrap}>
            <h2 className={styles.rcm_local_h2}>스포트라이트: 말티즈</h2>
            <span className={styles.rcm_local_span}>
                귀여운 멍멍이들을 둘러보세요.
            </span>
            <button className={styles.rcm_local_more_button}>더 보기</button>
            <ul className={styles.rcm_local_list_wrap}>
                {rcmLocalList.map((item) => (
                    <RcmCard props={item} key={item.imageUrl} />
                ))}
            </ul>
        </div>
    );
}
