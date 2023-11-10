import React from "react";
import RcmCard from "./rcm/RcmCard";
import { useRecoilValue } from "recoil";
import { rcmLocalListState } from "../state/main/MainState";

export default function RcmLocalSection() {
    const rcmLocalList = useRecoilValue(rcmLocalListState);

    return (
        <div className="main-rcm-local-area">
            {rcmLocalList.map((item) => (
                <RcmCard props={item} key={item.imageUrl} />
            ))}
        </div>
    );
}
