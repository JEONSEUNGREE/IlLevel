// children 넘길시 Outlet 필요
import { Outlet } from "react-router-dom";
import MainPage from "../main/MainPage";
import ProfilePage from "../profile/ProfilePage";
import CompanyPage from "../company/CompanyPage";
import LoginPage from "../sign/LoginPage";
import LogoutPage from "../sign/LogoutPage";
import RoomUploadPage from "../company/room/RoomUploadPage";
import CsPage from "../cs/CsPage";
import { main, login, logout, about, profile, company, room_upload, cs } from "../util/CommonUri";

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

const roomUploadPage = {
    path: room_upload,
    element: (
        <>
            <RoomUploadPage />
        </>
    ),
};

const csPage = {
    path: cs,
    element: (
        <>
            <CsPage />
        </>
    )
}

export { mainPage, loginPage, logoutPage, aboutPage, profilePage, companyPage, roomUploadPage, csPage };
