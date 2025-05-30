import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import ClearButton from '../ClearButton';
import styles from './styles.module.scss';
import { CvData } from '@constants';

interface InterestsProps {
  interests: string[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (idx: number, value: string) => void;
  onClearSection: (section: keyof CvData) => void;
}

const Interests = ({
  interests,
  onAdd,
  onRemove,
  onChange,
  onClearSection,
}: InterestsProps) => {
  return (
    <fieldset
      className={styles.interestsSection}
      style={{ position: 'relative' }}
    >
      <legend>Interests</legend>
      <ClearButton
        onClick={() => onClearSection('interests')}
        title='Clear all interests'
      />
      {interests.map((interest, idx) => (
        <div key={idx} className={styles.formRow}>
          <label>
            Interest:
            <input
              type='text'
              value={interest}
              onChange={(e) => onChange(idx, e.target.value)}
            />
          </label>
          <DeleteButton onClick={() => onRemove(idx)} />
        </div>
      ))}
      <AddButton onClick={onAdd} />
    </fieldset>
  );
};

export default Interests;
