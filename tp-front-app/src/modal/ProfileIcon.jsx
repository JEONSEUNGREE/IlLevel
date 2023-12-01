import React from "react";
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";
import { iconListState } from "../state/modal/IconListState";
import styles from "../css/modal/Profile.module.css";
import StatusForm from "../profile/StatusForm";

export default function ProfileIcon() {
    const statusList = useRecoilValue(iconListState);

    return (
        <div className={styles.setting_wrapper}>
            <div className={styles.setting_icon_modal_wrapper}>
                <ul className={styles.setting_icon_modal_ul}>
                    {statusList.map((item) => (
                        <StatusForm item={item} key={item.name} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

ProfileIcon.propTypes = {
    closeSignInModal: PropTypes.func,
};
