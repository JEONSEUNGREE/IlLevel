import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Profile.module.css";

export default function ProfileModify({ closeModal }) {
    const handleModal = () => {
        closeModal();
    };

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
                <div className={styles.modify_input}>
                    <span className={styles.modify_input_span}>이름</span>
                    <input type="text" className={styles.modify_input_name} />
                </div>
                <div className={styles.modify_input}>
                    <span className={styles.modify_input_span}>
                        현재 거주 도시
                    </span>
                    <input type="text" className={styles.modify_input_city} />
                </div>
                <div className={styles.modify_input}>
                    <span className={styles.modify_input_span}>개인 정보</span>
                    <textarea className={styles.modify_textarea}></textarea>
                </div>
                <button
                    className={styles.modify_button_cancel}
                    onClick={handleModal}
                >
                    취소
                </button>
                <button className={styles.modify_button_save}>저장</button>
            </div>
        </div>
    );
}

ProfileModify.propTypes = {
    closeModal: PropTypes.func,
};
