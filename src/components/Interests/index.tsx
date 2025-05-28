import React from 'react';
import styles from './styles.module.scss';

interface InterestsProps {
  data: string[];
}

const Interests: React.FC<InterestsProps> = ({ data }) => {
  return (
    <section className='section-container'>
      <header className='heading'>
        <span className='sectiontitle'>Interests</span>
      </header>
      <div className='sortableInner'>
        <div className='paragraph PARAGRAPH_INTR firstparagraph'>
          <div className='clearfix doc-item'>
            <div className='field singlecolumn'>
              {data.map((interest, i) => (
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
