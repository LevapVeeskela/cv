import styles from './styles.module.scss';

interface DeleteButtonProps {
  onClick: () => void;
  title?: string;
}

const DeleteButton = ({ onClick, title = 'Delete' }: DeleteButtonProps) => (
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
