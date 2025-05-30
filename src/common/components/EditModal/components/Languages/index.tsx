import { CvData } from '@core/hooks/project';
import { EMPTY_STRING } from '@constants';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import ClearButton from '../ClearButton';
import UnvisibleLevelButton from '../../../UnvisibleLevel';
import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Language {
  language: string;
  level: string;
}

interface LanguagesProps {
  languages: Language[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof Language, value: string) => void;
  onClearSection: (section: keyof CvData) => void;
  onClearAllLevels: () => void;
}

const Languages = ({
  languages,
  onAdd,
  onRemove,
  onChange,
  onClearSection,
  onClearAllLevels,
}: LanguagesProps) => {
  const [levelDisabled, setLevelDisabled] = useState(false);

  const handleToggleLevels = () => {
    if (!levelDisabled) {
      onClearAllLevels();
    }
    setLevelDisabled((prev) => !prev);
  };

  return (
    <fieldset
      className={styles.languagesSection}
      style={{ position: 'relative' }}
    >
      <legend>Languages</legend>
      <div className={styles.unvisibleLevelButton}>
        <UnvisibleLevelButton
          disabled={levelDisabled}
          onClick={handleToggleLevels}
        />
      </div>
      <ClearButton
        onClick={() => onClearSection('languages')}
        title='Clear all languages'
      />
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
              value={levelDisabled ? '' : langItem.level}
              disabled={levelDisabled}
              onChange={(e) => {
                if (e.target.value != EMPTY_STRING && +e.target.value > 5) {
                  return;
                }
                onChange(idx, 'level', e.target.value);
              }}
            />
          </label>
          <DeleteButton onClick={() => onRemove(idx)} />
        </div>
      ))}
      <AddButton onClick={onAdd} />
    </fieldset>
  );
};

export default Languages;
