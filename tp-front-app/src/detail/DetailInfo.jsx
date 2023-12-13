import React from "react";
import styles from "../css/detail/Detail.module.css";
import like from "../img/detail/like.png";
import siren from "../img/detail/siren.png";

export default function DetailInfo() {
    return (
        <div className={styles.info_wrapper}>
            <header className={styles.info_title}>
                <div>
                    <h1>숙소명</h1>
                    <div className={styles.info_like}>
                        <span>♡</span>
                    </div>
                </div>
            </header>
            <div className={styles.info_content}>
                <section className={styles.info_section_review}>
                    <span>★★★★★</span>
                    <span>0건의 리뷰</span>
                    <span>리뷰 쓰기</span>
                </section>
                <section className={styles.info_section_intro}>
                    <div>
                        <div className={styles.info_section_intro_text}>
                            <div>
                                <h2>소개</h2>
                                <span>주소</span>
                                <span>설명</span>
                            </div>
                        </div>
                        <div className={styles.info_section_intro_pic}>
                            <div className={styles.info_section_intro_pic_big}></div>
                            <ul className={styles.info_section_intro_pic_circle}>
                                <li>●</li>
                                <li>○</li>
                                <li>○</li>
                                <li>○</li>
                                <li>○</li>
                            </ul>
                            <ul className={styles.info_section_intro_pic_small}>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.info_review}>
                <div className={styles.info_review_write}>
                    <h2>리뷰 작성</h2>
                    <div>리뷰 작성하기</div>
                </div>
                <div className={styles.info_review_read}>
                    <h2>리뷰</h2>
                    <div className={styles.info_review_read_rating}>
                        <div>
                            <span>4.0</span>
                            <span>★★★★☆</span>
                            <span>리뷰 1,419건</span>
                        </div>
                        <div>
                            <span className={styles.font_widthLimit}>훌륭함</span>
                            <span className={styles.font_block}>43</span>
                            <span className={styles.font_widthLimit}>매우 좋음</span>
                            <span className={styles.font_block}>63</span>
                            <span className={styles.font_widthLimit}>보통</span>
                            <span className={styles.font_block}>26</span>
                            <span className={styles.font_widthLimit}>형편 없음</span>
                            <span className={styles.font_block}>3</span>
                            <span className={styles.font_widthLimit}>최악</span>
                            <span className={styles.font_block}>5</span>
                        </div>
                    </div>
                    <div className={styles.info_review_read_profile}>
                        <hr />
                        <div className={styles.profile}>
                            <div></div>
                            <div>
                                <span>333</span>
                                <span>서울</span>
                                <span> · 포스팅 5건</span>
                            </div>
                        </div>
                        <div className={styles.like}>
                            <div>
                                <img src={like} alt="like" />
                                <span>1</span>
                            </div>
                            <div>
                                <img src={siren} alt="complaint" />
                            </div>
                        </div>
                        <div className={styles.report}>
                            <span>★★★★☆</span>
                            <span>제목</span>
                            <span>날짜</span>
                            <span>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                                내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                                내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                                내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                                내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                                내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                                내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 
                            </span>
                            <span>이 리뷰는 트립펭귄의 의견이 아닌 회원의 주관적인 의견입니다.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
