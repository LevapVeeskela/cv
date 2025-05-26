import React from 'react';
import SkillLevelRow from '../../common/components/SkillLevelRow';
import { SKILLS } from '../../common/constants/skillsAndLanguages';
import './styles.scss';

const Skills = () => {
  return (
    <section className='section-container data-HILT'>
      <header className='heading'>
        <span className='sectiontitle'>Skills</span>
      </header>
      <div className='sortableInner'>
        {SKILLS.map(({ skill, level }) => (
          <SkillLevelRow key={skill} label={skill} level={level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
