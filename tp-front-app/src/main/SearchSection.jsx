import React from "react";
import { useRecoilValue } from "recoil";
import { searchListState } from "../state/main/SearchListState";
import SearchForm from "./search/SearchForm";
import styles from "../css/main/Main.module.css";
import search from "../img/main/search.svg";

export default function SearchSection() {
    const searchList = useRecoilValue(searchListState);

    return (
        <div className={styles.search_wrap}>
            <h1 className={styles.search_message}>어디로 가시나요?</h1>
            <ul className={styles.search_menu_wrap}>
                {searchList.map((item) => (
                    <SearchForm item={item} key={item.searchName} />
                ))}
            </ul>
            <div className={styles.search_bar_wrap}>
                <img
                    className={styles.search_bar_icon}
                    src={search}
                    alt="TripPenguinLogo"
                />
                <input
                    type="text"
                    className={styles.search_bar_input}
                    placeholder="여행지, 즐길거리, 호텔 등"
                />
                <button className={styles.search_bar_button}>검색</button>
            </div>
        </div>
    );
}
