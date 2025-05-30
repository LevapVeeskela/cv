import styles from './styles.module.scss';

interface ClearButtonProps {
  onClick: () => void;
  title?: string;
}

const ClearButton = ({
  onClick,
  title = 'Clear all fields',
}: ClearButtonProps) => (
  <button
    type='button'
    className={styles.clearButton}
    title={title}
    onClick={onClick}
  >
    {/* SVG иконка ластика */}
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <g>
        <rect x='6' y='12' width='8' height='3' rx='1' fill='#bdbdbd' />
        <polygon
          points='5,11 13,3 17,7 9,15'
          fill='#f5f5f5'
          stroke='#bdbdbd'
          strokeWidth='1.2'
        />
        <rect x='8.5' y='13.5' width='3' height='1' rx='0.5' fill='#e57373' />
      </g>
    </svg>
  </button>
);

export default ClearButton;
