import React, { Dispatch, SetStateAction } from 'react';
import { useQuery } from 'react-query';
import todoApi from '../../apis/todo/TodoApi';

interface TodoItemProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}
const TodoItem = (props: TodoItemProps) => {
  const { id, setId } = props;

  const { data: todoData } = useQuery(['todoById', id], () =>
    todoApi.getTodoById({ id }),
  );

  return (
    <div>
      <h1>Todo Item</h1>
      <h3>{todoData?.data.title}</h3>
      <p>{todoData?.data.content}</p>
    </div>
  );
};

export default TodoItem;
