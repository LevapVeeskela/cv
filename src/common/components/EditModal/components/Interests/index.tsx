import React from 'react';
import styles from './styles.module.scss';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

interface InterestsProps {
  interests: string[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (idx: number, value: string) => void;
}

const Interests: React.FC<InterestsProps> = ({
  interests,
  onAdd,
  onRemove,
  onChange,
}) => (
  <fieldset className={styles.interestsSection}>
    <legend>Interests</legend>
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

export default Interests;
