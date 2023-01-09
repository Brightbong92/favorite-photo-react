import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import todoApi from '../../apis/todo/TodoApi';
import TodoItem from '../../components/todo/TodoItem';
import TodoList from '../../components/todo/TodoList';

const TodoPage = () => {
  const [mode, setMode] = useState<'add' | 'update'>('add');

  const [id, setId] = useState<string>('');

  return (
    <>
      <TodoList {...{ mode, setMode, id, setId }} />
      <hr />
      <TodoItem {...{ id, setId }} />
    </>
  );
};

export default TodoPage;
