import { createBrowserRouter } from "react-router-dom";
import { mainPage, loginPage, logoutPage, aboutPage, profilePage, companyPage, roomUploadPage } from "./Main";

const router = createBrowserRouter([
    mainPage,
    loginPage,
    logoutPage,
    aboutPage,
    profilePage,
    companyPage,
    roomUploadPage,
]);

export default router;
