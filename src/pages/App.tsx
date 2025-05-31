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
  KeyAchievements,
  Summary,
} from '../components';
import {
  EditModal,
  DownloadPdfButton,
  ButtonEditModal,
  ImportJsonButton,
  ExportJsonButton,
  DragModeToggle,
  SortableSection,
} from '../common/components';
import ResetCacheButton from '../common/components/ResetCacheButton';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SECTION_COMPONENTS } from '../common/constants/sections';
import { EMPTY_STRING } from '@/common/constants';

const AppContent = () => {
  const {
    cvData,
    setCvData,
    isDragMode,
    setIsDragMode,
    leftOrder,
    rightOrder,
    isMobile,
    handleDragEnd,
  } = useProjectContext();
  const { isModalOpen, openModal } = useEditModalContext();

  const onClickHandler = () => {
    openModal(cvData);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  return (
    <section className={`page-wrap${isMobile ? ' mobile' : EMPTY_STRING}`}>
      <main id='app' role='main'>
        <section className='page-wrapper'>
          <div className='page-final'>
            <section className='container'>
              <div className='body-resume d-flex'>
                <div className='button-container'>
                  <DownloadPdfButton />
                  <ButtonEditModal onClickHandler={onClickHandler} />
                  <ImportJsonButton onImport={setCvData} />
                  <ExportJsonButton data={cvData} />
                  {!isMobile && (
                    <DragModeToggle
                      enabled={isDragMode}
                      onToggle={() => setIsDragMode((v) => !v)}
                    />
                  )}
                  <ResetCacheButton />
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
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={isDragMode ? handleDragEnd : undefined}
                  >
                    <div className='resume-root'>
                      <div className='resume-columns'>
                        <SortableContext
                          items={leftOrder}
                          strategy={verticalListSortingStrategy}
                        >
                          <div className='resume-left'>
                            {/* LEFT */}
                            {leftOrder.map((key) => {
                              const Section = SECTION_COMPONENTS[key];
                              if (!Section) return null;
                              return (
                                <SortableSection
                                  key={key}
                                  id={key}
                                  isDragMode={isDragMode}
                                >
                                  <Section data={cvData[key.toLowerCase()]} />
                                </SortableSection>
                              );
                            })}
                          </div>
                        </SortableContext>
                        <SortableContext
                          items={rightOrder}
                          strategy={verticalListSortingStrategy}
                        >
                          <div className='resume-right'>
                            {/* RIGHT */}
                            {rightOrder.map((key) => {
                              const Section = SECTION_COMPONENTS[key];
                              if (!Section) return null;
                              let sectionProps: any = {};
                              if (key === 'MainInfo') {
                                sectionProps = {
                                  data: {
                                    mainInfo: cvData.mainInfo,
                                  },
                                };
                              } else if (key === 'Summary') {
                                sectionProps = { biography: cvData.biography };
                              } else if (key === 'Education') {
                                sectionProps = { data: cvData.education };
                              } else if (key === 'WorkHistory') {
                                sectionProps = { data: cvData.workHistory };
                              } else if (key === 'KeyAchievements') {
                                sectionProps = { data: cvData.achievements };
                              } else {
                                sectionProps = {
                                  data: cvData[key.toLowerCase()],
                                };
                              }
                              return (
                                <SortableSection
                                  key={key}
                                  id={key}
                                  isDragMode={isDragMode}
                                >
                                  <Section {...sectionProps} />
                                </SortableSection>
                              );
                            })}
                          </div>
                        </SortableContext>
                      </div>
                    </div>
                  </DndContext>
                  {/* Mobile layout */}
                  <div className='resume-mobile'>
                    <MainInfo data={{ mainInfo: cvData.mainInfo }} />
                    <Summary biography={cvData.biography} />
                    <KeyAchievements data={cvData.achievements} />
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
