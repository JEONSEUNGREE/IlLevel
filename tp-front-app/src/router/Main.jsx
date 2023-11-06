// children 넘길시 Outlet 필요
import { Outlet } from 'react-router-dom';
import MainPage from '../main/MainPage';

const mainPage = {
    path: "/main",
    element: (
      <>
        <MainPage/>
      </>
    ),
    // children: [
    //   {
    //     path: "2depth",
    //     loader: async () => {
    //         return new Promise((res) => {
    //           setTimeout(() => {
    //             return res("")
    //           }, 3000);
    //         });
    //       },
    //     element: <div>2depth</div>
    //   }
    // ]
  }

const aboutPage = {
    path: "about",
    element: (
        <div>About
            <Outlet/>
        </div>
    ),
    // children: [
    //     {
    //         path: "2depth",
    //         element: <div>2depth</div>
    //     }
    // ]
  }

export { 
    mainPage,
    aboutPage
};