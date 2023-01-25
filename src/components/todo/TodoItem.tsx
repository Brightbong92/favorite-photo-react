import React, { Dispatch, SetStateAction } from 'react';

import { useGetTodoByIdQuery } from '../../apis/todo/TodoApi.query';

interface TodoItemProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}
const TodoItem = (props: TodoItemProps) => {
  const { id } = props;

  const { data: todoData } = useGetTodoByIdQuery(id);

  return (
    <div>
      <h1>Todo Item</h1>
      <h3>{todoData?.data.title}</h3>
      <p>{todoData?.data.content}</p>
    </div>
  );
};

export default TodoItem;
