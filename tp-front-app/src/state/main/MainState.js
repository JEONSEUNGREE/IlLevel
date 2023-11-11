import { atom } from "recoil";

const todoListState = atom({
    key: "todoListState",
    default: [],
});

const todoListFilterState = atom({
    key: "todoListFilterState",
    default: "Show All",
});

const rcmLocalListState = atom({
    key: "rcmLocalListState",
    default: [
        {
            maxWidth: 300,
            height: 200,
            imageUrl:
                "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg",
            title: "먼지",
            contents: "미묘하게 말 안 듣게 생김",
        },
        {
            maxWidth: 300,
            height: 200,
            imageUrl:
                "https://cdn.pixabay.com/photo/2015/11/10/20/10/dog-1037702_1280.jpg",
            title: "돌멩이",
            contents: "목욕이 시급한",
        },
        {
            maxWidth: 300,
            height: 200,
            imageUrl:
                "https://cdn.pixabay.com/photo/2016/01/05/17/57/dog-1123026_1280.jpg",
            title: "깨끗",
            contents: "눈물 자국 없는 말티즈",
        },
        {
            maxWidth: 300,
            height: 200,
            imageUrl:
                "https://cdn.pixabay.com/photo/2020/02/05/09/23/dog-4820566_1280.jpg",
            title: "달려라 멍멍이",
            contents: "하지만 꼴등",
        },
        {
            maxWidth: 300,
            height: 200,
            imageUrl:
                "https://cdn.pixabay.com/photo/2023/01/24/13/17/animal-7741005_1280.jpg",
            title: "손자 기다리는 할머니",
            contents: "특징 : 손을 유심히 살펴보는 스타일",
        },
    ],
});

const rcmFoodListState = atom({
    key: "rcmFoodListState",
    default: [
        {
            maxWidth: 300,
            imageUrl:
                "https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg",
            height: 200,
            title: "빵굽 웰시코기",
            contents: "css 왜 공부해야되는지 설명해줄분 구함",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://png.pngtree.com/background/20230610/original/pngtree-two-white-puppies-with-their-mouths-moving-picture-image_3054164.jpg",
            height: 200,
            title: "하얀 털뭉치들",
            contents: "css 왜 공부해야되는지 설명해줄분 구함",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oqjc7nbofzwGVYyKvxSgmWNhfYlwbrGlJw&usqp=CAU",
            height: 200,
            title: "냐오미",
            contents: "css 왜 공부해야되는지 설명해줄분 구함",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMTcw/MDAxNjQzMTAyOTg1NjY2.CnGtAfHsMeqzKuAXan3hk102JU0Cw6wM77Hr61YY81gg.BQQMgu9l_SEmNrUAkVF3SQ-VfRnbWZB3LX7cWXwFdmMg.JPEG.minziminzi128/IMG_7363.JPG?type=w800",
            height: 200,
            title: "카오스 냐오미",
            contents: "css 왜 공부해야되는지 설명해줄분 구함",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMTAg/MDAxNjQzMTAyOTg0ODA5.q_DQWr2DSXnLYALcvh7u9o8DLZbD6OixJWa_Y7bwv4Yg.IHgg6s43ZkW0jRw3kKxr0WWrccnHJ0HflOYCbDVdGwog.JPEG.minziminzi128/IMG_7369.JPG?type=w800",
            height: 200,
            title: "만렙 프로그래머",
            contents: "css 왜 공부해야되는지 설명해줄분 구함",
        },
    ],
});

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

export {
    todoListState,
    todoListFilterState,
    searchRecList,
    rcmLocalListState,
    rcmFoodListState,
};
