import { atom } from "recoil";

const statusListState = atom({
    key: "statusListState",
    default: [
        {
            id: 0,
            statusName: "활동 피드",
            path: "/",
        },
        {
            id: 1,
            statusName: "여행",
            path: "/",
        },
        {
            id: 2,
            statusName: "리뷰",
            path: "/",
        },
        {
            id: 3,
            statusName: "배지",
            path: "/",
        },
    ],
});

export { statusListState };
