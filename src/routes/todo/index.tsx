import React from 'react';
import TodoItem from '../../components/todo/TodoItem';
import TodoList from '../../components/todo/TodoList';
import { useTodosQuery } from '../../apis/todo/TodoApi.query';

const TodoPage = () => {
  const { data } = useTodosQuery();

  console.log('data', data);

  return (
    <>
      <TodoList />
      <hr />
      <TodoItem />
    </>
  );
};

export default TodoPage;
