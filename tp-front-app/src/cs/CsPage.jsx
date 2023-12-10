import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import CoverImageSection from "./CoverImageSection";
import CsNavBar from "./CsNavBar";
import CsContentSection from "./CsContentSection";
import Footer from "../layout/Footer";

export default function CsPage() {
    return (
        <div>
            <Header />
            <CoverImageSection />
            <CsNavBar />
            <CsContentSection />
            <Footer />
            <Outlet />
        </div>
    );
}
