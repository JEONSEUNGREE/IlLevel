import React from "react";
import PropTypes from "prop-types";
import styles from "../css/company/Company.module.css";

const RoomTableRow = ({ item }) => {
  return (
    <tr key={item.roomId} className={styles.room_table_body}>
      <td>{item.roomId}</td>
      <td>{item.roomName}</td>
      <td>{item.sellPrc}</td>
      <td>{item.maxCount}</td>
      <td>
        <button className={styles.room_table_modify}>수정</button>
        <button className={styles.room_table_delete}>삭제</button>
      </td>
    </tr>
  );
};

RoomTableRow.propTypes = {
    item: PropTypes.shape({
        roomId: PropTypes.number.isRequired,
        roomName: PropTypes.string.isRequired,
        sellPrc: PropTypes.string.isRequired,
        maxCount: PropTypes.number.isRequired,
    }).isRequired,
  };

export default RoomTableRow;