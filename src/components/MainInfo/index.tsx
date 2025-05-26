import React from 'react';
import photo from '../../assets/photo.jpg';
import { MAIN_INFO, BIOGRAPHY } from '../../common/constants/mainInfo';

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
            <div className="">
              <div className="">
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
                          alt={MAIN_INFO.photoAlt}
                        />
                      </div>
                      <div className="flname">
                        <span className="field" id="FIELD_FNAM">
                          {MAIN_INFO.firstName}
                        </span>
                        <span
                          className="field word-break txtBold"
                          id="FIELD_LNAM"
                        >
                          {MAIN_INFO.lastName}
                        </span>
                        <div className="resumeTitle" id="FIELD_DCTL">
                          {MAIN_INFO.title}
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
            <div className="">
              <div className="">
                <div
                  id="PARAGRAPH_SUMM_739d11f0-7e56-44b6-6bb7-d3c6d928d8be"
                  className="paragraph PARAGRAPH_SUMM firstparagraph  "
                >
                  <div className="clearfix doc-item">
                    <div className="field singlecolumn" id="FIELD_FRFM">
                      <p>
                        {BIOGRAPHY}
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
