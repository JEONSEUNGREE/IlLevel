import React from "react";
import PropTypes from "prop-types";
import styles from "../../../css/company/Company.module.css";

const ReviewTableRow = ({ item }) => {
  return (
    <tr key={item.reviewId} className={styles.room_table_body}>
      <td>{item.reviewId}</td>
      <td>{item.roomName}</td>
      <td>{item.writer}</td>
      <td>{item.title}</td>
      <td>
        <button className={styles.room_table_modify}>답변</button>
        <button className={styles.room_table_delete}>신고</button>
      </td>
    </tr>
  );
};

ReviewTableRow.propTypes = {
    item: PropTypes.shape({
        reviewId: PropTypes.number.isRequired,
        roomName: PropTypes.string.isRequired,
        writer: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ReviewTableRow;