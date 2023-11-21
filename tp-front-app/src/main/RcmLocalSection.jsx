import React, { useCallback } from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmLocalListState } from "../state/main/MainState";
import styles from "../css/main/Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RcmLocalSection() {
    const rcmLocalList = useRecoilValue(rcmLocalListState);

    // react-slick 설정
    const slickRef = React.useRef(null);
    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1020,
                settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
                breakpoint: 755,
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
        ],
    };

    return (
        <div className={styles.rcm_wrap}>
            <h2 className={styles.rcm_h2}>추천 여행 : 말티즈</h2>
            <span className={styles.rcm_span}>
                귀여운 멍멍이들을 둘러보세요.
            </span>
            <button className={styles.rcm_more_button}>더 보기</button>
            <Slider {...settings} ref={slickRef}>
                {rcmLocalList.map((item, index) => (
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
