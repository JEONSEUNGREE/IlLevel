import React from "react";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import { modifyListState } from "../state/modal/ModifyListState";
import styles from "../css/modal/Profile.module.css";
import StatusForm from "../profile/StatusForm";

export default function ProfileModifyMenu() {
    const statusList = useRecoilValue(modifyListState);

    return (
        <div className={styles.setting_modal_wrapper}>
            <ul className={styles.setting_modal_ul}>
                {statusList.map((item) => (
                    <StatusForm item={item} key={item.name} />
                ))}
            </ul>
        </div>
    );
}

ProfileModifyMenu.propTypes = {
    closeSignInModal: PropTypes.func,
};
