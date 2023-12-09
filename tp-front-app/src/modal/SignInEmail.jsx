import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";
import logoIcon from "../img/main/logoIcon.svg";
import SignUpUser from "./SignUpUser";
import SignUpCom from "./SignUpCom";
import axios from "axios";
import { server } from "../util/CommonVal";
import { login } from "../util/CommonUri";

export default function SignInEmail({ closeModal }) {
    const handleModal = () => {closeModal();};
    const [signUpUserModal, setSignUpUserModal] = useState(false);
    const [signUpComModal, setSignUpComModal] = useState(false);
    const showSignUpUser = () => {setSignUpUserModal(true);}
    const showSignUpCom = () => {setSignUpComModal(true)};
    const closeSignUpUser = () => {setSignUpUserModal(false);}
    const closeSignUpCom = () => {setSignUpComModal(false);}
    const closeAll = () => {
        setSignUpUserModal(false);
        closeModal();
    }
    
    const [type, setType] = useState("ROLE_USER");
    const handleType = (type) => {setType(type);};
    const handleSubmit = async () => {
        try {
            const userData = {
                userEmail: document.getElementById("userEmail").value,
                userPwd: document.getElementById("userPwd").value,
                type: type,
            };
    
            const response = await axios.post(server + login, userData);
            console.log(response.data);
        } catch (error) {
            alert(error);
            console.error("이메일 로그인 오류:", error);
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
                    <strong className={styles.sign_modal_strong}
                    onClick={showSignUpUser}>일반 회원가입</strong>
                </span>
                <span className={styles.sign_modal_signup}>
                    <strong className={styles.sign_modal_strong}
                    onClick={showSignUpCom}>기업 회원가입</strong>
                </span>
            </div>
        {signUpUserModal ? <SignUpUser closeAll={closeAll} closeSignUp={closeSignUpUser}/> : null}
        {signUpComModal ? <SignUpCom closeAll={closeAll} closeSignUp={closeSignUpCom}/> : null}
        </div>
    );
}

SignInEmail.propTypes = {
    closeModal: PropTypes.func,
};
