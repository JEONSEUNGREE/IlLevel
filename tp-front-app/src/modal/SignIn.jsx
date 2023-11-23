import React from "react";
import { useRecoilValue } from "recoil";
import { signInListState } from "../state/modal/SignInListState";
import SignInForm from "./SignInForm";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";
import logoIcon from "../img/main/logoIcon.svg";

export default function SignIn({ closeSignInModal }) {
    const signInList = useRecoilValue(signInListState);

    const handleModal = () => {
        closeSignInModal();
    };

    return (
        <div className={styles.sign_modal_wrapper}>
            <div className={styles.sign_modal_x} onClick={handleModal}>
                ×
            </div>
            <div>
                <img
                    className={styles.sign_modal_logo}
                    src={logoIcon}
                    alt="TripPenguinLogo"
                />
                <h2 className={styles.sign_modal_h2}>
                    {`로그인하여 
                    트립펭귄을 이용하세요.`}
                </h2>
            </div>
            <ul className={styles.sign_modal_ul}>
                {signInList.map((item) => (
                    <SignInForm item={item} key={item.signInName} />
                ))}
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

// props의 타입을 정의하고 유효성을 검사
SignIn.propTypes = {
    closeSignInModal: PropTypes.func,
};
