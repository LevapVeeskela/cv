import React from 'react';
import './styles.scss';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

interface Skill {
  skill: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
  onChange: (index: number, field: keyof Skill, value: string) => void;
}

const Skills: React.FC<SkillsProps> = ({
  skills,
  onAdd,
  onRemove,
  onChange,
}) => (
  <fieldset className='skills-section'>
    <legend>Skills</legend>
    {skills.map((skillItem, idx) => (
      <div key={idx} className='form-row'>
        <label>
          Skill:
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

export default Skills;
