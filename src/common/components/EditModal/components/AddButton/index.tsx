import React from 'react';
import styles from './styles.module.scss';

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
  <button
    type='button'
    className={styles.addButton}
    title={title}
    onClick={onClick}
  >
    {children}
  </button>
);

export default AddButton;
