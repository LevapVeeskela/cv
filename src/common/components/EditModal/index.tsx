import React from 'react';
import MainInfo from './components/MainInfo';
import Summary from './components/Summary';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Education from './components/Education';
import WorkHistory from './components/WorkHistory';
import Interests from './components/Interests';
import ExportJsonButton from './components/ExportJsonButton';
import styles from './styles.module.scss';
import { useEditModalContext } from '../../../core/context/EditModalContext';

const EditModal: React.FC = () => {
  const {
    formData,
    setFormData,
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
    handleApply,
  } = useEditModalContext();

  if (!formData) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.editModalOverlay} onClick={handleOverlayClick}>
      <div className={styles.editModal}>
        <h2>Edit CV Data</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleApply();
          }}
        >
          <MainInfo
            mainInfo={formData.mainInfo}
            onChange={handleMainInfoChange}
          />
          <Summary
            biography={formData.biography}
            onChange={handleBiographyChange}
          />
          <Contacts
            contacts={formData.contacts}
            onChange={handleContactsChange}
            onAddressChange={handleAddressChange}
          />
          <Skills
            skills={formData.skills}
            onAdd={handleAddSkill}
            onRemove={handleRemoveSkill}
            onChange={handleSkillChange}
          />
          <Languages
            languages={formData.languages}
            onAdd={handleAddLanguage}
            onRemove={handleRemoveLanguage}
            onChange={handleLanguageChange}
          />
          <Education
            education={formData.education}
            onAdd={handleAddEducation}
            onRemove={handleRemoveEducation}
            onChange={handleEducationChange}
          />
          <WorkHistory
            workHistory={formData.workHistory}
            onAdd={handleAddWorkHistory}
            onRemove={handleRemoveWorkHistory}
            onChange={handleWorkHistoryChange}
          />
          <Interests
            interests={formData.interests}
            onAdd={handleAddInterest}
            onRemove={handleRemoveInterest}
            onChange={(idx, value) => {
              const updated = [...formData.interests];
              updated[idx] = value;
              setFormData({ ...formData, interests: updated });
            }}
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
      </div>
    </div>
  );
};

export default EditModal;
