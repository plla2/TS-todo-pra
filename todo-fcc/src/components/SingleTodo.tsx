import React from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./SingleTodo.scss";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <span className="icon">
        <AiFillEdit />
      </span>
      <span className="icon">
        <AiFillDelete />
      </span>
      <span className="icon">
        <MdDone />
      </span>
    </form>
  );
};

export default SingleTodo;
