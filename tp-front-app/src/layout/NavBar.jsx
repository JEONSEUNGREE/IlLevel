import React from "react";
import { useRecoilValue } from "recoil";
import { navListState } from "../state/layout/NavBarState";
import NavForm from "./NavForm";
import hamburgerMenu from "../img/main/hamburgerMenu.svg";
import logoTitle from "../img/main/logoTitle.svg";
import styles from "../css/main/Main.module.css";
import { backdropModal } from "../modal/ModalCore";
import SignIn from "../modal/SignIn";

export default function NavBar() {
    const navList = useRecoilValue(navListState);
    const { isOpen, openModal, closeModal, modalRef } = backdropModal(false);

    return (
        <div>
            <nav className={styles.navbar_box}>
                <img
                    className={styles.NavBar_hamburger}
                    src={hamburgerMenu}
                    alt="hamburgerMenu"
                />
                <img
                    className={styles.navbar_logo}
                    src={logoTitle}
                    alt="TripPenguinLogo"
                />
                <ul className={styles.navbar_menu_wrap}>
                    {navList.map((item) => (
                        <NavForm item={item} key={item.navName} />
                    ))}
                </ul>
                <button
                    className={styles.navbar_sign_button}
                    onClick={openModal}
                >
                    로그인
                </button>
            </nav>
            {isOpen && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <SignIn closeSignInModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
}
