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
                "https://i0.wp.com/picjumbo.com/wp-content/uploads/cute-yorkshire-terrier-puppy.jpg?w=2210&quality=70",
            height: 200,
            title: "호캉스",
            contents: "텔레비전 중독",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://i0.wp.com/picjumbo.com/wp-content/uploads/combing-the-head-of-yorkshire-terrier.jpg?w=2210&quality=70",
            height: 200,
            title: "따갑다",
            contents: "주인아 살살 빗으랬지",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            height: 200,
            title: "교수님 연구실",
            contents: "특징 : 모니터 화면 포커 게임",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://images.pexels.com/photos/1629780/pexels-photo-1629780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            height: 200,
            title: "지그시",
            contents: "자네가 개껌을 빼돌렸나",
        },
        {
            maxWidth: 300,
            imageUrl:
                "https://images.pexels.com/photos/1174081/pexels-photo-1174081.jpeg",
            height: 200,
            title: "킁킁",
            contents: "고기 먹었구나",
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
