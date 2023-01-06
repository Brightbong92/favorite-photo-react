import { useQuery } from 'react-query';
import todoApi from './TodoApi';

const Keys = {
  all: ['todos'] as const,
  details: () => [...Keys.all, 'detail'] as const,
  GET_BY_ID: (id: string) => [...Keys.details(), id] as const,
};

export const useTodosQuery = () => {
  const todos = todoApi.getTodos;
  return useQuery('todos', todos);
};

export const useTodoByIdQuery = () => {
  const todoById = todoApi.getTodoById;
  return useQuery('todoById', () => todoById);
};
