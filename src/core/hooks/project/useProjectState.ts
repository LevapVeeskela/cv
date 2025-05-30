import { useState, useEffect, useCallback } from 'react';
import { DEFAULT_CV_DATA, LOCAL_STORAGE_KEY } from '@constants';

export const useProjectState = () => {
  const [cvData, setCvData] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return DEFAULT_CV_DATA;
      }
    }
    return DEFAULT_CV_DATA;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);

  const resetCvData = useCallback(() => {
    setCvData(DEFAULT_CV_DATA);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, []);

  return { cvData, setCvData, resetCvData };
};

export type ProjectState = ReturnType<typeof useProjectState>;
