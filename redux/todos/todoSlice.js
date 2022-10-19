import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, task: "Play with cat" },
  { id: 2, task: "Yoga" },
  { id: 3, task: "Teaching" },
];

let lastId = 3;
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log("addTodo actived payload");
      state.push({ id: ++lastId, task: action.payload }); //proxy state
    },
    deleteTodo(state, action) {
      console.log("deleteTodo actived payload");
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodo(state, action) {
      console.log("updateTodo actived payload");
      state.map((item) => {
        if (item.id === action.payload.id) {
          return (item.task = action.payload.task);
        }
      });
    },
  },
});

console.log(todosSlice);
const { actions, reducer } = todosSlice;
export const { addTodo, deleteTodo, updateTodo } = actions;
export default reducer;
