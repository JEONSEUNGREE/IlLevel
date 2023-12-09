import { atom, useSetRecoilState } from "recoil";
import axios from "axios";
import { server } from "../../util/CommonVal";
import { main_list } from "../../util/CommonUri";

const rcmLocalListState = atom({
    key: "rcmLocalListState",
    default: [],
});

export const useRcmLocalListState = () => {
    const setRcmLocalListState = useSetRecoilState(rcmLocalListState);

    const fetchRcmLocalListState = async () => {
        try {
            const response = await axios.post(server + main_list, {
                pageNumber: 0,
                pageSize: 10,
                mainViewData: [],
                mainSubData: [],
            });
            setRcmLocalListState(response.data.data || []);
        } catch (error) {
            console.error("지역 추천 리스트 호출 오류:", error);
        }
    }; 
    return fetchRcmLocalListState;
};

const rcmPlayListState = atom({
    key: "rcmPlayListState",
    default: [],
});

export const useRcmPlayListState = () => {
    const setRcmPlayListState = useSetRecoilState(rcmPlayListState);

    const fetchRcmPlayListState = async () => {
        try {
            const response = await axios.post(server + main_list, {
                pageNumber: 0,
                pageSize: 10,
                mainViewData: [],
                mainSubData: [],
            });
            setRcmPlayListState(response.data.data || []);
        } catch (error) {
            console.error("즐길거리 추천 리스트 호출 오류:", error);
        }
    }; 
    return fetchRcmPlayListState;
};

const rcmFoodListState = atom({
    key: "rcmFoodListState",
    default: [],
});

export const useRcmFoodListState = () => {
    const setRcmFoodListState = useSetRecoilState(rcmFoodListState);

    const fetchRcmFoodListState = async () => {
        try {
            const response = await axios.post(server + main_list, {
                pageNumber: 0,
                pageSize: 10,
                mainViewData: [],
                mainSubData: [],
            });
            setRcmFoodListState(response.data.data || []);
        } catch (error) {
            console.error("음식점 추천 리스트 호출 오류:", error);
        }
    }; 
    return fetchRcmFoodListState;
};

const searchRecList = atom({
    key: "searchList",
    default: [
        { title: "마카오", year: 1994 },
        { title: "뉴욕", year: 1972 },
        { title: "호놀룰루", year: 1974 },
        { title: "파리", year: 2008 },
        { title: "제주", year: 1957 },
        { title: "이스탄불", year: 1993 },
    ],
});

// const todoListStatsState = selector({
//     key: "todoListStatsState",
//     get: ({ get }) => {
//         const todoList = get(todoListState);
//         const totalNum = todoList.length;
//         const totalCompletedNum = todoList.filter(
//             (item) => item.isComplete,
//         ).length;
//         let allText = "";
//         todoList
//             .filter((item) => !item.isComplete)
//             .map((item) => (allText = allText + " " + item.text));
//         const totalUncompletedNum = totalNum - totalCompletedNum;
//         const percentCompleted =
//             totalNum === 0 ? 0 : totalCompletedNum / totalNum;

//         return {
//             totalNum,
//             totalCompletedNum,
//             totalUncompletedNum,
//             percentCompleted,
//             allText,
//         };
//     },
// });

export { searchRecList, rcmLocalListState, rcmPlayListState, rcmFoodListState };
