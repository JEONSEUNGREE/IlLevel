import { atom } from "recoil";

const infoListState = atom({
    key: "infoListState",
    default: [
        {
            infoName: "포스팅",
            infoCount: 100,
            path: "/posting",
        },
        {
            infoName: "팔로워",
            infoCount: 100,
            path: "/follower",
        },
        {
            infoName: "팔로잉",
            infoCount: 100,
            path: "/following",
        },
    ],
});

export { infoListState };
