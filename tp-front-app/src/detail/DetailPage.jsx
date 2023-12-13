import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import DetailInfo from "./DetailInfo";
// import Footer from "../layout/Footer";

export default function DetailPage() {
    return (
        <div>
            <Header />
            <DetailInfo />
            {/* <DetailRevuew /> */}
            {/* <Footer /> */}
            <Outlet />
        </div>
    );
}
