import React from "react";
// router에도 선언해야 사용가능
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import SearchSection from "./SearchSection";
// import RecentSection from "./RecentSection";
import GuideSection from "./GuideSection";
import RcmLocalSection from "./RcmLocalSection";
import RcmPlaySection from "./RcmPlaySection";
import RcmFoodSection from "./RcmFoodSection";
import Footer from "../layout/Footer";

export default function MainPage() {
    return (
        <div>
            <Header />
            <SearchSection />
            {/* <RecentSection /> */}
            <GuideSection />
            <RcmLocalSection />
            <RcmPlaySection />
            <RcmFoodSection />
            <Footer />
            <Outlet />
        </div>
    );
}
