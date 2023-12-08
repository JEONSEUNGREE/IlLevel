import { createBrowserRouter } from "react-router-dom";
import { mainPage, loginPage, aboutPage, profilePage, companyPage } from "./Main";

const router = createBrowserRouter([
    mainPage,
    loginPage,
    aboutPage,
    profilePage,
    companyPage,
]);

export default router;
