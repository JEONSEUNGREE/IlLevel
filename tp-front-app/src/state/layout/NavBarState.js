import { atom } from "recoil";

const navListState = atom({
    key: "navListState",
    default: [
        {
            id: 0,
            navName: "살펴보기",
            path: "/discover",
        },
        {
            id: 1,
            navName: "여행",
            path: "/trips",
        },
        {
            id: 2,
            navName: "커뮤니티",
            path: "/community",
        },
        {
            id: 3,
            navName: "더 보기",
            path: "/more",
        },
    ],
});

export { navListState };
