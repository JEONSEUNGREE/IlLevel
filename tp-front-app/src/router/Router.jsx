import { createBrowserRouter } from "react-router-dom";
import { mainPage, aboutPage, profilePage } from "./Main";

const router = createBrowserRouter([mainPage, aboutPage, profilePage]);

export default router;
