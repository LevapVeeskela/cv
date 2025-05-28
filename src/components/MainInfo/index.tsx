import { EMPTY_STRING } from '@constants';
import styles from './styles.module.scss';

interface MainInfoProps {
  data?: {
    mainInfo: {
      firstName: string;
      lastName: string;
      title: string;
      photo?: string;
      photoAlt?: string;
    };
    biography: string;
  };
}

const MainInfo = ({ data }: MainInfoProps) => {
  const mainInfo = data?.mainInfo;
  const biography = data?.biography;
  return (
    <>
      {/* Name and Title Section */}
      <section className='section-container'>
        <div className={`${styles.mainInfoName} word-break`}>
          <div className={styles.mainInfoMonogram}>
            {mainInfo?.photo ? (
              <img
                src={mainInfo.photo}
                className={styles.mainInfoPhoto}
                alt={mainInfo.photoAlt || EMPTY_STRING}
              />
            ) : null}
          </div>
          <div className={styles.mainInfoFlname}>
            <span className={`${styles.mainInfoFullName} field`}>
              {mainInfo?.firstName}
            </span>
            <span
              className={`${styles.mainInfoFullName} ${styles.txtBold} field word-break`}
            >
              {mainInfo?.lastName}
            </span>
            <div className={styles.mainInfoResumeTitle}>{mainInfo?.title}</div>
          </div>
        </div>
      </section>

      {/* Summary/Biography Section */}
      <section className='section-container'>
        <header className='heading'>Summary</header>
        <div className='field singlecolumn'>
          <p>{biography}</p>
        </div>
      </section>
    </>
  );
};

export default MainInfo;
