import { CvData } from '@core/hooks/project';
import { EMPTY_STRING } from '@constants';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import ClearButton from '../ClearButton';
import UnvisibleLevelButton from '../../../UnvisibleLevel';
import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Skill {
  skill: string;
  level: string;
}

interface SkillsProps {
  skills: Skill[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof Skill, value: string) => void;
  onClearSection: (section: keyof CvData) => void;
  onClearAllLevels: () => void;
}

const Skills = ({
  skills,
  onAdd,
  onRemove,
  onChange,
  onClearSection,
  onClearAllLevels,
}: SkillsProps) => {
  const [levelDisabled, setLevelDisabled] = useState(false);

  const handleToggleLevels = () => {
    if (!levelDisabled) {
      onClearAllLevels();
    }
    setLevelDisabled((prev) => !prev);
  };

  return (
    <fieldset className={styles.skillsSection} style={{ position: 'relative' }}>
      <legend>Skills</legend>
      <div className={styles.unvisibleLevelButton}>
        <UnvisibleLevelButton
          disabled={levelDisabled}
          onClick={handleToggleLevels}
        />
      </div>
      <ClearButton
        onClick={() => onClearSection('skills')}
        title='Clear all skills'
      />
      {skills.map((skillItem, idx) => (
        <div key={idx} className={styles.formRow}>
          <label>
            {idx + 1} Skill:
            <input
              type='text'
              value={skillItem.skill}
              onChange={(e) => onChange(idx, 'skill', e.target.value)}
            />
          </label>
          <label>
            Level:
            <input
              type='number'
              value={levelDisabled ? '' : skillItem.level}
              max={5}
              maxLength={1}
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

export default Skills;
