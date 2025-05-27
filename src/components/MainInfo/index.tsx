import React from 'react';
import './styles.scss';

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

const MainInfo: React.FC<MainInfoProps> = ({ data }) => {
  const mainInfo = data?.mainInfo;
  const biography = data?.biography;
  return (
    <>
      {/* Name and Title Section */}
      <section className='section-container'>
        <div className='name word-break'>
          <div className='monogram'>
            {mainInfo?.photo ? (
              <img
                src={mainInfo.photo}
                style={{ borderRadius: '50%' }}
                alt={mainInfo.photoAlt || ''}
              />
            ) : null}
          </div>
          <div className='flname'>
            <span className='field'>{mainInfo?.firstName}</span>
            <span className='field word-break txtBold'>
              {mainInfo?.lastName}
            </span>
            <div className='resumeTitle'>{mainInfo?.title}</div>
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
