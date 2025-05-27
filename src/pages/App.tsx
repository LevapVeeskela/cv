import React from 'react';
import './style.scss';

import {
  Contacts,
  Skills,
  Languages,
  MainInfo,
  WorkHistory,
  Education,
  Interests,
} from '../components';

const App = () => {
  return (
    <section className='page-wrap'>
      <main id='app' role='main'>
        <section className='page-wrapper'>
          <div className='page-final'>
            <section className='container'>
              {/* Desktop layout */}
              <div
                id='document'
                className='document fontsize fontface vmargins hmargins pagesize skn-srz9 SRZ9  ZTY'
              >
                <div className='parentContainer'>
                  <div className='left-box'>
                    <Contacts />
                    <Skills />
                    <Languages />
                  </div>
                  <div className='right-box'>
                    <MainInfo />
                    <WorkHistory />
                    <Education />
                    <Interests />
                  </div>
                </div>
                {/* Mobile layout */}
                <div className='mobile-stack'>
                  <MainInfo />
                  <Contacts />
                  <div className='mobile-skills-langs-row'>
                    <div className='mobile-skills-col'>
                      <Skills />
                    </div>
                    <div className='mobile-langs-col'>
                      <Languages />
                    </div>
                  </div>
                  <WorkHistory />
                  <Education />
                  <Interests />
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
};

export default App;
