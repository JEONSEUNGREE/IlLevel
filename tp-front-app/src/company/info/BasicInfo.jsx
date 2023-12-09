import React from "react";
import styles from "../../css/company/Room.module.css";

export default function BasicInfo() {
    return (
        <>
            <h3>기본정보</h3>
            <div className={styles.room_upload_input_container}>
                <span>객실명</span>
                <input
                    className={styles.room_upload_input}
                    type="text"
                    id=""
                    spellCheck={false}
                />
            </div>
            <div className={styles.room_upload_input_container}>
                <span>객실수</span>
                <input
                    className={styles.room_upload_input}
                    type="text"
                    id=""
                    spellCheck={false}
                />
            </div>
            <div className={styles.room_upload_input_container}>
                <span>주소</span>
                <input
                    className={styles.room_upload_input}
                    type="text"
                    id=""
                    spellCheck={false}
                />
            </div>
            <div className={styles.room_upload_input_container}>
                <span>인원</span>
                <input
                    className={styles.room_upload_input}
                    type="text"
                    id=""
                    spellCheck={false}
                />
            </div>
            <div className={styles.room_upload_input_container}>
                <span>체크인</span>
                <input
                    className={styles.room_upload_input}
                    type="time"
                    id=""
                    spellCheck={false}
                />
            </div>
            <div className={styles.room_upload_input_container}>
                <span>체크아웃</span>
                <input
                    className={styles.room_upload_input}
                    type="time"
                    id=""
                    spellCheck={false}
                />
            </div>
        </>
    );
}
