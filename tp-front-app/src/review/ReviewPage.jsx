import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Reviewinfo from "./ReviewInfo";
import Footer from "../layout/Footer";
import styles from "../css/layout/Footer.module.css";

export default function ReviewPage() {
    return (
        <div className={styles.page_container}>
            <Header />
            <Reviewinfo />
            <Footer/>
            <Outlet />
        </div>
    );
}
