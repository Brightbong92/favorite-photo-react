import React, { Dispatch, SetStateAction, useState } from 'react';
import todoApi from '../../apis/todo/TodoApi';
import { useForm } from 'react-hook-form';
import {
  useCreateTodoMutateion,
  useUpdateTodoMutation,
} from '../../apis/todo/TodoApi.mutation';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

interface TodoListProps {
  id: string;
  mode: 'add' | 'update';
  setId: Dispatch<SetStateAction<string>>;
  setMode: Dispatch<SetStateAction<'add' | 'update'>>;
}

const TodoList = ({ mode, id, setMode, setId }: TodoListProps) => {
  const queryClient = useQueryClient();
  const { register, getValues, reset, setValue } =
    useForm<Pick<TodoType, 'title' | 'content'>>();

  const { data: todos } = useQuery('todos', todoApi.getTodos);

  const { mutate: createTodoMutate } = useCreateTodoMutateion();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const onSubmit = () => {
    const formValue = getValues();
    const { title, content } = formValue;

    if (mode === 'add') {
      createTodoMutate(
        { title, content },
        {
          onSuccess: (res) => {
            queryClient.invalidateQueries('todos');
            setValue('title', '');
            setValue('content', '');
            setId(res?.data?.id);
          },
          onError: () => {
            alert('add fail');
          },
        },
      );
    } else if (mode === 'update') {
      updateTodoMutate(
        {
          id,
          title,
          content,
        },
        {
          onSuccess: (res) => {
            queryClient.invalidateQueries('todos');
            setValue('title', res?.data?.title);
            setValue('content', res?.data?.content);
            setId(res?.data?.id);
          },
          onError: () => {
            alert('fail update');
          },
        },
      );
    }
  };

  const handleTodoItem = (_todo: TodoType) => {
    setId(_todo.id);
    setValue('title', _todo.title);
    setValue('content', _todo.content);
  };

  const onClickUpdateBtn = () => {
    if (mode === 'add') {
      if (id === '') return alert('please select content');
      setMode('update');
    }
  };

  const onClickUpdateCancelBtn = () => {
    setId('');
    setMode('add');
    setValue('title', '');
    setValue('content', '');
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <p>
          <input
            type="text"
            placeholder="please enter title"
            {...register('title')}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="please enter content"
            {...register('content')}
          />
        </p>
        <button type="button" onClick={onSubmit}>
          add
        </button>

        <button
          type="button"
          onClick={mode === 'add' ? onClickUpdateBtn : onSubmit}
        >
          update
        </button>

        {mode === 'update' && (
          <>
            <button type="button" onClick={onClickUpdateCancelBtn}>
              update cancel
            </button>
          </>
        )}
      </div>

      <div>
        <ol>
          {todos?.data?.map((_todo) => {
            return (
              <li
                key={_todo?.id}
                onClick={() => handleTodoItem(_todo)}
                style={{ cursor: 'pointer' }}
              >
                {_todo.title}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
