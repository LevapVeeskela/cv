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
              <div className='body-resume d-flex'>
                <div
                  className='preview-container position-relative'
                  id='resumeDoc'
                >
                  <div
                    className='section-loader-new d-none'
                    id='resumeLoader'
                  ></div>
                  <div className='spellcheck-notification'>
                    <i className='fas fa-check'></i>
                  </div>
                  {/* Desktop layout */}
                  <div>
                    <div className='resume-root'>
                      <div className='resume-columns'>
                        <div className='resume-left'>
                          <Contacts />
                          <Skills />
                          <Languages />
                        </div>
                        <div className='resume-right'>
                          <MainInfo />
                          <WorkHistory />
                          <Education />
                          <Interests />
                        </div>
                      </div>
                      {/* Mobile layout */}
                      <div className='resume-mobile'>
                        <MainInfo />
                        <Contacts />
                        <div className='resume-mobile-skills-langs-row'>
                          <div className='resume-mobile-skills-col'>
                            <Skills />
                          </div>
                          <div className='resume-mobile-langs-col'>
                            <Languages />
                          </div>
                        </div>
                        <WorkHistory />
                        <Education />
                        <Interests />
                      </div>
                    </div>
                  </div>
                  <div id='svgPreviewHidden' hidden></div>
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
