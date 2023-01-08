import React, { Dispatch, SetStateAction, useState } from 'react';
import todoApi from '../../apis/todo/TodoApi';
import { useForm } from 'react-hook-form';
import {
  useCreateTodoMutateion,
  useUpdateTodoMutation,
} from '../../apis/todo/TodoApi.mutation';
import { useQuery, useQueryClient } from 'react-query';

interface TodoListProps {
  mode: 'add' | 'update';
  content: string;
  setMode: Dispatch<SetStateAction<'add' | 'update'>>;
  setContent: Dispatch<SetStateAction<string>>;
}

const TodoList = ({ mode, content, setMode, setContent }: TodoListProps) => {
  const queryClient = useQueryClient();
  const { register, getValues, reset, setValue } =
    useForm<Pick<TodoType, 'title' | 'content'>>();

  const { data: todos } = useQuery('todos', todoApi.getTodos, {
    refetchOnWindowFocus: false,
  });

  const [id, setId] = useState<string>('');

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
            setContent(res?.data?.content);
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
            setContent(res?.data?.content);
          },
          onError: () => {
            alert('fail update');
          },
        },
      );
    }
  };

  const handleTodoItem = (_todo: TodoType) => {
    // if (mode === 'update') {
    setValue('title', _todo.title);
    setValue('content', _todo.content);
    // }
    setContent(_todo.content);
    setId(_todo.id);
  };

  const onClickUpdateBtn = () => {
    if (mode === 'add') {
      if (content === '') return alert('please select content');
      setMode('update');
    }
  };

  const onClickUpdateCancelBtn = () => {
    setMode('add');
    setValue('title', '');
    setValue('content', '');
    setContent('');
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

            {/* <button type="button" onClick={onSubmit}>
              update submit
            </button> */}
          </>
        )}
      </div>

      <div>
        <ol>
          {todos?.data?.map((_todo) => {
            return (
              <li
                key={_todo?.id}
                style={{ cursor: 'pointer' }}
                onClick={() => handleTodoItem(_todo)}
              >
                {_todo?.title}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
