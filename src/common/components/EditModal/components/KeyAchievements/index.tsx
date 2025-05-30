import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';
import styles from './styles.module.scss';

interface KeyAchievementsEditProps {
  achievements: string[];
  onAdd: () => void;
  onChange: (index: number, value: string) => void;
  onDelete: (index: number) => void;
}

const KeyAchievementsEdit = ({
  achievements,
  onAdd,
  onChange,
  onDelete,
}: KeyAchievementsEditProps) => (
  <fieldset className={styles.keyAchievementsEdit}>
    <legend className={styles.label}>Key Achievements:</legend>
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

export default KeyAchievementsEdit;
