import React from "react";
// router에도 선언해야 사용가능
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import SearchSection from "./SearchSection";
// import RecentSection from "./RecentSection";
import GuideSection from "./GuideSection";
import RcmLocalSection from "./RcmLocalSection";
import RcmPlaySection from "./RcmPlaySection";
import RcmFoodSection from "./RcmFoodSection";
import Footer from "./Footer";

export default function MainPage() {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    // const [modalOpen, setModalOpen] = useState(false)

    // const openModal = () => {
    //   setModalOpen(true)
    // }
    // const closeModal = () => {
    //   setModalOpen(false)
    // }

    return (
        <div>
            {/* <button onClick={openModal}>모달팝업</button> */}
            {/* <Modal open={modalOpen} close={closeModal} header="Modal heading">
      </Modal> */}
            <Header />
            <SearchSection />
            {/* <RecentSection /> */}
            <GuideSection />
            <RcmLocalSection />
            <RcmPlaySection />
            <RcmFoodSection />
            <Footer />
            <Outlet />
        </div>
    );
}
