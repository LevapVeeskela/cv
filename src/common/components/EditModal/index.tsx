import { useEditModalContext } from '@core/context/EditModalContext';
import MainInfo from './components/MainInfo';
import Summary from './components/Summary';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Education from './components/Education';
import WorkHistory from './components/WorkHistory';
import Interests from './components/Interests';
import ExportJsonButton from './components/ExportJsonButton';
import KeyAchievements from './components/KeyAchievements';
import CloseConfirm from './components/CloseConfirm';
import styles from './styles.module.scss';

const EditModal = () => {
  const {
    formData,
    closeModal,
    handleMainInfoChange,
    handleBiographyChange,
    handleContactsChange,
    handleAddressChange,
    handleAddInterest,
    handleRemoveInterest,
    handleSkillChange,
    handleAddSkill,
    handleRemoveSkill,
    handleLanguageChange,
    handleAddLanguage,
    handleRemoveLanguage,
    handleEducationChange,
    handleAddEducation,
    handleRemoveEducation,
    handleWorkHistoryChange,
    handleAddWorkHistory,
    handleRemoveWorkHistory,
    handleSubmit,
    handleInterestChange,
    handleAchievementChange,
    handleAddAchievement,
    handleRemoveAchievement,
    showCloseConfirm,
    showCloseConfirmDialog,
    hideCloseConfirmDialog,
    handleClearSection,
    handleClearAllLanguageLevels,
    handleClearAllSkillLevels,
  } = useEditModalContext();

  if (!formData) return null;

  return (
    <div
      className={styles.editModalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          showCloseConfirmDialog();
        }
      }}
    >
      <div className={styles.editModal}>
        <h2>Edit CV Data</h2>
        <form onSubmit={handleSubmit}>
          <MainInfo
            mainInfo={formData.mainInfo}
            onChange={handleMainInfoChange}
            onClearSection={handleClearSection}
          />
          <Contacts
            contacts={formData.contacts}
            onChange={handleContactsChange}
            onAddressChange={handleAddressChange}
            onClearSection={handleClearSection}
          />
          <Summary
            biography={formData.biography}
            onChange={handleBiographyChange}
            onClearSection={handleClearSection}
          />
          <KeyAchievements
            achievements={formData.achievements}
            onAdd={handleAddAchievement}
            onChange={handleAchievementChange}
            onDelete={handleRemoveAchievement}
            onClearSection={handleClearSection}
          />
          <Skills
            skills={formData.skills}
            onAdd={handleAddSkill}
            onRemove={handleRemoveSkill}
            onChange={handleSkillChange}
            onClearSection={handleClearSection}
            onClearAllLevels={handleClearAllSkillLevels}
          />
          <Languages
            languages={formData.languages}
            onAdd={handleAddLanguage}
            onRemove={handleRemoveLanguage}
            onChange={handleLanguageChange}
            onClearSection={handleClearSection}
            onClearAllLevels={handleClearAllLanguageLevels}
          />
          <Education
            education={formData.education}
            onAdd={handleAddEducation}
            onRemove={handleRemoveEducation}
            onChange={handleEducationChange}
            onClearSection={handleClearSection}
          />
          <WorkHistory
            workHistory={formData.workHistory}
            onAdd={handleAddWorkHistory}
            onRemove={handleRemoveWorkHistory}
            onChange={handleWorkHistoryChange}
            onClearSection={handleClearSection}
          />
          <Interests
            interests={formData.interests}
            onAdd={handleAddInterest}
            onRemove={handleRemoveInterest}
            onChange={handleInterestChange}
            onClearSection={handleClearSection}
          />

          <div className={styles.modalActions}>
            <ExportJsonButton data={formData} />
            <div style={{ flex: 1 }} />
            <button type='submit' className={styles.applyButton}>
              Apply
            </button>
            <button
              type='button'
              onClick={closeModal}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
        {showCloseConfirm && (
          <CloseConfirm
            onCancel={hideCloseConfirmDialog}
            onConfirm={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default EditModal;
