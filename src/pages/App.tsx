import { useState } from 'react';
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
import {
  EditModal,
  DownloadPdfButton,
  ButtonEditModal,
} from '../common/components';
import { CONTACTS } from '../common/constants/contacts';
import { SKILLS, LANGUAGES } from '../common/constants/skillsAndLanguages';
import { MAIN_INFO, BIOGRAPHY } from '../common/constants/mainInfo';
import { EDUCATION } from '../common/constants/education';
import { WORK_HISTORY } from '../common/constants/workHistory';
import { INTERESTS } from '../common/constants/interests';

const App = () => {
  const [cvData, setCvData] = useState({
    contacts: CONTACTS,
    skills: SKILLS,
    languages: LANGUAGES,
    mainInfo: MAIN_INFO,
    biography: BIOGRAPHY,
    education: EDUCATION,
    workHistory: WORK_HISTORY,
    interests: INTERESTS,
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    setModalOpen(true);
  };

  return (
    <section className='page-wrap'>
      <main id='app' role='main'>
        <section className='page-wrapper'>
          <div className='page-final'>
            <section className='container'>
              <div className='body-resume d-flex'>
                <div className='button-container'>
                  <DownloadPdfButton />
                  <ButtonEditModal onClickHandler={onClickHandler} />
                </div>
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
                          <Contacts data={cvData.contacts} />
                          <Skills data={cvData.skills} />
                          <Languages data={cvData.languages} />
                        </div>
                        <div className='resume-right'>
                          <MainInfo
                            data={{
                              mainInfo: cvData.mainInfo,
                              biography: cvData.biography,
                            }}
                          />
                          <WorkHistory data={cvData.workHistory} />
                          <Education data={cvData.education} />
                          <Interests data={cvData.interests} />
                        </div>
                      </div>
                      {/* Mobile layout */}
                      <div className='resume-mobile'>
                        <MainInfo
                          data={{
                            mainInfo: cvData.mainInfo,
                            biography: cvData.biography,
                          }}
                        />
                        <Contacts data={cvData.contacts} />
                        <div className='resume-mobile-skills-langs-row'>
                          <div className='resume-mobile-skills-col'>
                            <Skills data={cvData.skills} />
                          </div>
                          <div className='resume-mobile-langs-col'>
                            <Languages data={cvData.languages} />
                          </div>
                        </div>
                        <WorkHistory data={cvData.workHistory} />
                        <Education data={cvData.education} />
                        <Interests data={cvData.interests} />
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
      {isModalOpen && (
        <EditModal
          initialData={cvData}
          onApply={(data) => setCvData(data)}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

export default App;
