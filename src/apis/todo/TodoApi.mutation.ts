import todoApi from './TodoApi';
import { useMutation } from 'react-query';

const KEYS = {
  createTodo: 'createTodo' as const,
  updateTodo: 'updateTodo' as const,
  deleteTodo: 'deleteTodo' as const,
};

export const useCreateTodoMutateion = () => {
  const createTodo = todoApi.createTodo;
  return useMutation(KEYS.createTodo, createTodo);
};

export const useUpdateTodoMutation = () => {
  const updateTodo = todoApi.updateTodo;
  return useMutation(KEYS.updateTodo, updateTodo);
};

export const useDeleteTodoMutation = () => {
  const deleteTodo = todoApi.deleteTodo;
  return useMutation(KEYS.deleteTodo, deleteTodo);
};
