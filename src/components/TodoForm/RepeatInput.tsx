import React from 'react';

interface RepeatInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const RepeatInput: React.FC<RepeatInputProps> = ({ value, onChange }) => (
  <div>
    <label>Repeat Time: </label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min="1"
    />
  </div>
);