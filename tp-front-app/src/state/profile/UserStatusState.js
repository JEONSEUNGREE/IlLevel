import { atom } from "recoil";

const profileStatusListState = atom({
    key: "profileStatusListState",
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

const userStatusListState = atom({
    key: "userStatusListState",
    default: [
        {
            id: 0,
            name: "활동 피드",
            path: "/",
        },
        {
            id: 1,
            name: "리뷰",
            path: "/",
        },
        {
            id: 2,
            name: "배지",
            path: "/",
        },
    ],
});

export { profileStatusListState, userStatusListState };
