import React from "react";
import { useRecoilValue } from "recoil";
import { infoListState } from "../state/profile/InfoState";
import { statusListState } from "../state/profile/StatusState";
import styles from "../css/profile/Profile.module.css";
import setting from "../img/profile/setting.png";
import InfoForm from "./InfoForm";
import StatusForm from "./StatusForm";

export default function ProfileInfo() {
    const infoList = useRecoilValue(infoListState);
    const statusList = useRecoilValue(statusListState);

    return (
        <div className={styles.info_wrapper}>
            <div className={styles.info_img}></div>
            <h2 className={styles.info_name}>펭귄</h2>
            <div className={styles.info_list_wrapper}>
                <ul className={styles.info_list_name}>
                    {infoList.map((item) => (
                        <InfoForm
                            item={item}
                            key={item.infoName}
                            distinction="name"
                        />
                    ))}
                </ul>
                <ul className={styles.info_list_count}>
                    {infoList.map((item) => (
                        <InfoForm
                            item={item}
                            key={item.infoCount}
                            distinction="count"
                        />
                    ))}
                </ul>
            </div>
            <ul className={styles.info_menu_wrapper}>
                {statusList.map((item) => (
                    <StatusForm item={item} key={item.statusName} />
                ))}
            </ul>
            <div className={styles.info_modify}>
                <span>프로필 수정</span>
                <img src={setting} />
            </div>
        </div>
    );
}
