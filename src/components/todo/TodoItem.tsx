import React from 'react';
import { useTodoByIdQuery } from '../../apis/todo/TodoApi.query';

const TodoItem = () => {
  const { data } = useTodoByIdQuery();

  return <div>TodoItem</div>;
};

export default TodoItem;
