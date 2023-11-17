import React, { useCallback } from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmFoodListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RcmFoodSection() {
    const rcmFoodList = useRecoilValue(rcmFoodListState);

    // react-slick 설정
    const slickRef = React.useRef(null);
    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    return (
        <div className={styles.rcm_wrap}>
            <h2 className={styles.rcm_h2}>추천 음식점 : 사료 맛집</h2>
            <span className={styles.rcm_span}>멍멍이들의 최애 음식 모음</span>
            <button className={styles.rcm_more_button}>더 보기</button>
            <Slider {...settings} ref={slickRef}>
                {rcmFoodList.map((item, index) => (
                    <RcmCard props={item} key={index} />
                ))}
            </Slider>
            <span className={styles.rcm_carousel_left} onClick={previous}>
                ←
            </span>
            <span className={styles.rcm_carousel_right} onClick={next}>
                →
            </span>
        </div>
    );
}
