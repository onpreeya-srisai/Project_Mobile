import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, task: "Hello" },
  { id: 2, task: "A" },
  { id: 3, task: "B" },
];

let lastId = 3;
const countrySlice = createSlice({
  name: "country",
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

// console.log(todosSlice);
const { actions, reducer } = countrySlice;
export const { addTodo, deleteTodo, updateTodo } = actions;
export default reducer;
