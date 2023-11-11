import { atom } from "recoil";

const searchListState = atom({
    key: "searchListState",
    default: [
        {
            id: 0,
            searchMessage: "어디로 가시나요?",
            searchName: "전체 검색",
            searchContent: "여행지, 즐길거리, 호텔 등",
            path: "/",
        },
        {
            id: 1,
            searchMessage: "좋은 곳에서 머무르기",
            searchName: "호텔",
            searchContent: "호텔 이름 또는 여행지",
            path: "/",
        },
        {
            id: 2,
            searchMessage: "재미있는 체험하기",
            searchName: "즐길거리",
            searchContent: "관광명소, 액티비티 또는 여행지",
            path: "/",
        },
        {
            id: 3,
            searchMessage: "음식점 찾기",
            searchName: "음식점",
            searchContent: "음식점 또는 여행지",
            path: "/",
        },
    ],
});

export { searchListState };
