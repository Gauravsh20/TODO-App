import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import { generateId, saveToLocalStorage, loadFromLocalStorage } from '../utils/todoUtils';

interface TodoData {
  text: string;
  time: string;
  repeatFrequency: string;
  repeatTime: number;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadedTodos = loadFromLocalStorage();
    setTodos(loadedTodos);
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos);
  }, [todos]);

  const addTodo = (todoData: TodoData) => {
    const newTodo: Todo = {
      id: generateId(),
      ...todoData,
      date: new Date().toLocaleString(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    return newTodo;
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const getFilteredTodos = (filter: 'all' | 'active' | 'completed') => {
    return todos.filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    getFilteredTodos,
  };
};