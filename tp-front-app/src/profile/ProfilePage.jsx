import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import CoverImage from "./CoverImage";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoDetail from "./ProfileInfoDetail";
import Footer from "../layout/Footer";

export default function ProfilePage() {
    return (
        <div>
            <Header />
            <CoverImage />
            <ProfileInfo />
            <ProfileInfoDetail />
            <Footer />
            <Outlet />
        </div>
    );
}
