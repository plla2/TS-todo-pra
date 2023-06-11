import React from "react";
import { Todo } from "../model";
import "./TodoList.scss";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  console.log(todos);
  return (
    <div>
      <div className="todos">
        {todos.map((todo) => (
          <SingleTodo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
