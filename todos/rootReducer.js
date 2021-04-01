import uuid from "uuid/v4";

const INITIAL_STATE = {
    todos:[]
}

const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === "ADD_TODO") {
        return { ...state, todos: [...state.todos, { task: action.task, id: uuid() }] }
    }
    if (action.type === "REMOVE_TODO") {
        return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
    }
        return state;
    }

export default reducer;
