import React, { useState, useEffect } from 'react';
import MainInfo from './components/MainInfo';
import Summary from './components/Summary';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Education from './components/Education';
import WorkHistory from './components/WorkHistory';
import Interests from './components/Interests';
import ExportJsonButton from './components/ExportJsonButton';
import { EMPTY_STRING } from '@constants';
import styles from './styles.module.scss';

interface Address {
  city: string;
  state: string;
  zip: string;
}

interface Contacts {
  address: Address;
  phone: string;
  email: string;
  linkedin: string;
}

interface Skill {
  skill: string;
  level: number;
}

interface Language {
  language: string;
  level: string;
}

interface Education {
  start: string;
  end: string;
  degree: string;
  school: string;
  city: string;
  description: string;
  details: string[];
}

interface WorkHistory {
  title: string;
  company: string;
  city: string;
  country: string;
  start: string;
  end: string;
  details: string[];
}

interface CvData {
  contacts: Contacts;
  skills: Skill[];
  languages: Language[];
  mainInfo: {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    photoAlt: string;
  };
  biography: string;
  education: Education[];
  workHistory: WorkHistory[];
  interests: string[];
}

interface EditModalProps {
  initialData: CvData;
  onApply: (data: CvData) => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  initialData,
  onApply,
  onClose,
}) => {
  const [formData, setFormData] = useState<CvData>(initialData);

  const handleMainInfoChange = (
    field: keyof CvData['mainInfo'],
    value: string,
  ) => {
    setFormData({
      ...formData,
      mainInfo: { ...formData.mainInfo, [field]: value },
    });
  };

  const handleBiographyChange = (value: string) => {
    setFormData({ ...formData, biography: value });
  };

  const handleAddInterest = () => {
    setFormData({
      ...formData,
      interests: [...formData.interests, EMPTY_STRING],
    });
  };
  const handleRemoveInterest = (idx: number) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((_, i) => i !== idx),
    });
  };

  // Skills
  const handleSkillChange = (
    index: number,
    field: keyof { skill: string; level: number },
    value: string,
  ) => {
    const updated = [...formData.skills];
    updated[index] = {
      ...updated[index],
      [field]: field === 'level' ? parseInt(value, 10) : value,
    };
    setFormData({ ...formData, skills: updated });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { skill: EMPTY_STRING, level: 0 }],
    });
  };

  const handleRemoveSkill = (idx: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== idx),
    });
  };

  // Languages
  const handleLanguageChange = (
    index: number,
    field: keyof { language: string; level: string },
    value: string,
  ) => {
    const updated = [...formData.languages];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, languages: updated });
  };

  const handleAddLanguage = () => {
    setFormData({
      ...formData,
      languages: [
        ...formData.languages,
        { language: EMPTY_STRING, level: '0' },
      ],
    });
  };

  const handleRemoveLanguage = (idx: number) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((_, i) => i !== idx),
    });
  };

  // Education
  const handleEducationChange = (
    index: number,
    field: keyof CvData['education'][0],
    value: string | string[],
  ) => {
    const updated = [...formData.education];
    updated[index] = {
      ...updated[index],
      [field]: field === 'details' ? value : value,
    };
    setFormData({ ...formData, education: updated });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          start: EMPTY_STRING,
          end: EMPTY_STRING,
          degree: EMPTY_STRING,
          school: EMPTY_STRING,
          city: EMPTY_STRING,
          description: EMPTY_STRING,
          details: [],
        },
      ],
    });
  };

  const handleRemoveEducation = (idx: number) => {
    setFormData({
      ...formData,
      education: formData.education.filter((_, i) => i !== idx),
    });
  };

  // WorkHistory
  const handleWorkHistoryChange = (
    index: number,
    field: keyof CvData['workHistory'][0],
    value: string | string[],
  ) => {
    const updated = [...formData.workHistory];
    updated[index] = {
      ...updated[index],
      [field]: field === 'details' ? value : value,
    };
    setFormData({ ...formData, workHistory: updated });
  };

  const handleAddWorkHistory = () => {
    setFormData({
      ...formData,
      workHistory: [
        ...formData.workHistory,
        {
          title: EMPTY_STRING,
          company: EMPTY_STRING,
          city: EMPTY_STRING,
          country: EMPTY_STRING,
          start: EMPTY_STRING,
          end: EMPTY_STRING,
          details: [],
        },
      ],
    });
  };

  const handleRemoveWorkHistory = (idx: number) => {
    setFormData({
      ...formData,
      workHistory: formData.workHistory.filter((_, i) => i !== idx),
    });
  };

  // Contacts
  const handleContactsChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      contacts: { ...formData.contacts, [field]: value },
    });
  };
  const handleAddressChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      contacts: {
        ...formData.contacts,
        address: { ...formData.contacts.address, [field]: value },
      },
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (
        e.key === 'Enter' &&
        (e.target as HTMLElement).tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        onApply(formData);
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [formData, onApply, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.editModalOverlay} onClick={handleOverlayClick}>
      <div className={styles.editModal}>
        <h2>Edit CV Data</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onApply(formData);
            onClose();
          }}
        >
          {/* Main Info Section */}
          <MainInfo
            mainInfo={formData.mainInfo}
            onChange={handleMainInfoChange}
          />

          {/* Summary Section */}
          <Summary
            biography={formData.biography}
            onChange={handleBiographyChange}
          />

          {/* Contacts Section */}
          <Contacts
            contacts={formData.contacts}
            onChange={handleContactsChange}
            onAddressChange={handleAddressChange}
          />

          {/* Skills Section */}
          <Skills
            skills={formData.skills}
            onAdd={handleAddSkill}
            onRemove={handleRemoveSkill}
            onChange={handleSkillChange}
          />

          {/* Languages Section */}
          <Languages
            languages={formData.languages}
            onAdd={handleAddLanguage}
            onRemove={handleRemoveLanguage}
            onChange={handleLanguageChange}
          />

          {/* Education Section */}
          <Education
            education={formData.education}
            onAdd={handleAddEducation}
            onRemove={handleRemoveEducation}
            onChange={handleEducationChange}
          />

          {/* Work History Section */}
          <WorkHistory
            workHistory={formData.workHistory}
            onAdd={handleAddWorkHistory}
            onRemove={handleRemoveWorkHistory}
            onChange={handleWorkHistoryChange}
          />

          {/* Interests Section */}
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

          <div
            className={styles.modalActions}
            style={{ justifyContent: 'flex-start', gap: 0 }}
          >
            <ExportJsonButton data={formData} />
            <div style={{ flex: 1 }} />
            <button
              type='button'
              onClick={() => {
                onApply(formData);
                onClose();
              }}
            >
              Apply
            </button>
            <button type='button' onClick={onClose} style={{ marginLeft: 10 }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
