import { atom } from "recoil";

const navListState = atom({
    key: "navListState",
    default: [
        {
            navName: "살펴보기",
            path: "/discover",
        },
        {
            navName: "여행",
            path: "/trips",
        },
        {
            navName: "커뮤니티",
            path: "/community",
        },
        {
            navName: "더 보기",
            path: "/more",
        },
    ],
});

// const filteredTodoListState = selector({
//   key: "navListState",
//   get: ({ get }) => {
//     const filter = get(todoListFilterState);

//     return <div>test1 Loading</div>
//   }
// });

// const todoListStatsState = selector({
//   key: "todoListStatsState",
//   get: ({ get }) => {
//     const todoList = get(todoListState);
//     const totalNum = todoList.length;
//     const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
//     let allText = "";
//     todoList
//       .filter((item) => !item.isComplete)
//       .map((item) => (allText = allText + " " + item.text));
//     const totalUncompletedNum = totalNum - totalCompletedNum;
//     const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

//     return {
//       totalNum,
//       totalCompletedNum,
//       totalUncompletedNum,
//       percentCompleted,
//       allText
//     };
//   }
// });

export { navListState };
