import { atom } from "recoil";

const companyStatusListState = atom({
    key: "companyStatusListState",
    default: [
        {
            id: 0,
            name: "등록정보",
        },
        {
            id: 1,
            name: "예약확인",
        },
        {
            id: 2,
            name: "리뷰",
        },
    ],
});

export { companyStatusListState };
