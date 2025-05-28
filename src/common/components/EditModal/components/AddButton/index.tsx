import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface AddButtonProps {
  onClick: () => void;
  title?: string;
}

const AddButton = ({
  onClick,
  title = 'Add',
  children = '+',
}: PropsWithChildren<AddButtonProps>) => (
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
