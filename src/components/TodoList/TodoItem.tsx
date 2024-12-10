import React from 'react';
import { Todo } from '../../types/Todo';

interface TodoItemProps {
  todo: Todo;
  index: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  onToggle,
  onDelete,
}) => (
  <tr className={todo.completed ? 'completed' : ''}>
    <td>{index + 1}</td>
    <td>{todo.text}</td>
    <td>
      {todo.date} at {todo.time}
    </td>
    <td>{todo.repeatFrequency}</td>
    <td>{todo.repeatTime}</td>
    <td>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
    </td>
    <td>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default TodoItem;