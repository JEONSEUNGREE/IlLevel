import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { searchListState } from "../state/main/SearchListState";
import SearchForm from "./search/SearchForm";
import styles from "../css/main/Main.module.css";
import search from "../img/main/search.svg";

export default function SearchSection() {
    const searchList = useRecoilValue(searchListState);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleSearch = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className={styles.search_wrap}>
            <h1 className={styles.search_message}>
                {selectedItem ? selectedItem.searchMessage : "어디로 가시나요?"}
            </h1>
            <div className={styles.search_interactive_wrap}>
                <ul className={styles.search_menu_wrap}>
                    {searchList.map((item) => (
                        <SearchForm
                            item={item}
                            key={item.searchName}
                            handleSearch={handleSearch}
                            selectedItem={selectedItem}
                        />
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
                        placeholder={
                            selectedItem
                                ? selectedItem.searchContent
                                : "여행지, 즐길거리, 호텔 등"
                        }
                    />
                    <div className={styles.search_bar_line}></div>
                    <button className={styles.search_bar_button}>검색</button>
                </div>
            </div>
        </div>
    );
}
