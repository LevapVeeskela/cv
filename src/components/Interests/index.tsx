import React from 'react';
import { INTERESTS } from '../../common/constants/interests';

const Interests = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable="2"
      className="sortable-item section-container SortableItem-sibling data-INTR"
    >
      <div
        id="SECTION_INTRea666979-7c11-7fcd-133c-10ffd7670d58"
        className="section SECTION_INTR   "
        data-section-cd="INTR"
      >
        <div className=" doc-item">
          <div className="heading">
            <div className="sectiontitle" id="SECTIONNAME_INTR">
              Interests
            </div>
          </div>
          <div className="">
            <div className="sortableInner">
              <div
                id="PARAGRAPH_INTR_83935628-71b0-5f4b-53cf-b3aba687a49e"
                className="paragraph PARAGRAPH_INTR firstparagraph  "
              >
                <div className="clearfix doc-item">
                  <div className="field singlecolumn" id="FIELD_FRFM">
                    {INTERESTS.map((interest, i) => (
                      <p key={i}>{interest}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
