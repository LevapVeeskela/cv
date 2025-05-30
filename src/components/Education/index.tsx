import styles from './styles.module.scss';

interface EducationDetail {
  degree: string;
  school: string;
  city: string;
  start: string;
  end: string;
  description: string;
  details: string[];
}

interface EducationProps {
  data: EducationDetail[];
}

const Education = ({ data }: EducationProps) => {
  if (data?.length === 0) return null;

  return (
    <section className='section-container'>
      <header className='heading'>
        <span className='sectiontitle'>Education</span>
      </header>
      <div className={styles.sortableInner}>
        {data.map((edu, index) => (
          <div
            key={index}
            className={`${styles.paragraph} ${styles.datespara}`}
          >
            <div className={`clearfix ${styles['doc-item']}`}>
              <div className='paddedline date-content'>
                <span className={styles.jobdates}>{edu.start}</span>
                <span> - </span>
                <span className={styles.jobdates}>{edu.end}</span>
              </div>
              <div className={styles.singlecolumn}>
                <span className={`paddedline ${styles.degreeGap} txtBold`}>
                  <span className={styles.degree}>{edu.degree}</span>
                </span>
                <div className='paddedline'>
                  <span className={styles.companyname}>{edu.school}</span>
                  <span> - </span>
                  <span className={`${styles.joblocation} jobcity`}>
                    {edu.city}
                  </span>
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
