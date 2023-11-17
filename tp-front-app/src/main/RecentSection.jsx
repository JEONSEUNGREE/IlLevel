import React from "react";

export default function RecentSearchSection() {
    return (
        <div className="main-recent-search-area">
            <p>Recent Viewed</p>
            <div direction="row" spacing={1}>
                <div icon={<div />} label="CSS 노동" />
                <div icon={<div />} label="여행가고싶다" />
                <div icon={<div />} label="최근본 지역" />
                <div icon={<div />} label="최근본 호텔" />
            </div>
        </div>
    );
}
