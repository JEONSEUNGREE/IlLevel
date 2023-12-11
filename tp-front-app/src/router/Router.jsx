import { createBrowserRouter } from "react-router-dom";
import { mainPage, loginPage, logoutPage, aboutPage, profilePage, companyPage, roomUploadPage, csPage } from "./Main";

const router = createBrowserRouter([
    mainPage,
    loginPage,
    logoutPage,
    aboutPage,
    profilePage,
    companyPage,
    roomUploadPage,
    csPage,
]);

export default router;
