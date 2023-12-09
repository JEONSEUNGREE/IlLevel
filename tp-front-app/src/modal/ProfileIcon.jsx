import React, { useState, useEffect } from "react";
import { userIconListState, comIconListState } from "../state/modal/IconListState";
import styles from "../css/modal/Profile.module.css";
import SettingForm from "../profile/SettingForm";
import GetRole from "../sign/GetRole";

export default function ProfileIcon() {
    const [statusList, setStatusList] = useState([]);
    const role = GetRole();

    useEffect(() => {
        if (role === "ROLE_USER") {
            setStatusList(userIconListState);
        } else if (role === "ROLE_COM") {
            setStatusList(comIconListState);
        }
    }, [role]);

    return (
        <div className={styles.setting_wrapper}>
            <div className={styles.setting_icon_modal_wrapper}>
                <ul className={styles.setting_icon_modal_ul}>
                    {statusList.map((item) => (
                        <SettingForm item={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
