import React from "react";
import styles from "../css/profile/Profile.module.css";
import default_background from "../img/profile/defaultBackground.png";
import { backdropModal } from "../modal/ModalCore";
import CoverImageSelect from "../modal/CoverImageSelect";

export default function CoverImage() {
    const { isOpen, openModal, closeModal, modalRef } = backdropModal(false);

    return (
        <div className={styles.cover_wrapper}>
            <img className={styles.cover_img} src={default_background} />
            <span className={styles.cover_message} onClick={openModal}>
                커버 사진 추가하기
            </span>
            {isOpen && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <CoverImageSelect closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
}
