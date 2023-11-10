import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmFoodListState } from "../state/main/MainState";

export default function RcmFoodSection() {
    const rcmFoodList = useRecoilValue(rcmFoodListState);

    return (
        <div className="main-rcm-food-area">
            {rcmFoodList.map((item) => (
                <RcmCard props={item} key={item.imageUrl} />
            ))}
        </div>
    );
}
