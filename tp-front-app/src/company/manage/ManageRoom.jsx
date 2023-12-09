import React from "react";
import styles from "../../css/company/Company.module.css";
import { roomListState } from "../../state/company/CompanyState";
import RoomTableRow from "./table/RoomTableRow";
import { useNavigate } from "react-router";
import { room_upload } from "../../util/CommonUri";

const ManageRoom = () => {
    const navigate = useNavigate();

    const goRoomUpload = () => {
        navigate(room_upload);
    };

    return (
        <>
            <span className={styles.room_span}>총 5개의 상품</span>
            <button className={styles.room_upload} onClick={goRoomUpload}>
                객실 등록
            </button>
            <table className={styles.room_table}>
                <thead>
                    <tr className={styles.room_table_head}>
                        <th>객실 ID</th>
                        <th>객실 이름</th>
                        <th>객실 가격</th>
                        <th>객실 수</th>
                        <th>객실 관리</th>
                    </tr>
                </thead>
                <tbody>
                    {roomListState.map((item) => (
                        <RoomTableRow key={item.roomId} item={item} />
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

export default ManageRoom;
