import React from "react";
import styles from "../css/cs/Cs.module.css";
import CsListContent from "./content/CsListContent";
// import CsContactContent from "./content/CsContactContent";

export default function CsContentSection() {
    return (
        <div className={styles.content_wrapper}>
            <div className={styles.content_container}>
                {/* 클릭한 메뉴에 따라서 문의내역과 문의하기 컴포넌트 출력하기 */}
                <CsListContent />
                {/* <CsContactContent/> */}
            </div>
        </div>
    );
}
