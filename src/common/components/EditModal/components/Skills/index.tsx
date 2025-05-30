import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import ClearButton from '../ClearButton';
import styles from './styles.module.scss';
import { CvData } from '@core/hooks/project';

interface Skill {
  skill: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof Skill, value: string) => void;
  onClearSection: (section: keyof CvData) => void;
}

const Skills = ({
  skills,
  onAdd,
  onRemove,
  onChange,
  onClearSection,
}: SkillsProps) => {
  return (
    <fieldset className={styles.skillsSection} style={{ position: 'relative' }}>
      <legend>Skills</legend>
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
              value={skillItem.level}
              onChange={(e) => onChange(idx, 'level', e.target.value)}
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
