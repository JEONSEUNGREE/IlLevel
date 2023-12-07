import React from "react";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import { modifyListState } from "../state/modal/ModifyListState";
import styles from "../css/modal/Profile.module.css";
import SettingForm from "../profile/SettingForm";

export default function ProfileModifyMenu() {
    const statusList = useRecoilValue(modifyListState);

    return (
        <div className={styles.setting_modal_wrapper}>
            <ul className={styles.setting_modal_ul}>
                {statusList.map((item) => (
                    <SettingForm item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}

ProfileModifyMenu.propTypes = {
    closeSignInModal: PropTypes.func,
};
