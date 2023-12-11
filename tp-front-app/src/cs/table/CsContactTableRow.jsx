import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/cs/Cs.module.css";

const CsContactTableRow = ({ item }) => {
    return (
        <tr key={item.id} className={styles.room_table_body}>
            <td className={styles.table_td_width_limit}>{item.csqTitle}</td>
            <td>{item.createdDate}</td>
            <td>{item.modifiedDate}</td>
            <td>{item.status}</td>
        </tr>
    );
};

CsContactTableRow.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        csqTitle: PropTypes.string.isRequired,
        createdDate: PropTypes.number.isRequired,
        modifiedDate: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default CsContactTableRow;
