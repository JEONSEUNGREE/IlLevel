import React from "react";
import { useRecoilValue } from "recoil";
import { iconListState } from "../state/modal/IconListState";
import styles from "../css/modal/Profile.module.css";
import SettingForm from "../profile/SettingForm";

export default function ProfileIcon() {
    const statusList = useRecoilValue(iconListState);

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
