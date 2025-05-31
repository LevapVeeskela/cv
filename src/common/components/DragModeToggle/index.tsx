import styles from './styles.module.scss';

interface DragModeToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const DragModeToggle = ({ enabled, onToggle }: DragModeToggleProps) => (
  <button
    className={styles.dragToggleBtn}
    type='button'
    aria-pressed={enabled}
    onClick={onToggle}
    title={enabled ? 'Disable block sorting' : 'Enable block sorting'}
  >
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden='true'
    >
      {/* Up arrow (left) */}
      <path
        d='M8 17V7'
        stroke={enabled ? '#232A36' : '#B0B4BB'}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <polyline
        points='6,9 8,7 10,9'
        fill='none'
        stroke={enabled ? '#232A36' : '#B0B4BB'}
        strokeWidth='2'
        strokeLinecap='round'
      />
      {/* Down arrow (right) */}
      <path
        d='M16 7v10'
        stroke={enabled ? '#B0B4BB' : '#232A36'}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <polyline
        points='14,15 16,17 18,15'
        fill='none'
        stroke={enabled ? '#B0B4BB' : '#232A36'}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  </button>
);

export default DragModeToggle;
