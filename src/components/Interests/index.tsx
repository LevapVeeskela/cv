import React from 'react';
import { INTERESTS } from '../../common/constants/interests';
import '../../pages/style.scss';

const Interests = () => {
  return (
    <section className='section-container data-INTR'>
      <header className='heading'>
        <span className='sectiontitle' id='SECTIONNAME_INTR'>
          Interests
        </span>
      </header>
      <div className='sortableInner'>
        <div className='paragraph PARAGRAPH_INTR firstparagraph'>
          <div className='clearfix doc-item'>
            <div className='field singlecolumn' id='FIELD_FRFM'>
              {INTERESTS.map((interest, i) => (
                <p key={i}>{interest}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
