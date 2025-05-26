import React from 'react';

const Education = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable="2"
      className="sortable-item section-container SortableItem-sibling data-EDUC"
    >
      <div
        id="SECTION_EDUC20bb3144-6d24-42f9-ad68-58ddc1313ecb"
        className="section education SECTION_EDUC   multi-para"
        data-section-cd="EDUC"
      >
        <div className=" doc-item">
          <div className="heading">
            <div className="sectiontitle" id="SECTIONNAME_EDUC">
              Education
            </div>
          </div>
          <div className=""> {/* This div was empty in source, kept for structure */}
            <div className="sortableInner">
              {/* Education 1: General Secondary Education */}
              <div
                id="PARAGRAPH_EDUC_4845e76c-5cf4-b62a-3efe-504424b9b208"
                className="paragraph datespara PARAGRAPH_EDUC firstparagraph  "
              >
                <div className="clearfix doc-item">
                  <div className="paddedline date-content">
                    <span className="jobdates" id="FIELD_GRST">
                      2000
                    </span>
                    <span> - </span>
                    <span className="jobdates" id="FIELD_GRED">
                      2011
                    </span>
                  </div>
                  <div className="singlecolumn">
                    <span className="paddedline degreeGap txtBold">
                      <span className="degree" id="FIELD_DGRE">
                        General Secondary Education
                      </span>
                      <span className="programline" id="FIELD_STUY"></span> {/* Empty in source */}
                    </span>
                    <div className="paddedline">
                      <span className="companyname" id="FIELD_SCHO">
                        Secondary School Number 9
                      </span>
                      <span> - </span>
                      <span className="joblocation jobcity" id="FIELD_SCIT">
                        Lida
                      </span>
                      <span
                        className="joblocation jobstate"
                        id="FIELD_SSTA"
                      ></span> {/* Empty in source */}
                    </div>
                    <span className="field" id="FIELD_FRFM">
                      <p>
                        Graduated from school with enhanced education in
                        mathematics with an average grade 9.1
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              {/* Education 2: Higher Education */}
              <div
                id="PARAGRAPH_EDUC_66f476a0-96b4-76c1-661a-0e289122560f"
                className="paragraph datespara PARAGRAPH_EDUC  "
              >
                <div className="clearfix doc-item">
                  <div className="paddedline date-content">
                    <span className="jobdates" id="FIELD_GRST">
                      2011
                    </span>
                    <span> - </span>
                    <span className="jobdates" id="FIELD_GRED">
                      2016
                    </span>
                  </div>
                  <div className="singlecolumn">
                    <span className="paddedline degreeGap txtBold">
                      <span className="degree" id="FIELD_DGRE">
                        Higher Education
                      </span>
                      <span className="programline" id="FIELD_STUY"></span> {/* Empty in source */}
                    </span>
                    <div className="paddedline">
                      <span className="companyname" id="FIELD_SCHO">
                        Military Academy Of The Republic Of Belarus
                      </span>
                      <span> - </span>
                      <span className="joblocation jobcity" id="FIELD_SCIT">
                        Minsk
                      </span>
                      <span
                        className="joblocation jobstate"
                        id="FIELD_SSTA"
                      ></span> {/* Empty in source */}
                    </div>
                    <span className="field" id="FIELD_FRFM">
                      <p>
                        Graduate of the specialty automated information
                        processing systems.
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              {/* Education 3: Additional Education */}
              <div
                id="PARAGRAPH_EDUC_6e293a44-4ef9-5226-ba56-cc88afacb52e"
                className="paragraph datespara PARAGRAPH_EDUC  "
              >
                <div className="clearfix doc-item">
                  <div className="paddedline date-content">
                    <span className="jobdates" id="FIELD_GRST">
                      2017
                    </span>
                    <span> - </span>
                    <span className="jobdates" id="FIELD_GRED">
                      2020
                    </span>
                  </div>
                  <div className="singlecolumn">
                    <span className="paddedline degreeGap txtBold">
                      <span className="degree" id="FIELD_DGRE">
                        Additional Education
                      </span>
                      <span className="programline" id="FIELD_STUY"></span> {/* Empty in source */}
                    </span>
                    <div className="paddedline">
                      <span className="companyname" id="FIELD_SCHO">
                        IT-Academy
                      </span>
                      <span> - </span>
                      <span className="joblocation jobcity" id="FIELD_SCIT">
                        Minsk
                      </span>
                      <span
                        className="joblocation jobstate"
                        id="FIELD_SSTA"
                      ></span> {/* Empty in source */}
                    </div>
                    <span className="field" id="FIELD_FRFM">
                      <p>Сourse graduate:</p>
                      <ul>
                        <li>
                          Web site development using HTML, CSS and JS (2017
                          year)
                        </li>
                        <li>C # programming (2019 year)</li>
                        <li>
                          Angular and React for development web-application
                          (2020 year)
                        </li>
                      </ul>
                    </span>
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

export default Education;