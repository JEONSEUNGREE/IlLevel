import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";
import logoIcon from "../img/main/logoIcon.svg";
import SignUp from "./SignUp";
import axios from "axios";
import { server } from "../util/CommonVal";
import { login } from "../util/CommonUri";

export default function SignInEmail({ closeModal }) {
    const handleModal = () => {closeModal();};
    const [signUpModal, setSignUpModal] = useState(false);
    const showSignUp = () => {setSignUpModal(true);}
    const closeSignUp = () => {setSignUpModal(false);}
    const closeAll = () => {
        setSignUpModal(false);
        closeModal();
    }
    
    const [type, setType] = useState("ROLE_USER");
    const handleType = (type) => {setType(type);};
    const handleSubmit = async () => {
        if (type === "ROLE_USER") {
            try {
                const userData = {
                    userEmail: document.getElementById("userEmail").value,
                    userPwd: document.getElementById("userPwd").value,
                    type: type,
                };
                console.log(userData.userEmail);
                const response = await axios.post(server + login, userData);
                console.log(response.data);
                alert(response.data);
            } catch (error) {
                alert(error);
                console.error("로그인 오류:", error);
            }
        } else if (type === "ROLE_COM") {
            // 기업 회원 로그인 처리
        } else if (type === "ROLE_ADMIN") {
            // 관리자 로그인 처리
        }
    };

    return (
        <div className={styles.sign_email_modal_wrapper}>
            <div className={styles.sign_modal_x} onClick={handleModal}>
                ×
            </div>
            <div>
                <img
                    className={styles.sign_email_modal_logo}
                    src={logoIcon}
                    alt="TripPenguinLogo"
                />
                <h2 className={styles.sign_email_modal_h2}>
                    {`어서 오세요.`}
                </h2>

                <label className={styles.sign_modal_label}>
                    <input type="radio" name="type" 
                    checked={type === "ROLE_USER"}
                    onChange={() => handleType("ROLE_USER")}/>
                    <span className={styles.sign_modal_span}>일반 회원</span>
                </label>
                <label className={styles.sign_modal_label}>
                    <input type="radio" name="type" 
                    checked={type === "ROLE_COM"}
                    onChange={() => handleType("ROLE_COM")}/>
                    <span className={styles.sign_modal_span}>기업 회원</span>
                </label>
                <label className={styles.sign_modal_label}>
                    <input type="radio" name="type" 
                    checked={type === "ROLE_ADMIN"}
                    onChange={() => handleType("ROLE_ADMIN")}/>
                    <span className={styles.sign_modal_span}>관리자</span>
                </label>
                
                
                <div className={styles.sign_modal_input}>
                    <span className={styles.sign_email_modal_span}>이메일 주소</span>
                    <input className={styles.sign_email_modal_input}
                    type="email" placeholder="이메일" 
                    id="userEmail" spellCheck={false}/>
                </div>
                <div className={styles.sign_modal_input}>
                    <span className={styles.sign_email_modal_span}>비밀번호</span>
                    <input className={styles.sign_email_modal_input}
                    type="password" placeholder="비밀번호" 
                    id="userPwd"/>
                </div>
                <span className={styles.sign_modal_forgot_password}>비밀번호 찾기</span>
                <button className={styles.sign_modal_signin} 
                onClick={handleSubmit}>로그인</button>

                <span className={styles.sign_modal_signup}>
                    {`아직 `}
                    <strong className={styles.sign_modal_strong}
                    onClick={showSignUp}>회원가입</strong>
                    을 하지 않으셨나요?
                </span>
            </div>
        {signUpModal ? <SignUp closeAll={closeAll} closeSignUp={closeSignUp}/> : null}
        </div>
    );
}

SignInEmail.propTypes = {
    closeModal: PropTypes.func,
};
