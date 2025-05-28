import React from 'react';
import styles from './styles.module.scss';

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
    className={styles.deleteButton}
    title={title}
    onClick={onClick}
  >
    🗑
  </button>
);

export default DeleteButton;
