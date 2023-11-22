import React from "react";
import styles from "../css/Sign.module.css";
import logoIcon from "../img/main/logoIcon.svg";

export default function SignIn() {
    return (
        <div className={styles.sign_modal_wrapper}>
            <div className={styles.sign_modal_x}>X</div>
            <div>
                <img
                    className={styles.sign_modal_logo}
                    src={logoIcon}
                    alt="TripPenguinLogo"
                />
                <h2 className={styles.sign_modal_h2}>
                    로그인하여 트립펭귄을 이용하세요.
                </h2>
            </div>
            <ul className={styles.sign_modal_ul}>
                <li>구글 로그인</li>
                <li>네이버 로그인</li>
                <li>카카오 로그인</li>
                <li>이메일 로그인</li>
            </ul>
            <div className={styles.sign_modal_span}>
                <span>
                    계속 진행할 경우, 트립펭귄의 개인정보 취급방침 및 쿠키
                    정책에 동의한 것으로 간주됩니다.
                </span>
                <span>
                    이 사이트는 reCAPTCHA에 의해 보호되며 Google 개인정보
                    취급방침 및 이용약관이 적용됩니다.
                </span>
            </div>
        </div>
    );
}
