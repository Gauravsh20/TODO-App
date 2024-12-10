import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (
    text: string,
    time: string,
    repeatFrequency: string,
    repeatTime: number
  ) => void;
  showMessage: (msg: string, type: 'error' | 'success' | 'info') => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo, showMessage }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState(''); // State for storing time
  const [repeatFrequency, setRepeatFrequency] = useState('daily');
  const [repeatTime, setRepeatTime] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      showMessage('Task cannot be empty!', 'info'); // Show blue message when input is empty
      return;
    }
    if (repeatTime <= 0) {
      showMessage('Repeat time must be greater than 0!', 'info'); // Show blue message for invalid repeat time
      return;
    }
    if (!time) {
      showMessage('Please set a time for the task!', 'info'); // Show blue message if no time is set
      return;
    }
    addTodo(text, time, repeatFrequency, repeatTime);
    setText('');
    setTime('');
    setRepeatTime(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />

      <select
        value={repeatFrequency}
        onChange={(e) => setRepeatFrequency(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <input
        type="number"
        value={repeatTime}
        onChange={(e) => setRepeatTime(Number(e.target.value))}
        min="1"
        placeholder="Repeat Time"
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
