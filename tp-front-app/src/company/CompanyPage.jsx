import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSign from "../layout/HeaderSign";
import CoverImage from "./CoverImage";
import CompanyInfo from "./CompanyInfo";
import ProfileInfoDetail from "../profile/ProfileInfoDetail";
import Footer from "../layout/Footer";

export default function CompanyPage() {
    return (
        <div>
            <HeaderSign />
            <CoverImage />
            <CompanyInfo />
            <ProfileInfoDetail />
            <Footer />
            <Outlet />
        </div>
    );
}
