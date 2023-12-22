import { createBrowserRouter } from "react-router-dom";
import {
    mainPage, loginPage, logoutPage, aboutPage,
    profilePage, companyPage, roomUploadPage, csPage,
    detailPage, userPage, reviewPage,
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
    reviewPage,
]);

export default router;
