import { EMPTY_STRING } from '@constants';
import { isEmptyValueObject } from '@utils';
import styles from './styles.module.scss';

interface MainInfoProps {
  data?: {
    mainInfo?: {
      firstName?: string;
      lastName?: string;
      title?: string;
      photo?: string;
      photoAlt?: string;
    };
    biography?: string;
  };
}

const MainInfo = ({ data }: MainInfoProps) => {
  const mainInfo = data?.mainInfo;
  const biography = data?.biography || EMPTY_STRING;

  if (isEmptyValueObject(data)) return null;

  return (
    <>
      {/* Name and Title Section */}
      {!isEmptyValueObject(mainInfo) && (
        <section className='section-container'>
          <div className={`${styles.mainInfoName} word-break`}>
            {mainInfo?.photo && (
              <div className={styles.mainInfoMonogram}>
                <img
                  src={mainInfo.photo}
                  className={styles.mainInfoPhoto}
                  alt={mainInfo.photoAlt || EMPTY_STRING}
                />
              </div>
            )}
            <div className={styles.mainInfoFlname}>
              <span className={`${styles.mainInfoFullName} field`}>
                {mainInfo?.firstName}
              </span>
              <span
                className={`${styles.mainInfoFullName} ${styles.txtBold} field word-break`}
              >
                {mainInfo?.lastName}
              </span>
              <div className={styles.mainInfoResumeTitle}>
                {mainInfo?.title}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Summary/Biography Section */}
      {biography?.length > 0 && (
        <section className='section-container'>
          <header className='heading'>Summary</header>
          <div className='field singlecolumn'>
            <p>{biography}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default MainInfo;
