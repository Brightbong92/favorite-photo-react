import React, { Dispatch, SetStateAction } from 'react';

interface TodoItemProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}
const TodoItem = (props: TodoItemProps) => {
  const { content, setContent } = props;
  return (
    <div>
      <h1>Todo Item</h1>
      <div>{content}</div>
    </div>
  );
};

export default TodoItem;
