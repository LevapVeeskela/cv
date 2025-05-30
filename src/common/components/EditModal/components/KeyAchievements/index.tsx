import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';
import ClearButton from '../ClearButton';
import { CvData } from '@constants';
import styles from './styles.module.scss';

interface KeyAchievementsEditProps {
  achievements: string[];
  onAdd: () => void;
  onChange: (index: number, value: string) => void;
  onDelete: (index: number) => void;
  onClearSection: (section: keyof CvData) => void;
}

const KeyAchievementsEdit = ({
  achievements,
  onAdd,
  onChange,
  onDelete,
  onClearSection,
}: KeyAchievementsEditProps) => {
  return (
    <fieldset
      className={styles.keyAchievementsEdit}
      style={{ position: 'relative' }}
    >
      <legend className={styles.label}>Key Achievements:</legend>
      <ClearButton
        onClick={() => onClearSection('achievements')}
        title='Clear all achievements'
      />
      {achievements.map((d, idx) => (
        <div key={idx} className={styles.row}>
          <textarea
            className={styles.textarea}
            value={d}
            onChange={(e) => onChange(idx, e.target.value)}
          />
          <DeleteButton onClick={() => onDelete(idx)} />
        </div>
      ))}
      <AddButton onClick={onAdd} />
    </fieldset>
  );
};

export default KeyAchievementsEdit;
