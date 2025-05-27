import React from 'react';
import SkillLevelRow from '../../common/components/SkillLevelRow';

interface SkillsProps {
  data?: { skill: string; level: number }[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  if (!data) return null;
  return (
    <section className='section-container'>
      <header className='heading'>
        <span className='sectiontitle'>Skills</span>
      </header>
      <div className='sortableInner'>
        {data.map(({ skill, level }) => (
          <SkillLevelRow key={skill} label={skill} level={level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
