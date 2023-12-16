import React from "react";
import styles from "../css/layout/Footer.module.css";
import logoIcon from "../img/main/logoIcon.svg";

export default function Footer() {
    return (
        <div className={styles.footer_wrap}>
            <div className={styles.footer_menu_wrap}>
                <img
                    className={styles.footer_logo}
                    src={logoIcon}
                    alt="TripPenguinLogo"
                />
                <span className={styles.footer_span_1}>
                    ⓒ 2023 TripPenguin All rights reserved.
                </span>
                <ul className={styles.footer_list_wrap}>
                    <li>이용 약관</li>
                    <li>개인정보 취급방침 및 쿠키 정책</li>
                    <li>쿠키 동의</li>
                    <li>사이트맵</li>
                    <li>문의하기</li>
                </ul>
                <span className={styles.footer_span_2}>
                    대한민국의 한국어 사용자를 대상으로 하는 트립펭귄 웹사이트
                    버전입니다.
                </span>
            </div>
        </div>
    );
}
