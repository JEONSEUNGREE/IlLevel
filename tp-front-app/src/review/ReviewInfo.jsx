import React, { useState } from "react";
import styles from "../css/review/Review.module.css";
import default_background from "../img/profile/defaultBackground.png";

export default function Reviewinfo() {
    const [rating, setRating] = useState(0);
    const [color, setColor] = useState(0);
    const ratingsText = ['최악', '별로', '보통', '좋음', '아주 좋음'];
    const handleRating = (value) => {
        setRating(value);
    }

    return (
        <div className={styles.info_wrapper}>
            <header className={styles.info_title}>
                <div>
                    <h1>
                        {
                            `방문하신 시설은
                            만족스러우셨나요?`
                        }
                    </h1>
                    <div className={styles.info_hotel}>
                        <div className={styles.info_hotel_img}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.info_hotel_text}>
                            <span>아무개 호텔</span>
                            <span>번지수 길</span>
                            <span>도시, 국가</span>
                        </div>
                    </div>
                </div>
            </header>
            <form className={styles.info_content}>
                <div className={styles.info_rating}>
                    <span>귀하의 경험에 대해 평가해주세요.</span>
                    <span>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => handleRating(ratingValue)}
                                        style={{ display: "none" }}
                                    />
                                    <div
                                        className={`${styles.info_rating_star} 
                                        ${rating >= ratingValue ? styles.selected : ""}
                                        ${color >= ratingValue ? styles.selected : ""}`
                                        }
                                        onMouseEnter={() => setColor(ratingValue)}
                                        onMouseLeave={() => setColor(0)}
                                        onClick={() => handleRating(ratingValue)}
                                    >
                                    </div>
                                </label>
                            );
                        })}
                    </span>
                    <span className={styles.info_rating_text}>
                        {ratingsText[rating === 0 ? color - 1 : rating - 1]}
                    </span>
                </div>
                <div className={styles.info_input_content}>
                    <span>리뷰 쓰기</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={styles.info_input_title}>
                    <span>제목</span>
                    <input type="text" />
                </div>
                <div className={styles.info_input_img}>
                    <span>이미지 업로드</span>
                    <span>선택 사항</span>
                    <div>
                        <span>
                            <img
                                className={styles.info_select_img}
                                src={default_background}
                            />
                            클릭하여 사진 추가하기
                        </span>
                    </div>
                </div>
                <button type="submit">리뷰 제출</button>
            </form>
        </div>
    );
}
