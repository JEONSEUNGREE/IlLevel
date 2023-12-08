import React from "react";
import styles from "../css/main/Main.module.css";
import useModal from "../modal/ModalCore";
import ProfileIcon from "../modal/ProfileIcon";

export default function NavSign() {
    const { isOpen, openModal, modalRef } = useModal(false);

    return (
        <>
            <div
                className={styles.navbar_profile_img}
                onClick={openModal}
            ></div>
            {isOpen && (
                <div ref={modalRef}>
                    <ProfileIcon />
                </div>
            )}
        </>            
    );
}