import React from "react";
import styles from "../../css/company/Company.module.css";
import { reservationListState } from "../../state/company/CompanyState";
import ReservationTableRow from "./table/ReservationTableRow";

const ManageReservation = () => {
    return (
        <>
            <span className={styles.room_span}>총 5개의 예약</span>
            <span className={styles.room_rsv_span}>
                예약완료 총 0건 / 예약취소 총 0건
            </span>
            <table className={styles.room_table}>
                <thead>
                    <tr className={styles.room_table_head}>
                        <th>예약번호</th>
                        <th>예약일</th>
                        <th>객실명</th>
                        <th>예약자</th>
                        <th>이용일</th>
                        <th>결제방법</th>
                        <th>결제금액</th>
                        <th>예약상태</th>
                    </tr>
                </thead>
                <tbody>
                    {reservationListState.map((item) => (
                        <ReservationTableRow key={item.id} item={item} />
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

export default ManageReservation;
