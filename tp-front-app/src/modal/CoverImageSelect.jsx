import React from "react";
import PropTypes from "prop-types";
import styles from "../css/modal/Profile.module.css";
import default_background from "../img/profile/defaultBackground.png";

export default function CoverImageSelect({ closeModal }) {
    const handleModal = () => {
        closeModal();
    };

    return (
        <div className={styles.cover_body}>
            <div className={styles.cover_select_modal_wrapper}>
                <div className={styles.cover_select_modal_info}>
                    <span className={styles.cover_select_modal_span}>
                        <img
                            className={styles.cover_select_icon}
                            src={default_background}
                        />
                        커버 사진 선택
                    </span>
                    <span
                        className={styles.cover_select_x}
                        onClick={handleModal}
                    >
                        X
                    </span>
                </div>
                <div className={styles.cover_select_modal_content}>
                    <div className={styles.cover_select_modal_upload}>
                        <span>+ 사진 업로드</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

CoverImageSelect.propTypes = {
    closeModal: PropTypes.func,
};
