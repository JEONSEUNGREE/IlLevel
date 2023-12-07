import { atom } from "recoil";

const infoListState = atom({
    key: "companyInfoListState",
    default: [
        {
            id: 0,
            infoName: "포스팅",
            infoCount: 100,
            path: "/posting",
        },
        {
            id: 1,
            infoName: "팔로워",
            infoCount: 100,
            path: "/follower",
        },
        {
            id: 2,
            infoName: "팔로잉",
            infoCount: 100,
            path: "/following",
        },
    ],
});

export { infoListState };
