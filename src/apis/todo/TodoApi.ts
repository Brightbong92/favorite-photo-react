import { AxiosInstance } from 'axios';
import instance from '../_axios/instance';
import {
  TodoListResponseType,
  TodoResponseType,
  TodoType,
} from './TodoApi.type';

class TodoApi {
  axios = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = instance;
  }

  getTodos = async (): Promise<TodoListResponseType> => {
    const { data } = await instance({
      method: 'GET',
      url: `/todos`,
    });
    return data;
  };

  getTodoById = async (id: string): Promise<TodoResponseType> => {
    const { data } = await instance({
      method: 'GET',
      url: `/todos/${id}`,
    });
    return data;
  };

  createTodo = async (
    req: Pick<TodoType, 'title' | 'content'>,
  ): Promise<TodoResponseType> => {
    const { title, content } = req;
    const { data } = await instance({
      method: 'POST',
      url: '/todos',
      data: { title, content },
    });
    return data;
  };

  updateTodo = async (
    req: Pick<TodoType, 'id' | 'title' | 'content'>,
  ): Promise<TodoResponseType> => {
    const { id, title, content } = req;
    const { data } = await instance({
      method: 'PUT',
      url: `/todos/${id}`,
      data: { title, content },
    });
    return data;
  };

  deleteTodo = async (req: Pick<TodoType, 'id'>): Promise<{ data: null }> => {
    const { id } = req;
    const { data } = await instance({
      method: 'DELETE',
      url: `/todos/${id}`,
    });
    return data;
  };
}

const todoApi = new TodoApi();

export default todoApi;
