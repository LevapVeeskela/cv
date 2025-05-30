import styles from './styles.module.scss';
import ClearButton from '../ClearButton';
import { CvData } from '@constants';

interface SummaryProps {
  biography: string;
  onChange: (value: string) => void;
  onClearSection: (section: keyof CvData) => void;
}

const Summary = ({ biography, onChange, onClearSection }: SummaryProps) => {
  return (
    <fieldset
      className={styles.summarySection}
      style={{ position: 'relative' }}
    >
      <legend>Summary</legend>
      <ClearButton
        onClick={() => onClearSection('biography')}
        title='Clear biography'
      />
      <label>
        Biography:
        <textarea
          value={biography}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};

export default Summary;
