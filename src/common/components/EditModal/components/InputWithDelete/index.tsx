import React from 'react';
import DeleteButton from '../DeleteButton';

interface InputWithDeleteProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  type?: string;
}

const InputWithDelete: React.FC<InputWithDeleteProps> = ({
  label,
  value,
  onChange,
  onDelete,
  type = 'text',
}) => (
  <>
    <label style={{ flex: 1 }}>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
    <DeleteButton onClick={onDelete} />
  </>
);

export default InputWithDelete;
