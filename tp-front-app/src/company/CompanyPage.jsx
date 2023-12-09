import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import CoverImage from "./CoverImage";
import CompanyInfo from "./CompanyInfo";
import CompanyInfoDetail from "./CompanyInfoDetail";
import Footer from "../layout/Footer";

export default function CompanyPage() {
    return (
        <div>
            <Header />
            <CoverImage />
            <CompanyInfo />
            <CompanyInfoDetail />
            <Footer />
            <Outlet />
        </div>
    );
}
