import React from 'react';

interface FrequencySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const FrequencySelect: React.FC<FrequencySelectProps> = ({
  value,
  onChange,
}) => (
  <div>
    <label>Repeat Frequency: </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
    </select>
  </div>
);