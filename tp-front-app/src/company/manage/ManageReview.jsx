import React from "react";
import styles from "../../css/company/Company.module.css";
import { reviewListState } from "../../state/company/CompanyState";
import ReviewTableRow from "./table/ReviewTableRow";

const ManageReview = () => {

    return (
        <>
            <span className={styles.room_span}>총 5개의 리뷰</span>
            <table className={styles.room_table}>
                <thead>
                    <tr className={styles.room_table_head}>
                        <th>리뷰 ID</th>
                        <th>객실명</th>
                        <th>작성자</th>
                        <th>리뷰 제목</th>
                        <th>리뷰 관리</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewListState.map((item) => (
                        <ReviewTableRow key={item.reviewId} item={item} />
                    ))}
                </tbody>
            </table>
            <div className={styles.room_page}>
                <button>{`<<`}</button>
                <button>{`<`}</button>
                <span>1</span>
                <button>{`>`}</button>
                <button>{`>>`}</button>
            </div>
        </>
    );
};

export default ManageReview;
