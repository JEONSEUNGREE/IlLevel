import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSign from "../layout/HeaderSign";
import Footer from "../layout/Footer";

export default function ProfilePage() {
    return (
        <div>
            <HeaderSign />
            <Footer />
            <Outlet />
        </div>
    );
}
