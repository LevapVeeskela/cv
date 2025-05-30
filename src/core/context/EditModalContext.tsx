import React, { createContext, PropsWithChildren, useContext } from 'react';
import {
  useEditModalState,
  useEditModalLifecycle,
  useEditModalHandlers,
} from '../hooks/editModal';
import { CvData } from '../hooks/project';

export interface EditModalContextType {
  isModalOpen: boolean;
  openModal: (initialData: CvData) => void;
  closeModal: () => void;
  formData: CvData | null;
  setFormData: (data: CvData) => void;
  handleMainInfoChange: (
    field: keyof CvData['mainInfo'],
    value: string | File | null,
  ) => void;
  handleBiographyChange: (value: string) => void;
  handleContactsChange: (field: string, value: string) => void;
  handleAddressChange: (field: string, value: string) => void;
  handleAddInterest: () => void;
  handleRemoveInterest: (idx: number) => void;
  handleSkillChange: (index: number, field: string, value: string) => void;
  handleAddSkill: () => void;
  handleRemoveSkill: (idx: number) => void;
  handleLanguageChange: (index: number, field: string, value: string) => void;
  handleAddLanguage: () => void;
  handleRemoveLanguage: (idx: number) => void;
  handleEducationChange: (
    index: number,
    field: string,
    value: string | string[],
  ) => void;
  handleAddEducation: () => void;
  handleRemoveEducation: (idx: number) => void;
  handleWorkHistoryChange: (
    index: number,
    field: string,
    value: string | string[],
  ) => void;
  handleAddWorkHistory: () => void;
  handleRemoveWorkHistory: (idx: number) => void;
  handleApply: () => void;
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleInterestChange: (index: number, value: string) => void;
  handleAchievementChange: (index: number, value: string) => void;
  handleAddAchievement: () => void;
  handleRemoveAchievement: (idx: number) => void;
}

export const EditModalContext = createContext<EditModalContextType>(
  {} as EditModalContextType,
);
export const useEditModalContext = () => useContext(EditModalContext);

export const EditModalProvider = ({ children }: PropsWithChildren) => {
  const state = useEditModalState();
  const handlers = useEditModalHandlers(state);
  useEditModalLifecycle(state, handlers);

  return (
    <EditModalContext.Provider value={{ ...state, ...handlers }}>
      {children}
    </EditModalContext.Provider>
  );
};
