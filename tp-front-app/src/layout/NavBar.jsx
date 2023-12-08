import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { main } from "../util/CommonUri";
import { useRecoilValue } from "recoil";
import { navListState } from "../state/layout/NavBarState";
import NavForm from "./NavForm";
import hamburgerMenu from "../img/main/hamburgerMenu.svg";
import logoTitle from "../img/main/logoTitle.svg";
import styles from "../css/main/Main.module.css";
import { backdropModal } from "../modal/ModalCore";
import SignIn from "../modal/SignIn";
import NavSign from "./NavSign";

export default function NavBar() {
    const navList = useRecoilValue(navListState);
    const { isOpen, openModal, closeModal, modalRef } = backdropModal(false);
    const [cookies] = useCookies(['account_token']);
    const isLoggedIn = cookies.account_token ? true : false;
    const navigate = useNavigate();

    const goMain = () => {
        navigate(main);
    };


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
                    onClick={goMain}
                />
                <ul className={styles.navbar_menu_wrap}>
                    {navList.map((item) => (
                        <NavForm item={item} key={item.id} />
                    ))}
                </ul>
                {isLoggedIn ? <NavSign/> : (
                    <button className={styles.navbar_sign_button} onClick={openModal}>
                        로그인
                    </button>
                )}
            </nav>
            {isOpen && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal} ref={modalRef}>
                        <SignIn closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
}
