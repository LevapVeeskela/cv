import './styles.scss';

interface Props {
  onClickHandler: () => void;
}

const Button = ({ onClickHandler }: Props) => {
  return (
    <button className='EditModalButton' onClick={onClickHandler}>
      Edit CV
    </button>
  );
};

export default Button;
