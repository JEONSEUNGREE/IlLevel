import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import CoverImageSection from "./CoverImageSection";
import InfoSection from "./InfoSection";
import Footer from "../layout/Footer";

export default function CompanyPage() {
    return (
        <div>
            <Header />
            <CoverImageSection />
            <InfoSection />
            <Footer />
            <Outlet />
        </div>
    );
}
