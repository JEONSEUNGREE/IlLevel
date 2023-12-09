// children 넘길시 Outlet 필요
import { Outlet } from "react-router-dom";
import MainPage from "../main/MainPage";
import ProfilePage from "../profile/ProfilePage";
import CompanyPage from "../company/CompanyPage";
import LoginPage from "../sign/LoginPage";
import LogoutPage from "../sign/LogoutPage";
import { main, login, logout, about, profile, company } from "../util/CommonUri";

const mainPage = {
    path: main,
    element: (
        <>
            <MainPage />
        </>
    ),
};

const loginPage = {
    path: login,
    element: (
        <>
            <LoginPage />
        </>
    ),
};

const logoutPage = {
    path: logout,
    element: (
        <>
            <LogoutPage />
        </>
    ),
};

const aboutPage = {
    path: about,
    element: (
        <div>
            About
            <Outlet />
        </div>
    ),
};

const profilePage = {
    path: profile,
    element: (
        <>
            <ProfilePage />
        </>
    ),
};

const companyPage = {
    path: company,
    element: (
        <>
            <CompanyPage />
        </>
    ),
};

export { mainPage, loginPage, logoutPage, aboutPage, profilePage, companyPage };
