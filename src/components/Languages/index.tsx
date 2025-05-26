import React from 'react';
import SkillLevelRow from '../../common/components/SkillLevelRow';
import { LANGUAGES } from '../../common/constants/skillsAndLanguages';
import '../../pages/style.scss';

const Languages = () => {
  return (
    <section className='section-container'>
      <header className='heading'>
        <span className='sectiontitle'>Languages</span>
      </header>
      <div className='sortableInner'>
        {LANGUAGES.map(({ language, level }) => (
          <SkillLevelRow key={language} label={language} level={level} />
        ))}
      </div>
    </section>
  );
};

export default Languages;
