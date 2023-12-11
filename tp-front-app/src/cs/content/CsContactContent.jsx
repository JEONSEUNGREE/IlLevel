import React from "react";
import styles from "../../css/cs/Cs.module.css";

export default function CsContactContent() {
    return (
        <>
            <div className={styles.content_header}>
                <h1>문의 등록</h1>
                <span>
                    {
                        `문의하신 내용은 고객센터에서 확인 후 영업일 기준 1~3일 이내에 답변 드리도록 하겠습니다.
                    * 운영 시간: 평일 10:00 ~ 18:00 (주말, 공휴일 제외)`
                    }
                </span>
                <br />
            </div>
            <br />
            <div className={styles.content_request}>
                <form className={styles.content_request_form}>
                    <div className={styles.content_request_form_title}>
                        <label htmlFor="request_title">제목</label>
                        <input id="request_title" />
                    </div>
                    <br />
                    <div className={styles.content_request_form_field}>
                        <label htmlFor="request_description">내용</label>
                        <textarea name="" id="request_description"></textarea>
                        <span>
                            {
                            `문의 내용을 최대한 자세하게 작성해 주세요.
                            (내용에 욕설이 포함되어 있는 경우 답변이 어려울 수 있습니다.)`
                            }
                        </span>
                    </div>
                    <div className={styles.content_footer}>
                        <button type="submit">제출</button>
                    </div>
                </form>
            </div>
        </>
    );
}
