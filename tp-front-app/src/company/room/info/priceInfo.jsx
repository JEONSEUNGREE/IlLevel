import React from "react";
import styles from "../../../css/company/Room.module.css";

export default function PriceInfo() {
    return (
        <>
            <h3>가격정보</h3>
            <div className={styles.room_upload_input_container}>
                <span>객실가격</span>
                <input
                    className={styles.room_upload_input}
                    type="text"
                    id=""
                    spellCheck={false}
                />
            </div>
            <div className={styles.room_upload_input_container}>
                <span>기준인원 초과당 요금</span>
                <input
                    className={styles.room_upload_input}
                    type="text"
                    id=""
                    spellCheck={false}
                />
            </div>
        </>
    );
}
