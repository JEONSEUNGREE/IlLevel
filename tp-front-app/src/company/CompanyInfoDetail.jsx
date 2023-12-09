import React from "react";
import styles from "../css/company/Company.module.css";
import ManageRoom from "./ManageRoom";

export default function CompanyInfoDetail() {
    return (
        <div className={styles.info_detail_body}>
            <div className={styles.info_detail_wrapper}>
                <div className={styles.info_detail_introduce}>
                    <ManageRoom />
                </div>
            </div>
        </div>
    );
}
