import React from "react";
import PropTypes from "prop-types";
import styles from "../../../css/company/Company.module.css";

const ReservationTableRow = ({ item }) => {
    return (
        <tr key={item.id} className={styles.room_table_body}>
            <td>{item.id}</td>
            <td>{item.createDate}</td>
            <td>{item.bookNm}</td>
            <td>{item.client}</td>
            <td>{item.checkIn}</td>
            <td>{item.payMethod}</td>
            <td>{item.price}</td>
            <td>{item.status}</td>
        </tr>
    );
};

ReservationTableRow.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        createDate: PropTypes.number.isRequired,
        bookNm: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        checkIn: PropTypes.number.isRequired,
        payMethod: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReservationTableRow;
