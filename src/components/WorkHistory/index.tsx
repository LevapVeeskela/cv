import React from 'react';
import { WORK_HISTORY } from '../../common/constants/workHistory';

const WorkHistory = () => {
  return (
    <div
      data-react-beautiful-dnd-draggable="2"
      className="sortable-item section-container SortableItem-sibling data-EXPR"
    >
      <div
        id="SECTION_EXPR8e7c8f5c-ba47-4007-b094-8b08df7bd765"
        className="section experience SECTION_EXPR   multi-para"
        data-section-cd="EXPR"
      >
        <div className=" doc-item">
          <div className="heading">
            <div className="sectiontitle" id="SECTIONNAME_EXPR">
              Work History
            </div>
          </div>
          <div className="">
            <div className="">
              {WORK_HISTORY.map((job, idx) => (
                <div key={job.title + job.company + idx} className="paragraph datespara PARAGRAPH_EXPR">
                  <div className="clearfix doc-item">
                    <div className="paddedline date-content">
                      <span className="jobdates" id="FIELD_JSTD">{job.start}</span>
                      <span> - </span>
                      <span className="jobdates" id="FIELD_EDDT">{job.end}</span>
                      <br />
                    </div>
                    <div className="singlecolumn">
                      <span className="paddedline">
                        <span className="jobtitle txtBold" id="FIELD_JTIT">{job.title}</span>
                      </span>
                      <span className="paddedline locationGap">
                        <span className="companyname" id="FIELD_COMP">{job.company},</span>
                        <span className="jobcity" id="FIELD_JCIT">{job.city},</span>
                        <span className="jobstate" id="FIELD_JSTA">{job.country}</span>
                      </span>
                      <span className="jobline" id="FIELD_JDES">
                        <ul>
                          {job.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
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

export default WorkHistory;
