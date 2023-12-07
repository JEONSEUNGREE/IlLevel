import { atom } from "recoil";

const iconListState = atom({
    key: "iconListState",
    default: [
        {
            id: 0,
            name: "프로필 보기",
            path: "/",
        },
        {
            id: 1,
            name: "알림",
            path: "/",
        },
        {
            id: 2,
            name: "로그아웃",
            path: "/",
        },
    ],
});

export { iconListState };
