import React from 'react';
import SkillLevelRow from '../../common/components/SkillLevelRow';
import { LANGUAGES } from '../../common/constants/skillsAndLanguages';

const Languages = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable='2'
      className='sortable-item section-container SortableItem-sibling data-LANG'
    >
      <div
        id='SECTION_LANG3ad7f8bd-377c-2896-1b96-3bfc8b675b48'
        className='section SECTION_LANG   '
        data-section-cd='LANG'
      >
        <div className=' doc-item'>
          <div className='heading'>
            <div className='sectiontitle' id='SECTIONNAME_LANG'>
              Languages
            </div>
          </div>
          <div className=''>
            <div className='sortableInner'>
              {LANGUAGES.map(({ language, level }) => (
                <SkillLevelRow key={language} label={language} level={level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
