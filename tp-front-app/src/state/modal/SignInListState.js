import { atom } from "recoil";
import { signGoogle, signNaver, signKakao } from "../../util/CommonVal";

const signInListState = atom({
    key: "signInListState",
    default: [
        {
            id: 0,
            signInName: "구글로 계속하기",
            path: signGoogle,
        },
        {
            id: 1,
            signInName: "네이버로 계속하기",
            path: signNaver,
        },
        {
            id: 2,
            signInName: "카카오로 계속하기",
            path: signKakao,
        },
        {
            id: 3,
            signInName: "이메일로 계속하기",
            path: "/",
        },
    ],
});

export { signInListState };
