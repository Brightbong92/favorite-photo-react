import React, { useState } from 'react';
import { useQuery } from 'react-query';
import todoApi from '../../apis/todo/TodoApi';
import TodoItem from '../../components/todo/TodoItem';
import TodoList from '../../components/todo/TodoList';

const TodoPage = () => {
  const { data: todos } = useQuery('todos', todoApi.getTodos, {
    refetchOnWindowFocus: false,
  });

  const [mode, setMode] = useState<'add' | 'update'>('add');
  const [content, setContent] = useState<string>('');

  return (
    <>
      <TodoList {...{ mode, setMode, content, setContent }} />
      <hr />
      <TodoItem {...{ content, setContent }} />
    </>
  );
};

export default TodoPage;
