import React from "react";
import { backdropModal } from "../modal/ModalCore";
import styles from "../css/profile/Profile.module.css";
import ProfileModify from "../modal/ProfileModify";

export default function ProfileModifySection() {
    const { isOpen, openModal, closeModal, modalRef } = backdropModal(false);

    return (
        <span onClick={openModal}>
            <span className={styles.info_modify_span}>프로필 수정</span>
            {isOpen && (
                <div ref={modalRef}>
                    <ProfileModify closeModal={closeModal} />
                </div>
            )}
        </span>
    );
}
