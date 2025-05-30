import styles from './styles.module.scss';

interface CloseConfirmProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const CloseConfirm = ({ onCancel, onConfirm }: CloseConfirmProps) => (
  <div className={styles.overlay}>
    <div className={styles.dialog}>
      <div className={styles.text}>
        Are you sure you want to close editing your CV? All unsaved changes will
        be lost.
      </div>
      <div className={styles.actions}>
        <button
          type='button'
          className={styles.returnButton}
          onClick={onCancel}
        >
          Return to editing
        </button>
        <button
          type='button'
          className={styles.confirmButton}
          onClick={onConfirm}
        >
          Yes, close
        </button>
      </div>
    </div>
  </div>
);

export default CloseConfirm;
