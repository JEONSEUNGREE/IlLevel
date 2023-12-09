import { atom } from "recoil";
import { logout } from "../../util/CommonUri";

const iconListState = atom({
    key: "iconListState",
    default: [
        {
            id: 0,
            name: "프로필 보기",
            path: "/profile",
        },
        {
            id: 1,
            name: "알림",
            path: "/",
        },
        {
            id: 2,
            name: "로그아웃",
            path: logout,
        },
    ],
});

export { iconListState };
