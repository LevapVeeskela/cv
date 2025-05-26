import React from 'react';
import SkillLevelRow from '../common/components/SkillLevelRow';
import { SKILLS } from '../common/constants/skillsAndLanguages';

const Skills = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable="2"
      className="sortable-item section-container SortableItem-sibling data-HILT"
    >
      <div
        id="SECTION_HILTda755054-3b34-491a-a48c-eba86776fd9f"
        className="section SECTION_HILT   "
        data-section-cd="HILT"
      >
        <div className=" doc-item">
          <div className="heading">
            <div className="sectiontitle" id="SECTIONNAME_HILT">
              Skills
            </div>
          </div>
          <div className=""> {/* This div was empty in source, kept for structure */}
            <div className="sortableInner">
              {SKILLS.map(({ skill, level }) => (
                <SkillLevelRow key={skill} label={skill} level={level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;