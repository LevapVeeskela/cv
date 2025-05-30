import React from 'react';
import styles from './styles.module.scss';

interface UnvisibleLevelButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const UnvisibleLevelButton = ({
  disabled,
  onClick,
}: UnvisibleLevelButtonProps) => (
  <button
    type='button'
    className={styles.unvisibleLevelButton}
    onClick={onClick}
    title={disabled ? 'Enable Level fields' : 'Disable all Level fields'}
    aria-pressed={disabled}
  >
    {/* SVG: Eye with slash icon */}
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path
        d='M2 10C3.8 5.5 10 2 18 10C16.2 14.5 10 18 2 10Z'
        stroke={disabled ? '#bdbdbd' : '#0187de'}
        strokeWidth='1.5'
        fill='none'
      />
      <circle
        cx='10'
        cy='10'
        r='3.2'
        stroke={disabled ? '#bdbdbd' : '#0187de'}
        strokeWidth='1.5'
        fill='none'
      />
      <line x1='3' y1='17' x2='17' y2='3' stroke='#e53935' strokeWidth='1.5' />
    </svg>
  </button>
);

export default UnvisibleLevelButton;
