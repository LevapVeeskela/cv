import { useProjectContext } from '@core/context/ProjectContext';
import styles from './styles.module.scss';

const ResetCacheButton = () => {
  const { resetCvData } = useProjectContext();

  return (
    <button
      type='button'
      onClick={resetCvData}
      className={styles.ResetCacheButton}
      title={'Reset CV to Default'}
    >
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        aria-hidden='true'
      >
        <path
          d='M3 9a6 6 0 0 1 9.33-5M15 3v4h-4'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 9a6 6 0 0 1-9.33 5M3 15v-4h4'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

export default ResetCacheButton;
