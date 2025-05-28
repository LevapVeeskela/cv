import React from 'react';
import './styles.scss';

interface DeleteButtonProps {
  onClick: () => void;
  title?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
  title = 'Delete',
}) => (
  <button
    type='button'
    className='delete-button'
    title={title}
    onClick={onClick}
  >
    🗑
  </button>
);

export default DeleteButton;
