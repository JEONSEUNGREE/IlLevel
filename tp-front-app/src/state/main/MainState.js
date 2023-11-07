import { atom, selector } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: []
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    
    return <div>test1 Loading</div>
  }
});

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    let allText = "";
    todoList
      .filter((item) => !item.isComplete)
      .map((item) => (allText = allText + " " + item.text));
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText
    };
  }
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState
};
