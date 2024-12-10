import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { useTodos } from './hooks/useTodos';
import { useMessage } from './hooks/useMessage';

const App: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const { addTodo, deleteTodo, toggleTodo, getFilteredTodos } = useTodos();
  const { message, messageType, showMessage } = useMessage();

  const handleAddTodo = (todoData: {
    text: string;
    time: string;
    repeatFrequency: string;
    repeatTime: number;
  }) => {
    addTodo(todoData);
    showMessage('Task added successfully!', 'success');
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
    showMessage('Task deleted successfully!', 'success');
  };

  const handleToggleTodo = (id: string) => {
    toggleTodo(id);
    showMessage('Task status updated!', 'success');
  };

  return (
    <>
      <NavBar onFilterChange={setFilter} currentFilter={filter} />
      <div className="app">
        {message && <div className={`message ${messageType}`}>{message}</div>}
        <TodoForm onAddTodo={handleAddTodo} onShowMessage={showMessage} />
        <TodoList
          todos={getFilteredTodos(filter)}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          filter={filter}
        />
      </div>
    </>
  );
};

export default App;