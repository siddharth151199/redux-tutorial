import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlice'
function saveToLocalStorage(state) {
  try {
    const serialState = JSON.stringify(state)
    localStorage.setItem("reduxStore", serialState)
  } catch (e) {
    console.warn(e);
  }
}
function loadFromLocalStorage() {

  try {
    const serialisedState = localStorage.getItem("reduxStore");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStorage()
})
store.subscribe(() =>
  saveToLocalStorage(store.getState()));
export default store;
