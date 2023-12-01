import { atom } from "recoil";

const statusListState = atom({
    key: "statusListState",
    default: [
        {
            id: 0,
            name: "활동 피드",
            path: "/",
        },
        {
            id: 1,
            name: "여행",
            path: "/",
        },
        {
            id: 2,
            name: "리뷰",
            path: "/",
        },
        {
            id: 3,
            name: "배지",
            path: "/",
        },
    ],
});

export { statusListState };
