import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
