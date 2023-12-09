import { createBrowserRouter } from "react-router-dom";
import { mainPage, loginPage, logoutPage, aboutPage, profilePage, companyPage } from "./Main";

const router = createBrowserRouter([
    mainPage,
    loginPage,
    logoutPage,
    aboutPage,
    profilePage,
    companyPage,
]);

export default router;
