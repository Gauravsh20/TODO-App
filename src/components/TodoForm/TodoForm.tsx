import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskDetails from './TaskDetails';

interface TodoFormProps {
  onAddTodo: (todo: {
    text: string;
    time: string;
    repeatFrequency: string;
    repeatTime: number;
  }) => void;
  onShowMessage: (msg: string, type: 'error' | 'success' | 'info') => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo, onShowMessage }) => {
  const [taskText, setTaskText] = useState('');
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [repeatFrequency, setRepeatFrequency] = useState('daily');
  const [repeatTime, setRepeatTime] = useState(1);
  const [time, setTime] = useState('');

  const handleAddText = () => {
    if (!taskText.trim()) {
      onShowMessage('Task cannot be empty!', 'info');
      return;
    }
    setShowDetailsForm(true);
  };

  const handleAddDetails = () => {
    if (!time) {
      onShowMessage('Please set a time for the task!', 'info');
      return;
    }
    if (repeatTime <= 0) {
      onShowMessage('Repeat time must be greater than 0!', 'info');
      return;
    }

    onAddTodo({
      text: taskText,
      time,
      repeatFrequency,
      repeatTime,
    });

    setShowDetailsForm(false);
    setTaskText('');
    setTime('');
    setRepeatTime(1);
  };

  return (
    <div className="form-container">
      {!showDetailsForm ? (
        <TaskInput
          taskText={taskText}
          onTaskTextChange={setTaskText}
          onSubmit={handleAddText}
        />
      ) : (
        <TaskDetails
          repeatFrequency={repeatFrequency}
          repeatTime={repeatTime}
          time={time}
          onRepeatFrequencyChange={setRepeatFrequency}
          onRepeatTimeChange={setRepeatTime}
          onTimeChange={setTime}
          onSubmit={handleAddDetails}
        />
      )}
    </div>
  );
};

export default TodoForm;