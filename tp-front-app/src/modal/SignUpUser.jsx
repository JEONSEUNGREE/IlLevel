import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Sign.module.css";
import logoIcon from "../img/main/logoIcon.svg";
import axios from "axios";
import { server } from "../util/CommonVal";
import { signup_user } from "../util/CommonUri";

export default function SignUpUser({ closeAll, closeSignUp }) {
    const [formData, setFormData] = useState({
        userFirst: "",
        userLast: "",
        userNick: "",
        userCity: "",
        userEmail: "",
        userPwd: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const endpoint = server + signup_user;
            const response = await axios.post(endpoint, formData);
            console.log(response.data);
        } catch (error) {
            console.error("회원가입 오류:", error);
        }
    };

    const handleAll = () => {
        closeAll();
    };

    const handleSignUp = () => {
        closeSignUp();
    }

    return (
        <form className={styles.sign_up_modal_wrapper} onSubmit={handleSubmit}>
            <div className={styles.sign_modal_x} onClick={handleAll}>
                ×
            </div>
            <div>
                <img
                    className={styles.sign_email_modal_logo}
                    src={logoIcon}
                    alt="TripPenguinLogo"
                />
                <h2 className={styles.sign_up_modal_h2}>
                    {`가입하고 트립펭귄의
                    가장 좋은 서비스를 이용하세요.`}
                </h2>
            </div>
            <div className={styles.sign_up_modal_div}>
                <span className={styles.sign_up_modal_span}>이름</span>
                <input className={styles.sign_up_modal_input} 
                type="text" placeholder="이름"
                name="userFirst"
                value={formData.userFirst}
                onChange={handleInput}/>
            </div>
            <div className={styles.sign_up_modal_div}>
                <span className={styles.sign_up_modal_span}>성</span>
                <input className={styles.sign_up_modal_input} 
                type="text" placeholder="성"
                name="userLast"
                value={formData.userLast}
                onChange={handleInput}/>
            </div>
            <div className={styles.sign_up_modal_div}>
                <span className={styles.sign_up_modal_span}>닉네임</span>
                <input className={styles.sign_up_modal_input} 
                type="text" placeholder="닉네임"
                name="userNick"
                value={formData.userNick}
                onChange={handleInput}/>
            </div>
            <div className={styles.sign_up_modal_div}>
                <span className={styles.sign_up_modal_span}>거주지</span>
                <input className={styles.sign_up_modal_input} 
                type="text" placeholder="거주지"
                name="userCity"
                value={formData.userCity}
                onChange={handleInput}/>
            </div>
            <div className={styles.sign_up_modal_div}>
                <span className={styles.sign_up_modal_span}>이메일 주소</span>
                <input className={styles.sign_up_modal_input} 
                type="email" placeholder="이메일"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleInput}/>
            </div>
            <div className={styles.sign_up_modal_div}>
                <span className={styles.sign_up_modal_span}>비밀번호</span>
                <input className={styles.sign_up_modal_input} 
                type="password" placeholder="비밀번호"
                name="userPwd"
                value={formData.userPwd}
                onChange={handleInput}/>
            </div>
            <button className={styles.sign_up_modal_signin} type="submit">가입하기</button>
            <span className={styles.sign_up_modal_signup}>
                    {`이미 `}
                    <strong className={styles.sign_modal_strong} onClick={handleSignUp}>회원</strong>
                    이세요?
                </span>
        </form>
    );
}

SignUpUser.propTypes = {
    closeAll: PropTypes.func,
    closeSignUp: PropTypes.func,
};
