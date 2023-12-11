import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { infoListState } from "../state/company/InfoState";
import { companyStatusListState } from "../state/company/CompanyStatusState";
import styles from "../css/company/Company.module.css";
import setting from "../img/profile/setting.png";
import InfoForm from "./form/InfoForm";
import MenuForm from "./form/MenuForm";
import useModal from "../modal/ModalCore";
import ProfileModifySection from "./ProfileModifySection";
import ProfileModifyMenu from "../modal/ProfileModifyMenu";
import MenuOutputSection from "./MenuOutputSection";

export default function CompanyInfo() {
    const infoList = useRecoilValue(infoListState);
    const statusList = useRecoilValue(companyStatusListState);
    const { isOpen, openModal, modalRef } = useModal(false);

    const [selectedItem, setSelectedItem] = useState(statusList[0]);
    const handleStatus = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <div className={styles.info_wrapper}>
                <div className={styles.info_img}></div>
                <h2 className={styles.info_name}>펭귄</h2>
                <div className={styles.info_list_wrapper}>
                    <ul className={styles.info_list_name}>
                        {infoList.map((item) => (
                            <InfoForm
                                item={item}
                                key={item.id}
                                distinction="name"
                            />
                        ))}
                    </ul>
                    <ul className={styles.info_list_count}>
                        {infoList.map((item) => (
                            <InfoForm
                                item={item}
                                key={item.id}
                                distinction="count"
                            />
                        ))}
                    </ul>
                </div>
                <ul className={styles.info_menu_wrapper}>
                    {statusList.map((item) => (
                        <MenuForm
                            item={item}
                            key={item.id}
                            onClick={() => handleStatus(item)}
                            selected={selectedItem === item}
                        />
                    ))}
                </ul>
                <div className={styles.info_modify}>
                    <ProfileModifySection />
                    <img
                        className={styles.info_modify_img}
                        src={setting}
                        onClick={openModal}
                    />
                </div>
                {isOpen && (
                    <div className={styles.modal_overlay}>
                        <div className={styles.modal} ref={modalRef}>
                            <ProfileModifyMenu />
                        </div>
                    </div>
                )}
            </div>
            <MenuOutputSection selectedItem={selectedItem}/>
        </>
    );
}
