import { createSlice, nanoid } from '@reduxjs/toolkit'


export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    ACTIVE: "ACTIVE"
  }

const initialState = {
    todos: [],
    filterBy: filters.ALL

}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        },
        filterBy(state, action) {
            state.filterBy = action.payload
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, filterBy } = todoSlice.actions
export default todoSlice.reducer