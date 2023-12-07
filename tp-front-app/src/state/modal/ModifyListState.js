import { atom } from "recoil";

const modifyListState = atom({
    key: "modifyListState",
    default: [
        {
            id: 0,
            name: "프로필 수정",
            path: "/",
        },
        {
            id: 1,
            name: "프로필 사진 수정",
            path: "/",
        },
        {
            id: 2,
            name: "커버 사진 수정",
            path: "/",
        },
    ],
});

export { modifyListState };
