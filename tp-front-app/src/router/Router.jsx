import { createBrowserRouter } from "react-router-dom";
import { mainPage, aboutPage, profilePage, companyPage } from "./Main";

const router = createBrowserRouter([
    mainPage,
    aboutPage,
    profilePage,
    companyPage,
]);

export default router;
