import styles from './styles.module.scss';

interface Props {
  onClickHandler: () => void;
}

const Button = ({ onClickHandler }: Props) => {
  return (
    <button className={styles.EditModalButton} onClick={onClickHandler}>
      Edit CV
    </button>
  );
};

export default Button;
