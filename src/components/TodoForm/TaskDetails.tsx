import React from 'react';
import { FrequencySelect } from './FrequencySelect';
import { TimeInput } from './TimeInput';
import { RepeatInput } from './RepeatInput';

interface TaskDetailsProps {
  repeatFrequency: string;
  repeatTime: number;
  time: string;
  onRepeatFrequencyChange: (frequency: string) => void;
  onRepeatTimeChange: (time: number) => void;
  onTimeChange: (time: string) => void;
  onSubmit: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  repeatFrequency,
  repeatTime,
  time,
  onRepeatFrequencyChange,
  onRepeatTimeChange,
  onTimeChange,
  onSubmit,
}) => (
  <>
    <FrequencySelect
      value={repeatFrequency}
      onChange={onRepeatFrequencyChange}
    />
    <RepeatInput
      value={repeatTime}
      onChange={onRepeatTimeChange}
    />
    <TimeInput
      value={time}
      onChange={onTimeChange}
    />
    <button onClick={onSubmit}>Confirm Task</button>
  </>
);

export default TaskDetails;