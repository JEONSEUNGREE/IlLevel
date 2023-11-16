import { useState } from "react";

// 캐러셀
const carousel = (totalCards, CardsPerPage = 4) => {
    const [visibleCards, setVisibleCards] = useState(0);

    const showNextCards = () => {
        setVisibleCards((prev) =>
            Math.min(prev + CardsPerPage, totalCards - CardsPerPage),
        );
    };

    const showPrevCards = () => {
        setVisibleCards((prev) => Math.max(prev - CardsPerPage, 0));
    };

    const canShowPrev = visibleCards > 0;
    const canShowNext = visibleCards + CardsPerPage < totalCards;

    return {
        visibleCards,
        showNextCards,
        showPrevCards,
        canShowPrev,
        canShowNext,
    };
};

export default carousel;
