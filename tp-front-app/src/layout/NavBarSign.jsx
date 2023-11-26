import React from "react";
import { useRecoilValue } from "recoil";
import { navListState } from "../state/layout/NavBarState";
import NavForm from "./NavForm";
import hamburgerMenu from "../img/main/hamburgerMenu.svg";
import logoTitle from "../img/main/logoTitle.svg";
import styles from "../css/profile/Profile.module.css";

export default function NavBarSign() {
    const navList = useRecoilValue(navListState);

    return (
        <div className={styles.navbar_wrap}>
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
                <div className={styles.navbar_profile_img}></div>
            </nav>
        </div>
    );
}
