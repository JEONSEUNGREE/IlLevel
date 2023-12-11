import React, { useState } from "react";
import styles from "../css/cs/Cs.module.css";
import CsContentSection from "./CsContentSection";

export default function CsNavBar() {
    const [content, setContent] = useState('문의 내역');
    const handleContent = (selectedItem) => {
        setContent(selectedItem);
    };

    return (
        <>
            <div className={styles.nav_wrapper}>
                <ul>
                    <li className={styles.nav_list} onClick={() => handleContent('문의 내역')}>
                        <span>문의 내역</span>
                    </li>
                    <li className={styles.nav_contact} onClick={() => handleContent('문의 등록')}>
                        <span>문의 등록</span>
                    </li>
                </ul>
            </div>
            <CsContentSection content={content}/>
        </>
    );
}
