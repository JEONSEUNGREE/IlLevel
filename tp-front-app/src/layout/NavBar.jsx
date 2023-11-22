import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { navListState } from "../state/layout/NavBarState";
import NavForm from "./NavForm";
import hamburgerMenu from "../img/main/hamburgerMenu.svg";
import logoTitle from "../img/main/logoTitle.svg";
import styles from "../css/main/Main.module.css";
import SignIn from "../modal/SignIn";

export default function NavBar() {
    const navList = useRecoilValue(navListState);
    const [signModal, setSignModal] = useState(false);
    const modalRef = useRef(null);

    // 모달창 외부 클릭 시 닫기
    const closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setSignModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeModal);
        return () => {
            document.removeEventListener("mousedown", closeModal);
        };
    }, []);

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
                    onClick={() => setSignModal(true)}
                >
                    로그인
                </button>
            </nav>
            {signModal && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <SignIn />
                    </div>
                </div>
            )}
        </div>
    );
}
