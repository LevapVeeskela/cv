import { LOCAL_STORAGE_KEY, DEFAULT_CV_DATA } from '@constants';
import { ProjectState } from './useProjectState';
import { useCallback } from 'react';

export const useProjectHandlers = ({ setCvData }: ProjectState) => {
  // Удаляет указанный раздел из cvData
  const handleClearSection = (section: string) => {
    setCvData((prev: any) => {
      const updated = { ...prev };
      delete updated[section];
      return updated;
    });
  };

  const resetCvData = useCallback(() => {
    setCvData(DEFAULT_CV_DATA);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  return { handleClearSection, resetCvData };
};

export type ProjectHandlers = ReturnType<typeof useProjectHandlers>;
