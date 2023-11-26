import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSign from "../layout/HeaderSign";
import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import Footer from "../layout/Footer";

export default function ProfilePage() {
    return (
        <div>
            <HeaderSign />
            <CoverImage />
            <ProfileInfo />
            <Footer />
            <Outlet />
        </div>
    );
}
