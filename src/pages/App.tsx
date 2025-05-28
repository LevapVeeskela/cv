import {
  ProjectProvider,
  useProjectContext,
} from '../core/context/ProjectContext';
import {
  EditModalProvider,
  useEditModalContext,
} from '../core/context/EditModalContext';
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
  ImportJsonButton,
} from '../common/components';

const AppContent = () => {
  const { cvData, setCvData } = useProjectContext();
  const { isModalOpen, openModal } = useEditModalContext();

  const onClickHandler = () => {
    openModal(cvData);
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
                  <ImportJsonButton onImport={setCvData} />
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
      {isModalOpen && <EditModal />}
    </section>
  );
};

const App = () => (
  <ProjectProvider>
    <EditModalProvider>
      <AppContent />
    </EditModalProvider>
  </ProjectProvider>
);

export default App;
