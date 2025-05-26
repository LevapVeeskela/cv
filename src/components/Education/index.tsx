import React from 'react';
import { EDUCATION } from '../../common/constants/education';
import '../../pages/style.scss';

const Education = () => {
  return (
    <section className='section-container data-EDUC'>
      <header className='heading'>
        <span className='sectiontitle' id='SECTIONNAME_EDUC'>
          Education
        </span>
      </header>
      <div className='sortableInner'>
        {EDUCATION.map((edu, index) => (
          <div key={index} className='paragraph datespara PARAGRAPH_EDUC'>
            <div className='clearfix doc-item'>
              <div className='paddedline date-content'>
                <span className='jobdates'>{edu.start}</span>
                <span> - </span>
                <span className='jobdates'>{edu.end}</span>
              </div>
              <div className='singlecolumn'>
                <span className='paddedline degreeGap txtBold'>
                  <span className='degree'>{edu.degree}</span>
                </span>
                <div className='paddedline'>
                  <span className='companyname'>{edu.school}</span>
                  <span> - </span>
                  <span className='joblocation jobcity'>{edu.city}</span>
                </div>
                <span className='field'>
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
    </section>
  );
};

export default Education;
