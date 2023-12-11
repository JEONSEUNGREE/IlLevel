import React from "react";
import PropTypes from "prop-types";
import styles from "../css/company/Company.module.css";
import ManageRoom from "./manage/ManageRoom";
import ManageReservation from "./manage/ManageReservation";
import ManageReview from "./manage/ManageReview";

export default function MenuOutputSection({ selectedItem }) {
    const renderComponent = () => {
        switch (selectedItem.id) {
            case 0:
                return <ManageRoom />;
            case 1:
                return <ManageReservation />;
            case 2:
                return <ManageReview />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.info_detail_body}>
            <div className={styles.info_detail_wrapper}>
                <div className={styles.info_detail_introduce}>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
}

MenuOutputSection.propTypes = {
    selectedItem: PropTypes.object,
};
