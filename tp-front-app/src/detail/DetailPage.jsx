import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import DetailInfo from "./DetailInfo";
import Footer from "../layout/Footer";
import styles from "../css/layout/Footer.module.css";

export default function DetailPage() {
    return (
        <div className={styles.page_container}>
            <Header />
            <DetailInfo />
            {/* <DetailRevuew /> */}
            <Footer/>
            <Outlet />
        </div>
    );
}
