export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const saveToLocalStorage = (todos: any[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadFromLocalStorage = (): any[] => {
  const stored = localStorage.getItem('todos');
  return stored ? JSON.parse(stored) : [];
};