import React from "react";
import ToDo from "./ToDo";


const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {Array.isArray(todos) ? (
        todos
        .map((todo) => (
          <ToDo
            todo={todo}
            onClickDelete={onClickDelete(todo)}
            onClickComplete={onClickComplete(todo)}
          />
        ))
        .reduce((acc, cur) => [...acc, <hr />, cur], [])
      ) : null}
    </>
  );
};

export default TodoList;
