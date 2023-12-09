import React from "react";
import styles from "../../css/company/Room.module.css";
import BasicInfo from "./info/BasicInfo";
import PriceInfo from "./info/priceInfo";
import ExplainInfo from "./info/ExplainInfo";
import { useNavigate } from "react-router-dom";

export default function InputSection() {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className={styles.room_upload_wrapper}>
                <h2 className={styles.room_upload_h2}>객실등록</h2>
                <div className={styles.room_upload_div}>
                    <BasicInfo />
                </div>
                <div className={styles.room_upload_div}>
                    <PriceInfo />
                </div>
                <div className={styles.room_upload_div}>
                    <ExplainInfo />
                </div>
                <div className={styles.room_upload_button_wrapper}>
                    <button>저장</button>
                    <button onClick={goBack}>취소</button>
                </div>
            </div>
        </>
    );
}
