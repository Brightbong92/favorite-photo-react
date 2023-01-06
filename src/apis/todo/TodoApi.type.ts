export type TodoType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoListResponseType = {
  data: TodoType[];
};

export type TodoResponseType = {
  data: TodoType;
};
