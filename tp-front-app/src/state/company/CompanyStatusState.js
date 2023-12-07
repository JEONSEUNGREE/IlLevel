import { atom } from "recoil";

const companyStatusListState = atom({
    key: "companyStatusListState",
    default: [
        {
            id: 0,
            name: "등록",
            path: "/",
        },
        {
            id: 1,
            name: "정보",
            path: "/",
        },
        {
            id: 2,
            name: "예약확인",
            path: "/",
        },
        {
            id: 3,
            name: "매출",
            path: "/",
        },
        {
            id: 4,
            name: "체크인",
            path: "/",
        },
        {
            id: 5,
            name: "체크아웃",
            path: "/",
        },
        {
            id: 6,
            name: "리뷰",
            path: "/",
        },
    ],
});

export { companyStatusListState };
