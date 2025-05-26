import React from 'react';
import { WORK_HISTORY } from '../../common/constants/workHistory';
import '../../pages/style.scss';

const WorkHistory = () => {
  return (
    <section className='section-container data-EXPR'>
      <header className='heading'>
        <span className='sectiontitle'>Work History</span>
      </header>
      <div>
        {WORK_HISTORY.map((job, idx) => (
          <div
            key={job.title + job.company + idx}
            className='paragraph datespara PARAGRAPH_EXPR'
          >
            <div className='clearfix doc-item'>
              <div className='paddedline date-content'>
                <span className='jobdates'>{job.start}</span>
                <span> - </span>
                <span className='jobdates'>{job.end}</span>
              </div>
              <div className='singlecolumn'>
                <span className='paddedline'>
                  <span className='jobtitle txtBold'>{job.title}</span>
                </span>
                <span className='paddedline locationGap'>
                  <span className='companyname'>{job.company},</span>
                  <span className='jobcity'>{job.city},</span>
                  <span className='jobstate'>{job.country}</span>
                </span>
                <span className='jobline'>
                  <ul>
                    {job.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
