import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { infoListState } from "../state/profile/InfoState";
import { userStatusListState } from "../state/profile/UserStatusState";
import styles from "../css/user/User.module.css";
import InfoForm from "./InfoForm";
import StatusForm from "./StatusForm";
import ProfileFollowSection from "./ProfileFollowSection";

export default function ProfileInfo() {
    const infoList = useRecoilValue(infoListState);
    const statusList = useRecoilValue(userStatusListState);

    const [selectedItem, setSelectedItem] = useState(statusList[0]);
    const handleStatus = (item) => {
        setSelectedItem(item);
    };

    return (
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
                    <StatusForm
                        item={item}
                        key={item.id}
                        onClick={() => handleStatus(item)}
                        selected={selectedItem === item}
                    />
                ))}
            </ul>
            <div className={styles.info_follow}>
                <ProfileFollowSection />
            </div>
        </div>
    );
}
