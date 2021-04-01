import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);

  const add = (task)=> {
    dispatch({
      type: "ADD_TODO",
      task
    });
  }

    const remove = (id)=> {
    dispatch({ type: "REMOVE_TODO", id });
  }

  const todoComponents = todos.map(todo => (
    <Todo
      deleteTodo={remove}
      id={todo.id}
      key={todo.id}
      task={todo.task}      
    />
  ));
  return (
    <div>
      <TodoForm createTodo={add} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;