import React from "react";
import { useRecoilValue } from "recoil";
import { signInListState } from "../state/modal/SignInListState";
import SignInForm from "./SignInForm";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";
import logoIcon from "../img/main/logoIcon.svg";

export default function SignIn({ closeModal }) {
    const signInList = useRecoilValue(signInListState);

    const handleModal = () => {
        closeModal();
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
                    <SignInForm item={item} key={item.signInName}/>
                ))}
            </ul>
        </div>
    );
}

// props의 타입을 정의하고 유효성을 검사
SignIn.propTypes = {
    closeModal: PropTypes.func,
};
