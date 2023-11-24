import React from "react";
import NavBarSign from "./NavBarSign";
import styles from "../css/profile/Profile.module.css";

export default function Header() {
    return (
        <div className={styles.navbar_wrap}>
            <NavBarSign />
        </div>
    );
}
