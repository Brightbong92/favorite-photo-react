import { useQuery } from 'react-query';
import todoApi from './TodoApi';

export const KEYS = {
  GET_BY_ID: (params: string) => ['todoById', params],
};

export const useGetTodoByIdQuery = (id: string) => {
  const queryKey = KEYS.GET_BY_ID(id);
  return useQuery(queryKey, () => todoApi.getTodoById({ id }));
};
