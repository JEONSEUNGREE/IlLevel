import { logout } from "../../util/CommonUri";

const userIconListState = [
    {
        id: 0,
        name: "프로필 페이지",
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
];

const comIconListState = [
    {
        id: 0,
        name: "사업자 페이지",
        path: "/company",
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
];

export { userIconListState, comIconListState };
