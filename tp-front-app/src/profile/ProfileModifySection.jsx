import React from "react";
import PropTypes from "prop-types";
import { backdropModal } from "../modal/ModalCore";
import styles from "../css/profile/Profile.module.css";
import ProfileModify from "../modal/ProfileModify";

export default function ProfileModifySection() {
    const { isOpen, openModal, modalRef } = backdropModal(false);

    return (
        <span onClick={openModal}>
            <span className={styles.info_modify_span}>프로필 수정</span>
            {isOpen && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <ProfileModify />
                    </div>
                </div>
            )}
        </span>
    );
}

ProfileModifySection.propTypes = {
    closeModal: PropTypes.func,
};
