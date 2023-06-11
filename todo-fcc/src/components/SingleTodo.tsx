import React from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo }: Props) => {
  return <div>SingleTodo</div>;
};

export default SingleTodo;
