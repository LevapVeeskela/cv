import React from 'react';
import photo from '../assets/photo.jpg'; // Assuming photo is in src/assets

const MainInfo = () => {
  return (
    <>
      {/* Name and Title Section */}
      <div
        data-react-beautiful-dnd-draggable="2"
        className="sortable-item section-container SortableItem-sibling data-NAME"
      >
        <div
          id="SECTION_NAME58d467e5-67aa-42e3-8e25-2db8f76299ce"
          className="section nameSec notdraggable SECTION_NAME firstsection  "
          data-section-cd="NAME"
        >
          <div className=" doc-item">
            <div className=""> {/* This div was empty in source, kept for structure */}
              <div className=""> {/* This div was empty in source, kept for structure */}
                <div
                  id="PARAGRAPH_NAME_83ad81a4-6570-07e0-c565-eab1f67c3d54"
                  className="paragraph PARAGRAPH_NAME firstparagraph  "
                >
                  <div>
                    <div className="name word-break">
                      <div className="monogram">
                        <img
                          src={photo}
                          style={{ borderRadius: '50%' }}
                          alt="Paul Alexeev" // Added alt text
                        />
                      </div>
                      <div className="flname">
                        <span className="field" id="FIELD_FNAM">
                          Paul
                        </span>
                        <span
                          className="field word-break txtBold"
                          id="FIELD_LNAM"
                        >
                          Alexeev
                        </span>
                        <div className="resumeTitle" id="FIELD_DCTL">
                          Full Stack Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary/Biography Section */}
      <div
        data-react-beautiful-dnd-draggable="2"
        className="sortable-item section-container SortableItem-sibling data-SUMM"
      >
        <div
          id="SECTION_SUMMedf78b7c-8a37-4505-a039-635a1a160b17"
          className="section summary notdraggable SECTION_SUMM   "
          data-section-cd="SUMM"
        >
          <div className=" doc-item">
            <div className=""> {/* This div was empty in source, kept for structure */}
              <div className=""> {/* This div was empty in source, kept for structure */}
                <div
                  id="PARAGRAPH_SUMM_739d11f0-7e56-44b6-6bb7-d3c6d928d8be"
                  className="paragraph PARAGRAPH_SUMM firstparagraph  "
                >
                  <div className="clearfix doc-item">
                    <div className="field singlecolumn" id="FIELD_FRFM">
                      <p>
                        Well-qualified Full Stack Developer familiar with a
                        wide range of programming utilities and languages.
                        Knowledgeable of backend and frontend development
                        requirements. Able to handle any part of the process
                        easily. Collaborative team player with excellent
                        technical abilities offering with 5 years of
                        experience. Successful Full Stack Developer offering
                        own experience in demanding environments focused on
                        producing cutting-edge systems any complexity.
                        Skilled in directing development with creative and
                        performance-oriented approach. Well-organized and
                        customer-focused with proven skills in project
                        management and team leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainInfo;