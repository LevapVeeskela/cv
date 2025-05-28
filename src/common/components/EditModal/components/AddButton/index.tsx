import React from 'react';
import './styles.scss';

interface AddButtonProps {
  onClick: () => void;
  title?: string;
  children?: React.ReactNode;
}

const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  title = 'Add',
  children = '+',
}) => (
  <button type='button' className='add-button' title={title} onClick={onClick}>
    {children}
  </button>
);

export default AddButton;
