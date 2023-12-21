import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoDetail from "./ProfileInfoDetail";
import Footer from "../layout/Footer";
import styles from "../css/layout/Footer.module.css";

export default function UserPage() {
    return (
        <div className={styles.page_container}>
            <Header />
            <ProfileInfo />
            <ProfileInfoDetail />
            <Footer />
            <Outlet />
        </div>
    );
}
