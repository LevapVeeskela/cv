import React from 'react';
import { EDUCATION } from '../../common/constants/education';

const Education = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable='2'
      className='sortable-item section-container SortableItem-sibling data-EDUC'
    >
      <div
        id='SECTION_EDUC20bb3144-6d24-42f9-ad68-58ddc1313ecb'
        className='section education SECTION_EDUC multi-para'
        data-section-cd='EDUC'
      >
        <div className='doc-item'>
          <div className='heading'>
            <div className='sectiontitle' id='SECTIONNAME_EDUC'>
              Education
            </div>
          </div>
          <div>
            <div className='sortableInner'>
              {EDUCATION.map((edu, index) => (
                <div
                  key={index} // It's generally good practice to use a unique key, index is okay here if items don't change order
                  id={`PARAGRAPH_EDUC_${edu.degree.replace(/\s/g, '')}`} // More robust ID
                  className='paragraph datespara PARAGRAPH_EDUC'
                >
                  <div className='clearfix doc-item'>
                    <div className='paddedline date-content'>
                      <span className='jobdates' id={`FIELD_GRST_${index}`}>
                        {edu.start}
                      </span>
                      <span> - </span>
                      <span className='jobdates' id={`FIELD_GRED_${index}`}>
                        {edu.end}
                      </span>
                    </div>
                    <div className='singlecolumn'>
                      <span className='paddedline degreeGap txtBold'>
                        <span className='degree' id={`FIELD_DGRE_${index}`}>
                          {edu.degree}
                        </span>
                        <span
                          className='programline'
                          id={`FIELD_STUY_${index}`}
                        ></span>
                      </span>
                      <div className='paddedline'>
                        <span
                          className='companyname'
                          id={`FIELD_SCHO_${index}`}
                        >
                          {edu.school}
                        </span>
                        <span> - </span>
                        <span
                          className='joblocation jobcity'
                          id={`FIELD_SCIT_${index}`}
                        >
                          {edu.city}
                        </span>
                        <span
                          className='joblocation jobstate'
                          id={`FIELD_SSTA_${index}`}
                        ></span>
                      </div>
                      <span className='field' id={`FIELD_FRFM_${index}`}>
                        <p>{edu.description}</p>
                        {edu.details.length > 0 && (
                          <ul>
                            {edu.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
