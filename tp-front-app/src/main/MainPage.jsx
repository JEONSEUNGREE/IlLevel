import React from "react";
// router에도 선언해야 사용가능
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import SearchSection from "./SearchSection";
import RecentSearchSection from "./RecentSearchSection";
import RcmLocalSection from "./RcmLocalSection";
import RcmFoodSection from "./RcmFoodSection";
import MostLocalSection from "./MostLocalSection";
import GuideSection from "./GuideSection";

// import Modal from "../modal/ModalCore"

import "../css/main/Main.css";
import "../css/Modal.css";

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
            <RecentSearchSection />
            <RcmLocalSection />
            <RcmFoodSection />
            <MostLocalSection />
            <GuideSection />
            <Outlet />
        </div>
    );
}
