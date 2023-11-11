import React from "react";
import NavBar from "./NavBar";
import styles from "../css/main/Main.module.css";

export default function Header() {
    return (
        <div className={styles.navbar_wrap}>
            <NavBar />
        </div>
    );
}
