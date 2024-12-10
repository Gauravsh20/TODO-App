import React from 'react';

interface TaskInputProps {
  taskText: string;
  onTaskTextChange: (text: string) => void;
  onSubmit: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({
  taskText,
  onTaskTextChange,
  onSubmit,
}) => (
  <>
    <input
      type="text"
      value={taskText}
      onChange={(e) => onTaskTextChange(e.target.value)}
      placeholder="Add a new task"
      onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
    />
    <button onClick={onSubmit}>Add Task</button>
  </>
);

export default TaskInput;