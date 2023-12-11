import React from "react";
import styles from "../../css/cs/Cs.module.css";
import { csListState } from "../../state/cs/CsState";
import CsContactTableRow from "../table/CsContactTableRow";

export default function CsListContent() {
    return (
        <>
            <div className={styles.content_header}>
                <h1>문의 내역</h1>
                <span>
                    {
                        `문의하신 내용은 고객센터에서 확인 후 영업일 기준 1~3일 이내에 답변 드리도록 하겠습니다.
                    * 운영 시간: 평일 10:00 ~ 18:00 (주말, 공휴일 제외)`
                    }
                </span>
                <br />
            </div>
            <div className={styles.content_request}>
                <table className={styles.content_request_table}>
                    <thead>
                        <tr>
                            <th className={styles.table_th_width_limit}>문의 제목</th>
                            <th>접수 시간</th>
                            <th>마지막 업데이트</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {csListState.map((item) => (
                            <CsContactTableRow key={item.id} item={item} />
                        ))}
                    </tbody>
                </table>
                {/* <span>검색된 요청이 없습니다.</span> */}
            </div>
        </>
    );
}
