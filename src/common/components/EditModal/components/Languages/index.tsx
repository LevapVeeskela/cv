import React from 'react';
import styles from './styles.module.scss';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

interface Language {
  language: string;
  level: string;
}

interface LanguagesProps {
  languages: Language[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof Language, value: string) => void;
}

const Languages: React.FC<LanguagesProps> = ({
  languages,
  onAdd,
  onRemove,
  onChange,
}) => (
  <fieldset className={styles.languagesSection}>
    <legend>Languages</legend>
    {languages.map((langItem, idx) => (
      <div key={idx} className={styles.formRow}>
        <label>
          {idx + 1} Language:
          <input
            type='text'
            value={langItem.language}
            onChange={(e) => onChange(idx, 'language', e.target.value)}
          />
        </label>
        <label>
          Level:
          <input
            type='text'
            value={langItem.level}
            onChange={(e) => onChange(idx, 'level', e.target.value)}
          />
        </label>
        <DeleteButton onClick={() => onRemove(idx)} />
      </div>
    ))}
    <AddButton onClick={onAdd} />
  </fieldset>
);

export default Languages;
