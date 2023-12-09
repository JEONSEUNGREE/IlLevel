import React from "react";
import styles from "../../css/company/Room.module.css";

export default function ExplainInfo() {
    return (
        <>
            <h3>시설정보</h3>
            <div className={styles.room_upload_input_container}>
                <span className={styles.room_upload_span_explain}>객실설명</span>
                <textarea name="" id=""></textarea>
            </div>
            <div className={styles.room_upload_input_container}>
                <span className={styles.room_upload_span_image}>이미지</span>
                <button>이미지 업로드</button>
            </div>
        </>
    );
}
