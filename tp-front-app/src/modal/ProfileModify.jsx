import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Profile.module.css";

export default function ProfileModify() {
    return (
        <div className={styles.modify_wrapper}>
            <div className={styles.modify_cover}></div>
            <div className={styles.modify_content}>
                <div className={styles.modify_img}>
                    <div className={styles.modify_img_content}>
                        <span className={styles.modify_img_message}>
                            프로필 사진 변경
                        </span>
                    </div>
                </div>
                <span className={styles.modify_input_span}>
                    이름
                    <input type="text" className={styles.modify_input_name} />
                </span>
                <span className={styles.modify_input_span}>
                    현재 거주 도시
                    <input type="text" className={styles.modify_input_city} />
                </span>
                <span className={styles.modify_input_span}>
                    개인 정보
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className={styles.modify_textarea}
                    ></textarea>
                </span>
                <button className={styles.modify_button_cancel}>취소</button>
                <button className={styles.modify_button_save}>저장</button>
            </div>
        </div>
    );
}

ProfileModify.propTypes = {
    closeModal: PropTypes.func,
};
