import { EMPTY_STRING } from '@constants';
import { CvData } from '../../hooks/project';
import { useProjectContext } from '../../context/ProjectContext';

export interface EditModalState {
  isModalOpen: boolean;
  formData: CvData | null;
  setFormData: (data: CvData) => void;
  openModal: (initialData: CvData) => void;
  closeModal: () => void;
}

export const useEditModalHandlers = (state: EditModalState) => {
  const { setCvData } = useProjectContext();
  // Main Info
  const handleMainInfoChange = (
    field: keyof CvData['mainInfo'],
    value: string,
  ) => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      mainInfo: { ...state.formData.mainInfo, [field]: value },
    });
  };
  // Biography
  const handleBiographyChange = (value: string) => {
    if (!state.formData) return;
    state.setFormData({ ...state.formData, biography: value });
  };
  // Contacts
  const handleContactsChange = (field: string, value: string) => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      contacts: { ...state.formData.contacts, [field]: value },
    });
  };
  const handleAddressChange = (field: string, value: string) => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      contacts: {
        ...state.formData.contacts,
        address: { ...state.formData.contacts.address, [field]: value },
      },
    });
  };
  // Interests
  const handleAddInterest = () => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      interests: [...state.formData.interests, EMPTY_STRING],
    });
  };
  const handleRemoveInterest = (idx: number) => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      interests: state.formData.interests.filter((_, i) => i !== idx),
    });
  };
  // Skills
  const handleSkillChange = (index: number, field: string, value: string) => {
    if (!state.formData) return;
    const updated = [...state.formData.skills];
    updated[index] = {
      ...updated[index],
      [field]: field === 'level' ? parseInt(value, 10) : value,
    };
    state.setFormData({ ...state.formData, skills: updated });
  };
  const handleAddSkill = () => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      skills: [...state.formData.skills, { skill: EMPTY_STRING, level: 0 }],
    });
  };
  const handleRemoveSkill = (idx: number) => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      skills: state.formData.skills.filter((_, i) => i !== idx),
    });
  };
  // Languages
  const handleLanguageChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    if (!state.formData) return;
    const updated = [...state.formData.languages];
    updated[index] = { ...updated[index], [field]: value };
    state.setFormData({ ...state.formData, languages: updated });
  };
  const handleAddLanguage = () => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      languages: [
        ...state.formData.languages,
        { language: EMPTY_STRING, level: '0' },
      ],
    });
  };
  const handleRemoveLanguage = (idx: number) => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      languages: state.formData.languages.filter((_, i) => i !== idx),
    });
  };
  // Education
  const handleEducationChange = (
    index: number,
    field: string,
    value: string | string[],
  ) => {
    if (!state.formData) return;
    const updated = [...state.formData.education];
    updated[index] = {
      ...updated[index],
      [field]: field === 'details' ? value : value,
    };
    state.setFormData({ ...state.formData, education: updated });
  };
  const handleAddEducation = () => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      education: [
        ...state.formData.education,
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
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      education: state.formData.education.filter((_, i) => i !== idx),
    });
  };
  // WorkHistory
  const handleWorkHistoryChange = (
    index: number,
    field: string,
    value: string | string[],
  ) => {
    if (!state.formData) return;
    const updated = [...state.formData.workHistory];
    updated[index] = {
      ...updated[index],
      [field]: field === 'details' ? value : value,
    };
    state.setFormData({ ...state.formData, workHistory: updated });
  };
  const handleAddWorkHistory = () => {
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      workHistory: [
        ...state.formData.workHistory,
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
    if (!state.formData) return;
    state.setFormData({
      ...state.formData,
      workHistory: state.formData.workHistory.filter((_: any, i) => i !== idx),
    });
  };
  // Overlay click (закрытие по клику вне модалки)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      state.closeModal();
    }
  };

  // Submit формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleApply();
  };

  // Изменение интересов
  const handleInterestChange = (index: number, value: string) => {
    if (!state.formData) return;
    const updated = [...state.formData.interests];
    updated[index] = value;
    state.setFormData({ ...state.formData, interests: updated });
  };

  // Применить изменения
  const handleApply = () => {
    if (state.formData) {
      setCvData(state.formData);
    }
    state.closeModal();
  };
  return {
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
    handleOverlayClick,
    handleSubmit,
    handleInterestChange,
    handleApply,
  };
};
