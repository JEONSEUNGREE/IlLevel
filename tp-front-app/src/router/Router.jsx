import { createBrowserRouter } from "react-router-dom";
import {
    mainPage, loginPage, logoutPage, aboutPage,
    profilePage, companyPage, roomUploadPage, csPage,
    detailPage, userPage,
} from "./Main";

const router = createBrowserRouter([
    mainPage,
    loginPage,
    logoutPage,
    aboutPage,
    profilePage,
    companyPage,
    roomUploadPage,
    csPage,
    detailPage,
    userPage,
]);

export default router;
