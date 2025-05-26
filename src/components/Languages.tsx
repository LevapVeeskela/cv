import React from 'react';

const Languages = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable="2"
      className="sortable-item section-container SortableItem-sibling data-LANG"
    >
      <div
        id="SECTION_LANG3ad7f8bd-377c-2896-1b96-3bfc8b675b48"
        className="section SECTION_LANG   "
        data-section-cd="LANG"
      >
        <div className=" doc-item">
          <div className="heading">
            <div className="sectiontitle" id="SECTIONNAME_LANG">
              Languages
            </div>
          </div>
          <div className=""> {/* This div was empty in source, kept for structure */}
            <div className="sortableInner">
              {/* English(B1) */}
              <div className="row m-t">
                <div className="col-6">English(B1)</div>
                <div className="col-6">
                  <div className="noLnht">
                    <svg viewBox="0 0 500 100" id="FIELD_RATV" type="count">
                      <circle cx="50" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="150" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="250" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="350" cy="50" r="40" fill="#d5d6d6"></circle>
                      <circle cx="450" cy="50" r="40" fill="#d5d6d6"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Russian */}
              <div className="row m-t">
                <div className="col-6">Russian</div>
                <div className="col-6">
                  <div className="noLnht">
                    <svg viewBox="0 0 500 100" id="FIELD_RATV" type="count">
                      <circle cx="50" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="150" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="250" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="350" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                      <circle cx="450" cy="50" r="40" fill="#0187de" className="default-fill"></circle>
                    </svg>
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

export default Languages;