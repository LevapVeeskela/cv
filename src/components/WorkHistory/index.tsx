import React from 'react';
import styles from './styles.module.scss';

interface JobDetail {
  title: string;
  company: string;
  city: string;
  country: string;
  start: string;
  end: string;
  details: string[];
}

interface WorkHistoryProps {
  data: JobDetail[];
}

const WorkHistory: React.FC<WorkHistoryProps> = ({ data }) => {
  return (
    <section className={`${styles['section-container']} data-EXPR`}>
      <header className={styles.heading}>
        <span className={styles.sectiontitle}>Work History</span>
      </header>
      <div>
        {data.map((job, idx) => (
          <div
            key={job.title + job.company + idx}
            className={`${styles.paragraph} ${styles.datespara}`}
          >
            <div className={`clearfix ${styles['doc-item']}`}>
              <div className={`paddedline ${styles['date-content']}`}>
                <span className={styles.jobdates}>{job.start}</span>
                <span> - </span>
                <span className={styles.jobdates}>{job.end}</span>
              </div>
              <div className={styles.singlecolumn}>
                <span className={styles.paddedline}>
                  <span className={`${styles.jobtitle} txtBold`}>
                    {job.title}
                  </span>
                </span>
                <span className={`${styles.paddedline} ${styles.locationGap}`}>
                  <span className={styles.companyname}>{job.company},</span>
                  <span className={styles.jobcity}>{job.city},</span>
                  <span className={styles.jobstate}>{job.country}</span>
                </span>
                <span className={styles.jobline}>
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
