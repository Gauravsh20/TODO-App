import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../types/Todo';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  filter: 'all' | 'active' | 'completed';
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
}) => {
  if (todos.length === 0) {
    return <div className="no-data">No tasks found</div>;
  }

  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Task</th>
          <th>Date & Time</th>
          <th>Repeat Frequency</th>
          <th>Repeat Time</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;