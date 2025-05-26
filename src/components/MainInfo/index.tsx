import React from 'react';
import photo from '../../assets/photo.jpg';
import { MAIN_INFO, BIOGRAPHY } from '../../common/constants/mainInfo';
import './styles.scss';

const MainInfo = () => {
  return (
    <>
      {/* Name and Title Section */}
      <section className='section-container data-NAME'>
        <div className='name word-break'>
          <div className='monogram'>
            <img
              src={photo}
              style={{ borderRadius: '50%' }}
              alt={MAIN_INFO.photoAlt}
            />
          </div>
          <div className='flname'>
            <span className='field' id='FIELD_FNAM'>
              {MAIN_INFO.firstName}
            </span>
            <span className='field word-break txtBold' id='FIELD_LNAM'>
              {MAIN_INFO.lastName}
            </span>
            <div className='resumeTitle' id='FIELD_DCTL'>
              {MAIN_INFO.title}
            </div>
          </div>
        </div>
      </section>

      {/* Summary/Biography Section */}
      <section className='section-container data-SUMM'>
        <header className='heading'>Summary</header>
        <div className='field singlecolumn' id='FIELD_FRFM'>
          <p>{BIOGRAPHY}</p>
        </div>
      </section>
    </>
  );
};

export default MainInfo;
